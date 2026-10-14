"use client";

import { useEffect } from "react";

/*
  Drives the filing cabinet. The markup is server-rendered and works on its
  own as static folders; this adds `is-live` to the cabinet and then, on every
  scroll frame:
  - tucks earlier folders back as later ones slide over them
  - shuffles each folder's cards: one comes out of the pocket, and when the
    next one comes out it goes back in at the back of the pile
  Off under prefers-reduced-motion, where the static layout stays.
*/

type Pose = { x: number; y: number; s: number; r: number };

type Folder = {
  section: HTMLElement;
  inner: HTMLElement;
  run: HTMLElement;
  out: HTMLElement;
  pocket: HTMLElement;
  flap: HTMLElement;
  cards: HTMLElement[];
  n: number;
  start: number; // scrollY where the folder sticks
  length: number; // scroll length of the shuffle
  enter: number; // scrollY where the folder's top meets the viewport bottom
  front: Pose; // front-of-pocket pose, relative to the out position
  stripStep: number;
  mark?: HTMLElement;
};

const TRANSIT = 0.6; // share of each card's step spent moving; the rest holds
const OUT: Pose = { x: 0, y: 0, s: 1, r: 0 };

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function CabinetMotion() {
  useEffect(() => {
    const cabinet = document.querySelector<HTMLElement>("[data-cabinet]");
    if (!cabinet) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = matchMedia("(max-width: 760px)");
    const verify = new URLSearchParams(location.search).has("sc-verify");
    let folders: Folder[] = [];
    let raf = 0;
    let live = false;

    const collect = (): Folder[] =>
      [...cabinet.querySelectorAll<HTMLElement>("[data-folder]")].map((section) => {
        const q = (sel: string) => section.querySelector<HTMLElement>(sel)!;
        const cards = [...section.querySelectorAll<HTMLElement>("[data-card]")];
        return {
          section,
          inner: q("[data-folder-inner]"),
          run: section.nextElementSibling as HTMLElement,
          out: q("[data-out]"),
          pocket: q("[data-pocket]"),
          flap: q("[data-flap]"),
          cards,
          n: cards.length,
          start: 0,
          length: 1,
          enter: 0,
          front: { ...OUT },
          stripStep: 12,
        };
      });

    const measure = () => {
      const vh = innerHeight;
      const y0 = scrollY;
      const cabTop = cabinet.getBoundingClientRect().top + y0;
      for (const f of folders) {
        const stick = parseFloat(getComputedStyle(f.section).top) || 0;
        const H = f.section.offsetHeight;
        const runTop = f.run.getBoundingClientRect().top + y0;
        const flowTop = runTop - H;
        f.start = flowTop - stick;
        f.length = Math.max(1, f.run.offsetHeight - stick);
        f.enter = flowTop - vh;

        // Cards sit on the out slot; the pocket pose is a transform from it.
        const ox = f.out.offsetLeft;
        const oy = f.out.offsetTop;
        const ow = f.out.offsetWidth;
        const oh = f.out.offsetHeight;
        for (const c of f.cards) {
          c.style.left = `${ox}px`;
          c.style.top = `${oy}px`;
          c.style.width = `${ow}px`;
          c.style.height = `${oh}px`;
        }
        const small = narrow.matches;
        const inset = small ? 10 : 18;
        const flapTop = f.pocket.offsetTop + f.flap.offsetTop;
        const strip0 = small ? 16 : 26;
        const room = flapTop - f.pocket.offsetTop - strip0;
        f.stripStep = clamp(room / Math.max(1, f.n - 1), 3, small ? 9 : 15);
        f.front = {
          x: f.pocket.offsetLeft + inset - ox,
          y: flapTop - strip0 - oy,
          s: Math.min(1, (f.pocket.offsetWidth - inset * 2) / ow),
          r: 0,
        };

        if (f.mark) {
          f.mark.style.top = `${f.start - cabTop}px`;
          f.mark.style.height = `${f.length + vh}px`;
        }
      }
    };

    const pocketPose = (f: Folder, slot: number): Pose => ({
      x: f.front.x + slot * 2,
      y: f.front.y - slot * f.stripStep,
      s: f.front.s,
      r: 0,
    });

    // A card's path between pocket and out. dir 1 = coming out, -1 = filing back.
    const arc = (f: Folder, a: Pose, b: Pose, t: number, dir: 1 | -1): Pose => {
      const k = Math.sin(Math.PI * t);
      const side = narrow.matches ? dir * 0.34 * f.out.offsetWidth * k : 0;
      const lift = narrow.matches ? 0 : (dir === 1 ? -0.16 : 0.05) * f.out.offsetHeight * k;
      return {
        x: lerp(a.x, b.x, t) + side,
        y: lerp(a.y, b.y, t) + lift,
        s: lerp(a.s, b.s, t),
        r: dir * 2.5 * k,
      };
    };

    const place = (c: HTMLElement, p: Pose, z: number, out: boolean) => {
      c.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) rotate(${p.r.toFixed(2)}deg) scale(${p.s.toFixed(4)})`;
      c.style.zIndex = String(z);
      c.toggleAttribute("data-out-now", out);
    };

    const update = () => {
      raf = 0;
      if (!live) return;
      const y = scrollY;
      const state: string[] = [];

      // How far each folder has slid in over the one before it.
      const cover = folders.map((f) => clamp((y - f.enter) / Math.max(1, f.start - f.enter)));

      folders.forEach((f, i) => {
        let depth = 0;
        for (let k = i + 1; k < folders.length; k++) depth += cover[k];
        f.inner.style.setProperty("--depth", depth.toFixed(3));

        const p = clamp((y - f.start) / f.length);
        const raw = p * f.n;
        const step = Math.min(f.n - 1, Math.floor(raw));
        const frac = raw >= f.n ? 1 : raw - step;
        const s = step - 1 + smooth(clamp(frac / TRANSIT));

        f.cards.forEach((c, k) => {
          const d = k - s;
          if (d >= 1) {
            place(c, pocketPose(f, d - 1), 30 - Math.round(d - 1), false);
          } else if (d > 0) {
            place(c, arc(f, pocketPose(f, 0), OUT, 1 - d, 1), 40, false);
          } else if (d === 0) {
            place(c, OUT, 40, true);
          } else if (d > -1) {
            const t = -d;
            place(c, arc(f, OUT, pocketPose(f, f.n - 2), t, -1), t > 0.3 ? 2 : 39, false);
          } else {
            const slot = f.n - 1 + d;
            place(c, pocketPose(f, slot), 30 - Math.round(slot), false);
          }
        });
        state.push(`${i}:${depth.toFixed(2)}:${s.toFixed(2)}`);
      });

      if (verify) cabinet.setAttribute("data-sc-verify-state", state.join("|"));
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      if (!live) return;
      measure();
      request();
    };

    // The scroll position at which a given card is fully out and holding.
    const targetFor = (f: Folder, card: number) =>
      f.start + Math.min(1, (card + TRANSIT + 0.1) / f.n) * f.length;

    const onClick = (e: MouseEvent) => {
      if (!live) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
      const f = a && folders.find((x) => `#${x.section.id}` === a.getAttribute("href"));
      if (!f) return;
      e.preventDefault();
      history.pushState(null, "", `#${f.section.id}`);
      scrollTo({ top: targetFor(f, 0), behavior: "smooth" });
    };

    // Tabbing into a card that is still in its pocket brings it out.
    const onFocus = (e: FocusEvent) => {
      if (!live) return;
      const card = (e.target as HTMLElement).closest<HTMLElement>("[data-card]");
      if (!card || card.hasAttribute("data-out-now")) return;
      const f = folders.find((x) => x.cards.includes(card));
      if (f) scrollTo({ top: targetFor(f, f.cards.indexOf(card)), behavior: "instant" });
    };

    const enable = () => {
      if (live) return;
      live = true;
      folders = collect();
      cabinet.classList.add("is-live");
      if (verify) {
        for (const f of folders) {
          const m = document.createElement("div");
          m.className = "sc-mark";
          m.setAttribute("data-sc-act", "pin");
          m.setAttribute("aria-hidden", "true");
          cabinet.appendChild(m);
          f.mark = m;
        }
      }
      measure();
      update();
      const f = folders.find((x) => `#${x.section.id}` === location.hash);
      if (f) scrollTo({ top: targetFor(f, 0), behavior: "instant" });
    };

    const disable = () => {
      if (!live) return;
      live = false;
      cabinet.classList.remove("is-live");
      cabinet.querySelectorAll(".sc-mark").forEach((m) => m.remove());
      for (const f of folders) {
        f.inner.style.removeProperty("--depth");
        for (const c of f.cards) {
          c.removeAttribute("style");
          c.removeAttribute("data-out-now");
        }
      }
    };

    const sync = () => (reduce.matches ? disable() : enable());
    sync();
    if (verify) document.documentElement.classList.add("sc-ready");

    // Fonts and images change heights after first paint.
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", onResize);
    reduce.addEventListener("change", sync);
    document.addEventListener("click", onClick);
    cabinet.addEventListener("focusin", onFocus);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      removeEventListener("scroll", request);
      removeEventListener("resize", onResize);
      reduce.removeEventListener("change", sync);
      document.removeEventListener("click", onClick);
      cabinet.removeEventListener("focusin", onFocus);
      disable();
    };
  }, []);

  return null;
}
