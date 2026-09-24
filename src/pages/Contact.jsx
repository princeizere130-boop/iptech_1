import { useState } from "react";

const emails = [
  "princeizere3@gmail.com",
  "princeizere130@gmail.com",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:

${formData.message}
    `;

    const mailtoLink =
      `mailto:princeizere3@gmail.com` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="contact-page">

      {/* =========================
          HERO
      ========================== */}

      <section className="contact-hero">
        <div className="contact-grid-bg"></div>
        <div className="contact-glow"></div>

        <div className="contact-container">
          <div className="contact-label">
            <span></span>
            05 / IPTECH_1 CONTACT
          </div>

          <h1>
            LET'S
            <span>TALK</span>
            <b>TECH</b>
          </h1>

          <p>
            Have an idea, project or question?
            Start a conversation with IPTECH_1.
          </p>
        </div>
      </section>


      {/* =========================
          CONTACT INFORMATION
      ========================== */}

      <section className="contact-info">
        <div className="contact-container">

          <div className="contact-heading">
            <div>
              <span>GET IN TOUCH</span>

              <h2>
                FIND
                <strong>PRINCE.</strong>
              </h2>
            </div>

            <p>
              Connect with IPTECH_1 through email,
              phone and social media.
            </p>
          </div>


          <div className="contact-cards">

            {/* EMAIL 1 */}

            <a
              href="mailto:princeizere3@gmail.com"
              className="contact-card email-card"
            >
              <div className="contact-card-number">
                01
              </div>

              <div className="contact-card-icon">
                @
              </div>

              <div className="contact-card-content">
                <span>
                  EMAIL / PRIMARY
                </span>

                <h3>
                  princeizere3@gmail.com
                </h3>

                <p>
                  Send an email directly to IPTECH_1.
                </p>
              </div>

              <b>↗</b>
            </a>


            {/* EMAIL 2 */}

            <a
              href="mailto:princeizere130@gmail.com"
              className="contact-card orange-card"
            >
              <div className="contact-card-number">
                02
              </div>

              <div className="contact-card-icon">
                @
              </div>

              <div className="contact-card-content">
                <span>
                  EMAIL / SECONDARY
                </span>

                <h3>
                  princeizere130@gmail.com
                </h3>

                <p>
                  Another direct email channel.
                </p>
              </div>

              <b>↗</b>
            </a>


            {/* INSTAGRAM */}

            <a
              href="https://instagram.com/iptech_1"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-number">
                03
              </div>

              <div className="contact-card-icon">
                IG
              </div>

              <div className="contact-card-content">
                <span>
                  SOCIAL / INSTAGRAM
                </span>

                <h3>
                  @iptech_1
                </h3>

                <p>
                  Follow IPTECH_1 on Instagram.
                </p>
              </div>

              <b>↗</b>
            </a>


            {/* FACEBOOK */}

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-number">
                04
              </div>

              <div className="contact-card-icon">
                F
              </div>

              <div className="contact-card-content">
                <span>
                  SOCIAL / FACEBOOK
                </span>

                <h3>
                  Prince Programmer
                </h3>

                <p>
                  Connect with Prince Programmer.
                </p>
              </div>

              <b>↗</b>
            </a>


            {/* PHONE */}

            <a
              href="tel:+250789194155"
              className="contact-card phone-card"
            >
              <div className="contact-card-number">
                05
              </div>

              <div className="contact-card-icon">
                ☎
              </div>

              <div className="contact-card-content">
                <span>
                  PHONE / DIRECT CONTACT
                </span>

                <h3>
                  0789 194 155
                </h3>

                <p>
                  Call IPTECH_1 directly.
                  Your call will first be attended
                  by a person before being connected.
                </p>
              </div>

              <b>↗</b>
            </a>

          </div>


          {/* =========================
              AVAILABILITY
          ========================== */}

          <div className="contact-hours">

            <div className="contact-hours-icon">
              ●
            </div>

            <div className="contact-hours-content">

              <span>
                IPTECH_1 / AVAILABILITY
              </span>

              <h3>
                OPEN <strong>EVERY DAY</strong>
              </h3>

              <p>
                We are available every day except
                Saturday (Sabbath Day).
              </p>

            </div>

            <div className="contact-hours-status">
              <span className="status-dot"></span>
              AVAILABLE
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CONTACT FORM
      ========================== */}

      <section className="contact-form-section">
        <div className="contact-container">

          <div className="form-layout">

            {/* FORM INTRO */}

            <div className="form-intro">

              <span>
                05 / MESSAGE
              </span>

              <h2>
                SEND
                <strong>A MESSAGE.</strong>
              </h2>

              <p>
                Fill in the form below and prepare
                a message to contact IPTECH_1.
              </p>

              <div className="form-decoration">
                <span>IP</span>
              </div>

            </div>


            {/* FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <label>
                  <span>
                    YOUR NAME
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>


                <label>
                  <span>
                    YOUR EMAIL
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

              </div>


              <label>
                <span>
                  SUBJECT
                </span>

                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </label>


              <label>
                <span>
                  MESSAGE
                </span>

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>


              <button type="submit">
                SEND MESSAGE

                <span>
                  ↗
                </span>
              </button>

            </form>

          </div>
        </div>
      </section>


      {/* =========================
          EMAIL DIRECTORY
      ========================== */}

      <section className="email-directory">
        <div className="contact-container">

          <div className="directory-box">

            <div>

              <span>
                IPTECH_1 / EMAIL DIRECTORY
              </span>

              <h2>
                TWO CHANNELS.
                <strong>ONE TECH SPACE.</strong>
              </h2>

            </div>


            <div className="directory-emails">

              {emails.map((email, index) => (

                <a
                  href={`mailto:${email}`}
                  key={email}
                >

                  <span>
                    0{index + 1}
                  </span>

                  {email}

                  <b>
                    ↗
                  </b>

                </a>

              ))}

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;