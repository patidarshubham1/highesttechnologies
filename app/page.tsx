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
    title: "Custom Website Development",
    description:
      "Responsive business websites built for speed, trust, and lead generation across desktop and mobile devices.",
  },
  {
    title: "E-Commerce Store Solutions",
    description:
      "Scalable online stores with secure checkout, product workflows, and conversion-focused user journeys.",
  },
  {
    title: "SEO & Performance Marketing",
    description:
      "Search optimization, local visibility campaigns, and paid growth systems designed to increase qualified enquiries.",
  },
  {
    title: "Branding & Creative Design",
    description:
      "Identity design, visual systems, and campaign assets that keep your brand consistent across every channel.",
  },
];

const portfolioItems = [
  {
    client: "Healthcare Provider Group",
    outcome: "58% increase in appointment requests within 4 months",
  },
  {
    client: "Education Startup",
    outcome: "2.7x growth in qualified leads from organic search",
  },
  {
    client: "Manufacturing Exporter",
    outcome: "New multilingual website generating global B2B enquiries",
  },
];

const differentiators = [
  "Strategy-first discovery before any build work",
  "Transparent milestone delivery with weekly updates",
  "Dedicated team for design, development, and marketing",
  "Long-term maintenance and optimization support",
];

const deliverySteps = [
  {
    title: "1. Discovery & Planning",
    detail: "We understand your market, goals, and competitors to build a practical roadmap.",
  },
  {
    title: "2. Design & Build",
    detail: "Our team creates UI concepts and develops your website or campaign system with clear feedback loops.",
  },
  {
    title: "3. Launch & Growth",
    detail: "After launch, we track performance, improve conversion points, and scale what works.",
  },
];

const futureVisuals = [
  {
    title: "AI Growth Command Center",
    description: "Real-time dashboards, campaign intelligence, and conversion tracking in one futuristic interface.",
    image: "/images/future-dashboard.svg",
  },
  {
    title: "Immersive Product Experiences",
    description: "3D-inspired sections and bold gradients that keep visitors engaged and improve brand recall.",
    image: "/images/future-experience.svg",
  },
  {
    title: "Trust-First Digital Journeys",
    description: "Secure checkout flows and performance-led architecture for confident customer decisions.",
    image: "/images/future-security.svg",
  },
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
          <div className="brand-wrap">
            <a href="#home" className="brand">
              Highest Technologies
            </a>
            <span className="brand-status">Future-Ready Digital Partner</span>
          </div>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="nav-cta">
            Start a Project
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="grid-overlay" />
          <div className="container hero-grid">
            <div>
              <p className="tag">Website, E-Commerce & Digital Growth Partner</p>
              <h1>Build your digital presence with a team focused on business outcomes.</h1>
              <p>
                We create high-performing websites and marketing systems for companies that want more visibility, better
                conversions, and measurable growth.
              </p>
              <div className="hero-cta-group">
                <a className="cta" href="#contact">
                  Request a Free Consultation
                </a>
                <a className="ghost-cta" href="#services">
                  View Our Services
                </a>
              </div>
            </div>
            <div className="hero-card">
              <img
                src="/images/future-dashboard.svg"
                alt="Futuristic analytics dashboard preview"
                className="hero-card-image"
              />
              <h3>Recent Impact</h3>
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
              <h2>Your long-term digital execution team</h2>
              <p>
                Highest Technologies helps startups, SMBs, and enterprise teams strengthen their online presence with
                practical strategies and dependable implementation.
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
            <h2>Our Core Services</h2>
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
            <h2>How We Deliver</h2>
            <div className="cards">
              {deliverySteps.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="section">
          <div className="container">
            <h2>Future-Focused Visual Experiences</h2>
            <p>
              We design attractive web experiences with high-tech visuals that build trust quickly and move customers
              toward action.
            </p>
            <div className="visual-grid">
              {futureVisuals.map((visual) => (
                <article key={visual.title} className="visual-card">
                  <img src={visual.image} alt={visual.title} className="visual-image" />
                  <h3>{visual.title}</h3>
                  <p>{visual.description}</p>
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
                Tell us what you want to achieve online. We&apos;ll share a tailored action plan for your website,
                marketing, or complete digital transformation project.
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
