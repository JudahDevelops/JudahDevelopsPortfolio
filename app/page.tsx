import Cabinet from "@/components/Cabinet";

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
          <a href="#experience">Work history</a>
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

        <Cabinet />

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
