import './App.css'
import logo from './assets/logo.png'
import logoText from './assets/LogoTransparent.png'
import video from './assets/background web 1.mp4'
import aboutImg from './assets/About-us-image.png'
import qrCode from './assets/Dystopia-qr-code.png'

import screenshot1 from './assets/Screenshot-1.png'
import screenshot2 from './assets/Screenshot-2.png'
import screenshot3 from './assets/Screenshot-3.png'
import screenshot4 from './assets/Screenshot-4.png'
import screenshot5 from './assets/Screenshot-5.png'
import screenshot6 from './assets/Screenshot-6.png'

import { useState } from "react";

function App() {

  const images = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="left-nav">
          <img src={logo} alt="logo" className="logo-img" />
          <div className="logo-title">Dystopia Games LTD</div>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#games">Our Games</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>

        {/* HOME */}
        <section id="home" className="hero">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <img src={logoText} alt="logo" className="hero-logo" />
            <p>Transforming ideas into realities</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="page-section">
          <div className="about-card">

            <div className="about-image">
              <img src={aboutImg} alt="About Us" />
              <h2 className="about-title">About Us</h2>
            </div>

            <div className="about-content">
              <h3>About Us</h3>

              <p>
                We are Dystopia Games LTD, a creative game studio focused on building immersive
                digital experiences. We turn ideas into interactive realities through design,
                storytelling, and gameplay.
              </p>

              <div className="studio-section">

                <h3>Studio</h3>

                <p className="studio-intro">
                  Dystopia Games LTD is a small independent studio created by us — Elisa and Samuel.
                  We build games because it’s something we genuinely care about, not just something we do.
                </p>

                <div className="studio-divider" />

                <h4>Elisa — Storyteller & Technical Design</h4>
                <p>Elisa focuses on narrative design and technical systems...</p>

                <div className="studio-divider" />

                <h4>Samuel — Engineer & Gameplay Systems Programmer</h4>
                <p>Samuel focuses on gameplay systems and VR interaction...</p>

                <div className="studio-divider" />

                <h4>Our Story</h4>
                <p>We met at university and started building games together...</p>

              </div>

              <div className="about-links">

                <div className="about-buttons">
                  <a href="#contact">Contact Us</a>
                  <a href="#games">Our Games</a>
                </div>

                <div className="qr-box">
                  <img src={qrCode} alt="QR Code" />
                </div>

                <p className="qr-text">
                  Scan the QR code or visit our LinkedIn below
                </p>

                <a
                  className="linkedin-button"
                  href="https://www.linkedin.com/company/dystopia-games-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit our LinkedIn
                </a>

              </div>
            </div>

          </div>
        </section>

        {/* GAMES */}
        <section id="games" className="page-section">

          <div className="games-wrapper">

            <h2 className="games-title">Our Games</h2>

            <p className="games-subtitle">
              Current development project at Dystopia Games LTD
            </p>

            <div className="game-card featured">

              <h3>Flagship Title</h3>
              <h4>Echoes in the Night</h4>

              <p>
                A cyber-noir investigative experience set in a dark futuristic world.
              </p>

              <span className="status in-dev">In Development</span>

            </div>

            {/* SCREENSHOTS */}
            <div className="game-screenshots">

              <h3 className="screenshots-title">Screenshots</h3>

              <div className="screenshots-grid">

                {images.map((img, index) => (
                  <div
                    key={index}
                    className="screenshot-box"
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={img} alt={`Screenshot ${index + 1}`} />
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* LIGHTBOX */}
        {activeIndex !== null && (
          <div className="lightbox">

            <div
              className="lightbox-backdrop"
              onClick={() => setActiveIndex(null)}
            />

            <div className="lightbox-content">

              <button
                className="lightbox-close"
                onClick={() => setActiveIndex(null)}
              >
                ✕
              </button>

              <button
                className="nav left"
                onClick={() =>
                  setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }
              >
                ‹
              </button>

              <img
                src={images[activeIndex]}
                className="lightbox-img"
                alt="preview"
              />

              <button
                className="nav right"
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % images.length)
                }
              >
                ›
              </button>

            </div>

          </div>
        )}

        {/* CONTACT (FIXED) */}
        <section id="contact" className="page-section">
          <div className="contact-card">

            <h2>Contact Us</h2>

            <p className="contact-text">
              Got an idea, collaboration, or just want to reach out?
            </p>

            <form
              className="contact-form"
              action="https://api.staticforms.dev/submit"
              method="POST"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              />

              <input
                type="hidden"
                name="apiKey"
                value="sf_d6302a6d3119e42d35ec20d3"
              />

              <input
                type="hidden"
                name="subject"
                value="New message from Dystopia Games website"
              />

              <button type="submit" className="contact-button">
                Send Message
              </button>

            </form>

          </div>
        </section>

      </main>
    </>
  )
}

export default App