import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    category: "WEB & SOFTWARE",
    title: "Web Development",
    description:
      "We build modern, responsive and user-focused websites and web applications using modern web technologies.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js"],
  },
  {
    number: "02",
    category: "BACKEND",
    title: "Backend Development",
    description:
      "Building server-side applications, APIs and backend systems that power modern digital products.",
    technologies: ["Node.js", "PHP", "Python"],
  },
  {
    number: "03",
    category: "DATABASE",
    title: "Database Solutions",
    description:
      "Designing, managing and integrating databases for applications that need reliable data storage.",
    technologies: ["MySQL", "MongoDB"],
  },
  {
    number: "04",
    category: "MOBILE",
    title: "Mobile App Development",
    description:
      "Developing mobile application concepts and digital experiences designed for mobile users.",
    technologies: ["Mobile Apps", "APIs", "UI/UX"],
  },
  {
    number: "05",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, machine learning models, automation and data-driven solutions.",
    technologies: ["Python", "Machine Learning", "AI"],
  },
  {
    number: "06",
    category: "HARDWARE",
    title: "IoT & Embedded Systems",
    description:
      "Connecting software with hardware through embedded systems, sensors, devices and IoT technologies.",
    technologies: ["IoT", "Embedded Systems", "Sensors"],
  },
  {
    number: "07",
    category: "SECURITY",
    title: "Cybersecurity",
    description:
      "Exploring security principles, secure applications, systems protection and cybersecurity practices.",
    technologies: ["Application Security", "Network Security"],
  },
  {
    number: "08",
    category: "INFRASTRUCTURE",
    title: "DevOps & Networking",
    description:
      "Working with development workflows, deployment, infrastructure, networking, routing and automation.",
    technologies: ["DevOps", "Networking", "Routing"],
  },
  {
    number: "09",
    category: "EMERGING TECHNOLOGY",
    title: "Blockchain",
    description:
      "Exploring decentralized technologies, blockchain concepts and potential real-world applications.",
    technologies: ["Blockchain", "Decentralization"],
  },
  {
    number: "10",
    category: "CREATIVE",
    title: "Graphic Design",
    description:
      "Creating digital visual experiences, graphics and creative assets that communicate ideas effectively.",
    technologies: ["Graphic Design", "Visual Design"],
  },
  {
    number: "11",
    category: "DEVELOPMENT TOOLS",
    title: "Version Control",
    description:
      "Managing source code, project history and collaboration through modern version-control workflows.",
    technologies: ["Git", "Version Control", "Collaboration"],
  },
  {
    number: "12",
    category: "SOFTWARE ENGINEERING",
    title: "Technology Solutions",
    description:
      "Combining different technologies to create practical solutions for specific projects and ideas.",
    technologies: ["Software", "Systems", "Innovation"],
  },
];

function Services() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="inner-hero services-hero">
        <div className="section-container">

          <p className="section-label">
            
          </p>

          <h1>
            Technology for
            <span> real ideas.</span>
          </h1>

          <p>
            Explore the technology areas and digital solutions
            developed, explored and supported by IPTECH_1.
          </p>

        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="services-intro">
        <div className="section-container">

          <div className="services-intro-grid">

            <div>
              <p className="section-label">
                01 / OUR SERVICES
              </p>

              <h2>
                One technology
                <span> ecosystem.</span>
              </h2>
            </div>

            <div>
              <p>
                Technology does not exist in isolation. Modern
                products often combine frontend, backend,
                databases, infrastructure, security and other
                technologies.
              </p>

              <p>
                IPTECH_1 brings these different areas together
                to explore, develop and build practical digital
                solutions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}

      <section className="services-main">
        <div className="section-container">

          <div className="services-main-header">
            <div>
              <p className="section-label">
                02 / TECHNOLOGY AREAS
              </p>

              <h2>
                What we
                <span> work with.</span>
              </h2>
            </div>

            <p>
              Explore the different technology disciplines
              available across IPTECH_1.
            </p>
          </div>

          <div className="services-list-page">

            {services.map((service) => (
              <article
                className="service-large-card"
                key={service.number}
              >

                <div className="service-number">
                  {service.number}
                </div>

                <div className="service-main-content">

                  <span className="service-category">
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-technologies">
                    {service.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="service-icon">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="service-process">
        <div className="section-container">

          <p className="section-label">
            03 / HOW WE WORK
          </p>

          <h2>
            From idea to
            <span> solution.</span>
          </h2>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <h3>Understand</h3>
              <p>
                We start by understanding the idea, problem or
                technology challenge.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Plan</h3>
              <p>
                We identify the technologies and approach that
                can be used for the project.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Build</h3>
              <p>
                We turn concepts into practical software,
                systems and technology projects.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
              <h3>Improve</h3>
              <p>
                We test, learn, improve and continue developing
                the solution.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="services-cta">
        <div className="section-container">

          <p className="section-label">
            IPTECH_1
          </p>

          <h2>
            Have a technology
            <span> project?</span>
          </h2>

          <p>
            Let's explore the idea and find the right technology
            direction for it.
          </p>

          <Link to="/contact" className="btn btn-dark">
            Contact IPTECH_1 →
          </Link>

        </div>
      </section>
    </>
  );
}

export default Services;