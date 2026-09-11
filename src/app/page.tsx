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
              width={288}
              height={137}
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
              Government Palace, Ulaanbaatar, Mongolia · 7 November 2026
            </div>

            <div className="buttons">
              <a
                href="https://cmt3.research.microsoft.com/HSE2026"
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <h2>About the Conference · Хурлын тухай</h2>

          <p className="section-intro">
            Hydroscience and Engineering 2026 is jointly organized by the
            Mongolian University of Science and Technology, the Freshwater
            Resources and Nature Conservation Center (FWRNCC), and the
            Mongolian Society for Water Engineering in celebration of the
            15th anniversary of FWRNCC and in recognition of its important
            contributions to freshwater resource management and nature
            conservation.
          </p>
          <p className="section-intro">
            The conference brings together researchers, engineers,
            policymakers, students, and practitioners to exchange knowledge
            and discuss freshwater resources, water engineering,
            environmental sustainability, and emerging water-management
            challenges in Mongolia and beyond.
          </p>
          <p className="section-intro">
            Байгаль орчин уур амьсгалын өөрчлөлтийн яамны харьяа Цэнгэг усны нөөц байгаль хамгаалах төв нь олон нийтэд экологийн боловсрол олгох сургалт, судалгаа
            явуулж эхэлсний 15 жилийн ойд зориулан “УСНЫ ШИНЖЛЭХ УХААН БА ИНЖЕНЕРЧЛЭЛ - 2026” МОНГОЛ ОРНЫ ЦЭНГЭГ УСНЫ НӨӨЦ БА БАЙГАЛЬ ОРЧНЫ ТОГТВОРТОЙ БАЙДАЛ
            сэдэвт эрдэм шинжилгээ, онол практикийн олон улсын хурлыг ШУТИС-ийн Барилга Архитектурын Сургуулийн Инженерийн байгууламжийн салбар болон
            Монголын усны инженерчэлийн мэргэжлийн холбоотой хамтран зохион байгуулж байна. 
            Усны шинжлэх ухаан ба инженерчлэл эрдэм шинжилгээний хурал нь ус ба хүрээлэн буй орчны чиглэлийн үндэсний томоохон хурал юм. 
            Энэ удаагийн олон улсын эрдэм шинжилгээний хурлын зорилго нь Монгол орны цэнгэг усны нөөц ба байгаль орчны тогтвортой байдлын чиглэлээр судалгаа, шинжилгээний
            ажлыг хийж гүйцэтгэдэг гадаадын болон дотоодын байгууллага, эрдэмтэн судлаачдын ололт, амжилт, туршлагаасаа хуваалцах, мэдлэгээ харилцан солилцох
            таатай боломжийг бий болгохоос гадна Монгол улсын цэнгэг ус, байгаль хамгаалалд тулгамдаж буй асуудлууд, тэдгээрийн инженерийн болон байгальд
            түшиглэсэн шийдлүүдийг хэлэлцэж цаашдын чиг хандлагыг тодорхойлоход оршино.
          </p>
        </section>

        {/* THEMES */}
        <section className="section" id="themes">
          <h2>Conference Themes · Хурлын сэдвүүд</h2>

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
          <h2>Important Dates · Чухал огноонууд</h2>

          <div className="dates">
            <div className="date-row">
              <strong>Call for Papers</strong>
              <span>3 September 2026</span>
            </div>

            <div className="date-row">
              <strong>Full Paper Submission</strong>
              <span>12 October 2026</span>
            </div>

            <div className="date-row">
              <strong>Acceptance Notification</strong>
              <span>21 October 2026</span>
            </div>

            <div className="date-row">
              <strong>Revised Full Paper Submission</strong>
              <span>28 October 2026</span>
            </div>

            <div className="date-row">
              <strong>Conference Date</strong>
              <span>7 November 2026 · Ulaanbaatar, Mongolia</span>
            </div>
          </div>
        </section>

        {/* CALL FOR PAPERS */}
        <section className="section" id="papers">
          <h2>Call for Papers · Өгүүллийн мэдээлэл</h2>

          <p className="section-intro">
            Researchers, professionals, and students are invited to submit
            original research addressing the scientific, engineering,
            environmental, and policy dimensions of freshwater sustainability.
            All submissions will undergo review by the conference Scientific
            Committee. Selected high-quality papers will be invited for
            publication in the <em>Journal of Water Research and Engineering</em>,
            an international peer-reviewed journal, subject to the journal&apos;s
            editorial and peer-review requirements.
          </p>

          <p className="section-intro">
            <strong>CMT Acknowledgment:</strong> The Microsoft CMT service is
            used for managing the peer-review process for this conference. This
            service is provided free of charge by Microsoft, which bears the
            associated expenses, including Azure cloud services, software
            development, and support.
          </p>

          <div className="buttons">
            <a
              href="https://cmt3.research.microsoft.com/HSE2026"
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a Paper
            </a>

            <a
               href="/HSE2026_Paper_Template.docx"
               className="button button-secondary"
               download
            >
               Download Paper Template
            </a>
          </div>
        </section>

        {/* ORGANIZERS */}
        <section className="section organizers" id="organizers">
          <h2>Main Organizers  ·  Үндсэн зохион байгуулагчид</h2>

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
          <h2>Supporting Organizations · Хамтрагч байгууллагууд</h2>

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
          <h2>Scientific Committee · Шинжлэх ухааны зөвлөл</h2>

          <p className="section-intro">
            The Scientific Committee of Hydroscience and Engineering 2026
            brings together national and international experts in hydrology,
            hydraulic engineering, freshwater resources, environmental
            sustainability, ecosystem restoration, water governance, and
            related disciplines.
          </p>

          <div className="committee-grid">
            <div className="committee-card">
              <h3>Dr. Ayurzana Badarch</h3>
              <p className="committee-role">Conference and Scientific Committee Chair</p>
              <p>
                Mongolian University of Science and Technology (MUST), Mongolia
              </p>
            </div>
            <div className="committee-card">
              <h3>Mr. Zorigt Nyamdorj </h3>
              <p className="committee-role">Conference Chair</p>
              <p>Freshwater Resources and Nature Conservation Center</p>
            </div>

            <div className="committee-card">
              <h3>Dr. Boldbaatar Nyamjav</h3>
              <p>Head, Department of Engineering Structures (MUST-SCEA)</p>
            </div>

            <div className="committee-card">
              <h3>Professor Yong Sung Park</h3>
              <p>Seoul National University, China</p>
            </div>

            <div className="committee-card">
              <h3>Professor Wei Liang Liang</h3>
              <p>Harbin Institute of Technology, China</p>
            </div>
            
            <div className="committee-card">
              <h3>Associate Professor Nasanbayar Narantsogt</h3>
              <p>Department of Engineering Structures (MUST-SCEA)</p>
            </div>
            

            <div className="committee-card">
              <h3>Dr. Dolgorsuren Garmaa</h3>
              <p>Scientific representative of Mongolian Society for Water Engineering</p>
            </div>

            <div className="committee-card">
              <h3>Water Agency of Mongolia</h3>
              <p>Scientific representative to be confirmed</p>
            </div>

            <div className="committee-card">
              <h3>
                Dr Chinzorig Sukhbaatar
              </h3>
              <p>Scientific representative of Mongolian Association for Hydro-Environmental Engineering and Research</p>
            </div>

            <div className="committee-card">
              <h3>Dr Uyanga Tumurtogoo</h3>
              <p>
                Department of Engineering Structures (MUST-SCEA)
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section cta" id="contact">
          <h2>Join HSE 2026</h2>

          <p className="section-intro">
            Conference registration, detailed programme, keynote speakers,
            venue information, and participation guidelines will be announced
            soon.
          </p>

          <p>
            Contact:{" "}
            <a href="mailto:ayur@must.edu.mn">
              ayur@must.edu.mn
            </a>
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
