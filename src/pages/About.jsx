import { Link } from "react-router-dom";

const skills = [
  {
    title: "HTML5",
    type: "WEB",
    icon: "</>",
    color: "blue",
  },
  {
    title: "CSS3",
    type: "DESIGN",
    icon: "#",
    color: "orange",
  },
  {
    title: "JavaScript",
    type: "PROGRAMMING",
    icon: "JS",
    color: "blue",
  },
  {
    title: "React",
    type: "FRONTEND",
    icon: "⚛",
    color: "blue",
  },
  {
    title: "Vue.js",
    type: "FRONTEND",
    icon: "V",
    color: "orange",
  },
  {
    title: "Node.js",
    type: "BACKEND",
    icon: "N",
    color: "blue",
  },
  {
    title: "Python",
    type: "AI / BACKEND",
    icon: "PY",
    color: "orange",
  },
  {
    title: "PHP",
    type: "BACKEND",
    icon: "PHP",
    color: "blue",
  },
  {
    title: "MySQL",
    type: "DATABASE",
    icon: "DB",
    color: "blue",
  },
  {
    title: "MongoDB",
    type: "DATABASE",
    icon: "M",
    color: "orange",
  },
  {
    title: "IoT",
    type: "EMBEDDED",
    icon: "◉",
    color: "blue",
  },
  {
    title: "Cybersecurity",
    type: "SECURITY",
    icon: "⌁",
    color: "orange",
  },
];

const values = [
  {
    number: "01",
    title: "LEARN",
    text: "Continuous learning and exploration of modern technology.",
  },
  {
    number: "02",
    title: "BUILD",
    text: "Turning ideas into practical software and digital projects.",
  },
  {
    number: "03",
    title: "CREATE",
    text: "Creating useful and creative digital experiences.",
  },
  {
    number: "04",
    title: "EXPLORE",
    text: "Exploring AI, IoT, cybersecurity and emerging technologies.",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="about-hero">
        <div className="about-grid-bg"></div>
        <div className="about-hero-glow"></div>

        <div className="about-container">

          <div className="about-label">
            <span></span>
            01 / ABOUT IPTECH_1
          </div>

          <h1>
            WHO
            <span>WE</span>
            ARE<span className="orange">.</span>
          </h1>

          <p>
            A technology space built around software,
            innovation, learning and experimentation.
          </p>

        </div>
      </section>


      {/* =========================================
          PROFILE
      ========================================= */}

      <section className="about-profile">

        <div className="about-container">

          <div className="profile-grid">

            {/* PROFILE CARD */}

            <div className="profile-card">

              <div className="profile-card-top">
                <span>IPTECH_1</span>
                <span>2026</span>
              </div>


              {/* IPTECH_1 LOGO */}

              <div className="profile-logo">
                <img
                  src="/IpTech logo.jpg"
                  alt="IPTECH_1 Logo"
                />
              </div>


              {/* OWNER PHOTO */}

              <div className="profile-avatar">
                <img
                  src="/prince programmer.jpg"
                  alt="IPTECH_1 Founder"
                />
              </div>


              <h2>IZERE PRINCE</h2>

              <p>
                Founder / Developer
              </p>


              <div className="profile-status">
                <span></span>
                BUILDING TECHNOLOGY
              </div>

            </div>


            {/* PROFILE INFORMATION */}

            <div className="profile-info">

              <div className="info-box">

                <span>ABOUT</span>

                <h2>
                  Technology
                  <strong> in motion.</strong>
                </h2>

                <p>
                  IPTECH_1 is a technology initiative
                  created by Izere Prince, focused on
                  software development, modern digital
                  technologies and continuous learning.
                </p>

              </div>


              <div className="info-box-row">

                <div className="small-info-box">

                  <span>01</span>

                  <h3>VISION</h3>

                  <p>
                    Explore technology and build
                    meaningful digital solutions.
                  </p>

                </div>


                <div className="small-info-box">

                  <span>02</span>

                  <h3>MISSION</h3>

                  <p>
                    Learn, create, experiment and
                    share technology.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          VALUES
      ========================================= */}

      <section className="about-values">

        <div className="about-container">

          <div className="section-heading">

            <div>

              <span>
                02 / PRINCIPLES
              </span>

              <h2>
                WHAT
                <strong>DRIVES</strong>
                US.
              </h2>

            </div>

            <p>
              Four simple principles behind IPTECH_1.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value) => (

              <article
                className="value-card"
                key={value.number}
              >

                <span>
                  {value.number}
                </span>

                <div className="value-icon">
                  +
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

                <b>
                  ↗
                </b>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          SKILLS
      ========================================= */}

      <section className="about-skills">

        <div className="about-container">

          <div className="section-heading">

            <div>

              <span>
                03 / TECHNOLOGY
              </span>

              <h2>
                WHAT WE
                <strong>BUILD WITH.</strong>
              </h2>

            </div>

            <p>
              Technologies explored by IPTECH_1.
            </p>

          </div>


          <div className="skills-grid">

            {skills.map((skill) => (

              <article
                className={`skill-card ${skill.color}`}
                key={skill.title}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div>

                  <span>
                    {skill.type}
                  </span>

                  <h3>
                    {skill.title}
                  </h3>

                </div>

                <b>
                  ↗
                </b>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="about-cta">

        <div className="cta-glow"></div>

        <div className="about-container">

          <div className="cta-box">

            <span>
              IPTECH_1 / NEXT
            </span>

            <h2>
              READY TO
              <strong>BUILD?</strong>
            </h2>

            <Link to="/contact">
              START A CONVERSATION ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;