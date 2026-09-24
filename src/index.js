import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ===============================
// SEO / PAGE INFORMATION
// ===============================

document.title = "IPTECH_1 — Build Digital Future";

// Helper function for meta tags
const setMeta = (name, content, property = false) => {
const attribute = property ? "property" : "name";

let meta = document.head.querySelector(
`meta[${attribute}="${name}"]`
);

if (!meta) {
meta = document.createElement("meta");
meta.setAttribute(attribute, name);
document.head.appendChild(meta);
}

meta.setAttribute("content", content);
};

// ===============================
// BASIC SEO
// ===============================

setMeta(
"description",
"IPTECH_1 is a digital technology platform focused on web development, programming, AI, IoT and practical technology education."
);

setMeta(
"keywords",
"IPTECH_1, web development, programming, React, JavaScript, AI, IoT, technology, technology education, Rwanda"
);

setMeta("author", "IPTECH_1");
setMeta("robots", "index, follow");
setMeta("theme-color", "#050505");
setMeta("color-scheme", "dark");

// ===============================
// OPEN GRAPH
// ===============================

setMeta(
"og:title",
"IPTECH_1 — Build Digital Future",
true
);

setMeta(
"og:description",
"Learn, build and explore technology with IPTECH_1 — web development, programming, AI, IoT and digital technology.",
true
);

setMeta(
"og:type",
"website",
true
);

setMeta(
"og:site_name",
"IPTECH_1",
true
);

setMeta(
"og:image",
"/IpTech logo.jpg",
true
);

// ===============================
// TWITTER / X
// ===============================

setMeta(
"twitter:card",
"summary_large_image"
);

setMeta(
"twitter:title",
"IPTECH_1 — Build Digital Future"
);

setMeta(
"twitter:description",
"Technology, programming, AI, IoT and practical digital education from IPTECH_1."
);

setMeta(
"twitter:image",
"/IpTech logo.jpg"
);

// ===============================
// FAVICON
// ===============================

const favicon = document.createElement("link");

favicon.rel = "icon";
favicon.type = "image/jpeg";
favicon.href = "/IpTech logo.jpg";

document.head.appendChild(favicon);

// Apple / iPhone icon
const appleIcon = document.createElement("link");

appleIcon.rel = "apple-touch-icon";
appleIcon.href = "/IpTech logo.jpg";

document.head.appendChild(appleIcon);

// ===============================
// CANONICAL URL
// ===============================

const canonical = document.createElement("link");

canonical.rel = "canonical";
canonical.href = window.location.origin;

document.head.appendChild(canonical);

// ===============================
// REACT APP
// ===============================

const rootElement = document.getElementById("root");

if (!rootElement) {
throw new Error(
"Root element with id='root' was not found."
);
}

const root = ReactDOM.createRoot(rootElement);

root.render(
<React.StrictMode> <App />
</React.StrictMode>
);
