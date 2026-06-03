"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type Theme = "light" | "dark";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const services = [
  {
    title: "Corporate Website Revamps",
    description:
      "Complete redesigns with modern UI systems, clear information hierarchy, and faster performance for better first impressions.",
  },
  {
    title: "B2B Lead Generation Funnels",
    description:
      "Landing pages, conversion journeys, and CRM-ready forms crafted to turn website traffic into qualified business enquiries.",
  },
  {
    title: "E-Commerce Engineering",
    description:
      "Secure and scalable storefront builds with seamless checkout, product filters, and merchandising workflows.",
  },
  {
    title: "SEO + Growth Optimization",
    description:
      "Technical SEO, content planning, and analytics-led experiments that grow visibility and conversion over time.",
  },
];

const metrics = [
  { label: "Projects Delivered", value: "180+" },
  { label: "Avg. Client Retention", value: "92%" },
  { label: "Industries Served", value: "24" },
];

const differentiators = [
  "Design language aligned to your brand and market segment",
  "Conversion-focused content and section architecture",
  "Fast page speed and mobile-first responsive structure",
  "Ongoing support and optimization after launch",
];

const deliverySteps = [
  {
    title: "Audit & Strategy",
    detail: "We map your current gaps, competitor benchmarks, and growth goals before touching design.",
  },
  {
    title: "UI/UX Redesign",
    detail: "Your header, hero, inner pages, and calls-to-action are redesigned with modern enterprise visual standards.",
  },
  {
    title: "Build & Launch",
    detail: "Development, testing, speed checks, and go-live support with clean handover and improvement roadmap.",
  },
];

export default function HomePage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("highest-technologies-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : prefersDark ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("highest-technologies-theme", nextTheme);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <div>
      <div className="top-strip">
        <div className="container top-strip-content">
          <span>Digital Transformation & Web Excellence Partner</span>
          <span>Call: +91 98765 43210</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand">
            <span>Highest</span>
            <small>Technologies</small>
          </a>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              <span className="theme-toggle-icon" aria-hidden="true">
                {theme === "light" ? "☀️" : "🌙"}
              </span>
              <span>{theme === "light" ? "Light" : "Dark"}</span>
            </button>
            <a href="#contact" className="nav-cta">
              Get Proposal
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <p className="tag">Website Redesign & Digital Growth</p>
              <h1>A premium corporate website experience that looks credible and converts better.</h1>
              <p>
                We redesigned the structure to feel professional and modern—starting from the header and navigation to
                every key section—so your brand presents stronger and performs better.
              </p>
              <div className="hero-cta-group">
                <a className="cta" href="#contact">
                  Start Redesign Project
                </a>
                <a className="ghost-cta" href="#services">
                  Explore Services
                </a>
              </div>
            </div>
            <aside className="hero-panel">
              <h3>Business-First Outcomes</h3>
              <ul>
                <li>Sharper brand perception with cleaner visual hierarchy</li>
                <li>Improved enquiry flow through CTA placement and section planning</li>
                <li>Enterprise-grade look inspired by modern industrial websites</li>
              </ul>
              <div className="metric-grid">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container split-section">
            <div>
              <h2>Redesigned for trust, clarity, and scale</h2>
              <p>
                Your old interface felt visually weak. The new direction introduces a refined header, structured
                typography, cleaner spacing, and confident calls-to-action aligned with high-performing B2B websites.
              </p>
            </div>
            <ul className="highlights">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <h2>Core Services</h2>
            <div className="cards">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <h2>How We Execute</h2>
            <div className="cards process-cards">
              {deliverySteps.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact">
            <div>
              <h2>Let&apos;s elevate your website</h2>
              <p>
                Share your goals and we&apos;ll provide a redesign blueprint with timeline, scope, and practical next
                steps tailored for your business.
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your redesign requirement"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Send Message</button>
              {submitted && (
                <p className="form-success" role="status" aria-live="polite">
                  Thanks for reaching out. Our team will contact you shortly.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
