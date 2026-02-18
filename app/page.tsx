"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    title: "SEO Strategy & Execution",
    description:
      "Technical SEO audits, keyword planning, on-page optimization, and ranking growth campaigns.",
  },
  {
    title: "Digital Marketing Campaigns",
    description:
      "Performance-driven social media, PPC planning, and lead generation campaigns tailored to your business goals.",
  },
  {
    title: "Content & Conversion Optimization",
    description:
      "High-impact content creation and landing page optimization that turns traffic into qualified enquiries.",
  },
];

const portfolioItems = [
  {
    client: "E-commerce Brand",
    outcome: "+210% organic traffic in 6 months",
  },
  {
    client: "B2B SaaS Startup",
    outcome: "3x increase in marketing qualified leads",
  },
  {
    client: "Local Services Company",
    outcome: "Top 3 Google rankings for core local keywords",
  },
];

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
          <div className="container hero-grid">
            <div>
              <p className="tag">IT & Software Services</p>
              <h1>Grow your brand with SEO and digital marketing that delivers results</h1>
              <p>
                Highest Technologies helps businesses build a strong online presence with modern SEO and digital
                marketing solutions.
              </p>
              <a className="cta" href="#contact">
                Get a Free Consultation
              </a>
            </div>
            <div className="hero-card">
              <h3>Portfolio Snapshot</h3>
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
          <div className="container">
            <h2>About Highest Technologies</h2>
            <p>
              We are a results-focused IT and software service company, starting with specialized SEO and digital
              marketing services. Our mission is to help businesses improve visibility, attract the right audience, and
              scale confidently.
            </p>
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
            <h2>Portfolio</h2>
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
                Ready to grow? Let&apos;s discuss your goals and create a strategy for SEO and digital marketing success.
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@company.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} placeholder="Tell us about your project" />
              </label>
              <button type="submit">Send Message</button>
              {submitted && (
                <p className="form-success" role="status" aria-live="polite">
                  Thank you for connecting us, we will get back to you.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
