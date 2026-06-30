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

import { useState } from 'react'

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

                <p>
                  Elisa is a recent graduate from the University of Northampton, originally from Italy.
                  She moved to the UK alone to pursue her passion for game development and storytelling,
                  driven by the idea of turning imagination into playable worlds.
                </p>

                <p>
                  She brings strong narrative direction and emotional depth into our projects.
                  With a background in software engineering, she also has a solid foundation in programming
                  and technical problem-solving, which she applies to building smooth and engaging gameplay systems.
                </p>

                <div className="studio-divider" />

                <h4>Samuel — Engineer & Gameplay Systems Programmer</h4>

                <p>
                  Samuel is a gameplay developer with a strong background in VR and interactive systems.
                  He graduated from the same university two years earlier and has spent the last years refining
                  his skills in building responsive, immersive mechanics that feel intuitive and impactful.
                </p>

                <p>
                  With over 6 years of experience in the sector, he has developed a strong foundation in
                  gameplay systems — from AI behaviours to VR interactions — focusing on making player
                  experiences feel natural, fluid, and engaging.
                </p>

                <div className="studio-divider" />

                <h4>Our Story</h4>

                <p>
                  We met at university through shared interests and a joint project building an arcade machine
                  in honour of the Women’s Rugby World Cup. That experience showed us how well we work together.
                </p>

                <p>
                  From that point, it became clear we shared the same goal — to create games that feel alive,
                  atmospheric, and meaningful. That vision became Dystopia Games LTD.
                </p>

                <p>
                  Today, we continue building this studio with the ambition that it will grow into a full team
                  of talented developers who share the same passion for creating unforgettable experiences.
                </p>

                <div className="studio-divider" />

                <h4>Current Project</h4>

                <p>
                  Our debut title, <em>Echoes in the Night</em>, is a cyber-noir investigative experience set in a
                  dark, futuristic dystopian world.
                </p>

                <p>
                  The story is structured into five chapters, designed as episodic content to let players
                  experience the narrative at their own pace while exploring a deeply atmospheric world.
                </p>

                <p>
                  Looking forward, we also plan to explore VR adaptations and deeper immersive versions of
                  the experience as the studio evolves.
                </p>

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
                A cyber-noir investigative experience set in a dark,
                futuristic dystopian world where truth is fragmented
                and buried beneath layers of digital and human deception.
              </p>

              <p>
                You play as an old-fashioned detective who prefers real,
                tangible evidence in a society driven by advanced technology.
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
                  setActiveIndex(
                    (activeIndex - 1 + images.length) % images.length
                  )
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
                  setActiveIndex(
                    (activeIndex + 1) % images.length
                  )
                }
              >
                ›
              </button>

            </div>

          </div>
        )}

        {/* CONTACT */}
        <section id="contact" className="page-section">

          <div className="contact-card">

            <h2>Contact Us</h2>

            <p className="contact-text">
              Got an idea, collaboration, or just want to reach out?
            </p>

            <a
              className="contact-button"
              href="mailto:dystopiagamesltd@gmail.com"
            >
              Send Email
            </a>

          </div>

        </section>

      </main>
    </>
  )
}

export default App