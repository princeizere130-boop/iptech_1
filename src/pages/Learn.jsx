
import { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "HTML5",
    category: "WEB",
    level: "BEGINNER",
    number: "01",
    icon: "</>",
    description:
      "Learn how to structure modern websites using semantic HTML.",
    topics: ["Elements", "Forms", "Semantic HTML", "Accessibility"],
    color: "blue",
  },
  {
    title: "CSS3",
    category: "WEB",
    level: "BEGINNER",
    number: "02",
    icon: "#",
    description:
      "Build beautiful responsive interfaces with modern CSS.",
    topics: ["Flexbox", "Grid", "Animation", "Responsive"],
    color: "orange",
  },
  {
    title: "JavaScript",
    category: "PROGRAMMING",
    level: "INTERMEDIATE",
    number: "03",
    icon: "JS",
    description:
      "Learn the language behind interactive modern web applications.",
    topics: ["DOM", "ES6+", "Async", "APIs"],
    color: "blue",
  },
  {
    title: "React",
    category: "FRONTEND",
    level: "INTERMEDIATE",
    number: "04",
    icon: "⚛",
    description:
      "Create component-based interfaces and modern web applications.",
    topics: ["Components", "Hooks", "Router", "State"],
    color: "orange",
  },
  {
    title: "Node.js",
    category: "BACKEND",
    level: "INTERMEDIATE",
    number: "05",
    icon: "N",
    description:
      "Build backend applications and APIs using JavaScript.",
    topics: ["Express", "APIs", "Authentication", "Server"],
    color: "blue",
  },
  {
    title: "Python",
    category: "PROGRAMMING",
    level: "BEGINNER",
    number: "06",
    icon: "PY",
    description:
      "Learn Python for programming, automation and data applications.",
    topics: ["Syntax", "Functions", "OOP", "Libraries"],
    color: "orange",
  },
  {
    title: "AI & Machine Learning",
    category: "AI",
    level: "ADVANCED",
    number: "07",
    icon: "AI",
    description:
      "Explore the fundamentals of artificial intelligence and ML.",
    topics: ["Data", "Models", "Training", "Prediction"],
    color: "blue",
  },
  {
    title: "Cybersecurity",
    category: "SECURITY",
    level: "ADVANCED",
    number: "08",
    icon: "⌁",
    description:
      "Explore security concepts, networks and secure systems.",
    topics: ["Networks", "Threats", "Security", "Linux"],
    color: "orange",
  },
];

const categories = [
  "ALL",
  "WEB",
  "PROGRAMMING",
  "FRONTEND",
  "BACKEND",
  "AI",
  "SECURITY",
];

function Learn() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredCourses =
    activeCategory === "ALL"
      ? courses
      : courses.filter(
          (course) => course.category === activeCategory
        );

  return (
    <main className="learn-page">

      {/* ================= HERO ================= */}

      <section className="learn-hero">

        <div className="learn-grid-bg"></div>

        <div className="learn-glow"></div>

        <div className="learn-container">

          <div className="learn-label">
            <span></span>
            03 / IPTECH_1 LEARNING
          </div>

          <h1>
            LEARN
            <span>BUILD</span>
            GROW<span className="orange">.</span>
          </h1>

          <p>
            Explore technology through practical learning,
            experiments and real-world development.
          </p>

        </div>

      </section>

      {/* ================= LEARNING INTRO ================= */}

      <section className="learn-intro">

        <div className="learn-container">

          <div className="learn-intro-grid">

            <div>
              <span>LEARNING LAB</span>

              <h2>
                KNOWLEDGE
                <strong>IN MOTION.</strong>
              </h2>
            </div>

            <p>
              Choose a technology, explore the fundamentals,
              practice with projects and keep building.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FILTER ================= */}

      <section className="learn-courses">

        <div className="learn-container">

          <div className="learn-toolbar">

            <div>
              <span>TECHNOLOGY LIBRARY</span>

              <h2>
                START
                <strong>LEARNING.</strong>
              </h2>
            </div>

            <div className="learn-filters">

              {categories.map((category) => (

                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

          {/* ================= COURSE GRID ================= */}

          <div className="courses-grid">

            {filteredCourses.map((course) => (

              <article
                className={`course-card ${course.color}`}
                key={course.number}
              >

                <div className="course-top">

                  <span>{course.number}</span>

                  <span>{course.level}</span>

                </div>

                <div className="course-icon">
                  {course.icon}
                </div>

                <span className="course-category">
                  {course.category}
                </span>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="course-topics">

                  {course.topics.map((topic) => (
                    <span key={topic}>
                      {topic}
                    </span>
                  ))}

                </div>

                <Link to="/contact">
                  START LEARNING
                  <span>↗</span>
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= LEARNING PATH ================= */}

      <section className="learning-path">

        <div className="learn-container">

          <div className="path-box">

            <div className="path-content">

              <span>IPTECH_1 / ROADMAP</span>

              <h2>
                LEARN.
                <strong>BUILD.</strong>
                MASTER.
              </h2>

              <p>
                Start with the fundamentals, build projects,
                explore advanced concepts and develop your
                own technology ideas.
              </p>

            </div>

            <div className="path-steps">

              <div>
                <span>01</span>
                <b>FOUNDATION</b>
              </div>

              <div>
                <span>02</span>
                <b>PROJECTS</b>
              </div>

              <div>
                <span>03</span>
                <b>ADVANCED</b>
              </div>

              <div>
                <span>04</span>
                <b>CREATE</b>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Learn;
