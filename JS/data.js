/**
 * Portfolio Data Configuration
 * All content data stored as arrays/objects for reusability and maintainability
 */

const PORTFOLIO_DATA = {
  // Contact information used in sidebar and contact section
  contacts: [
    { href: 'mailto:eqan.ahmad123@gmail.com', icon: 'fa-envelope', label: 'Email', tooltip: 'eqan.ahmad123@gmail.com' },
    { href: 'https://resume.eqanahmad.com', icon: 'fa-file-pdf-o', label: 'Resume', tooltip: 'Download Resume', target: '_blank' },
    { href: 'https://meet.eqanahmad.com/', icon: 'fa-phone', label: 'Strategy Call', tooltip: "Let's Talk Strategy" }
  ],

  // Social links
  socials: [
    { href: 'https://www.linkedin.com/in/eqanahmad/', icon: 'fa-linkedin', label: 'LinkedIn', target: '_blank' }
  ],

  // Support links
  supports: [
    { href: 'https://patreon.com/eqan', icon: 'fa-heart', label: 'Patreon', target: '_blank' },
    { id: 'bitcoin-text', href: '#', icon: 'fa-bitcoin', label: 'Bitcoin', tooltip: 'Copy Bitcoin address', hiddenAddress: '1FkAiAAbEgb69gqrZtSr3Ew7dsnmTaUwen' },
    { id: 'ethereum-text', href: '#', icon: 'fa-code', label: 'Ethereum', tooltip: 'Copy Ethereum address', hiddenAddress: '0x0eb2ee8ab45635cc2aea598f9968a93c550450e9' }
  ],

  // Navigation sections
  navSections: [
    { id: 'section-01', num: '01', label: 'Top' },
    { id: 'section-02', num: '02', label: 'About me' },
    { id: 'section-03', num: '03', label: 'Services' },
    { id: 'section-04', num: '04', label: 'Expertise' },
    { id: 'section-05', num: '05', label: 'Projects' },
    { id: 'section-06', num: '06', label: 'Experiences' },
    { id: 'section-07', num: '07', label: 'Honors' },
    { id: 'section-08', num: '08', label: 'Education' },
    { id: 'section-09', num: '09', label: 'Testimonials' },
    { id: 'section-10', num: '10', label: 'Contact' }
  ],

  // Services
  services: [
    { href: '#programming-profile-modal', modal: true, icon: 'fa-code', label: 'Programming' },
    { href: 'https://www.behance.net/eqanahmad', target: '_blank', icon: 'fa-crop', label: 'UI / UX' },
    { href: 'https://medium.com/@eqan', target: '_blank', icon: 'fa-font', label: 'Medium' },
    { href: '#freelance-profile-modal', modal: true, icon: 'fa-briefcase', label: 'Freelance' },
    { href: 'https://www.youtube.com/@eqanio', target: '_blank', icon: 'fa-youtube-play', label: 'YouTube', arrowLeft: true }
  ],

  // Expertise areas
  expertise: [
    { icon: 'fa-globe', label: 'Web', duration: '5 Years' },
    { icon: 'fa-chain', label: 'Blockchain', duration: '2 Years' },
    { icon: 'fa-cloud', label: 'Cloud', duration: '1.5 Years' },
    { icon: 'fa-magic', label: 'Gen AI', duration: '2 Years' },
    { icon: 'fa-bolt', label: 'Quantum', duration: '1 Year', arrowLeft: true }
  ],

  // Featured projects (large cards)
  featuredProjects: [
    {
      id: 'modal-project-10',
      img: './Assets/project_10.webp',
      title: 'GPU Lab',
      subtitle: 'A cloud computing platform aimed to deploy millions of AI models on local GPU servers and return apis for hastle free usage.',
      tags: ['NEXT.js - OAuth - Redux - React - RESTAPI\'s - Postgres - SQL ALchemy - Python - Docker - Cloudflared - AWS', 'Postman - Web Sockets - Stripe - FAST API - SISH - NVIDIA-SMI - Alembic - Redis - Linux/Shell Scripting'],
      size: 'full'
    },
    {
      id: 'modal-project-0',
      img: './Assets/nuces-blocked-add-certificates.webp',
      title: 'NUCES BLOCKED',
      subtitle: 'A platform aimed to generate and decentralize verified academic portfolios worldwide.',
      tags: ['NEXT.js - React - Graphql - Postgres - TypeORM - NEST.js - Solidity - Remix - Hardhat', 'Postman - Appolo - Python - Selenium - IPFS - EthersProject - Vercel - React.pdf'],
      size: 'full'
    },
    {
      id: 'modal-project-11',
      img: './Assets/project_11.webp',
      title: 'Qanooni Legal Law Suite',
      subtitle: 'Qanooni is a legal law suite that is used to generate, review and make global changes to legal documents for the users.',
      tags: ['NEXT.js - OAuth - Redux - React - RESTAPI\'s - Postgres - SQL ALchemy - Python - Docker - Azure', 'Postman - Web Sockets - FAST API - SISH - Alembic - Redis - Linux/Shell Scripting', 'Langchain - OpenAI - Prompt Engineering - MS Word API - RAG'],
      size: 'medium'
    }
  ],

  // Regular projects (smaller cards)
  projects: [
    { id: 'modal-project-1', img: './Assets/project_1.webp', title: 'Netflix', subtitle: 'Video Streaming Application that is inspired by netflix', tags: 'XML — C# - Algorithms - Data Structures' },
    { id: 'modal-project-2', img: './Assets/project_2.webp', title: 'Material Awesome', subtitle: 'Linux Window manager & Desktop Environment Alternative', tags: 'Lua — Process Mangement - Desktop Development' },
    { id: 'modal-project-3', img: './Assets/project_3.webp', title: 'Instagram Re-Imagened', subtitle: 'A social media application made from scratch', tags: 'XML — C# - T-SQL' },
    { id: 'modal-project-4', img: './Assets/project_4.webp', title: 'BKrypt', subtitle: 'Blockchain transaction service', tags: 'React — Solidity - HardHat - Node - BlockChain' },
    { id: 'modal-project-5', img: './Assets/project_5.webp', title: 'Starvation Analysis in Pakistan', subtitle: 'A desktop application that performs analysis and predicts starvation rates in Pakistan', tags: 'PYQT5 — Distribution Models - Prediction Models - Regression Models - Data Science' },
    { id: 'modal-project-6', img: './Assets/project_6.webp', title: 'X-axis OS', subtitle: 'An OS simulator', tags: 'Glade — Shell Scripting - C - Algorithms' },
    { id: 'modal-project-7', img: './Assets/project_7.webp', title: 'Hangman', subtitle: 'Hangman game made with Bash scripting & GTK Dialog.', tags: 'GTKDialog — Shell Scripting' },
    { id: 'modal-project-8', img: './Assets/project_8.webp', title: 'IGI Predator', subtitle: 'A bot that plays IGI game using Human Detection Model.', tags: 'Python — Machine Learning - OpenCV' },
    { id: 'modal-project-9', img: './Assets/project_9.webp', title: 'Sneaker Ecommerce', subtitle: 'An Ecommerce Application', tags: 'MERN — MUI' }
  ],

  // Project modal details
  projectModals: {
    'modal-project-11': {
      title: 'Qanooni Legal Law Suite',
      subtitle: 'Qanooni is a legal law suite that is used to generate, review and make global changes to legal documents for the users.',
      tags: 'NEXT.js - OAuth - Redux - React - RESTAPI\'s - Postgres - SQL ALchemy - Python - Docker - Azure - Postman - Web Sockets - FAST API - SISH - Alembic - Redis - Linux/Shell Scripting - Langchain - OpenAI - Prompt Engineering - MS Word API - RAG',
      content: `<p>
        → Qanooni Legal Law Suite contains 4 major components:
        <ul>
          <li>Draft - Generate a draft of the legal document in users tone and style</li>
          <li>Review - Review the legal document and make necessary amendments</li>
          <li>Global Changes - Make global changes to the legal document</li>
          <li>QCounsel - Ask a question to the legal document</li>
        </ul>
        I have worked on the Draft, Review and Global Changes components for the MVP launch of the product. </br></br>
        → Developed a working legal law AI Chatbot dynamic enough to control the whole Microsoft Word application, clause-by-clause modifications, and interactive chat interaction to gather essential information from users and then generate a draft. </br></br>
        → The Generated draft follows the users tone and style and is 100% original based on previous documents shared by the user on email. </br></br>
      </p>`,
      images: [
        { src: './Assets/project_11.webp', alt: 'Qanooni Legal Law Suite', basis: '100%' },
        { src: './Assets/qanooni_review.webp', alt: 'Review', basis: '50%' },
        { src: './Assets/qanooni_draft.webp', alt: 'Draft', basis: '50%' },
        { src: './Assets/qanooni_litigation.webp', alt: 'Litigation', basis: '50%' },
        { src: './Assets/qanooni_proposal.webp', alt: 'Proposal', basis: '50%' }
      ]
    },
    'modal-project-10': {
      title: 'GPU Lab',
      subtitle: 'A cloud computing platform aimed to deploy millions of AI models on local GPU servers and return apis for hastle free usage.',
      tags: 'NEXT.js - OAuth - Redux - React - RESTAPI\'s - Postgres - SQL ALchemy - Python - Docker - Cloudflared - AWS - Postman - Web Sockets - Stripe - FAST API - SISH - NVIDIA-SMI - Alembic - Redis - Linux/Shell Scripting',
      content: `<p>
        → Led a team of engineers to develop a cloud computing framework for AI Models deployment
        and computation in parrallel using Docker, WebSockets, Stripe Integeration, Shell Scripting,
        Python, Postgres, SQLAlchemy, FAST API, and Cloudflare to build a product which is going to be
        used by 1 Million+ daily active users for model deployment. Developing frontend interface with
        React, Redux, Typescript and NEXT.js.</br>
      </p>
      <p>
        → Responsible for architecture design and development regarding the cloud computing framework for
        parrallel computation.</br>
      </p>`,
      images: [
        { src: './Assets/project_10.webp', alt: 'GPU Lab', basis: '50%' },
        { src: './Assets/gpu-lab-server-list.webp', alt: 'Image 3', basis: '50%' },
        { src: './Assets/gpu-lab-server.webp', alt: 'Image 2', basis: '50%' }
      ]
    },
    'modal-project-0': {
      title: 'NUCES BLOCKED',
      subtitle: 'A platform aimed to generate and decentralize verified academic portfolios worldwide.',
      tags: 'NEXT.js - React - Graphql - Postgres - TypeORM - NEST.js - Solidity - Remix - Hardhat - Postman - Appolo - Python - Selenium - IPFS - EthersProject - Vercel - React.pdf',
      link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing',
      content: `<p>
        → Developing a decentralized system for distributing and verifying graduate degrees and semester results
        using blockchain technology, improving the authenticity of degree distribution by 80%. </br>
      </p>
      <p>
        → Incorporated a comprehensive profile of each student's academic career, enabling recruiters to easily
        assess the qualifications and suitability of potential hires and saving 75% of the time normally spent on verifying candidates' academic credentials. </br>
      </p>
      <blockquote>
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Material UI</li>
          <li>✔ On just 1 click autogenerate and deploy portfolios as NFTs across the globe.</li>
          <li>✔ Companies and relevant parties interested in verified students academic information can easily download with just 1 click for easy filtering.</li>
          <li>✔ Teachers, career counsellors and society heads to add students academic contributions independtly.</li>
          <li>✔ Intra University + organizations consensus mechanism from authorized validators.</li>
          <li>✔ Low bandwidth consumption using GraphQL API.</li>
          <li>✔ Backup Students semester results.</li>
        </ul>
      </blockquote>`,
      images: [
        { src: './Assets/nuces-blocked-add-certificates.webp', alt: 'Netflix', basis: '50%', link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing' },
        { src: './Assets/nuces-blocked-manage-certificates.webp', alt: 'Image 2', basis: '50%', link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing/' },
        { src: './Assets/nuces-blocked-proposals.webp', alt: 'Image 3', basis: '50%', link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing/' },
        { src: './Assets/nuces-blocked-user-profiles.webp', alt: 'Image 4', basis: '50%', link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing/' },
        { src: './Assets/nuces-blocked-landing.webp', alt: 'Image 5', basis: '50%', link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing/' },
        { src: './Assets/nuces-blocked-academic-portfolios.webp', alt: 'Image 6', basis: '50%', link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing/' }
      ]
    },
    'modal-project-1': {
      title: 'Netflix',
      subtitle: 'Video Streaming Application that is inspired by netflix',
      tags: 'XML — C# - Algorithms - Data Structures',
      link: 'https://github.com/eqan/Netflix-In-CSharp',
      content: `<p>Utilizing the best of Algorithms, I have created this project on an experimental basis to discover
        the mechanism/possibilities of Technologies which somewhat covers the fundamentals of the Online Video
        streaming servies such as Youtube &amp; Netflix.</p>
      <h9>
        <b>Note: This Project Is Solely Made For Educational Purposes &amp; Is Entirely Self Made, None Of
          This Has RelationShip Of Any Kind With Netflix Or Any Other Video Streaming Service</b>.
      </h9>
      <blockquote>
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Metro UI Design</li>
          <li>✔ Full Compact Video Player Using AX Movie Player SDK</li>
          <li>✔ Using Fisher Yates Algorithm For Recommendation System</li>
          <li>✔ Using Hashing Algorithm For Ultra Fast Search Results</li>
          <li>✔ Full localized Data Base System</li>
          <li>✔ Efficient Usage Of Data Structures &amp; Algorithms</li>
        </ul>
        <h2>Future Prospects</h2>
        <ul>
          <li> AES 256 Encryption For Passwords </li>
          <li> Code Optimization </li>
        </ul>
      </blockquote>`,
      images: [{ src: './Assets/project_1.webp', alt: 'Netflix', link: 'https://github.com/eqan/Netflix-In-CSharp' }]
    },
    'modal-project-2': {
      title: 'Material Awesome',
      subtitle: 'Linux Window manager & Desktop Environment Alternative',
      tags: 'Lua — Process Mangement - Desktop Development',
      link: 'https://github.com/eqan/material-awesome',
      content: `<p>
        <h5>Original work by PapyElGringo</h5>
        <h6>This project is being further developed by Eqan Ahmad</h6>
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Material Design UI</li>
          <li>✔ A Full Desktop Replacement</li>
          <li>✔ Built-In Native Lua Widgets</li>
          <li>✔ Different Layouts</li>
          <li>✔ Fully Customizable</li>
          <li>✔ User Friendly</li>
          <li>✔ 300MB Idle Ram Consumption</li>
          <li>✔ Vim Key-Bindings Supported</li>
        </ul>
        <h2>Future Prospects</h2>
        <ul>
          <li>Tree Tiling Setup for Awesome</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_2.webp', alt: 'Awesome', link: 'https://github.com/eqan/material-awesome' }]
    },
    'modal-project-3': {
      title: 'Instagram Re-Imagened',
      subtitle: 'A social media application made from scratch',
      tags: 'XML — C# - T-SQL',
      link: 'https://github.com/eqan/Instagram-ReImagened',
      content: `<p>
        A social media platform that utilizes SQL in a decentralized way
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Flat UI</li>
          <li>✔ Themes[Dark/Light]</li>
          <li>✔ Localized Database using SQL at the back end</li>
          <li>✔ All essential features of a social media app, post, stories, likes, bookmarks etc</li>
          <li>✔ Activity Notification</li>
          <li>✔ Search Engine</li>
          <li>✔ Profile View</li>
        </ul>
        <h2>Future Prospects</h2>
        <ul>
          <li> AES 256 Encryption For Passwords </li>
          <li> Code Optimization </li>
          <li> Chat system </li>
          <li> Comment System </li>
          <li> Much More </li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_3.webp', alt: 'Instagram', link: 'https://github.com/eqan/Instagram-ReImagened' }]
    },
    'modal-project-4': {
      title: 'BKrypt',
      subtitle: 'Blockchain transaction service',
      tags: 'React — Solidity - HardHat - Node - BlockChain',
      link: 'https://github.com/eqan/BKrypt',
      content: `<p>
        A BlockChain Application To Make Transactions Convenient Using React & Solidity.
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Glass Morphism + Gradient Design using tailwind</li>
          <li>✔ Using MetaMask for transactions</li>
          <li>✔ Full fledged blockchain application made with solidity</li>
          <li>✔ Performance oriented used React for the front end</li>
          <li>✔ Smart Contracts seamless integeration using hardhat</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_4.webp', alt: 'BKrypt', link: 'https://github.com/eqan/BKrypt' }]
    },
    'modal-project-5': {
      title: 'Starvation Analysis in Pakistan',
      subtitle: 'A desktop application that performs analysis and predicts starvation rates in Pakistan',
      tags: 'PYQT5 — Distribution Models - Prediction Models - Regression Models - Data Science',
      link: 'https://github.com/eqan/Starvation-Period-Analysis-And-Forecast',
      content: `<p>
        A desktop application that performs analysis and predicts starvation rates in Pakistan using numerous
        distribution techniques, regression models, forcasting models etc
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Simple UI using PYQT5</li>
          <li>✔ Different charts such as histogram, line graph etc to point the trends of data.</li>
          <li>✔ Facebooks Prophet for Trend Prediction</li>
          <li>✔ Distribution models such as binomial, pisson for different data generation.</li>
          <li>✔ Regression models such as linear, polynomial, and multiple regression to predict the accuracy of
            relationships between different factors.</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_5.webp', alt: 'Starvation', link: 'https://github.com/eqan/Starvation-Period-Analysis-And-Forecast' }]
    },
    'modal-project-6': {
      title: 'X-axis OS',
      subtitle: 'An OS simulator',
      tags: 'Glade — Shell Scripting - C - Algorithms',
      link: 'https://github.com/eqan/Xaxis-OS',
      content: `<p>
        An OS simulator that utilizes the concepts of multithreading, semaphores etc for process handling.
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Material UI made with glade.</li>
          <li>✔ C used for ultra fast performance.</li>
          <li>✔ Semaphores, multithreading and bankers algorithm embedded.</li>
          <li>✔ Builtin Custom Shell, virtual drive and ram.</li>
          <li>✔ Can launch linux applications and store in its virtual memory.</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_6.webp', alt: 'Xaxis OS', link: 'https://github.com/eqan/Xaxis-OS' }]
    },
    'modal-project-7': {
      title: 'Hangman',
      subtitle: 'Hangman game made with Bash scripting & GTK Dialog.',
      tags: 'GTKDialog — Shell Scripting',
      link: 'https://github.com/eqan/Hangman-In-Shell',
      content: `<p>
        An interactive hangman game made with bash scripting for the backend and GTKDialog for the frontend.
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Intutive UI made with GTKDialog.</li>
          <li>✔ Native support for linux derivatives.</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_7.webp', alt: 'Hangman', link: 'https://github.com/eqan/Hangman-In-Shell' }]
    },
    'modal-project-8': {
      title: 'IGI Predator',
      subtitle: 'A bot that plays IGI game using Human Detection Model.',
      tags: 'Python — Machine Learning - OpenCV',
      link: 'https://github.com/eqan/Mini-AI-Projects/tree/main/1.%20IGI_Predator',
      content: `<p>
        A bot that plays IGI game using Human Detection Model, controlled by
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Human Detection</li>
          <li>✔ Human Kill</li>
        </ul>
        <h3>Future Prospects</h2>
        <ul>
          <li>Integerate More Accurate Mouse Movement To Target</li>
          <li>Integerate Deep Learning For More Accurate Human Detection</li>
          <li>Player Movement Controls By AI</li>
          <li>Teach The Player How To Complete A Mission</li>
          <li>Bring Up FrameRates</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_8.webp', alt: 'IGI Predator', link: 'https://github.com/eqan/Mini-AI-Projects/tree/main/1.%20IGI_Predator' }]
    },
    'modal-project-9': {
      title: 'Sneaker Ecommerce',
      subtitle: 'An ecommerce website',
      tags: 'MERN — MUI',
      link: 'https://github.com/eqan/Sneaker-Ecommerce',
      content: `<p>
        An ecommerce website that performs basic functionalities found in a normal ecomemrce website
        <h3>Features</h3>
        <ul style="list-style-type:none">
          <li>✔ Material UI design with react</li>
          <li>✔ Integeration of credentials validation using Formik and Yup</li>
          <li>✔ All necessary features of backend implemented</li>
          <li>✔ Private API integeration[Some routes are specifically designated for admin]</li>
          <li>✔ Toast integerated for notifications/pop ups</li>
          <li>✔ Pagination embedded for loading items in small amounts</li>
          <li>✔ Dynamic rendering/routing</li>
          <li>✔ Local storage for access token storage and user session retention</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_9.webp', alt: 'Sneaker-Ecommerce', link: 'https://github.com/eqan/Sneaker-Ecommerce' }]
    }
  },

  // Experiences timeline
  experiences: [
    {
      date: 'Jul 2025 – Present',
      title: 'SuperQ Quantum',
      role: 'Lead Software Engineer',
      points: [
        'Leading the development team on the Super Q and ChatQPU products, a gateway to Quantum computing in the most user-friendly manner.',
        'Bridging both classical and gate-based quantum computing through NLP (Natural Language Processing)/LLM to solve complex problems.',
        'Technologies: QuEra, Amazon Braket, IonQ, NVIDIA CUDA Q, Dwave, Gurobi, Python, Quantum Computing.'
      ]
    },
    {
      date: 'Jul 2025 – Present',
      title: 'Staque',
      role: 'AI Software Engineer',
      points: [
        'Akito AI - An AI powered platform for Employers and Job seekers to curate assessments and link appropriate job listings. Integration and collaboration with companies such as Riipen, Advacenrite for more openings and data integration.',
        'Que BDR - Agentic BDR AI to manage leads all across the platform of the company.',
        'Que Marketer - Agentic marketing software powered with multimodal capabilities to generate social media content.'
      ]
    },
    {
      date: 'Sep 2024 – April 2025',
      title: 'Qanooni.ai',
      role: 'AI Engineer',
      points: [
        'Working in the intelligence team to develop a suite of plugins in Word and Outlook to develop drafts automatically for lawyers based on writings they have written in previous documents in Outlook documents history and Word using Langchain, GPT4-O, BERT, Claude, FAST API, Python, REST API, etc.',
        'Developed a working legal law AI Chatbot dynamic enough to control the whole Microsoft Word application, clause-by-clause modifications, and interactive chat interaction to gather essential information from users and then generate a draft.',
        'Implemented RAG techniques for data collection on multiple law sites and storing the filtered data in the database to enhance model performance by 60%.',
        'Prompt Engineering and embedding for contextual-based data parsing from user chat history, generating drafts relevant to the provided templates used by the user or lawyer-based history sources, keeping intact prompt context with prompt chaining mechanism with an accuracy of 83% in results, and finally developing evals for evaluating these prompt results.',
        'Building the draft and review features, such as developing architecture, entities, data modeling, WebSockets for CRUD functions, draft generation using Langchain, etc., to scale to an estimated 1+ million users.',
        'Developing front-end UI pages for the draft features using Next.js, React, Redux, etc, and integrating the backend websockets with the frontend.'
      ]
    },
    {
      date: '2021 – now',
      title: 'Freelancer',
      role: 'Providing Services:',
      points: [
        'Top vetted freelancer at Toptal.',
        'Level 2 Fiverr with 4.9+ Customer Rating and 200+ projects completed.',
        'Upwork Emerging Talent',
        'Completed over 300+ projects in total.',
        'Provide freelance expertise in Web Dev, Blockchain, DevOps, and Gen AI.'
      ]
    },
    {
      date: 'July 2023 – July 2024',
      title: 'Stable Diffusion',
      role: 'Lead Cloud Engineer',
      points: [
        'Led a team to architecture and develop a cloud-based AI framework using Docker, Python, Cloudflare, SQL Alchemy, FAST API, nvidia-smi, Guvicorn, PostgreSQL, MS Azure, Amazon S3, SISH etc, targeting 1M+ daily active users for Text-to-Image/Video/Audio generation.',
        'Utilized various open source projects such as Salt project to deal with various remote execution protocols, minimizing network latency, load balancing certain parts of the project to minimize load times and embedding microservices using docker to create a scalable environment for the product.',
        'Led frontend development using React, Typescript, Redux, and NEXT.js while also implementing backend optimizations that reduced 3rd party service costs by 60%.',
        'Indepth Operating system and docker + python docker sdk usage for developing automated services to manage the whole system more like a self managing microservice. Also utilized CI/CD pipelines to automate the whole backend and frontend docker packaging for deployment using github actions.',
        'Managed a high-performance computing environment, optimizing resource allocation to reduce daily GPU costs from over $1000.'
      ]
    },
    {
      date: 'March 2020 – April 2023',
      title: 'Microslush',
      role: 'Associate Software Engineer',
      points: [
        'Developed a Binance‑based NFT marketplace using NEST.JS, Redis, EthersProject, GraphQL, Typescript, and Postgres, and adopting Agile development.',
        'Improved api endpoints speed by 200% by following best database optimization practices and endpoints vulnerability testing using Postman.',
        'Responsible for building modules related to tokens, collections, orders, activities etc which was the core of the indexer, fetching and filtering data from blockchain and storing in the database.',
        'Developed a screen recording application in C# using FFMpeg, .NET, and various cloud-based services such as Dropbox. Basically, it\'s a clone of screenrc for the company.',
        'Developed C# and .NET desktop applications, including an automated forex bot installer that reduced Windows setup time by 60% and also a screenrecording tool that was made for the ease of users recording and submitting their issues related to forex charts directly on the .NET website which enhanced user experience by 70% and impacting 1 Million+ daily active users.',
        'Implemented automated unit test cases using Robot Framework and Python to test company project sites and functionalities, resulting in a 30-40% reduction in bugs.',
        'Created MetaTrader 4 bots in MQL4 for company clients to improve their trading strategies.'
      ]
    }
  ],

  // Honors
  honors: [
    {
      date: '2023',
      title: 'Prime Minister National Innovation Award Finalist[NUCES BLOCKED]',
      content: `→ My Final Year Project [NUCES BLOCKED] was selected as one of the top 50 finalists from over 20,000 applications nationwide for the Prime Minister National Innovation Award.</br>
        → This recognition provided me with comprehensive training in:</br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Entrepreneurship</br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Startup pitching</br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Business management</br>
        → The training was conducted over a 2-month period at prestigious institutions like:</br>
        &nbsp;&nbsp;&nbsp;&nbsp;• UET Lahore</br>
        &nbsp;&nbsp;&nbsp;&nbsp;• NUST Islamabad</br>
        → The aim was to equip us to make a significant impact in the education sector in Pakistan.</br>`
    },
    {
      date: '2019',
      title: 'Top 5 in UI/UX in the whole institue',
      content: 'Ranked amongst the top 5 in the UI/UX course in the whole institue.</br>'
    }
  ],

  // Education
  education: [
    {
      date: '2019 – 2023',
      title: 'FAST NUCES',
      content: 'BS Computer Science at National University Of Computer Science & Technology'
    }
  ],

  // Testimonials
  testimonials: [
    {
      img: 'https://yt3.googleusercontent.com/ytc/AIdro_ny4bUqgO9I3Gpw_djdDHWc1WiesoKxUZ6a3dtYHFD_yNw=s160-c-k-c0x00ffffff-no-rj',
      name: 'Justin Smith',
      role: 'Content Creator & Youtuber At Mobile Dwellings(340k+ Subscribers)',
      link: 'https://www.youtube.com/@MobileDwellings',
      text: 'I\'ve worked with Eqan to build <a href="https://www.skooliesupport.chat/" target="_blank">Skoolie Support</a>, an AI-powered chatbot for my Subscribers to guide them regarding nomadic living. Eqan was highly professional and dedicated to the project. He guided me in the Buisness aspects of the system and helped me to build the system in a way that it is easy to maintain and scale. I would highly recommend him to anyone looking for a software engineer.'
    },
    {
      img: 'https://cf.geekdo-images.com/U7mUiDEH9PvGaUFqBPNDHA__itemrep/img/i2eswm8CLQMszsRTlxemlO9LwGU=/fit-in/246x300/filters:strip_icc()/pic5177087.jpg',
      name: 'Bernard Rippe',
      role: 'Trading Automation Client',
      text: 'Working with Eqan has been a truly rewarding experience. He skillfully transformed my intricate trading strategy into a fully operational MQL5 EA code. Their unmatched professionalism, dedication, and passion for problem solving not only met but exceeded my expectations. More than just exceptional service providers, they\'ve become lifelong friends, always ready to go the extra mile. Choosing them was one of my best decisions. Highly recommended for anyone wanting reliable and expert help in trading automation!'
    },
    {
      img: './Assets/testimonial_3.webp',
      name: 'Irfan Ul Haq',
      role: 'Assistant Professor At FAST NUCES',
      link: 'http://cfd.nu.edu.pk/facult/irfan-ul-haq/',
      text: 'Persistence, passionate and a vision is what makes a person successful. Eqan Ahmad has shown signs of these traits, and is well on his way to help in the advancement of technology. He has studied Object Oriented Programming under me, and despite his struggles, He didn\'t let go and carried on, paving the way towards his success. So i can recommend him on my behalf as viable and trust worthy in any field in which he considers himself fit.'
    },
    {
      img: './Assets/testimonial_4.webp',
      name: 'Harrison Warburton',
      role: 'Software Engineer at inconnection',
      link: 'https://www.inconnection.com/',
      text: 'Eqan gave his all when he approached this project, even under the pressure of dealing with constraints, he helped me to deliver a functioning piece of software which met every requirement. Would recommend him to anyone for anything programming related - absolute genius!'
    },
    {
      img: './Assets/Unknown.webp',
      name: 'Zthome',
      role: 'Client From Austria',
      link: 'https://www.fiverr.com/eqanahmad?up_rollout=true',
      text: 'Great work! Even though my instructions were kind of unclear the young programmer exceeded my expactations! Always asking for a way to improve the program and if there is something else that he can add. I would recommed him to everyone and I can\'t wait to work with him again!'
    }
  ],

  // Programming profile links
  programmingProfiles: [
    { href: 'http://github.com/eqan', icon: 'fa-github', label: 'GitHub' },
    { href: 'https://leetcode.com/eqan/', icon: 'fa-code', label: 'LeetCode' },
    { href: 'https://www.hackerrank.com/eqanahmad123?hr_r=1', icon: 'fa-terminal', label: 'HackerRank' }
  ],

  // Freelance profile links
  freelanceProfiles: [
    { href: 'https://www.fiverr.com/eqanahmad', icon: 'fa-money', label: 'Fiverr' },
    { href: 'https://www.upwork.com/freelancers/~0188fb01c513f66907', icon: 'fa-briefcase', label: 'Upwork' },
    { href: 'https://www.toptal.com/resume/eqan-ahmad', icon: 'fa-diamond', label: 'Toptal' },
    { href: 'http://consult.eqanahmad.com', icon: 'fa-user-md', label: 'Consultation' }
  ]
};
