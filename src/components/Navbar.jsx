import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Learn", path: "/learn" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  const location = useLocation();

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow =
      menuOpen || logoOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, logoOpen]);

  // ESC closes logo
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setLogoOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          {/* LOGO */}
          <button
            type="button"
            className="navbar-logo"
            onClick={() => setLogoOpen(true)}
            aria-label="Open IPTECH_1 logo"
          >
            <img
              src="/IpTech logo.jpg"
              alt="IPTECH_1 Logo"
            />

            <span className="logo-text">
              IPTECH_<b>1</b>
            </span>
          </button>

          {/* DESKTOP MENU */}
          <nav className="navbar-menu">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="navbar-cta"
          >
            Let's Talk
            <span>↗</span>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div
          className={`mobile-menu ${
            menuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <div className="mobile-menu-inner">

            <p className="mobile-menu-label">
              IPTECH_1 / NAVIGATION
            </p>

            <nav>
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? "mobile-link active"
                      : "mobile-link"
                  }
                >
                  <span className="mobile-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mobile-link-name">
                    {item.name}
                  </span>

                  <b>↗</b>
                </Link>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <span>IZERE PRINCE</span>
              <span>IPTECH_1</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================
          LOGO FULLSCREEN PREVIEW
      ========================== */}
      {logoOpen && (
        <div
          className="logo-lightbox"
          onClick={() => setLogoOpen(false)}
        >
          <div
            className="logo-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="logo-close"
              onClick={() => setLogoOpen(false)}
              aria-label="Close logo"
            >
              ×
            </button>

            <div className="logo-image-wrap">
              <img
                src="/IpTech logo.jpg"
                alt="IPTECH_1 Large Logo"
              />
            </div>

            <div className="logo-preview-text">
              <strong>IPTECH_1</strong>
              <span>Technology • AI • Innovation</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;