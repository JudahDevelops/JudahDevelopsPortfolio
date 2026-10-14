import Image from "next/image";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  builds,
  engagements,
  experience,
  method,
  sites,
  tools,
} from "@/lib/content";
import CabinetMotion from "./CabinetMotion";

type FolderSpec = {
  id: string;
  tab: string;
  short?: string;
  title: string;
  intro?: string;
  tone: string;
  step: number; // scroll per card, in svh
  cards: ReactNode[];
};

const sheets = ["white", "pink", "yellow"];

const folders: FolderSpec[] = [
  {
    id: "clients",
    tab: "Clients",
    title: "Who I'm working with",
    intro:
      "Clients are described by sector, not name. Every engagement starts in the room with the people doing the work, before anything gets built.",
    tone: "manila",
    step: 80,
    cards: engagements.map((e) => (
      <Fragment key={e.who}>
        <header className="card-head">
          <h3 className="card-title">{e.who}</h3>
          <p className="card-meta">{e.where}</p>
        </header>
        <p className="card-role">{e.role}</p>
        <p className="card-text">{e.summary}</p>
        <ul className="card-list">
          {e.systems.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="card-foot">{e.status}</p>
      </Fragment>
    )),
  },
  {
    id: "method",
    tab: "Method",
    title: "How an engagement runs",
    intro:
      "The same ten steps for every client. Each phase goes into daily use before the next one starts.",
    tone: "slate",
    step: 30,
    cards: method.map((m, i) => (
      <Fragment key={m.step}>
        <p className="card-step" aria-hidden="true">
          {i + 1}
        </p>
        <h3 className="card-title card-title-lg">
          <span className="sr-only">Step {i + 1}: </span>
          {m.step}
        </h3>
        <p className="card-text">{m.detail}</p>
      </Fragment>
    )),
  },
  {
    id: "builds",
    tab: "Builds",
    title: "Automations you can open",
    intro:
      "Public n8n workflows. Each repository has the workflow file to import; the first three have recorded demos.",
    tone: "sage",
    step: 55,
    cards: builds.map((b) => (
      <Fragment key={b.title}>
        <h3 className="card-title">{b.title}</h3>
        <p className="card-text">{b.description}</p>
        <p className="card-stack">{b.stack.join(", ")}</p>
        <p className="card-links">
          <a href={b.github}>Workflow on GitHub</a>
          {b.demo && <a href={b.demo}>Watch demo</a>}
        </p>
      </Fragment>
    )),
  },
  {
    id: "websites",
    tab: "Websites",
    short: "Sites",
    title: "Websites and dashboards",
    intro: "Shipped for clients at Belsoft Systems, from design through deployment.",
    tone: "rose",
    step: 55,
    cards: sites.map((s) => (
      <Fragment key={s.title}>
        {s.image && (
          <figure className="card-image">
            <Image
              src={s.image}
              alt={`${s.title} home page`}
              fill
              sizes="(max-width: 760px) 90vw, 620px"
            />
          </figure>
        )}
        <h3 className="card-title">{s.title}</h3>
        <p className="card-text">{s.description}</p>
        <p className="card-stack">{s.stack.join(", ")}</p>
        <p className="card-links">
          <a href={s.href}>{s.linkLabel}</a>
        </p>
      </Fragment>
    )),
  },
  {
    id: "tools",
    tab: "Tools",
    title: "Things I build for myself",
    tone: "straw",
    step: 50,
    cards: tools.map((t) => (
      <Fragment key={t.title}>
        <h3 className="card-title">{t.title}</h3>
        <p className="card-text">{t.description}</p>
        {t.href && (
          <p className="card-links">
            <a href={t.href}>View on GitHub</a>
          </p>
        )}
      </Fragment>
    )),
  },
  {
    id: "experience",
    tab: "Work history",
    short: "History",
    title: "Work history",
    tone: "teal",
    step: 45,
    cards: experience.map((x) => (
      <Fragment key={x.org}>
        <header className="card-head">
          <h3 className="card-title">{x.org}</h3>
          <p className="card-meta">{x.when}</p>
        </header>
        <p className="card-role card-role-lg">{x.role}</p>
        {x.detail && <p className="card-text">{x.detail}</p>}
      </Fragment>
    )),
  },
];

export default function Cabinet() {
  return (
    <div className="cabinet" data-cabinet>
      {folders.map((f, i) => (
        <FolderBlock key={f.id} folder={f} index={i} />
      ))}
      <CabinetMotion />
    </div>
  );
}

function FolderBlock({ folder: f, index }: { folder: FolderSpec; index: number }) {
  return (
    <>
      <section
        id={f.id}
        className="folder"
        data-folder
        data-tone={f.tone}
        aria-labelledby={`${f.id}-title`}
        style={{ "--i": index } as CSSProperties}
      >
        <div className="folder-inner" data-folder-inner>
          <div className="tab-row">
            <a className="tab" href={`#${f.id}`} aria-label={f.short ? f.tab : undefined}>
              {f.short ? (
                <>
                  <span className="tab-full">{f.tab}</span>
                  <span className="tab-short" aria-hidden="true">
                    {f.short}
                  </span>
                </>
              ) : (
                f.tab
              )}
            </a>
          </div>
          <div className="folder-body" data-folder-body>
            <header className="folder-head">
              <h2 id={`${f.id}-title`} className="folder-title">
                {f.title}
              </h2>
              {f.intro && <p className="folder-intro">{f.intro}</p>}
            </header>
            <div className="out-slot" data-out aria-hidden="true" />
            <div className="pocket" data-pocket aria-hidden="true">
              <div className="flap" data-flap />
            </div>
            <ol className="cards">
              {f.cards.map((card, k) => (
                <li key={k} className="card" data-card data-sheet={sheets[k % 3]}>
                  <article className="card-sheet">{card}</article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <div
        className="folder-run"
        aria-hidden="true"
        style={{ "--n": f.cards.length, "--step": f.step } as CSSProperties}
      />
    </>
  );
}
