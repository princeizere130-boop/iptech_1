function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            IPTECH<span>_1</span>
          </h2>

          <p>
            Technology, software, AI and digital solutions
            built for the future.
          </p>
        </div>

        {/* VISION */}
        <div className="footer-vision">
          <h3>OUR VISION</h3>

          <div className="vision-years">
            <span>2026</span>

            <div className="vision-line">
              <i></i>
            </div>

            <span>2050</span>
          </div>

          <p>
            Building technology today for a smarter,
            connected and innovative future.
          </p>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>CONNECT WITH US</h3>

          <div className="social-card">

            <a
              href="https://www.facebook.com/Princeprogrammerpage"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-link"
            >
              <span className="facebook-icon">f</span>

              <span className="facebook-info">
                <strong>Facebook</strong>
                <small>Prince Programmerpage</small>
              </span>
            </a>

            <a
              href="https://www.instagram.com/iptech_1/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <span className="instagram-icon">◎</span>

              <span className="instagram-info">
                <strong>Instagram</strong>
                <small>@iptech_1</small>
              </span>
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026–2050 <strong>IPTECH_1</strong>.
          Building the future with technology.
        </p>
      </div>
    </footer>
  );
}

export default Footer;