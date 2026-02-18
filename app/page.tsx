"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const services = [
  {
    title: "Search Intelligence",
    description:
      "Advanced technical SEO, schema architecture, and search visibility strategies built for long-term compounding growth.",
  },
  {
    title: "Growth Marketing Systems",
    description:
      "Data-led paid media, social narratives, and funnel engineering that move users from awareness to revenue.",
  },
  {
    title: "Digital Experience Design",
    description:
      "Conversion-first landing pages, performance optimization, and lifecycle flows shaped around user intent.",
  },
];

const portfolioItems = [
  {
    client: "Commerce Platform",
    outcome: "210% organic growth with a 4.8x ROI pipeline",
  },
  {
    client: "B2B SaaS Venture",
    outcome: "3x MQL velocity after full-funnel optimization",
  },
  {
    client: "Regional Service Network",
    outcome: "Top-tier keyword coverage across 14 priority cities",
  },
];

const differentiators = [
  "AI-assisted market intelligence",
  "Realtime campaign observability",
  "Cross-channel attribution clarity",
];

export default function HomePage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

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
      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand">
            Highest Technologies
          </a>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="grid-overlay" />
          <div className="container hero-grid">
            <div>
              <p className="tag">Next-Gen IT & Software Growth Studio</p>
              <h1>Futuristic digital systems engineered for visibility, velocity, and scale.</h1>
              <p>
                Inspired by modern enterprise experiences, we blend strategy, software, and marketing intelligence to
                build brands that lead in tomorrow&apos;s digital economy.
              </p>
              <div className="hero-cta-group">
                <a className="cta" href="#contact">
                  Start Your Transformation
                </a>
                <a className="ghost-cta" href="#services">
                  Explore Capabilities
                </a>
              </div>
            </div>
            <div className="hero-card">
              <h3>Performance Snapshot</h3>
              <ul>
                {portfolioItems.map((item) => (
                  <li key={item.client}>
                    <strong>{item.client}</strong>
                    <span>{item.outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container split-section">
            <div>
              <h2>Designed for the digital future</h2>
              <p>
                Highest Technologies is a modern IT and growth partner helping organizations transform traditional
                marketing into measurable digital momentum.
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
            <h2>Services</h2>
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

        <section id="portfolio" className="section">
          <div className="container">
            <h2>Portfolio Signals</h2>
            <div className="cards">
              {portfolioItems.map((item) => (
                <article key={item.client} className="card">
                  <h3>{item.client}</h3>
                  <p>{item.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact">
            <div>
              <h2>Contact Us</h2>
              <p>
                Ready to upgrade your growth engine? Share your goals and we&apos;ll craft a future-ready roadmap for
                your brand.
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
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Send Message</button>
              {submitted && (
                <p className="form-success" role="status" aria-live="polite">
                  Thank you for connecting with us. Our team will contact you soon.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
