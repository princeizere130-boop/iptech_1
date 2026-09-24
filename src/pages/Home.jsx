
import { Link } from "react-router-dom";

const techs = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "AI",
  "IoT",
];

function Home() {
  return (
    <main className="iptech-home">

      {/* ================= HERO ================= */}

      <section className="iptech-hero">

        {/* Background */}
        <div className="hero-grid-bg"></div>
        <div className="hero-noise"></div>

        {/* Glow */}
        <div className="hero-glow hero-glow-blue"></div>
        <div className="hero-glow hero-glow-orange"></div>

        {/* Floating code */}
        <div className="floating-code fc-1">
          &lt;/&gt;
        </div>

        <div className="floating-code fc-2">
          {"{ AI }"}
        </div>

        <div className="floating-code fc-3">
          01
        </div>

        <div className="floating-code fc-4">
          IoT
        </div>

        {/* Main content */}

        <div className="hero-inner">

          <div className="hero-mini-label">
            <span></span>
            IPTECH_1 / DIGITAL TECHNOLOGY
          </div>

          <h1 className="hero-title">
            <span>BUILD</span>
            <span className="blue-text">DIGITAL</span>
            <span>FUTURE<span className="orange-dot">.</span></span>
          </h1>

          <div className="hero-actions">

            <Link
              to="/projects"
              className="hero-main-btn"
            >
              EXPLORE PROJECTS
              <span>↗</span>
            </Link>

            <Link
              to="/contact"
              className="hero-outline-btn"
            >
              CONTACT
            </Link>

          </div>

        </div>

        {/* ================= TECH CORE ================= */}

        <div className="tech-core">

          <div className="core-ring ring-one"></div>

          <div className="core-ring ring-two"></div>

          <div className="core-ring ring-three"></div>

          <div className="core-orbit orbit-one">
            <span>AI</span>
          </div>

          <div className="core-orbit orbit-two">
            <span>WEB</span>
          </div>

          <div className="core-orbit orbit-three">
            <span>IoT</span>
          </div>

          <div className="core-center">

            <div className="core-center-inner">
              <strong>IP</strong>
              <small>TECH_1</small>
            </div>

          </div>

          {/* particles */}

          <i className="particle particle-1"></i>
          <i className="particle particle-2"></i>
          <i className="particle particle-3"></i>
          <i className="particle particle-4"></i>
          <i className="particle particle-5"></i>
          <i className="particle particle-6"></i>

        </div>

        {/* Floating tech cards */}

        <div className="tech-card card-html">
          <span>&lt;/&gt;</span>
          <div>
            <strong>HTML5</strong>
            <small>WEB</small>
          </div>
        </div>

        <div className="tech-card card-react">
          <span>⚛</span>
          <div>
            <strong>REACT</strong>
            <small>FRONTEND</small>
          </div>
        </div>

        <div className="tech-card card-ai">
          <span>◉</span>
          <div>
            <strong>AI</strong>
            <small>MACHINE LEARNING</small>
          </div>
        </div>

        <div className="tech-card card-node">
          <span>JS</span>
          <div>
            <strong>NODE</strong>
            <small>BACKEND</small>
          </div>
        </div>

        {/* Scroll */}

        <div className="hero-scroll-indicator">
          <span></span>
          SCROLL
        </div>

      </section>

      {/* ================= TECHNOLOGY STRIP ================= */}

      <section className="tech-strip">

        <div className="tech-strip-track">

          {[...techs, ...techs].map((tech, index) => (
            <div key={index}>
              <span>{tech}</span>
              <b>✦</b>
            </div>
          ))}

        </div>

      </section>

      {/* ================= INTRO VISUAL ================= */}

      <section className="iptech-intro">

        <div className="intro-line"></div>

        <div className="intro-content">

          <div className="intro-number">
            01
          </div>

          <div className="intro-title">
            <p>IPTECH_1</p>

            <h2>
              TECHNOLOGY
              <span>WITHOUT</span>
              LIMITS.
            </h2>
          </div>

          <div className="intro-description">

            <p>
              Software. AI. IoT. Cloud.
            </p>

            <Link to="/about">
              DISCOVER MORE ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;

