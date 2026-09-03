import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Image
              src="/ConferenceLogo.png"
              alt="HSE 2026 logo"
              width={96}
              height={96}
              className="logo-img"
              priority
            />
            <span>HSE 2026</span>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#themes">Themes</a>
            <a href="#dates">Important Dates</a>
            <a href="#papers">Call for Papers</a>
            <a href="#organizers">Organizers</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div className="eyebrow">International Conference</div>

            <h1>Hydroscience and Engineering 2026</h1>

            <h2>
              Freshwater Resources and Environmental Sustainability of Mongolia
            </h2>

            <div className="hero-meta">
              Ulaanbaatar, Mongolia · 2026
            </div>

            <div className="buttons">
              <a href="#papers" className="button button-primary">
                Submit a Paper
              </a>

              <a href="#about" className="button button-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <h2>About the Conference</h2>

          <p className="section-intro">
            Hydroscience and Engineering 2026 is jointly organized by the
            School of Civil Engineering and Architecture of the Mongolian
            University of Science and Technology, the Freshwater Resources and
            Nature Conservation Center, and the Mongolian Society for Water
            Engineering.
          </p>

          <p className="section-intro">
            The conference brings together researchers, engineers,
            policymakers, students, and practitioners to discuss freshwater
            resources, water engineering, environmental sustainability, and
            emerging water-management challenges in Mongolia and beyond.
          </p>
        </section>

        {/* THEMES */}
        <section className="section" id="themes">
          <h2>Conference Themes</h2>

          <div className="grid">
            <div className="card">
              <h3>Freshwater Resources</h3>
              <p>
                Hydrology, river systems, groundwater, freshwater protection,
                monitoring, and sustainable freshwater management.
              </p>
            </div>

            <div className="card">
              <h3>Water Engineering</h3>
              <p>
                Hydraulic engineering, flood risk reduction, reservoirs and
                ponds, river engineering, and climate-resilient infrastructure.
              </p>
            </div>

            <div className="card">
              <h3>Environmental Sustainability</h3>
              <p>
                Ecosystem protection, river restoration, nature-based
                solutions, pollution management, and climate adaptation.
              </p>
            </div>

            <div className="card">
              <h3>Urban Water</h3>
              <p>
                Urban flooding, drainage, water-sensitive urban planning,
                resilient cities, and integrated land-water management.
              </p>
            </div>

            <div className="card">
              <h3>Water Governance</h3>
              <p>
                Policy, institutions, integrated water-resources management,
                financing, and transboundary cooperation.
              </p>
            </div>

            <div className="card">
              <h3>Innovation and Research</h3>
              <p>
                Modeling, remote sensing, data science, monitoring systems, and
                hydroinformatics technologies for water management.
              </p>
            </div>
          </div>
        </section>

        {/* IMPORTANT DATES */}
        <section className="section" id="dates">
          <h2>Important Dates</h2>

          <div className="dates">
            <div className="date-row">
              <strong>Call for Papers</strong>
              <span>To be announced</span>
            </div>

            <div className="date-row">
              <strong>Abstract Submission</strong>
              <span>To be announced</span>
            </div>

            <div className="date-row">
              <strong>Acceptance Notification</strong>
              <span>To be announced</span>
            </div>

            <div className="date-row">
              <strong>Full Paper Submission</strong>
              <span>To be announced</span>
            </div>

            <div className="date-row">
              <strong>Conference Date</strong>
              <span>2026 · Ulaanbaatar, Mongolia</span>
            </div>
          </div>
        </section>

        {/* CALL FOR PAPERS */}
        <section className="section" id="papers">
          <h2>Call for Papers</h2>

          <p className="section-intro">
            Researchers, professionals, and students are invited to submit
            original research addressing the scientific, engineering,
            environmental, and policy dimensions of freshwater sustainability.
          </p>

          <div className="buttons">
            <a href="#" className="button button-primary">
              Submission Guidelines
            </a>

            <a href="#" className="button button-secondary">
              Download Paper Template
            </a>
          </div>
        </section>

        {/* ORGANIZERS */}
        <section className="section organizers" id="organizers">
          <h2>Main Organizers</h2>

          <p className="section-intro">
            Hydroscience and Engineering 2026 is jointly organized by three
            institutions representing higher education, freshwater and nature
            conservation, and the water engineering profession in Mongolia.
          </p>

          <div className="organization-grid">
            <div className="organization-card">
              <div className="organization-logo">
                <Image
                  src="/must-logo.png"
                  alt="Mongolian University of Science and Technology logo"
                  width={150}
                  height={150}
                  className="institution-logo"
                />
              </div>

              <h3>Mongolian University of Science and Technology</h3>

              <p className="organization-subtitle">
                School of Civil Engineering and Architecture
              </p>

              <div className="organization-short">MUST · SCEA</div>
            </div>

            <div className="organization-card">
              <div className="organization-logo">
                <Image
                  src="/fwrncc-logo.png"
                  alt="Freshwater Resources and Nature Conservation Center logo"
                  width={150}
                  height={150}
                  className="institution-logo"
                />
              </div>

              <h3>Freshwater Resources and Nature Conservation Center</h3>

              <p className="organization-subtitle">
                Freshwater resources and nature conservation
              </p>

              <div className="organization-short">FWRNCC</div>
            </div>

            <div className="organization-card">
              <div className="organization-logo">
                <Image
                  src="/mswe-logo.png"
                  alt="Mongolian Society for Water Engineering logo"
                  width={150}
                  height={150}
                  className="institution-logo"
                />
              </div>

              <h3>Mongolian Society for Water Engineering</h3>

              <p className="organization-subtitle">
                Professional society for water engineering
              </p>

              <div className="organization-short">MSWE</div>
            </div>
          </div>
        </section>

        {/* SUPPORTING ORGANIZATIONS */}
        <section className="section supporting-organizations">
          <h2>Supporting Organizations</h2>

          <p className="section-intro">
            The conference is supported by national government institutions
            and professional and research organizations working in water,
            environment, and climate-related fields.
          </p>

          <div className="support-grid">
            <div className="support-card">
              <div className="support-logo-wrapper">
                <Image
                  src="/ministry-environment-logo.png"
                  alt="Ministry of Environment and Climate Change logo"
                  width={130}
                  height={130}
                  className="support-logo"
                />
              </div>

              <h3>Ministry of Environment and Climate Change</h3>
            </div>

            <div className="support-card">
              <div className="support-logo-wrapper">
                <Image
                  src="/water-agency-logo.png"
                  alt="Water Agency logo"
                  width={130}
                  height={130}
                  className="support-logo"
                />
              </div>

              <h3>Water Agency</h3>
            </div>

            <div className="support-card">
              <div className="support-logo-wrapper">
                <Image
                  src="/maher-logo.png"
                  alt="Mongolian Association for Hydro-Environmental Engineering and Research logo"
                  width={130}
                  height={130}
                  className="support-logo"
                />
              </div>

              <h3>
                Mongolian Association for Hydro-Environmental Engineering and
                Research
              </h3>

              <div className="organization-short">MAHER</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section cta" id="contact">
          <h2>Join HSE 2026</h2>

          <p className="section-intro">
            Conference registration, submission system, detailed programme,
            keynote speakers, venue information, and participation guidelines
            will be announced soon.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <strong>Hydroscience and Engineering 2026</strong>

          <p>
            Freshwater Resources and Environmental Sustainability of Mongolia
          </p>

          <p>Ulaanbaatar, Mongolia</p>
        </div>
      </footer>
    </>
  );
}
