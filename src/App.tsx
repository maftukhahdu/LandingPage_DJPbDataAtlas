import { useEffect, useState, type CSSProperties } from "react";

const features = [
  {
    number: "01",
    title: "Data Explorer",
    description:
      "Menjelajahi dan menemukan aset data berdasarkan domain, kategori, dan struktur data.",
    type: "explorer",
    tags: ["Domain", "Kategori", "Struktur"],
  },
  {
    number: "02",
    title: "Objects Metadata",
    description: "Informasi objek database, termasuk tabel, kolom, deskripsi, dan relasi data.",
    type: "metadata",
    tags: ["Tabel", "Kolom", "Relasi"],
  },
  {
    number: "03",
    title: "Data Governance",
    description:
      "Klasifikasi, standardisasi, dan tata kelola metadata untuk kualitas serta keterlacakan aset data.",
    type: "governance",
    tags: ["Klasifikasi", "Standar", "Kualitas"],
  },
];

function BrandMark({ inverse = false, large = false }: { inverse?: boolean; large?: boolean }) {
  return (
    <div className={`brand ${inverse ? "brand-inverse" : ""} ${large ? "brand-large" : ""}`}>
      <span>DJPb</span>
      <strong>DATA ATLAS</strong>
    </div>
  );
}

function ArrowIcon() {
  return <img src="/assets/8ecb8.svg" width="18" height="18" alt="" aria-hidden="true" />;
}

function NusantaraAtlas() {
  return (
    <div className="atlas-wrap" aria-label="Ilustrasi interaktif ekosistem data Nusantara">
      <div className="atlas-halo" />
      <svg className="atlas-svg" viewBox="0 0 740 570" role="img">
        <title>Nusantara Digital Data Ecosystem</title>
        <defs>
          <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f7fcfe" />
            <stop offset="1" stopColor="#dff3f8" />
          </linearGradient>
          <linearGradient id="islandTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#bfe9f3" />
          </linearGradient>
          <linearGradient id="islandSide" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4ab9d6" />
            <stop offset="1" stopColor="#176b8e" />
          </linearGradient>
          <linearGradient id="hubTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1c5578" />
            <stop offset="1" stopColor="#082c46" />
          </linearGradient>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#082c46" floodOpacity=".2" />
          </filter>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hubGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feFlood floodColor="#46B8D9" floodOpacity=".58" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glowColor" />
            <feMerge>
              <feMergeNode in="glowColor" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="cardShadow" x="-30%" y="-50%" width="160%" height="220%">
            <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#082C46" floodOpacity=".15" />
          </filter>
          <path id="flowOne" d="M166 302 C245 350 294 405 372 397 S502 312 578 337" />
          <path id="flowTwo" d="M371 396 C377 327 402 265 451 230 S552 216 618 255" />
          <path id="flowThree" d="M370 395 C323 332 319 260 348 214" />
          <path id="flowFour" d="M166 275 C239 241 294 236 367 253 S466 283 500 278" />
        </defs>

        <path className="atlas-backdrop" d="M365 80 685 255 377 485 54 300Z" fill="url(#sea)" />
        <path
          className="atlas-grid"
          d="M365 80 685 255M311 111l320 176M258 141l320 176M204 172l320 176M150 202l320 176M97 233l320 176M54 300l311-220M108 330 419 110M161 369l312-229M215 407l311-229M269 446l311-229M377 485l308-230"
        />

        <g className="network-lines">
          <use href="#flowOne" />
          <use href="#flowTwo" />
          <use href="#flowThree" />
          <use href="#flowFour" />
        </g>
        <g className="network-lines network-dashes">
          <use href="#flowOne" />
          <use href="#flowTwo" />
          <use href="#flowThree" />
          <use href="#flowFour" />
        </g>

        <g className="island island-sumatra" filter="url(#softShadow)">
          <path className="island-side" d="m118 247 22-31 79 41 4 14-48 49-41-18-19-37Z" />
          <path className="island-top" d="m118 233 22-31 79 41-48 55-41-18-15-29Z" />
          <path className="island-detail" d="m135 237 15-19 49 27-31 36-25-12Z" />
        </g>

        <g className="island island-java" filter="url(#softShadow)">
          <path className="island-side" d="m252 393 22-13 118 16 19 12-18 17-113-11-29-10Z" />
          <path className="island-top" d="m252 381 22-13 118 16 19 12-18 17-113-11-29-10Z" />
          <path className="island-detail" d="m278 384 93 12 13 7-10 10-91-10-16-8Z" />
        </g>

        <g className="island island-kalimantan" filter="url(#softShadow)">
          <path className="island-side" d="m306 220 45-36 65 21 25 58-52 43-66-16-21-37Z" />
          <path className="island-top" d="m306 206 45-36 65 21 25 58-52 43-66-16-21-37Z" />
          <path className="island-detail" d="m328 213 30-25 42 14 17 39-35 31-43-12-14-27Z" />
        </g>

        <g className="island island-sulawesi" filter="url(#softShadow)">
          <path
            className="island-side"
            d="m466 250 18-26 17 21 27-28 15 9-29 47 15 33-12 25-27-38-24 12-11-13 28-24Z"
          />
          <path
            className="island-top"
            d="m466 237 18-26 17 21 27-28 15 9-29 47 15 33-12 25-27-38-24 12-11-13 28-24Z"
          />
        </g>

        <g className="island island-papua" filter="url(#softShadow)">
          <path className="island-side" d="m574 265 42-29 71 25 24 31-36 36-69-12-39-28Z" />
          <path className="island-top" d="m574 251 42-29 71 25 24 31-36 36-69-12-39-28Z" />
          <path className="island-detail" d="m601 255 23-17 46 16 18 22-23 22-47-9-26-18Z" />
        </g>

        <g className="small-islands">
          <path d="m434 370 18-8 16 8-17 10Z" />
          <path d="m478 381 13-7 16 6-13 9Z" />
          <path d="m527 374 12-6 11 5-12 8Z" />
          <path d="m217 346 14-7 12 6-14 8Z" />
        </g>

        <g className="infrastructure-layer">
          <g transform="translate(153 220)">
            <g className="db db-sumatra">
              <ellipse cx="0" cy="0" rx="13" ry="6" />
              <path d="M-13 0v20c0 3 6 6 13 6s13-3 13-6V0" />
              <ellipse cx="0" cy="20" rx="13" ry="6" />
              <path className="db-light" d="M-8 9h16" />
            </g>
          </g>
          <g transform="translate(361 202)">
            <g className="server server-kalimantan">
              <path d="m-18 8 18-10L18 8 0 18Z" />
              <path d="M-18 8v39L0 58V18Z" />
              <path d="M18 8v39L0 58V18Z" />
              <circle cx="-8" cy="22" r="2" />
              <circle cx="-8" cy="34" r="2" />
              <circle cx="-8" cy="46" r="2" />
            </g>
          </g>
          <g transform="translate(500 227)">
            <g className="db db-sulawesi">
              <ellipse cx="0" cy="0" rx="12" ry="5" />
              <path d="M-12 0v18c0 3 5 5 12 5s12-2 12-5V0" />
              <ellipse cx="0" cy="18" rx="12" ry="5" />
              <path className="db-light" d="M-7 8h14" />
            </g>
          </g>
          <g transform="translate(638 245)">
            <g className="mini-server">
              <path d="m-11 5 11-6 11 6L0 11Z" />
              <path d="M-11 5v25L0 36V11Z" />
              <path d="M11 5v25L0 36V11Z" />
            </g>
          </g>
        </g>

        <g className="hub-rings">
          <circle cx="374" cy="389" r="27" />
          <circle cx="374" cy="389" r="27" />
          <circle cx="374" cy="389" r="27" />
        </g>
        <circle className="hub-core-glow" cx="374" cy="389" r="32" filter="url(#hubGlow)" />
        <g className="central-hub" filter="url(#glow)">
          <path d="m340 374 34-19 34 19v36l-34 20-34-20Z" fill="url(#hubTop)" />
          <path d="m340 374 34 19 34-19-34-19Z" fill="#2c7699" />
          <path d="M340 374v36l34 20v-37Z" fill="#103b5c" />
          <path d="M408 374v36l-34 20v-37Z" fill="#082c46" />
          <circle cx="374" cy="374" r="8" fill="#d4a52b" />
          <path d="M371 374h6M374 371v6" stroke="#fff" strokeWidth="1.5" />
        </g>
        <text x="374" y="451" textAnchor="middle" className="hub-label">
          DJPb DATA ATLAS
        </text>

        <g className="pulse-node pulse-sumatra">
          <circle cx="166" cy="275" r="5" />
          <circle className="radar-ring radar-one" cx="166" cy="275" r="9" />
          <circle className="radar-ring radar-two" cx="166" cy="275" r="9" />
          <circle className="radar-ring radar-three" cx="166" cy="275" r="9" />
        </g>
        <g className="pulse-node pulse-kalimantan">
          <circle cx="367" cy="253" r="5" />
          <circle className="radar-ring radar-one" cx="367" cy="253" r="9" />
          <circle className="radar-ring radar-two" cx="367" cy="253" r="9" />
          <circle className="radar-ring radar-three" cx="367" cy="253" r="9" />
        </g>
        <g className="pulse-node pulse-sulawesi">
          <circle cx="500" cy="278" r="5" />
          <circle className="radar-ring radar-one" cx="500" cy="278" r="9" />
          <circle className="radar-ring radar-two" cx="500" cy="278" r="9" />
          <circle className="radar-ring radar-three" cx="500" cy="278" r="9" />
        </g>
        <g className="pulse-node pulse-papua">
          <circle cx="638" cy="277" r="5" />
          <circle className="radar-ring radar-one" cx="638" cy="277" r="9" />
          <circle className="radar-ring radar-two" cx="638" cy="277" r="9" />
          <circle className="radar-ring radar-three" cx="638" cy="277" r="9" />
        </g>

        <g className="flow-particles" filter="url(#glow)">
          <circle r="4">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#flowOne" />
            </animateMotion>
          </circle>
          <circle r="3">
            <animateMotion dur="4.5s" begin="-2s" repeatCount="indefinite">
              <mpath href="#flowTwo" />
            </animateMotion>
          </circle>
          <circle r="3">
            <animateMotion dur="4s" begin="-1s" repeatCount="indefinite">
              <mpath href="#flowThree" />
            </animateMotion>
          </circle>
          <circle className="particle-gold" r="3.5">
            <animateMotion dur="4.8s" begin="-3.1s" repeatCount="indefinite">
              <mpath href="#flowFour" />
            </animateMotion>
          </circle>
          <circle className="particle-small" r="2">
            <animateMotion dur="5s" begin="-2.5s" repeatCount="indefinite">
              <mpath href="#flowOne" />
            </animateMotion>
          </circle>
        </g>
        <g className="orbit">
          <circle cx="374" cy="389" r="48" />
          <circle className="orbit-dot" cx="422" cy="389" r="5" />
          <circle className="orbit-dot-gold" cx="326" cy="389" r="4" />
        </g>
        <g className="orbit orbit-outer">
          <ellipse cx="374" cy="389" rx="68" ry="30" />
          <circle className="orbit-dot" cx="442" cy="389" r="3.5" />
          <circle className="orbit-dot-gold" cx="306" cy="389" r="3" />
        </g>

        <g className="metadata-layer">
          <g transform="translate(70 125)">
            <g className="svg-meta-card meta-database" filter="url(#cardShadow)">
              <rect width="116" height="43" rx="4" />
              <circle cx="16" cy="16" r="4" />
              <text className="meta-title" x="28" y="18">
                DATABASE
              </text>
              <text className="meta-value" x="28" y="31">
                124 sumber
              </text>
              <path d="M97 15h7M97 21h7M97 27h7" />
            </g>
          </g>
          <g transform="translate(564 154)">
            <g className="svg-meta-card meta-tables" filter="url(#cardShadow)">
              <rect width="108" height="43" rx="4" />
              <circle cx="16" cy="16" r="4" />
              <text className="meta-title" x="28" y="18">
                TABLES
              </text>
              <text className="meta-value" x="28" y="31">
                8.540 objek
              </text>
              <path d="M91 14v16M86 19h10M86 25h10" />
            </g>
          </g>
          <g transform="translate(505 432)">
            <g className="svg-meta-card meta-governance" filter="url(#cardShadow)">
              <rect width="142" height="43" rx="4" />
              <circle cx="16" cy="16" r="4" />
              <text className="meta-title" x="28" y="18">
                DATA GOVERNANCE
              </text>
              <text className="meta-value" x="28" y="31">
                Terstandarisasi
              </text>
              <path d="m122 22 4 4 8-10" />
            </g>
          </g>
          <g transform="translate(122 395)">
            <g className="svg-meta-card meta-quality" filter="url(#cardShadow)">
              <rect width="104" height="38" rx="4" />
              <circle cx="15" cy="14" r="4" />
              <text className="meta-title" x="27" y="17">
                DATA QUALITY
              </text>
              <text className="meta-value" x="27" y="29">
                Terverifikasi
              </text>
            </g>
          </g>
        </g>
      </svg>
      <div className="atlas-caption">
        <span>LIVE ECOSYSTEM</span>
        <i /> Terhubung secara nasional
      </div>
    </div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "explorer") {
    return (
      <div className="figma-feature figma-explorer" aria-hidden="true">
        <img className="explorer-network" src="/assets/0a676.svg" alt="" />
        <img className="explorer-database" src="/assets/567c0.svg" alt="" />
        <img className="explorer-search" src="/assets/4f8d7.svg" alt="" />
        <i className="feature-pulse pulse-a" />
        <i className="feature-pulse pulse-b" />
      </div>
    );
  }
  if (type === "metadata") {
    return (
      <div className="figma-feature figma-metadata" aria-hidden="true">
        <img className="metadata-lines" src="/assets/e99bf.svg" alt="" />
        <img className="metadata-panel panel-a" src="/assets/5631c.svg" alt="" />
        <img className="metadata-panel panel-b" src="/assets/5e635.svg" alt="" />
        <img className="metadata-panel panel-c" src="/assets/406c3.svg" alt="" />
      </div>
    );
  }
  return (
    <div className="figma-feature figma-governance" aria-hidden="true">
      <img className="governance-lines" src="/assets/e0881.svg" alt="" />
      <img className="governance-shield" src="/assets/028bb.svg" alt="" />
      <img className="governance-node node-a" src="/assets/94050.svg" alt="" />
      <img className="governance-node node-b" src="/assets/4796c.svg" alt="" />
      <img className="governance-node node-c" src="/assets/9b03a.svg" alt="" />
    </div>
  );
}

function ArchitectureFlow() {
  const nodes = [
    ["01", "Data Sources", "Basis data & sistem sumber"],
    ["02", "Data Explorer", "Penemuan aset data"],
    ["03", "Objects Metadata", "Konteks & relasi"],
    ["04", "Data Governance", "Standar & kendali mutu"],
    ["05", "Connected Ecosystem", "Data tepercaya"],
  ];
  return (
    <div className="architecture" role="img" aria-label="Alur arsitektur ekosistem data">
      <div className="architecture-line">
        <i />
        <i />
        <i />
      </div>
      {nodes.map(([num, title, caption], index) => (
        <div
          className={`architecture-node ${index === nodes.length - 1 ? "architecture-node-final" : ""}`}
          key={title}
          style={
            {
              "--node-delay": `${720 + index * 420}ms`,
              "--receive-delay": `${1350 + index * 750}ms`,
            } as CSSProperties
          }
        >
          <span>{num}</span>
          <div className="architecture-icon">
            <span>{index === 0 ? "DB" : index === 4 ? "DA" : `0${index}`}</span>
          </div>
          <strong>{title}</strong>
          <small>{caption}</small>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".motion-section").forEach((element) => observer.observe(element));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = loginOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loginOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#beranda" className="brand-link" aria-label="DJPb Data Atlas beranda">
          <BrandMark />
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka navigasi"
          aria-expanded={menuOpen}
        >
          <i />
          <i />
        </button>
        <nav className={menuOpen ? "is-open" : ""} aria-label="Navigasi utama">
          <a href="#beranda" onClick={closeMenu}>
            Beranda
          </a>
          <a href="#tentang" onClick={closeMenu}>
            Tentang Platform
          </a>
          <a href="#fitur" onClick={closeMenu}>
            Fitur
          </a>
          <button
            className="nav-cta"
            onClick={() => {
              setLoginOpen(true);
              closeMenu();
            }}
          >
            Masuk Data Atlas <ArrowIcon />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="beranda">
          <div className="hero-copy">
            <div className="hero-product-label">
              <span />
              DJPb DATA ATLAS
            </div>
            <h1>
              <span>One Atlas,</span>
              <em>Connected Data.</em>
            </h1>
            <div className="hero-body">
              <p className="hero-description">
                Platform terintegrasi untuk eksplorasi, pengelolaan metadata, dan tata kelola data
                Direktorat Jenderal Perbendaharaan.
              </p>
              <p className="hero-subtext">
                Temukan, pahami, dan kelola aset data secara terstruktur, transparan, dan
                terstandarisasi.
              </p>
            </div>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => setLoginOpen(true)}>
                Masuk Data Atlas <ArrowIcon />
              </button>
              <a className="button button-secondary" href="#fitur">
                Jelajahi Fitur <span>↓</span>
              </a>
            </div>
            <div className="institution-label">
              <span />
              <div>
                DIREKTORAT JENDERAL PERBENDAHARAAN
                <br />
                KEMENTERIAN KEUANGAN REPUBLIK INDONESIA
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-eyebrow">NUSANTARA DIGITAL DATA ECOSYSTEM</div>
            <NusantaraAtlas />
          </div>
        </section>

        <section className="features-section motion-section" id="fitur">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>02</span> KAPABILITAS PLATFORM
              </div>
              <h2>
                Explore the
                <br />
                <em>Data Ecosystem</em>
              </h2>
            </div>
            <p>
              Temukan, pahami, dan kelola aset data DJPb melalui satu platform yang terintegrasi.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article
                className="feature-card"
                style={{ "--card-delay": `${260 + index * 120}ms` } as CSSProperties}
                key={feature.title}
              >
                <div className="feature-top">
                  <span>{feature.number}</span>
                  <i />
                </div>
                <div className="feature-visual">
                  <FeatureVisual type={feature.type} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-tags">
                  {feature.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ecosystem-section motion-section" id="tentang">
          <div className="ecosystem-copy">
            <div className="section-kicker light">
              <span>03</span> ARSITEKTUR TERINTEGRASI
            </div>
            <h2>
              One Platform,
              <br />
              <em>Connected Data.</em>
            </h2>
            <p>
              Satu ekosistem untuk menghubungkan aset data, metadata, dan tata kelola informasi
              dalam lingkungan Direktorat Jenderal Perbendaharaan.
            </p>
          </div>
          <div className="architecture-wrap">
            <ArchitectureFlow />
          </div>
        </section>

        <section className="closing-section motion-section">
          <BrandMark large />
          <div className="closing-separator" />
          <div className="closing-copy">
            <div className="section-kicker">
              <span>04</span> MULAI MENJELAJAHI
            </div>
            <h2>
              Bangun pemahaman data
              <br />
              dalam <em>satu atlas.</em>
            </h2>
          </div>
          <button className="button button-primary" onClick={() => setLoginOpen(true)}>
            Masuk Data Atlas <ArrowIcon />
          </button>
        </section>
      </main>

      <footer className="motion-section">
        <div className="footer-top">
          <BrandMark inverse />
          <p>One Atlas, Connected Data.</p>
        </div>
        <div className="footer-bottom">
          <p>
            Direktorat Jenderal Perbendaharaan
            <br />
            Kementerian Keuangan Republik Indonesia
          </p>
          <span>© 2026 Direktorat Jenderal Perbendaharaan.</span>
        </div>
      </footer>

      {loginOpen && (
        <div
          className="login-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-title"
          onMouseDown={(event) => event.target === event.currentTarget && setLoginOpen(false)}
        >
          <div className="login-card">
            <button className="login-close" onClick={() => setLoginOpen(false)} aria-label="Tutup">
              ×
            </button>
            <BrandMark />
            <small>AKSES PLATFORM</small>
            <h2 id="login-title">Portal segera tersedia.</h2>
            <p>
              Prototype ini menampilkan transisi masuk. Autentikasi DJPb Data Atlas akan terhubung
              melalui layanan identitas resmi.
            </p>
            <button className="button button-primary" onClick={() => setLoginOpen(false)}>
              Kembali ke Atlas <ArrowIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
