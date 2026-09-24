
import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "IPTECH_1 Website",
    category: "WEB",
    description:
      "Modern technology platform built for showcasing software, projects and digital services.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    number: "01",
    color: "blue",
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "Smart IoT System",
    category: "IOT",
    description:
      "An experimental IoT system connecting devices and collecting useful data.",
    technologies: ["IoT", "Python", "Node.js", "MongoDB"],
    number: "02",
    color: "orange",
    status: "EXPERIMENT",
  },
  {
    id: 3,
    title: "AI Learning Lab",
    category: "AI",
    description:
      "A learning environment for exploring artificial intelligence and machine learning.",
    technologies: ["Python", "AI", "Machine Learning"],
    number: "03",
    color: "blue",
    status: "BUILDING",
  },
  {
    id: 4,
    title: "Developer Dashboard",
    category: "WEB",
    description:
      "A responsive dashboard interface designed for managing digital information.",
    technologies: ["React", "JavaScript", "Node.js"],
    number: "04",
    color: "orange",
    status: "ACTIVE",
  },
  {
    id: 5,
    title: "Secure Network Lab",
    category: "SECURITY",
    description:
      "A controlled environment for studying network security and cybersecurity concepts.",
    technologies: ["Cybersecurity", "Networking", "Linux"],
    number: "05",
    color: "blue",
    status: "LAB",
  },
  {
    id: 6,
    title: "Mobile App Concept",
    category: "MOBILE",
    description:
      "A mobile application concept focused on creating a clean digital experience.",
    technologies: ["Mobile", "JavaScript", "API"],
    number: "06",
    color: "orange",
    status: "CONCEPT",
  },
];

const filters = [
  "ALL",
  "WEB",
  "AI",
  "IOT",
  "SECURITY",
  "MOBILE",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="projects-page">

      {/* ================= HERO ================= */}

      <section className="projects-hero">

        <div className="projects-grid-bg"></div>

        <div className="projects-glow"></div>

        <div className="projects-container">

          <div className="projects-label">
            <span></span>
            02 / IPTECH_1 PROJECTS
          </div>

          <h1>
            IDEAS
            <span>INTO</span>
            PROJECTS<span className="orange">.</span>
          </h1>

          <p>
            A collection of experiments, software projects
            and technology ideas built through IPTECH_1.
          </p>

        </div>

      </section>

      {/* ================= FILTER ================= */}

      <section className="projects-work">

        <div className="projects-container">

          <div className="projects-toolbar">

            <div>
              <span>PROJECT DATABASE</span>
              <h2>
                SELECT
                <strong>PROJECT.</strong>
              </h2>
            </div>

            <div className="project-filters">

              {filters.map((filter) => (

                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "active"
                      : ""
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>

              ))}

            </div>

          </div>

          {/* ================= PROJECT GRID ================= */}

          <div className="projects-grid">

            {filteredProjects.map((project) => (

              <article
                className={`project-card ${project.color}`}
                key={project.id}
              >

                <div className="project-card-top">

                  <span>
                    {project.number}
                  </span>

                  <span className="project-status">
                    <i></i>
                    {project.status}
                  </span>

                </div>

                {/* VISUAL */}

                <div className="project-visual">

                  <div className="visual-grid"></div>

                  <div className="visual-core">
                    <span>
                      {project.number}
                    </span>
                  </div>

                  <div className="visual-orbit orbit-a"></div>
                  <div className="visual-orbit orbit-b"></div>

                  <small>
                    IPTECH_1
                  </small>

                </div>

                {/* CONTENT */}

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  <button className="project-open">
                    VIEW PROJECT
                    <span>↗</span>
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="projects-cta">

        <div className="projects-container">

          <div className="projects-cta-box">

            <span>HAVE AN IDEA?</span>

            <h2>
              LET'S
              <strong>BUILD IT.</strong>
            </h2>

            <Link to="/contact">
              START A PROJECT ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;
