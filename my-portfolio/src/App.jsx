import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
/* ================= DATA ================= */

const projects = [
  {
    id: 1,
    title: "Food Festival Community",
    category: "HTML/CSS/JS",
    desc: "A community event webpage for a food festival — schedule, stalls and registration.",
    techs: ["HTML", "CSS", "JavaScript"],
    features: ["Event schedule & stall listings", "Registration section", "Fully responsive"],
    gradient: "linear-gradient(135deg,#f97316,#fbbf24)",
    demoUrl: "https://your-food-festival-demo-link.com",
    githubUrl: "https://github.com/kira1910/food-festival-community"
  },
  {
    id: 2,
    title: "My Portfolio",
    category: "React",
    desc: "A personal portfolio website built with React Router, filters and dark mode.",
    techs: ["React", "CSS", "JavaScript"],
    features: ["Multi-page routing", "Dark / light mode", "Project filter & search"],
    gradient: "linear-gradient(135deg,#0f766e,#2dd4bf)",
    demoUrl: "https://your-portfolio-demo-link.com",
    githubUrl: "https://github.com/kira1910/react-portfolio"
  },
  {
    id: 3,
    title: "ABC College Website",
    category: "HTML/CSS/JS",
    desc: "A multi-page college website with departments, admissions and contact.",
    techs: ["HTML", "CSS", "JavaScript"],
    features: ["Department & admission pages", "Image gallery", "Mobile-friendly"],
    gradient: "linear-gradient(135deg,#1e3a8a,#60a5fa)",
    demoUrl: "https://your-college-demo-link.com",
    githubUrl: "https://github.com/kira1910/abc-college"
  },
  {
    id: 4,
    title: "PureMint Skincare",
    category: "HTML/CSS/JS",
    desc: "A clean skincare brand landing page — products, routines and contact.",
    techs: ["HTML", "CSS", "JavaScript"],
    features: ["Product showcase grid", "Routine section", "Contact form"],
    gradient: "linear-gradient(135deg,#14532d,#4ade80)",
    demoUrl: "https://your-puremint-demo-link.com",
    githubUrl: "https://github.com/kira1910/puremint-skincare"
  },
];

const categories = ["All", "HTML/CSS/JS", "React"];
const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
];
const skillCategories = [
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { name: "Tools", items: ["VS Code", "Git", "GitHub", "Figma"] },
  { name: "Other", items: ["Responsive Design", "UI/UX", "API Integration"] },
];
const stats = [
  { num: "4+", label: "Projects" },
  { num: "1+", label: "Year Experience" },
  { num: "6+", label: "Technologies" },
];
const education = [
  { title: "BS Computer Science", place: "University Name", years: "2022 - 2026" },
  { title: "Intermediate (ICS)", place: "College Name", years: "2020 - 2022" },
];
const experience = [
  { title: "Frontend Developer Intern", period: "2025 – Present", place: "Company Name", desc: "Building responsive web pages with HTML, CSS and React." },
  { title: "Freelance Web Designer", period: "2024 – 2025", place: "Self-employed", desc: "Designed small business landing pages for local clients." },
];
const interests = ["Coding", "UI Design", "Reading", "Learning new technologies"];
const socials = [
  { name: "GitHub", url: "https://github.com/kira1910" },
  { name: "LinkedIn", url: "https://linkedin.com/in/kiran" },
  { name: "Instagram", url: "https://instagram.com/kiran" },
  { name: "Facebook", url: "https://facebook.com/kiran" }
];
/* ================= SCROLL REVEAL HOOK ================= */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-active");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};
/* ================= PROJECT CARD ================= */
function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="project-card">
      <div className="project-img" style={{ background: project.gradient }}>
        <span>{project.title}</span>
      </div>
      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-tags">
          {project.techs.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href="#" className="btn btn-sm" onClick={(e) => e.preventDefault()}>Live Demo</a>
          <a href="#" className="btn btn-sm btn-outline" onClick={(e) => e.preventDefault()}>GitHub</a>
          <button className="btn btn-sm btn-ghost" onClick={() => setShowDetails((v) => !v)}>
            {showDetails ? "Hide Details" : "View Details"}
          </button>
        </div>
        {showDetails && (
          <div className="details">
            <strong>Features:</strong>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
/* ================= PAGES ================= */
const Home = () => {
  const ref = useReveal();
  return (
    <>
      <section className="page hero" ref={ref}>
        <p className="hero-greeting">Hi, I'm Kiran</p>
        <h1 className="hero-title">Frontend Developer</h1>
        <p className="hero-text">
          I build modern and responsive websites using HTML, CSS, JavaScript and React.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
        </div>
      </section>
      <section className="page">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <h2 className="stat-num">{s.num}</h2>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="page">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of the projects I have built.</p>
        <div className="cards-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      <section className="page cta">
        <h2 className="cta-title">Have a project in mind?</h2>
        <p className="cta-text">Let's work together.</p>
        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
      </section>
    </>
  );
};
const About = () => {
  const ref = useReveal();
  return (
    <section className="page" ref={ref}>
      <h1 className="page-heading">About Me</h1>
      <p className="section-subtitle">Get to know more about me and my journey as a developer.</p>
      <div className="about-grid">
        <div className="profile-img"><span>K</span></div>
        <div className="about-text">
          <h2>Hi, I'm Kiran</h2>
          <p>
            I'm a frontend developer passionate about creating modern and user-friendly
            web experiences. I love turning ideas into clean, responsive interfaces.
          </p>
          <ul className="about-list">
            <li><strong>Education:</strong> BS in Computer Science</li>
            <li><strong>Experience:</strong> 1+ year in web development</li>
            <li><strong>Goal:</strong> Build products people love.</li>
          </ul>
        </div>
      </div>
      <h2 className="section-title">Education</h2>
      <div className="cards-grid two-col">
        {education.map((e) => (
          <div className="info-card" key={e.title}>
            <h3>{e.title}</h3>
            <p className="muted">{e.place}</p>
            <p className="years">{e.years}</p>
          </div>
        ))}
      </div>
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.title}>
            <span className="timeline-dot"></span>
            <div className="timeline-card">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="muted">{item.place}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="section-title">Personal Interests</h2>
      <div className="chips">
        {interests.map((i) => (
          <span key={i} className="chip">{i}</span>
        ))}
      </div>
    </section>
  );
};
const Skills = () => {
  const ref = useReveal();
  return (
    <section className="page" ref={ref}>
      <h1 className="page-heading">My Skills</h1>
      <p className="section-subtitle">Technologies and tools I work with.</p>
      <div className="skill-categories">
        {skillCategories.map((cat) => (
          <div className="skill-category" key={cat.name}>
            <h3>{cat.name}</h3>
            <div className="chips">
              {cat.items.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h2 className="section-title">Skill Levels</h2>
      <div className="skill-list">
        {skills.map((s) => (
          <div className="skill-item" key={s.name}>
            <div className="skill-top">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar" style={{ width: `${s.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="section-title">Tools & Technologies</h2>
      <div className="tools">
        {["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"].map((t) => (
          <span className="tool" key={t}>{t}</span>
        ))}
      </div>
    </section>
  );
};
const Projects = () => {
  const ref = useReveal();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = projects.filter((p) => {
    const matchFilter = filter === "All" || p.category === filter;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });
  return (
    <section className="page" ref={ref}>
      <h1 className="page-heading">My Projects</h1>
      <p className="section-subtitle">Some of the projects I have built.</p>
      <div className="toolbar">
        <div className="filter-buttons">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`filter-btn ${filter === c ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filtered.length > 0 ? (
        <div className="cards-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <p className="empty">No projects found. Try another search or category.</p>
      )}
    </section>
  );
};
const Contact = () => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setSuccess(false);
    }
  };
  return (
    <section className="page" ref={ref}>
      <h1 className="page-heading">Get In Touch</h1>
      <p className="section-subtitle">Have a question or project? Let's talk.</p>
      <div className="contact-info-grid">
        <div className="info-card"><h3>Email</h3><p>hongkira282@gmail.com</p></div>
        <div className="info-card"><h3>Phone</h3><p>+92 3077052323</p></div>
        <div className="info-card"><h3>Location</h3><p>Lahore, Pakistan</p></div>
      </div>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            {errors.name && <p className="err">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            {errors.email && <p className="err">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Write your message..."></textarea>
            {errors.message && <p className="err">{errors.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {success && <p className="succ">Message sent successfully!</p>}
        </form>
        <div className="contact-side">
          <h3>Social Media</h3>
          <div className="social-row">
            {socials.map((s, index) => (
              <a 
                key={index} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="chip social"
              >
                {s.name}
              </a>
            ))}
          </div>
          <p className="note">Prefer email? Drop me a message and I will get back to you.</p>
        </div>
      </div>
    </section>
  );
};
/* ================= HEADER / FOOTER / BTT ================= */
function Header({ darkMode, toggleDark, menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <div className="logo">
        Kiran<span className="dot">.</span>
      </div>
      <button className="theme-btn" onClick={toggleDark}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  );
}
const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Kiran. All Rights Reserved.</p>
  </footer>
);
const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      className="back-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
};
/* ================= APP ================= */
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === null ? true : saved === "dark"; // default dark (black + teal)
  });
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <Router>
      <div className="app-container">
        <Header
          darkMode={darkMode}
          toggleDark={() => setDarkMode((v) => !v)}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
export default App;
