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
            <a href="#agenda">Agenda</a>
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
              <span>          3 September 2026</span>
            </div>

            <div className="date-row">
              <strong>Full Paper Submission</strong>
              <span className="deadline-update">
              <del className="old-deadline">12 October 2026</del>
              <span className="new-deadline">Extended to 16 October 2026</span>
             </span>
            </div>

            <div className="date-row">
              <strong>Acceptance Notification</strong>
              <span className="deadline-update">
              <del className="old-deadline">21 October 2026</del>
              <span className="new-deadline">Extended to 23 October 2026</span>
             </span>
            </div>
            
            <div className="date-row">
              <strong>Revised Full Paper Submission</strong>
              <span className="deadline-update">
              <del className="old-deadline">28 October 2026</del>
              <span className="new-deadline">Extended to 31 October 2026</span>
             </span>
            </div>

            <div className="date-row">
              <strong>Conference Date</strong>
              <span>          7 November 2026 · Ulaanbaatar, Mongolia</span>
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

            <a
              href="PaperSubmissionGuideline.pdf"
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submission guidelines
            </a>
          </div>
        </section>




        {/* PRELIMINARY AGENDA · УРЬДЧИЛСАН ХӨТӨЛБӨР */}
<section className="section agenda-section" id="agenda">
  <div className="section-heading-row">
    <div>
      <h2>Preliminary Agenda · Урьдчилсан хөтөлбөр</h2>

      <p className="section-intro">
        The programme below provides the preliminary schedule for
        Hydroscience and Engineering 2026. Presentation titles, speakers,
        session chairs, and programme arrangements may be updated as the
        final conference programme is confirmed.
      </p>
    </div>

    <span className="tentative-badge">Preliminary</span>
  </div>

  <div className="agenda-date">
    <strong>7 November 2026</strong>
    <span>Government Palace · Ulaanbaatar, Mongolia</span>
  </div>

  <div className="agenda-list">

    {/* REGISTRATION */}
    <div className="agenda-item agenda-registration">
      <div className="agenda-time">08:30–09:00</div>

      <div className="agenda-content">
        <h3>Registration with Breakfast</h3>
        <p>Participant registration</p>
      </div>
    </div>

    {/* OPENING CEREMONY */}
    <div className="agenda-item agenda-special">
      <div className="agenda-time">09:00–09:40</div>

      <div className="agenda-content">
        <h3>Opening Ceremony</h3>

        <div className="agenda-program-list">
          <p>
            <strong>Welcome addresses:</strong> Ayurzana Badarch,
            Conference Chair, MUST; Bulgantamir Nyamdorj, Director of FWRNCC
            (2 min)
          </p>

          <p>
            Greetings from H.E. Nyam-Osoryn Uchral, Prime Minister of Mongolia
            (5 min)
          </p>

          <p>
            Greetings by H.E. Mr. Sandag-Ochir Tsend, Minister of Environment
            and Climate Change of Mongolia (5 min)
          </p>

          <p>
            <strong>National Anthem of Mongolia</strong>
          </p>

          <p>
            Greetings by H.E. Mr. Masaru Igawahara, Ambassador Extraordinary
            and Plenipotentiary of Japan to Mongolia (5 min)
          </p>

          <p>
            Opening remarks by Professor Damdin Ts, Founder of Freshwater
            Resources and Environmental Protection Center (10 min)
          </p>

          <p>
            Greetings by H.E. Mandkhai Mendbayar and H.E. Bat-Erdene
            Bat-Ulzii, Members of Parliament and the Standing Committee on
            Environment, Food and Agriculture (5 min)
          </p>

          <p>
            Greetings by H.E. Munkhbayasgalan Luvsanbyambaa, Member of
            Parliament and Water Ambassador (5 min)
          </p>

          <p>
            Greetings by Professor Batbayar Zeneemyadar, Director of the
            Water Agency of the Government of Mongolia (5 min)
          </p>
        </div>
      </div>
    </div>

    {/* GROUP PHOTO */}
    <div className="agenda-item">
      <div className="agenda-time">09:40–09:50</div>

      <div className="agenda-content">
        <h3>Group Photo</h3>
        <p>Official conference group photograph</p>
      </div>
    </div>

    {/* ORIENTATION */}
    <div className="agenda-item">
      <div className="agenda-time">09:50–10:00</div>

      <div className="agenda-content">
        <h3>Conference Orientation</h3>
        <p>
          Program overview, technical guidance and presentation instructions
        </p>
      </div>
    </div>

    {/* MORNING SESSION */}
    <div className="agenda-item agenda-session">
      <div className="agenda-time">10:00–12:20</div>

      <div className="agenda-content">
        <h3 className="agenda-main-title">Morning Session</h3>

        <div className="agenda-chair">
          Chaired by FWRNCC
        </div>

        {/* KEYNOTE LECTURES */}
        <div className="agenda-session-label">Keynote Lectures</div>

        <div className="agenda-subgroup">
          <p>
            <strong>10:00–10:30</strong>{" "}
            <span className="agenda-speaker">
              Professor Tadanobu Nakayama
            </span>
            , Prime Senior Researcher, National Institute for Environmental
            Studies, Japan <span className="agenda-mode">(Online)</span>:
            Assessment of grassland carrying capacity under constraint of
            water resources in Mongolia by making mutual comparisons of
            environmental indicators
          </p>

          <p>
            <strong>10:30–11:00</strong>{" "}
            <span className="agenda-speaker">Dr Michael Heiner</span>,
            The Nature Conservancy, USA{" "}
            <span className="agenda-mode">(Online)</span>: A National
            Assessment of Freshwater Ecosystem and Biodiversity Conservation
          </p>
        </div>

        {/* PRESENTATIONS */}
        <div className="agenda-session-label agenda-subsection-label">
          Presentations
        </div>

        <div className="agenda-subgroup presentation-group">
          <p>
            <strong>11:00–11:20</strong>{" "}
            <span className="agenda-speaker">Qinxue WANG</span>,
            National Institute for Environmental Studies, Japan{" "}
            <span className="agenda-mode">(Online)</span>: Water Security in
            Mongolia Through a Storage-to-User Assessment: A Critical Review
          </p>

          <p>
            <strong>11:20–11:40</strong>{" "}
            <span className="agenda-speaker">Chandmani Dambabazar</span>,
            Senior Researcher{" "}
            <span className="agenda-mode">(In person)</span>: Solutions for
            Planning Livestock Water Supply in Mongolia in Response to
            Climate Change
          </p>

          <p>
            <strong>11:40–12:00</strong>{" "}
            <span className="agenda-speaker">Munkh-erdene Batsaikhan</span>,
            Center for Climate Change and Research Cooperation{" "}
            <span className="agenda-mode">(In person)</span>: Assessing
            Wetland Water Conditions Using Multispectral Drone Mapping:
            A Case Study of the Darkhad Depression and Ogii Lake Basin
          </p>

          <p>
            <strong>12:00–12:20</strong>{" "}
            <span className="agenda-speaker">Ayurzana Badarch</span>,
            School of Civil Engineering and Architecture, MUST{" "}
            <span className="agenda-mode">(In person)</span>: Reforming
            Mongolia’s Water Law: A Comparative Assessment of Legal
            Frameworks for Water Bodies, Floodplains, and Protection Zones
          </p>
        </div>
      </div>
    </div>

    {/* LUNCH */}
    <div className="agenda-item agenda-break">
      <div className="agenda-time">12:20–13:30</div>

      <div className="agenda-content">
        <h3>Lunch</h3>
        <p>Lunch and networking</p>
      </div>
    </div>

    {/* AFTERNOON SESSION I */}
    <div className="agenda-item agenda-session">
      <div className="agenda-time">13:30–15:30</div>

      <div className="agenda-content">
        <h3 className="agenda-main-title">Afternoon Session I</h3>

        <div className="agenda-chair">
          Chaired by MUST
        </div>

        {/* KEYNOTE LECTURES */}
        <div className="agenda-session-label">Keynote Lectures</div>

        <div className="agenda-subgroup">
          <p>
            <strong>13:30–14:00</strong>{" "}
            <span className="agenda-speaker">Professor Wei Liangliang</span>,
            Harbin Institute of Technology, China{" "}
            <span className="agenda-mode">(Online)</span>: Rainwater Runoff
            Pollution Control and River Basin Water Environment Management
          </p>

          <p>
            <strong>14:00–14:30</strong>{" "}
            <span className="agenda-speaker">Dr Ganbaatar Khurelbaatar</span>,
            Helmholtz Centre for Environmental Research (UFZ), Germany{" "}
            <span className="agenda-mode">(In person)</span>: Urban Water
            Challenges in German Cities: Research and Solutions
          </p>
        </div>

        {/* PRESENTATIONS */}
        <div className="agenda-session-label agenda-subsection-label">
          Presentations
        </div>

        <div className="agenda-subgroup presentation-group">
          <p>
            <strong>14:30–14:50</strong>{" "}
            <span className="agenda-speaker">Dr Frank Hüesker</span>,
            Helmholtz Centre for Environmental Research (UFZ), Germany{" "}
            <span className="agenda-mode">(In person)</span>: Blue-Green City
            Coaching project
          </p>

          <p>
            <strong>14:50–15:10</strong>{" "}
            <span className="agenda-speaker">Batchuluun Batsuren</span>,
            Spatial Academy NGO{" "}
            <span className="agenda-mode">(In person)</span>: Mapping Flood
            Risk Zones and Assessing Household and Child Exposure in
            Ulaanbaatar Using Geospatial Analysis and Decision Modelling
          </p>

          <p>
            <strong>15:10–15:30</strong>{" "}
            <span className="agenda-speaker">Boldbaatar Nyamjav</span>,
            School of Civil Engineering and Architecture, MUST{" "}
            <span className="agenda-mode">(In person)</span>: Comparative
            Study on the Treatment Efficiency of Ulaanbaatar’s Old and New
            Central Wastewater Treatment Plants
          </p>
        </div>
      </div>
    </div>

    {/* REFRESHMENT BREAK */}
    <div className="agenda-item agenda-break">
      <div className="agenda-time">15:30–15:50</div>

      <div className="agenda-content">
        <h3>Refreshment Break</h3>
        <p>Tea/coffee and networking</p>
      </div>
    </div>

    {/* AFTERNOON SESSION II */}
    <div className="agenda-item agenda-session">
      <div className="agenda-time">15:50–17:50</div>

      <div className="agenda-content">
        <h3 className="agenda-main-title">Afternoon Session II</h3>

        <div className="agenda-chair">
          Chaired by FWRNCC
        </div>

        {/* KEYNOTE LECTURE */}
        <div className="agenda-session-label">Keynote Lecture</div>

        <div className="agenda-subgroup">
          <p>
            <strong>15:50–16:10</strong>{" "}
            <span className="agenda-speaker">Prof. Ui Wook Hwang</span>,
            Kyungpook National University, South Korea{" "}
            <span className="agenda-mode">(In person)</span>: Freshwater
            Mussels in a Changing Climate: Evolutionary Genomics of East Asian
            Nodularia and Lessons for Conservation and Citizen Education
          </p>
        </div>

        {/* PRESENTATIONS */}
        <div className="agenda-session-label agenda-subsection-label">
          Presentations
        </div>

        <div className="agenda-subgroup presentation-group">
          <p>
            <strong>16:10–16:30</strong>{" "}
            <span className="agenda-speaker">Tsolmon Adiya</span>,
            Institute of Biology, MAS{" "}
            <span className="agenda-mode">(In person)</span>: Comparative
            Alpha Diversity Dynamics of Prokaryotic and Eukaryotic
            Communities Along the Tuul River
          </p>

          <p>
            <strong>16:30–16:50</strong>{" "}
            <span className="agenda-speaker">Belgudei Batbayar</span>:
            Updated Hydrogeological Mapping and Hydrogeochemical/Isotopic
            Analysis of the Ganga Lake Basin
          </p>

          <p>
            <strong>16:50–17:10</strong>{" "}
            <span className="agenda-speaker">Gantsetseg Uuriintuya</span>,
            MAS <span className="agenda-mode">(In person)</span>:
            Hydrogeochemistry of Lake Uvs: Variations in Major and Trace
            Element Concentrations Driven by Evaporative Concentration and
            Carbonate Precipitation
          </p>

          <p>
            <strong>17:10–17:30</strong>{" "}
            <span className="agenda-speaker">Munkhtsatsral Ganzorig</span>,
            School of Food, Light Industry and Design, MUST{" "}
            <span className="agenda-mode">(In person)</span>:
            Physicochemical changes and antibacterial activity of
            plasma-activated tap and underground water
          </p>

          <p>
            <strong>17:30–17:50</strong>{" "}
            <span className="agenda-speaker">Uyanga Batnasan</span>,
            School of Technology in Darkhan-Uul, MUST{" "}
            <span className="agenda-mode">(In person)</span>: Properties of
            Radon and Comparison of Methods for Reducing Its Concentration
            in Water
          </p>
        </div>
      </div>
    </div>

    {/* CLOSING */}
    <div className="agenda-item agenda-special">
      <div className="agenda-time">17:50–18:00</div>

      <div className="agenda-content">
        <h3>Awards & Closing Ceremony</h3>
        <p>
          Best research award, conference summary and closing remarks
        </p>
      </div>
    </div>

  </div>

  <div className="agenda-disclaimer">
    <strong>Note:</strong> This is a preliminary programme for information
    purposes. Presentation details, speakers, session arrangements, and
    timings may be updated before the final conference programme is issued.
  </div>
</section>
        
        {/* ORGANIZERS */}
        <section className="section organizers" id="organizers">
          <h2>Main Organizers  ·  Үндсэн зохион байгуулагчид</h2>

          <p className="section-intro">
          Hydroscience and Engineering 2026 is jointly organized by four
          institutions representing higher education, freshwater and nature
          conservation, professional water engineering, and environmental
          conservation in Mongolia.
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

                  <div className="organization-card">
         <div className="organization-logo">
              <Image
              src="/tnc-logo.svg"
              alt="The Nature Conservancy Mongolia logo"
             width={150}
            height={150}
            className="institution-logo"
            />
           </div>

             <h3>The Nature Conservancy Mongolia</h3>

            <p className="organization-subtitle">
           Conservation organization supporting ecosystem
          protection, and sustainable freshwater management
                 </p>

            <div className="organization-short">TNC Mongolia</div>
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
              <p>Seoul National University, S.Korea</p>
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
              <h3>Dr. Ganbaatar Khurelbaatar</h3>
              <p>Helmholtz centre for environmental research, Germany</p>
            </div>
            
            <div className="committee-card">
              <h3>Dr. Dolgorsuren Garmaa</h3>
              <p>Scientific representative of Mongolian Society for Water Engineering</p>
            </div>
            
            <div className="committee-card">
              <h3>Professor Basandorj Davaa</h3>
              <p>Scientific representative of the Freshwater Resources and Nature Conservation Center</p>
            </div>

            <div className="committee-card">
              <h3>Professor Battsetseg Ishjamts</h3>
              <p>Scientific representative of the Freshwater Resources and Nature Conservation Center</p>
            </div>

            <div className="committee-card">
              <h3>Dr. Batsaikhan G</h3>
              <p>Scientific representative of the Freshwater Resources and Nature Conservation Center</p>
            </div>
            
            <div className="committee-card">
              <h3>Dr. Adiya Saruulzaya</h3>
              <p>Scientific representative of the Freshwater Resources and Nature Conservation Center</p>
            </div>

            <div className="committee-card">
              <h3>
                Dr. Chinzorig Sukhbaatar
              </h3>
              <p>Scientific representative of Mongolian Association for Hydro-Environmental Engineering and Research</p>
            </div>

            <div className="committee-card">
              <h3>Dr. Uyanga Tumurtogoo</h3>
              <p>
                Department of Engineering Structures (MUST-SCEA)
              </p>
            </div>
          </div>
        </section>

       {/* CONTACT & SOCIAL MEDIA */}
       <section className="section cta" id="contact">
       <h2>Contact & Social Media</h2>

       <p className="section-intro">
      For conference inquiries, paper submission support, programme information,
      and updates, please contact the HSE 2026 organizing team or follow the
      official Facebook pages below.
      </p>

      <div className="contact-grid">
      <div className="contact-card">
      <h3>Email</h3>

      <a
        href="mailto:ayur@must.edu.mn"
        className="contact-link"
      >
        ayur@must.edu.mn
       </a>
      </div>

      <div className="contact-card">
      <h3>Facebook</h3>

      <div className="social-links">

        <a
          href="https://www.facebook.com/FWNCC2023"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          FWRNCC Facebook page
        </a>
        
        <a
          href="https://www.facebook.com/MongolianHydro"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          MAHER Facebook page
        </a>


      </div>
      </div>
      </div>
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
