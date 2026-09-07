import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Image
              src="/ConferenceLogo.jpg"
              alt="HSE 2026 logo"
              width={240}
              height={114}
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
  <a href="#scientific-committee">Scientific Committee</a>
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
              Government Palace, Ulaanbaatar, Mongolia · 2026
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
            Hydroscience and Engineering 2026 is jointly organized by the Mongolian University
            of Science and Technology, the Freshwater Resources and Nature Conservation Center (FWRNCC),
            and the Mongolian Society for Water Engineering in celebration of the 15th anniversary of
            FWRNCC and in recognition of its important contributions to freshwater resource management
            and nature conservation.
          </p>

          <p className="section-intro">
            The conference brings together researchers, engineers, policymakers, students, and
            practitioners to exchange knowledge and discuss freshwater resources, water engineering,
            environmental sustainability, and emerging water management challenges in Mongolia and beyond.
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
              <span>3 Sep 2026</span>
            </div>

            <div className="date-row">
              <strong>Full Paper Submission</strong>
              <span>12 Oct 2026</span>
            </div>

            <div className="date-row">
              <strong>Acceptance Notification</strong>
              <span>21 Oct 2026</span>
            </div>

            <div className="date-row">
              <strong>Revised Full Paper Submission</strong>
              <span>28 Oct 2026</span>
            </div>

            <div className="date-row">
              <strong>Conference date</strong>
              <span>7 Nov · 2026 · Ulaanbaatar, Mongolia</span>
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
            All submissions will undergo review by the conference scientific committee.
            Selected high-quality papers will be invited for publication
            in the Journal of Water Research and Engineering, an international
            peer-reviewed journal, subject to the journal’s editorial
            and peer-review requirements.
          </p>
          <p className="section-intro">
            CMT ACKNOWLEDGMENT: The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
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
                  src="/LogoMUST.jpg"
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
                  src="/logoTsengegUs.jpg"
                  alt="Freshwater Resources and Nature Conservation Center logo"
                  width={150}
                  height={150}
                  className="institution-logo"
                />
              </div>

              <h3>Freshwater Resources and Nature Conservation Center</h3>

              <p className="organization-subtitle">
                Environmental conservation and public education organization
              </p>

              <div className="organization-short">FWRNCC</div>
            </div>

            <div className="organization-card">
              <div className="organization-logo">
                <Image
                  src="/logo_mn_blue.png"
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
                  src="/GOM.svg"
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
                  src="/GOM.svg"
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
                  src="/maher.png"
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

{/* SCIENTIFIC COMMITTEE */}
<section className="section" id="scientific-committee">
  <h2>Scientific Committee</h2>

  <p className="section-intro">
    The Scientific Committee of Hydroscience and Engineering 2026 brings
    together national and international experts in hydrology, hydraulic
    engineering, freshwater resources, environmental sustainability,
    ecosystem restoration, water governance, and related disciplines.
  </p>

  <div className="committee-grid">
    <div className="committee-card">
      <h3>Dr. Ayurzana Badarch</h3>
      <p className="committee-role">Scientific Committee Chair</p>
      <p>
        Mongolian University of Science and Technology (MUST), Mongolia
      </p>
    </div>

    <div className="committee-card">
      <h3>Dr. Sarantuya Zandarya</h3>
      <p>
        UNESCO Intergovernmental Hydrological Programme (UNESCO-IHP)
      </p>
    </div>

    <div className="committee-card">
      <h3>Prof. Wei Liang Liang</h3>
      <p>
        Harbin Institute of Technology, China
      </p>
    </div>

    <div className="committee-card">
      <h3>Freshwater Resources and Nature Conservation Center</h3>
      <p>
        Scientific representative to be confirmed
      </p>
    </div>

    <div className="committee-card">
      <h3>Mongolian Society for Water Engineering</h3>
      <p>
        Scientific representative to be confirmed
      </p>
    </div>

    <div className="committee-card">
      <h3>Water Agency of Mongolia</h3>
      <p>
        Scientific representative to be confirmed
      </p>
    </div>

    <div className="committee-card">
      <h3>
        Mongolian Association for Hydro-Environmental Engineering and Research
      </h3>
      <p>
        Scientific representative to be confirmed
      </p>
    </div>

    <div className="committee-card">
      <h3>International Experts</h3>
      <p>
        Additional invited experts in hydroscience, water engineering,
        freshwater ecology, environmental sustainability, and water resources
        management will be announced.
      </p>
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
            Email: ayur@must.edu.mn
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
