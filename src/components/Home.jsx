import React from "react";
import logo from "../assets/images/logo.png";



function OutfinexHome() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #070b14;
          color: white;
          line-height: 1.6;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .container {
          width: 92%;
          max-width: 1200px;
          margin: auto;
        }

        header {
          width: 100%;
          padding: 15px 0;
          position: sticky;
          top: 0;
          z-index: 999;
          background: rgba(7, 11, 20, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo img {
          width: 170px;
          height: auto;
        }

        nav ul {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        nav ul li a {
          font-weight: 600;
          font-size: 15px;
          opacity: 0.85;
          transition: 0.3s;
        }

        nav ul li a:hover {
          opacity: 1;
          color: #2fd6ff;
        }

        .header-btn {
          background: linear-gradient(90deg, #00c853, #00b0ff);
          color: white;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: bold;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0px 6px 18px rgba(0, 176, 255, 0.25);
        }

        .header-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0px 10px 25px rgba(0, 176, 255, 0.4);
        }

        .hero {
          padding: 95px 0 70px;
          background: radial-gradient(circle at top left, rgba(0, 176, 255, 0.35), transparent 60%),
                      radial-gradient(circle at bottom right, rgba(0, 200, 83, 0.25), transparent 60%),
                      linear-gradient(180deg, #070b14, #05070f);
          overflow: hidden;
          position: relative;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .hero h1 {
          font-size: 52px;
          line-height: 1.15;
          margin-bottom: 18px;
          font-weight: 800;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #00c853, #00b0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          font-size: 17px;
          opacity: 0.85;
          margin-bottom: 30px;
          max-width: 650px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 14px 22px;
          border-radius: 10px;
          font-weight: bold;
          border: none;
          cursor: pointer;
          background: linear-gradient(90deg, #00c853, #00b0ff);
          color: white;
          transition: 0.3s;
          box-shadow: 0px 8px 25px rgba(0, 176, 255, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0px 12px 30px rgba(0, 176, 255, 0.4);
        }

        .btn-outline {
          padding: 14px 22px;
          border-radius: 10px;
          font-weight: bold;
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          background: transparent;
          color: white;
          transition: 0.3s;
        }

        .btn-outline:hover {
          border-color: #00b0ff;
          color: #00b0ff;
          transform: translateY(-3px);
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 28px;
          border-radius: 18px;
          backdrop-filter: blur(12px);
          box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.35);
        }

        .hero-card h3 {
          font-size: 20px;
          margin-bottom: 15px;
          color: #00b0ff;
        }

        .hero-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-weight: 600;
          opacity: 0.9;
        }

        .hero-card ul li {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(90deg, #00c853, #00b0ff);
          display: inline-block;
        }

        .section-title {
          text-align: center;
          margin-bottom: 55px;
        }

        .section-title h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 800;
        }

        .section-title p {
          max-width: 750px;
          margin: auto;
          opacity: 0.75;
          font-size: 16px;
        }

        .services {
          padding: 90px 0;
          background: #05070f;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .service-card {
          padding: 30px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: 0.35s;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 176, 255, 0.5);
          box-shadow: 0px 18px 50px rgba(0, 176, 255, 0.15);
        }

        .service-icon {
          width: 55px;
          height: 55px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          background: linear-gradient(90deg, rgba(0, 200, 83, 0.25), rgba(0, 176, 255, 0.25));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .service-icon svg {
          width: 26px;
          height: 26px;
          fill: #00b0ff;
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .service-card p {
          opacity: 0.78;
          font-size: 15px;
        }

        .about {
          padding: 90px 0;
          background: radial-gradient(circle at top, rgba(0, 176, 255, 0.15), transparent 60%),
                      radial-gradient(circle at bottom, rgba(0, 200, 83, 0.12), transparent 60%),
                      #070b14;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .about h2 {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .about p {
          opacity: 0.8;
          margin-bottom: 12px;
          font-size: 16px;
        }

        .about-box {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 18px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.3);
        }

        .about-box h3 {
          font-size: 22px;
          margin-bottom: 18px;
          color: #00c853;
          font-weight: 800;
        }

        .about-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-weight: 600;
          opacity: 0.9;
        }

        .about-box ul li {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .cta-section {
          padding: 80px 0;
          background: linear-gradient(90deg, rgba(0, 200, 83, 0.15), rgba(0, 176, 255, 0.15));
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cta-section h2 {
          font-size: 34px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .cta-section p {
          opacity: 0.8;
          max-width: 800px;
          margin: auto;
          margin-bottom: 25px;
          font-size: 16px;
        }

        .contact {
          padding: 90px 0;
          background: #05070f;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
          align-items: start;
        }

        .contact-box {
          padding: 35px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0px 12px 35px rgba(0, 0, 0, 0.3);
        }

        .contact-box h2 {
          font-size: 30px;
          margin-bottom: 12px;
          font-weight: 900;
        }

        .contact-box p {
          opacity: 0.78;
          margin-bottom: 10px;
          font-size: 15px;
        }

        .contact-details {
          margin-top: 18px;
          font-size: 15px;
          font-weight: 600;
          opacity: 0.9;
        }

        .contact-details span {
          color: #00b0ff;
          font-weight: 800;
        }

        iframe {
          width: 100%;
          height: 370px;
          border: none;
          border-radius: 18px;
          box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.35);
        }

        footer {
          background: #070b14;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 28px 0;
          text-align: center;
          opacity: 0.85;
          font-size: 14px;
        }

        @media (max-width: 1000px) {
          nav {
            display: none;
          }

          .hero-content,
          .about-content,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 40px;
          }

          .service-grid {
            grid-template-columns: 1fr;
          }

          .logo img {
            width: 150px;
          }
        }
      `}</style>

      {/* HEADER */}
      <header>
        <div className="container header-content">
          <a href="#" className="logo">
          <img src={logo} alt="Outfinex Logo" />

          </a>

          <nav>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <a href="#contact">
            <button className="header-btn">Get Free Consultation</button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <div>
            <h1>
              Powering Your <span>Business Growth</span> with Accounting & IT Excellence
            </h1>

            <p>
              Outfinex is your trusted partner for professional bookkeeping, taxation, payroll support,
              website development, IT infrastructure, and technology-driven business solutions.
            </p>

            <div className="hero-buttons">
              <a href="#services"><button className="btn-primary">Explore Our Services</button></a>
              <a href="#contact"><button className="btn-outline">Contact Now</button></a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Our Expertise</h3>
            <ul>
              <li><span className="dot"></span> Accounting & Bookkeeping</li>
              <li><span className="dot"></span> Tax Filing & Compliance</li>
              <li><span className="dot"></span> Payroll & HR Support</li>
              <li><span className="dot"></span> Website Development</li>
              <li><span className="dot"></span> IT Support & Cloud Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Professional Services</h2>
            <p>
              Outfinex offers complete Accounting and IT solutions for individuals, startups,
              small businesses, and enterprises.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" />
                </svg>
              </div>
              <h3>Accounting & Bookkeeping</h3>
              <p>Accurate bookkeeping, reconciliation, ledger management, financial reporting, and monthly accounting support.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l4 4h-3v6h-2V6H8l4-4zm-7 9h14v11H5V11zm2 2v7h10v-7H7z" />
                </svg>
              </div>
              <h3>Tax Filing & Compliance</h3>
              <p>GST returns, income tax filing, compliance documentation, business registration support, and tax consulting.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
                </svg>
              </div>
              <h3>Payroll & HR Support</h3>
              <p>Payroll processing, salary slips, employee compliance, statutory deductions, and HR reporting solutions.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16v12H4V4zm2 2v8h12V6H6zm-2 14h16v2H4v-2z" />
                </svg>
              </div>
              <h3>Website Development</h3>
              <p>Professional websites, landing pages, ecommerce platforms, and corporate websites designed for conversion.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <h3>IT Support & Maintenance</h3>
              <p>IT troubleshooting, system upgrades, remote support, software installation, and business IT security support.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l9 7-9 7-9-7 9-7zm0 14l6.5-5L12 7 5.5 12l6.5 5z" />
                </svg>
              </div>
              <h3>Cloud & Software Solutions</h3>
              <p>Cloud deployment, automation, software development, secure systems, and IT infrastructure consulting services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-content">
          <div>
            <h2>About Outfinex</h2>
            <p>
              Outfinex is a modern professional service firm providing Accounting and IT Solutions under one roof.
              We help businesses save time, reduce cost, and scale efficiently using technology and expertise.
            </p>

            <p>
              Whether you need accurate bookkeeping, taxation services, payroll support, or a powerful online presence
              through website development, Outfinex is ready to deliver.
            </p>

            <p>
              We focus on quality, confidentiality, transparency, and fast delivery.
            </p>
          </div>

          <div className="about-box">
            <h3>Why Businesses Trust Us</h3>
            <ul>
              <li><span className="dot"></span> Highly Skilled Accounting & IT Experts</li>
              <li><span className="dot"></span> Confidential Data & Secure Systems</li>
              <li><span className="dot"></span> Reliable Support & Fast Delivery</li>
              <li><span className="dot"></span> Affordable Service Packages</li>
              <li><span className="dot"></span> Technology-Driven Solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Need Accounting or IT Support?</h2>
          <p>
            Let Outfinex handle your accounting, compliance, and IT infrastructure while you focus on growing your business.
          </p>
          <a href="#contact"><button className="btn-primary">Request a Free Consultation</button></a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Connect with Outfinex for professional Accounting & IT services.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-box">
              <h2>Outfinex Office</h2>
              <p>We are available for business consultation and service inquiries.</p>

              <div className="contact-details">
                <p><span>Address:</span> D270, Vista Business Tower, Phase 8B, Mohali, 160055</p>
                <p><span>Phone:</span> +91 628 000 3434</p>
                <p><span>Email:</span> info@outfinex.com</p>
              </div>
            </div>

            <div>
              <iframe
                title="Outfinex Location"
                src="https://www.google.com/maps?q=30.70847280203499,76.68387901709677&hl=en&z=16&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Outfinex. All Rights Reserved.</p>
        <p>D270, Vista Business Tower, Phase 8B, Mohali, 160055 | +91 628 000 3434 | info@outfinex.com</p>
      </footer>
    </>
  );
}

export default OutfinexHome;
