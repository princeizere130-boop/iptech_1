
import { useState } from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    number: "01",
    category: "WEB",
    title: "Building Modern Web Experiences",
    excerpt:
      "Explore the ideas behind responsive, interactive and modern websites.",
    date: "SEP 2026",
    read: "5 MIN READ",
    color: "blue",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    category: "JAVASCRIPT",
    title: "Why JavaScript Matters",
    excerpt:
      "Understanding the role of JavaScript in modern web development.",
    date: "SEP 2026",
    read: "4 MIN READ",
    color: "orange",
  },
  {
    id: 3,
    number: "03",
    category: "REACT",
    title: "Thinking in React Components",
    excerpt:
      "A practical look at component-based development with React.",
    date: "AUG 2026",
    read: "6 MIN READ",
    color: "blue",
  },
  {
    id: 4,
    number: "04",
    category: "AI",
    title: "Starting With Machine Learning",
    excerpt:
      "A simple introduction to the concepts behind machine learning.",
    date: "AUG 2026",
    read: "7 MIN READ",
    color: "orange",
  },
  {
    id: 5,
    number: "05",
    category: "CYBERSECURITY",
    title: "Understanding Digital Security",
    excerpt:
      "Important concepts for thinking about security in digital systems.",
    date: "JUL 2026",
    read: "5 MIN READ",
    color: "blue",
  },
  {
    id: 6,
    number: "06",
    category: "IOT",
    title: "Connecting The Physical World",
    excerpt:
      "Discover how IoT connects devices, sensors and software.",
    date: "JUL 2026",
    read: "6 MIN READ",
    color: "orange",
  },
];

const categories = [
  "ALL",
  "WEB",
  "JAVASCRIPT",
  "REACT",
  "AI",
  "CYBERSECURITY",
  "IOT",
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      activeCategory === "ALL" ||
      post.category === activeCategory;

    const searchMatch =
      post.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      post.excerpt
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const featuredPost = posts.find((post) => post.featured);

  return (
    <main className="blog-page">

      {/* HERO */}

      <section className="blog-hero">

        <div className="blog-grid-bg"></div>

        <div className="blog-glow"></div>

        <div className="blog-container">

          <div className="blog-label">
            <span></span>
            04 / IPTECH_1 BLOG
          </div>

          <h1>
            THINK
            <span>BUILD</span>
                            SHARE<span className="orange">.</span>
          </h1>

          <p>
            Ideas, tutorials, experiments and technology
            stories from the IPTECH_1 journey.
          </p>

        </div>

      </section>

      {/* FEATURED */}

      <section className="blog-featured">

        <div className="blog-container">

          <div className="featured-label">
            FEATURED ARTICLE
          </div>

          <article className="featured-card">

            <div className="featured-visual">

              <div className="featured-grid"></div>

              <div className="featured-circle">
                <span>IP</span>
              </div>

              <div className="featured-orbit one"></div>
              <div className="featured-orbit two"></div>

              <small>IPTECH_1 / BLOG</small>

            </div>

            <div className="featured-content">

              <div className="featured-meta">
                <span>{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
              </div>

              <h2>
                {featuredPost.title}
              </h2>

              <p>
                {featuredPost.excerpt}
              </p>

              <div className="featured-bottom">

                <span>{featuredPost.read}</span>

                <Link to="/contact">
                  READ ARTICLE ↗
                </Link>

              </div>

            </div>

          </article>

        </div>

      </section>

      {/* BLOG LIBRARY */}

      <section className="blog-library">

        <div className="blog-container">

          <div className="blog-toolbar">

            <div>
              <span>ARTICLE LIBRARY</span>

              <h2>
                EXPLORE
                <strong>IDEAS.</strong>
              </h2>
            </div>

            <div className="blog-search">

              <span>⌕</span>

              <input
                type="text"
                placeholder="SEARCH ARTICLES..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>

          <div className="blog-categories">

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

          <div className="blog-grid">

            {filteredPosts.map((post) => (

              <article
                className={`blog-card ${post.color}`}
                key={post.id}
              >

                <div className="blog-card-visual">

                  <span>
                    {post.number}
                  </span>

                  <div className="blog-card-shape">
                    {post.category.slice(0, 2)}
                  </div>

                  <small>
                    IPTECH_1
                  </small>

                </div>

                <div className="blog-card-content">

                  <div className="blog-card-meta">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3>
                    {post.title}
                  </h3>

                  <p>
                    {post.excerpt}
                  </p>

                  <div className="blog-card-bottom">

                    <span>{post.read}</span>

                    <Link to="/contact">
                      READ ↗
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <span>404</span>
              <h3>NO ARTICLE FOUND</h3>
              <p>
                Try another search or category.
              </p>
            </div>
          )}

        </div>

      </section>

      {/* CTA */}

      <section className="blog-cta">

        <div className="blog-container">

          <div className="blog-cta-box">

            <span>IPTECH_1 / CONNECT</span>

            <h2>
              HAVE AN
              <strong>IDEA?</strong>
            </h2>

            <Link to="/contact">
              TALK TO PRINCE ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Blog;
