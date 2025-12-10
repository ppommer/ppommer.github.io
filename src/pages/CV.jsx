import CVElement from "../components/CVElement";

const currentPositions = [
  {
    position: "Senior Research Engineer",
    company: "Helmholtz Munich",
    dateRange: "Mar 2024 - Present",
    description:
      "Working on machine learning algorithms for representation learning and their application to neuroscience at the Dynamical Inference Lab supervised by Steffen Schneider. Currently building core infrastructure for explainability research including a framework for empirical identifiability and consistency, data engines around sparse autoencoder (SAE) training, and software for annotating and hosting concepts extracted by SAEs. Also interested in training large language models on brain data at scale and studying how multi-modal neural datasets can be compressed into foundation models.",
  },
  {
    position: "Senior Software Engineer",
    company: "KI macht Schule",
    dateRange: "May 2025 - Present",
    description:
      "Building hub.schule, the Hugging Face of digital education.",
  },
];

const education = [
  {
    position: "Master of Science (M.Sc.), Management & Technology",
    company: "Technical University of Munich",
    dateRange: "2019 - 2022",
    description:
      "Double major in Computer Science and Finance. Thesis: \"Towards Fairness in NLP: Neural Methods for Flavor Detection and Bias Mitigation\".",
  },
  {
    position: "Bachelor of Science (B.Sc.), Management & Technology",
    company: "Technical University of Munich",
    dateRange: "2015 - 2019",
    description:
      "Double major in Computer Science and Finance. Thesis: \"A Data Model for the Determination, Adjustment, and Documentation of Transfer Prices\".",
  },
  {
    position: "Bachelor of Science (B.Sc.), Architecture",
    company: "Technical University of Munich",
    dateRange: "2014 - 2015",
    description: "",
  },
];

const professionalExperience = [
  {
    position: "Software Engineer",
    company: "KI macht Schule",
    dateRange: "May 2023 - May 2025",
    description:
      "Developed and shipped the AI teaching platform kiwi.schule awarded by the Federal Ministry of Labour and Social Affairs (BMAS) and the Federal Ministry of Education and Research (BMBF). Built several interactive apps leveraging an experience-based approach to AI, a homescreen with a focus on user-friendly, intuitive UX/UI, and a custom data structure and API for course contents making it easy to contribute and retrieve teaching material. Developed a fully GDPR-compliant ChatGPT clone hosted on German servers, an OpenAI-compatible generation API for chat completions and image generation, classroom management, user database, and registration service. Implemented a scalable microservice architecture facilitating open-source contributions, status monitoring, test suites, and CI/CD pipeline. Skills: Python, Flask, FastAPI, JavaScript, React.js, Docker, Git, JupyterHub, Linux Server.",
  },
  {
    position: "Community Lead",
    company: "KI macht Schule",
    dateRange: "Jun 2021 - May 2023",
    description:
      "Taught AI/ML fundamentals to high school students and educational concepts to teachers. Established the Munich chapter and initiated cooperation with Google. Skills: Leadership, Communication, Project Management.",
  },
  {
    position: "Master's Thesis Student | AI Institute",
    company: "Deloitte",
    dateRange: "Mar 2022 - Aug 2022",
    description:
      "Master's thesis on fairness in Natural Language Processing. Trained models for detecting and removing bias reflecting inappropriate subjectivity. Academic supervision by the Social Computing Group at TUM. Skills: Academic Writing, Machine Learning, Natural Language Processing (NLP).",
  },
  {
    position: "Project Student | AI & Data",
    company: "Deloitte",
    dateRange: "Sep 2021 - Feb 2022",
    description:
      "Implemented semantic search with Haystack and fine-tuned it for legal documents. Built an Elasticsearch backend for keyword search and storing contextual embeddings. Implemented a search frontend with Angular and integrated it into the architecture. Skills: Angular, Elasticsearch, Git, Haystack.",
  },
  {
    position: "Working Student | AI & Data",
    company: "Deloitte",
    dateRange: "Apr 2021 - Sep 2021",
    description:
      "Developed an Angular frontend for a knowledge management web app. Refactored the web app's existing code base according to Google Style Guides. Containerized NLP backend services and integrated them into the architecture. Skills: Docker, Angular, MongoDB, Git, FastAPI.",
  },
  {
    position: "Working Student | Software Development",
    company: "it-economics GmbH",
    dateRange: "Oct 2020 - Mar 2021",
    description:
      "Built and deployed an Angular frontend for a Central Authentication Service (CAS). Customized an existing Spring Boot backend for the CAS. Skills: Angular, Spring Boot, Git.",
  },
  {
    position: "Working Student | Innovation Consulting",
    company: "innoscripta GmbH",
    dateRange: "Apr 2020 - Jun 2020",
    description:
      "Managed technology transfer between research institutions and SMEs. Developed a transfer pricing strategy for a newly established subsidiary. Skills: Project Management, Transfer Pricing.",
  },
  {
    position: "Intern | Tax Management Consulting",
    company: "Deloitte",
    dateRange: "Jun 2019 - Sep 2019",
    description:
      "Developed an automation tool for cleaning, validating, and reconciling account data. Modeled Standard Operating Processes (SOPs) in MS Visio. Skills: MS Visio, Process Automation.",
  },
  {
    position: "Bachelor's Thesis Student | Transfer Pricing",
    company: "Deloitte",
    dateRange: "Dec 2018 - May 2019",
    description:
      "Bachelor's thesis on Operational Transfer Pricing for cross-border intercompany transactions. Elicited data needed to determine and adjust transfer prices automatically. Skills: Academic Writing, Transfer Pricing.",
  },
  {
    position: "Intern | Transfer Pricing",
    company: "Deloitte",
    dateRange: "Sep 2018 - Nov 2018",
    description:
      "Designed and implemented a workflow management tool in MS SharePoint. Performed financial and economic analyses for transfer pricing reports. Skills: Transfer Pricing, SharePoint.",
  },
  {
    position: "Project Student | Transfer Pricing",
    company: "Deloitte",
    dateRange: "Mar 2018 - Aug 2018",
    description:
      "Co-developed a concept for implementing intercompany transactions in SAP. Co-led a four-part training session for the German transfer pricing team. Skills: SAP HANA, Project Management, Presentation Skills.",
  },
  {
    position: "Working Student | Transfer Pricing",
    company: "Deloitte",
    dateRange: "Apr 2017 - Mar 2018",
    description:
      "Designed a dashboard for monitoring intercompany transactions with MS Power BI. Performed IP valuations and financial analyses for transfer pricing reports. Skills: Data Analysis, Valuation, Transfer Pricing.",
  },
  {
    position: "Artist Agent",
    company: "Self-employed",
    dateRange: "Apr 2016 - Mar 2018",
    description:
      "Managed soloist musicians and chamber music ensembles in the classical music industry. Acquired concerts, planned tours, and managed public relations. Skills: Project Management.",
  },
  {
    position: "Research Assistant",
    company: "Chair of Architectural Informatics, Technical University of Munich",
    dateRange: "Apr 2015 - Mar 2017",
    description:
      "Research assistant position at the Technical University of Munich.",
  },
];

const volunteering = [
  {
    position: "Course Instructor",
    company: "KI macht Schule",
    dateRange: "Jun 2021 - Present",
    description:
      "Teaching AI/ML fundamentals to high school students and educational concepts to teachers. Established the Munich chapter and initiated cooperation with Google.",
  },
  {
    position: "Certified Group Leader",
    company: "EJE-Freizeiten e.V.",
    dateRange: "May 2023 - Present",
    description:
      "Co-leading group activities and vacation camps for children aged 6 to 15. Completed the Juleica training for team-building, leadership, communication, and conflict management.",
  },
  {
    position: "Organist",
    company: "Evangelisch-Lutherische Kirche in Bayern",
    dateRange: "Jan 2011 - Present",
    description:
      "Playing the organ in services. Played a concert in Munich's largest Protestant church.",
  },
  {
    position: "Contributor",
    company: "BigScience Workshop",
    dateRange: "Sep 2022 - Apr 2023",
    description:
      "Incorporated metadata into LLM pretraining to enhance zero-shot capabilities and controllability. Implemented a pipeline for perplexity evaluation on different types of metadata.",
  },
  {
    position: "Project Manager",
    company: "Kulturwald",
    dateRange: "Sep 2013 - Dec 2016",
    description:
      "Classical music festival in the Bavarian forest. Co-managed concerts and artist communication.",
  },
  {
    position: "Election Helper",
    company: "Bezirksamt Friedrichshain-Kreuzberg von Berlin",
    dateRange: "Feb 2023",
    description:
      "Supported the elections to the Berlin House of Representatives and district assemblies. Deputy secretary jointly responsible for the electoral roll and the final record of results.",
  },
];

function CV() {
  return (
    <div className="px-4 md:px-14 lg:px-28 overflow-hidden">
      <div className="mb-12 gap-20 flex flex-col">
        <div className="grid max-w-3xl grid-cols-1 gap-y-8 items-baseline md:grid-cols-4 md:border-l md:pt-2 md:pl-6  border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Current Positions
          </p>
          <div className="md:col-span-3">
            <div className="space-y-16">
              {currentPositions.map((el, index) => (
                <CVElement key={`${el.position}-${el.company}-${index}`} {...el} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-y-8 items-baseline md:grid-cols-4 md:border-l md:pt-2 md:pl-6  border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Education
          </p>
          <div className="md:col-span-3">
            <div className="space-y-16">
              {education.map((el, index) => (
                <CVElement key={`${el.position}-${el.company}-${index}`} {...el} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-y-8 items-baseline md:grid-cols-4 md:border-l md:pt-2 md:pl-6  border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Professional Experience
          </p>
          <div className="md:col-span-3">
            <div className="space-y-16">
              {professionalExperience.map((el, index) => (
                <CVElement key={`${el.position}-${el.company}-${index}`} {...el} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-y-8 items-baseline md:grid-cols-4 md:border-l md:pt-2 md:pl-6  border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Volunteering
          </p>
          <div className="md:col-span-3">
            <div className="space-y-16">
              {volunteering.map((el, index) => (
                <CVElement key={`${el.position}-${el.company}-${index}`} {...el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
