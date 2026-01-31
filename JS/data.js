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
      tags: ['NEXT.js', 'OAuth', 'Redux', 'React', 'REST APIs', 'Postgres', 'SQL Alchemy', 'Python', 'Docker', 'Cloudflared', 'AWS', 'Postman', 'Web Sockets', 'Stripe', 'FAST API', 'SISH', 'NVIDIA-SMI', 'Alembic', 'Redis', 'Linux/Shell'],
      size: 'full'
    },
    {
      id: 'modal-project-0',
      img: './Assets/nuces-blocked-add-certificates.webp',
      title: 'NUCES BLOCKED',
      subtitle: 'A platform aimed to generate and decentralize verified academic portfolios worldwide.',
      tags: ['NEXT.js', 'React', 'GraphQL', 'Postgres', 'TypeORM', 'NEST.js', 'Solidity', 'Remix', 'Hardhat', 'Postman', 'Apollo', 'Python', 'Selenium', 'IPFS', 'Ethers.js', 'Vercel', 'React PDF'],
      size: 'full'
    },
    {
      id: 'modal-project-11',
      img: './Assets/project_11.webp',
      title: 'Qanooni Legal Law Suite',
      subtitle: 'Qanooni is a legal law suite that is used to generate, review and make global changes to legal documents for the users.',
      tags: ['NEXT.js', 'OAuth', 'Redux', 'React', 'REST APIs', 'Postgres', 'SQL Alchemy', 'Python', 'Docker', 'Azure', 'Postman', 'Web Sockets', 'FAST API', 'Alembic', 'Redis', 'Langchain', 'OpenAI', 'Prompt Engineering', 'MS Word API', 'RAG'],
      size: 'medium'
    }
  ],

  // Regular projects (smaller cards)
  projects: [
    { id: 'modal-project-1', img: './Assets/project_1.webp', title: 'Netflix', subtitle: 'Video Streaming Application that is inspired by netflix', tags: ['XML', 'C#', 'Algorithms', 'Data Structures'] },
    { id: 'modal-project-2', img: './Assets/project_2.webp', title: 'Material Awesome', subtitle: 'Linux Window manager & Desktop Environment Alternative', tags: ['Lua', 'Process Management', 'Desktop Development'] },
    { id: 'modal-project-5', img: './Assets/project_5.webp', title: 'Starvation Analysis in Pakistan', subtitle: 'A desktop application that performs analysis and predicts starvation rates in Pakistan', tags: ['PYQT5', 'Distribution Models', 'Prediction Models', 'Regression Models', 'Data Science'] },
    { id: 'modal-project-8', img: './Assets/project_8.webp', title: 'IGI Predator', subtitle: 'A bot that plays IGI game using Human Detection Model.', tags: ['Python', 'Machine Learning', 'OpenCV'] }
  ],

  // Project modal details
  projectModals: {
    'modal-project-11': {
      title: 'Qanooni Legal Law Suite',
      subtitle: 'Qanooni is a legal law suite that is used to generate, review and make global changes to legal documents for the users.',
      tags: ['NEXT.js', 'OAuth', 'Redux', 'React', 'REST APIs', 'Postgres', 'SQL Alchemy', 'Python', 'Docker', 'Azure', 'Postman', 'Web Sockets', 'FAST API', 'Alembic', 'Redis', 'Langchain', 'OpenAI', 'Prompt Engineering', 'MS Word API', 'RAG'],
      content: `
        <blockquote>
          <h3>Core Components</h3>
          <ul>
            <li><strong>Draft</strong> — Generate legal documents in user's tone and style</li>
            <li><strong>Review</strong> — Review and make necessary amendments</li>
            <li><strong>Global Changes</strong> — Apply changes across documents</li>
            <li><strong>QCounsel</strong> — AI-powered legal Q&A</li>
          </ul>
        </blockquote>
        <h3>My Contributions</h3>
        <ul>
          <li>Worked on Draft, Review and Global Changes for <strong>MVP launch</strong></li>
          <li>Built AI Chatbot to control <strong>Microsoft Word</strong> with clause-by-clause modifications</li>
          <li>Drafts are <strong>100% original</strong> based on user's previous documents and writing style</li>
        </ul>
      `,
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
      tags: ['NEXT.js', 'OAuth', 'Redux', 'React', 'REST APIs', 'Postgres', 'SQL Alchemy', 'Python', 'Docker', 'Cloudflared', 'AWS', 'Postman', 'Web Sockets', 'Stripe', 'FAST API', 'NVIDIA-SMI', 'Alembic', 'Redis', 'Linux/Shell'],
      content: `
        <blockquote>
          <h3>Key Achievements</h3>
          <ul>
            <li>Led a team of engineers to develop a <strong>cloud computing framework</strong> for AI Models deployment and parallel computation</li>
            <li>Built to scale for <strong>1 Million+ daily active users</strong> for model deployment</li>
            <li>Architected the entire cloud computing framework for <strong>parallel computation</strong></li>
          </ul>
        </blockquote>
        <h3>Technical Stack</h3>
        <p>Docker, WebSockets, Stripe Integration, Shell Scripting, Python, Postgres, SQLAlchemy, FAST API, and Cloudflare for backend. React, Redux, Typescript and NEXT.js for frontend.</p>
      `,
      images: [
        { src: './Assets/project_10.webp', alt: 'GPU Lab', basis: '50%' },
        { src: './Assets/gpu-lab-server-list.webp', alt: 'Image 3', basis: '50%' },
        { src: './Assets/gpu-lab-server.webp', alt: 'Image 2', basis: '50%' }
      ]
    },
    'modal-project-0': {
      title: 'NUCES BLOCKED',
      subtitle: 'A platform aimed to generate and decentralize verified academic portfolios worldwide.',
      tags: ['NEXT.js', 'React', 'GraphQL', 'Postgres', 'TypeORM', 'NEST.js', 'Solidity', 'Remix', 'Hardhat', 'Postman', 'Apollo', 'Python', 'Selenium', 'IPFS', 'Ethers.js', 'Vercel', 'React PDF'],
      link: 'https://nuces-blocked-frontend.vercel.app/nuces-blocked/landing',
      content: `
        <blockquote>
          <h3>Impact</h3>
          <ul>
            <li>Improved authenticity of degree distribution by <strong>80%</strong> using blockchain</li>
            <li>Saves <strong>75% of time</strong> normally spent verifying academic credentials</li>
          </ul>
        </blockquote>
        <h3>Key Features</h3>
        <ul>
          <li><strong>1-Click NFT Portfolios</strong> — Auto-generate and deploy globally</li>
          <li><strong>Easy Verification</strong> — Companies can download verified info instantly</li>
          <li><strong>Multi-Role Support</strong> — Teachers, counsellors, society heads can contribute</li>
          <li><strong>Consensus Mechanism</strong> — Intra-university validation from authorized parties</li>
          <li><strong>Low Bandwidth</strong> — Optimized with GraphQL API</li>
          <li><strong>Result Backup</strong> — Secure semester results storage</li>
        </ul>
      `,
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
      tags: ['XML', 'C#', 'Algorithms', 'Data Structures'],
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
        <ul>
          <li>Metro UI Design</li>
          <li>Full Compact Video Player Using AX Movie Player SDK</li>
          <li>Using Fisher Yates Algorithm For Recommendation System</li>
          <li>Using Hashing Algorithm For Ultra Fast Search Results</li>
          <li>Full localized Data Base System</li>
          <li>Efficient Usage Of Data Structures &amp; Algorithms</li>
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
      tags: ['Lua', 'Process Management', 'Desktop Development'],
      link: 'https://github.com/eqan/material-awesome',
      content: `<p>
        <h5>Original work by PapyElGringo</h5>
        <h6>This project is being further developed by Eqan Ahmad</h6>
        <h3>Features</h3>
        <ul>
          <li>Material Design UI</li>
          <li>A Full Desktop Replacement</li>
          <li>Built-In Native Lua Widgets</li>
          <li>Different Layouts</li>
          <li>Fully Customizable</li>
          <li>User Friendly</li>
          <li>300MB Idle Ram Consumption</li>
          <li>Vim Key-Bindings Supported</li>
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
      tags: ['XML', 'C#', 'T-SQL'],
      link: 'https://github.com/eqan/Instagram-ReImagened',
      content: `<p>
        A social media platform that utilizes SQL in a decentralized way
        <h3>Features</h3>
        <ul>
          <li>Flat UI</li>
          <li>Themes[Dark/Light]</li>
          <li>Localized Database using SQL at the back end</li>
          <li>All essential features of a social media app, post, stories, likes, bookmarks etc</li>
          <li>Activity Notification</li>
          <li>Search Engine</li>
          <li>Profile View</li>
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
      tags: ['React', 'Solidity', 'HardHat', 'Node', 'Blockchain'],
      link: 'https://github.com/eqan/BKrypt',
      content: `<p>
        A BlockChain Application To Make Transactions Convenient Using React & Solidity.
        <h3>Features</h3>
        <ul>
          <li>Glass Morphism + Gradient Design using tailwind</li>
          <li>Using MetaMask for transactions</li>
          <li>Full fledged blockchain application made with solidity</li>
          <li>Performance oriented used React for the front end</li>
          <li>Smart Contracts seamless integeration using hardhat</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_4.webp', alt: 'BKrypt', link: 'https://github.com/eqan/BKrypt' }]
    },
    'modal-project-5': {
      title: 'Starvation Analysis in Pakistan',
      subtitle: 'A desktop application that performs analysis and predicts starvation rates in Pakistan',
      tags: ['PYQT5', 'Distribution Models', 'Prediction Models', 'Regression Models', 'Data Science'],
      link: 'https://github.com/eqan/Starvation-Period-Analysis-And-Forecast',
      content: `<p>
        A desktop application that performs analysis and predicts starvation rates in Pakistan using numerous
        distribution techniques, regression models, forcasting models etc
        <h3>Features</h3>
        <ul>
          <li>Simple UI using PYQT5</li>
          <li>Different charts such as histogram, line graph etc to point the trends of data.</li>
          <li>Facebooks Prophet for Trend Prediction</li>
          <li>Distribution models such as binomial, pisson for different data generation.</li>
          <li>Regression models such as linear, polynomial, and multiple regression to predict the accuracy of
            relationships between different factors.</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_5.webp', alt: 'Starvation', link: 'https://github.com/eqan/Starvation-Period-Analysis-And-Forecast' }]
    },
    'modal-project-6': {
      title: 'X-axis OS',
      subtitle: 'An OS simulator',
      tags: ['Glade', 'Shell Scripting', 'C', 'Algorithms'],
      link: 'https://github.com/eqan/Xaxis-OS',
      content: `<p>
        An OS simulator that utilizes the concepts of multithreading, semaphores etc for process handling.
        <h3>Features</h3>
        <ul>
          <li>Material UI made with glade.</li>
          <li>C used for ultra fast performance.</li>
          <li>Semaphores, multithreading and bankers algorithm embedded.</li>
          <li>Builtin Custom Shell, virtual drive and ram.</li>
          <li>Can launch linux applications and store in its virtual memory.</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_6.webp', alt: 'Xaxis OS', link: 'https://github.com/eqan/Xaxis-OS' }]
    },
    'modal-project-7': {
      title: 'Hangman',
      subtitle: 'Hangman game made with Bash scripting & GTK Dialog.',
      tags: ['GTKDialog', 'Shell Scripting'],
      link: 'https://github.com/eqan/Hangman-In-Shell',
      content: `<p>
        An interactive hangman game made with bash scripting for the backend and GTKDialog for the frontend.
        <h3>Features</h3>
        <ul>
          <li>Intutive UI made with GTKDialog.</li>
          <li>Native support for linux derivatives.</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_7.webp', alt: 'Hangman', link: 'https://github.com/eqan/Hangman-In-Shell' }]
    },
    'modal-project-8': {
      title: 'IGI Predator',
      subtitle: 'A bot that plays IGI game using Human Detection Model.',
      tags: ['Python', 'Machine Learning', 'OpenCV'],
      link: 'https://github.com/eqan/Mini-AI-Projects/tree/main/1.%20IGI_Predator',
      content: `<p>
        A bot that plays IGI game using Human Detection Model, controlled by
        <h3>Features</h3>
        <ul>
          <li>Human Detection</li>
          <li>Human Kill</li>
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
      tags: ['MERN', 'MUI'],
      link: 'https://github.com/eqan/Sneaker-Ecommerce',
      content: `<p>
        An ecommerce website that performs basic functionalities found in a normal ecomemrce website
        <h3>Features</h3>
        <ul>
          <li>Material UI design with react</li>
          <li>Integeration of credentials validation using Formik and Yup</li>
          <li>All necessary features of backend implemented</li>
          <li>Private API integeration[Some routes are specifically designated for admin]</li>
          <li>Toast integerated for notifications/pop ups</li>
          <li>Pagination embedded for loading items in small amounts</li>
          <li>Dynamic rendering/routing</li>
          <li>Local storage for access token storage and user session retention</li>
        </ul>
      </p>`,
      images: [{ src: './Assets/project_9.webp', alt: 'Sneaker-Ecommerce', link: 'https://github.com/eqan/Sneaker-Ecommerce' }]
    }
  },

  // Experiences timeline - Concise, metric & impact focused
  experiences: [
    {
      date: 'Jul 2025 – Present',
      title: 'SuperQ Quantum',
      role: 'Lead Software Engineer',
      icon: 'fa-bolt',
      metrics: ['Quantum Computing', 'NLP/LLM Integration'],
      highlights: [
        'Leading development of <strong>Super Q</strong> and <strong>ChatQPU</strong> products',
        'Bridging classical & gate-based quantum computing via NLP/LLM'
      ],
      tech: ['QuEra', 'Amazon Braket', 'IonQ', 'NVIDIA CUDA Q', 'Dwave', 'Gurobi']
    },
    {
      date: 'Jul 2025 – Present',
      title: 'Staque',
      role: 'AI Software Engineer',
      icon: 'fa-magic',
      metrics: ['3 AI Products', 'Multi-platform Integration'],
      highlights: [
        '<strong>Akito AI</strong> — AI platform for employers & job seekers with Riipen integration',
        '<strong>Que BDR</strong> — Agentic AI for lead management',
        '<strong>Que Marketer</strong> — Multimodal AI for social media content'
      ],
      tech: ['AI/ML', 'Agentic AI', 'Multimodal']
    },
    {
      date: 'Sep 2024 – Apr 2025',
      title: 'Qanooni.ai',
      role: 'AI Engineer',
      icon: 'fa-gavel',
      metrics: ['60% model performance boost', '83% prompt accuracy', '1M+ user scale'],
      highlights: [
        'Built AI Chatbot controlling <strong>MS Word</strong> for clause-by-clause legal drafting',
        'Implemented <strong>RAG</strong> for law data collection — <strong>60%</strong> performance boost',
        'Prompt engineering with <strong>83%</strong> accuracy in draft generation'
      ],
      tech: ['Langchain', 'GPT-4', 'Claude', 'FAST API', 'Next.js']
    },
    {
      date: '2021 – Present',
      title: 'Freelancer',
      role: 'Top Vetted Engineer',
      icon: 'fa-briefcase',
      metrics: ['300+ projects', '4.9★ rating', 'Top vetted @ Toptal'],
      highlights: [
        '<strong>Toptal</strong> — Top vetted freelancer',
        '<strong>Fiverr</strong> — Level 2 seller, 200+ projects',
        '<strong>Upwork</strong> — Emerging Talent badge'
      ],
      tech: ['Web Dev', 'Blockchain', 'DevOps', 'Gen AI']
    },
    {
      date: 'Jul 2023 – Jul 2024',
      title: 'Stable Diffusion',
      role: 'Lead Cloud Engineer',
      icon: 'fa-cloud',
      metrics: ['1M+ DAU target', '60% cost reduction', '$1000+ GPU savings/day'],
      highlights: [
        'Architected cloud AI framework for <strong>1M+ daily users</strong>',
        'Reduced 3rd party costs by <strong>60%</strong>',
        'Optimized GPU allocation saving <strong>$1000+/day</strong>'
      ],
      tech: ['Docker', 'FAST API', 'PostgreSQL', 'Azure', 'AWS S3']
    },
    {
      date: 'Mar 2020 – Apr 2023',
      title: 'Microslush',
      role: 'Associate Software Engineer',
      icon: 'fa-code',
      metrics: ['200% API speedup', '70% UX improvement', '1M+ users impacted'],
      highlights: [
        'Built <strong>Binance NFT marketplace</strong> — improved API speed by <strong>200%</strong>',
        'Desktop apps impacting <strong>1M+ users</strong> with <strong>70%</strong> UX improvement',
        'Reduced bugs by <strong>30-40%</strong> with automated testing'
      ],
      tech: ['NEST.js', 'GraphQL', 'C#/.NET', 'Solidity', 'MQL4']
    }
  ],

  // Honors - Concise format
  honors: [
    {
      date: '2023',
      title: 'PM National Innovation Award Finalist',
      icon: 'fa-trophy',
      metric: 'Top 50 / 20,000',
      description: 'NUCES BLOCKED project selected from 20,000+ applications nationwide',
      details: ['2-month entrepreneurship training at UET Lahore & NUST Islamabad']
    },
    {
      date: '2019',
      title: 'Top 5 UI/UX Designer',
      icon: 'fa-paint-brush',
      metric: 'Top 5',
      description: 'Ranked among top 5 in UI/UX course across the entire institute'
    }
  ],

  // Education - Modern format
  education: [
    {
      date: '2019 – 2023',
      title: 'FAST NUCES',
      icon: 'fa-graduation-cap',
      degree: 'BS Computer Science',
      institution: 'National University of Computer & Emerging Sciences',
      location: 'Pakistan'
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
