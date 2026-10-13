import Image from "next/image";
import {
  builds,
  engagements,
  experience,
  method,
  sites,
  tools,
} from "@/lib/content";

const EMAIL = "judahdevelops@gmail.com";
const WHATSAPP = "https://wa.me/2349035837363";

function Slips() {
  return (
    <figure className="slips" aria-labelledby="slips-caption">
      <div className="canvas">
        <div className="slip">
          <div className="form">
            Requisition <span className="serial">No. 0412</span>
          </div>
          <div className="line">
            <span>Cement</span>
            <span>400 bags</span>
          </div>
          <div className="line muted">
            <span>Site B, block 3</span>
            <span>Site engineer</span>
          </div>
        </div>
        <div className="slip pink">
          <div className="form">
            Purchase order <span className="serial">No. 0388</span>
          </div>
          <div className="line">
            <span>400 × ₦11,500</span>
            <span>₦4,600,000</span>
          </div>
          <div className="line muted">
            <span>Supplier quote</span>
            <span>Storekeeper</span>
          </div>
        </div>
        <div className="slip yellow">
          <div className="form">
            Delivery note <span className="serial">No. 0610</span>
          </div>
          <div className="line">
            <span>Received</span>
            <span>400 bags</span>
          </div>
          <div className="line muted">
            <span>Checked at store</span>
            <span>Storekeeper</span>
          </div>
        </div>
        <div className="slip">
          <div className="form">
            Payment voucher <span className="serial">No. 1127</span>
          </div>
          <div className="line">
            <span>Pay supplier</span>
            <span>₦4,600,000</span>
          </div>
          <div className="line muted">
            <span>Approval</span>
            <span>Director</span>
          </div>
        </div>
        <svg className="pen" viewBox="0 0 480 440" aria-hidden="true">
          <path d="M 318 126 C 348 118, 392 122, 394 136 C 396 150, 350 152, 310 146 C 288 142, 292 124, 330 121 M 396 142 C 446 160, 462 230, 446 300 C 441 325, 436 345, 432 360" />
        </svg>
        <p className="note">
          ₦11,500 is above the last three quotes (₦10,800 average). Sent to the
          director before payment.
        </p>
      </div>
      <figcaption id="slips-caption" className="small muted">
        One purchase across four paper forms, and the price check a system adds.
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <header className="wrap site-header">
        <a href="#top" className="name">
          Judah Oka
        </a>
        <nav aria-label="Sections">
          <a href="#clients">Clients</a>
          <a href="#method">Method</a>
          <a href="#builds">Builds</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="keep">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="wrap hero">
          <h1 className="display">Judah Oka</h1>
          <div className="hero-copy">
            <p className="lede">
              Chief AI Officer for Nigerian businesses. I learn how a company
              actually runs, map each process, and build the systems that take
              the manual work out of it.
            </p>
            <p className="muted">
              Chief AI Officer at Multonion. Consulting for businesses in
              Abuja. Computer Science at Nile University.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                Email me
              </a>
              <a className="btn" href={WHATSAPP}>
                Message on WhatsApp
              </a>
            </div>
          </div>
          <Slips />
        </section>

        <section id="clients" className="wrap section">
          <div className="section-head">
            <h2 className="h2">Who I&apos;m working with</h2>
            <p className="muted">
              Clients are described by sector, not name. Every engagement
              starts in the room with the people doing the work, before anything
              gets built.
            </p>
          </div>
          <div className="engagements">
            {engagements.map((e) => (
              <article key={e.who} className={`engagement ${e.tint}`}>
                <div className="meta">
                  <h3 className="h3">{e.who}</h3>
                  <p className="muted small">{e.where}</p>
                  <p className="status">{e.status}</p>
                </div>
                <div>
                  <p className="small muted">{e.role}</p>
                  <p className="summary">{e.summary}</p>
                </div>
                <ul aria-label={`Systems for ${e.who}`}>
                  {e.systems.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="wrap section">
          <div className="section-head">
            <h2 className="h2">How an engagement runs</h2>
            <p className="muted">
              The same ten steps for every client. Each phase goes into daily
              use before the next one starts, so the client is only ever
              committed to the phase in front of them.
            </p>
          </div>
          <ol className="method">
            {method.map((m) => (
              <li key={m.step}>
                <strong>{m.step}</strong>
                <span>{m.detail}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="builds" className="wrap section">
          <div className="section-head">
            <h2 className="h2">Automations you can open</h2>
            <p className="muted">
              Public n8n workflows. Each repository has the workflow file to
              import; the first three have recorded demos.
            </p>
          </div>
          <ul className="builds">
            {builds.map((b) => (
              <li key={b.title}>
                <h3 className="h3">{b.title}</h3>
                <p>{b.description}</p>
                <p className="stack">{b.stack.join(", ")}</p>
                <div className="links">
                  <a href={b.github}>Workflow on GitHub</a>
                  {b.demo && <a href={b.demo}>Watch demo</a>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="websites" className="wrap section">
          <div className="section-head">
            <h2 className="h2">Websites and dashboards</h2>
            <p className="muted">
              Shipped for clients at Belsoft Systems, from design through
              deployment.
            </p>
          </div>
          <div className="sites">
            {sites.map((s) => (
              <article key={s.title} className={s.image ? "site" : "site site-plain"}>
                {s.image && (
                  <figure>
                    <Image
                      src={s.image}
                      alt={`${s.title} home page`}
                      fill
                      sizes="(max-width: 760px) 100vw, 560px"
                    />
                  </figure>
                )}
                <h3 className="h3">{s.title}</h3>
                <p>{s.description}</p>
                <p className="stack">{s.stack.join(", ")}</p>
                <div className="links">
                  <a href={s.href}>{s.linkLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="wrap section">
          <div className="section-head">
            <h2 className="h2">Things I build for myself</h2>
          </div>
          <ul className="tools">
            {tools.map((t) => (
              <li key={t.title}>
                <h3 className="h3">{t.title}</h3>
                <p className="muted">{t.description}</p>
                {t.href && (
                  <div className="links">
                    <a href={t.href}>View on GitHub</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="wrap section">
          <div className="section-head">
            <h2 className="h2">Experience</h2>
          </div>
          <ul className="experience">
            {experience.map((x) => (
              <li key={x.org}>
                <div>
                  <h3 className="h3">{x.org}</h3>
                </div>
                <div>
                  <p>{x.role}</p>
                  {x.detail && <p className="muted small">{x.detail}</p>}
                </div>
                <p className="when">{x.when}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="wrap contact">
          <h2 className="h2">Tell me how your business runs today.</h2>
          <a className="email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className="contact-list">
            <a href={WHATSAPP}>WhatsApp +234 903 583 7363</a>
            <a href="https://github.com/JudahDevelops">GitHub</a>
          </div>
          <footer className="footer small muted">
            <span>Judah Oka, Abuja</span>
            <span>Built with Next.js</span>
          </footer>
        </section>
      </main>
    </>
  );
}
