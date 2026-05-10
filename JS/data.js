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
    { id: 'section-01', num: '01', label: 'Top', icon: 'fa-rocket' },
    { id: 'section-02', num: '02', label: 'About me', icon: 'fa-user' },
    { id: 'section-03', num: '03', label: 'Services', icon: 'fa-cogs' },
    { id: 'section-04', num: '04', label: 'Expertise', icon: 'fa-diamond' },
    { id: 'section-05', num: '05', label: 'Projects', icon: 'fa-folder-open' },
    { id: 'section-06', num: '06', label: 'Experiences', icon: 'fa-briefcase' },
    { id: 'section-07', num: '07', label: 'Honors', icon: 'fa-trophy' },
    { id: 'section-08', num: '08', label: 'Education', icon: 'fa-graduation-cap' },
    { id: 'section-09', num: '09', label: 'Testimonials', icon: 'fa-comments' },
    { id: 'section-10', num: '10', label: 'Contact', icon: 'fa-envelope' }
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
    { icon: 'fa-code', label: 'Full Stack', duration: '5+ Years' },
    { icon: 'fa-magic', label: 'GenAI / LLMs', duration: '2+ Years' },
    { icon: 'fa-cloud', label: 'Cloud & DevOps', duration: '2+ Years' },
    { icon: 'fa-bolt', label: 'Quantum', duration: '1+ Year' },
    { icon: 'fa-chain', label: 'Web3', duration: '2+ Years', arrowLeft: true }
  ],

  // Featured projects (large cards)
  featuredProjects: [
    {
      id: 'modal-project-chatqlm',
      img: './Assets/Chatqlm-Hero.webp',
      title: 'ChatQLM',
      subtitle: 'CES 2026 World Premiere consumer quantum/supercomputing app that turns natural-language optimization problems into executable quantum workflows.',
      tags: ['React Native', 'Python', 'Quantum Computing', 'NLP', 'Gurobi', 'Amazon Braket', 'IonQ', 'QuEra', 'D-Wave', 'REST APIs'],
      priority: 1,
      size: 'full',
      category: 'Quantum',
      year: 2026,
      status: 'CES 2026',
      metrics: ['World Premiere', 'Quantum AI', 'CSE: QBTQ']
    },
    {
      id: 'modal-project-10',
      img: './Assets/project_10.webp',
      title: 'GPU Lab',
      subtitle: 'Custom GPU cluster platform for deploying LLM and diffusion workloads on in-house infrastructure while cutting third-party cloud costs.',
      tags: ['NEXT.js', 'React', 'Redux', 'Python', 'FAST API', 'Postgres', 'Docker', 'WebSockets', 'Stripe', 'Cloudflare', 'AWS', 'Linux/Shell'],
      priority: 1,
      size: 'full',
      category: 'Cloud',
      year: 2024,
      status: 'Live',
      metrics: ['400K+ MAU', '60% cost cut', '$1M+ revenue']
    },
    {
      id: 'modal-project-11',
      img: './Assets/project_11.webp',
      title: 'Qanooni Legal Law Suite',
      subtitle: 'Full-stack AI legal drafting suite for Draft, Review, and Global Changes workflows powered by RAG and Microsoft Word automation.',
      tags: ['NEXT.js', 'React', 'FAST API', 'PostgreSQL', 'Python', 'LangChain', 'LangSmith', 'Pinecone', 'WebSockets', 'MS Word API', 'RAG', 'LLM Guardrails'],
      priority: 1,
      size: 'full',
      category: 'AI',
      year: 2025,
      status: 'Live',
      metrics: ['58% workload cut', '$2M pre-seed', '83% accuracy']
    },
    {
      id: 'modal-project-0',
      img: './Assets/nuces-blocked-add-certificates.webp',
      title: 'NUCES BLOCKED',
      subtitle: 'A platform aimed to generate and decentralize verified academic portfolios worldwide.',
      tags: ['NEXT.js', 'React', 'GraphQL', 'Postgres', 'TypeORM', 'NEST.js', 'Solidity', 'Remix', 'Hardhat', 'Postman', 'Apollo', 'Python', 'Selenium', 'IPFS', 'Ethers.js', 'Vercel', 'React PDF'],
      priority: 1,
      size: 'full',
      category: 'Blockchain',
      year: 2023,
      status: 'Award Winner',
      metrics: ['Top 50 / 20K', '80% authenticity', 'PM Innovation']
    },
    {
      id: 'modal-project-super',
      img: './Assets/Super-Hero.webp',
      title: 'Super™',
      subtitle: 'The ChatGPT of Quantum Computing — a revolutionary AI that bridges natural language problem descriptions, quantum and supercomputing technologies, and commercialized solutions.',
      tags: ['NEXT.js', 'React', 'Python', 'Gurobi', 'QuEra', 'Amazon Braket', 'IonQ', 'NVIDIA CUDA-Q', 'Dwave', 'NLP', 'LLM', 'Quantum Computing', 'REST APIs', 'WebSockets'],
      priority: 2,
      size: 'full',
      category: 'Quantum',
      year: 2026,
      status: 'Live',
      metrics: ['Multi-Quantum Backend', 'NLP → Code', '5+ Providers']
    },
    {
      id: 'modal-project-akito',
      img: './Assets/Akito-Talent.webp',
      title: 'Akito AI',
      subtitle: 'An AI-powered talent pipeline management platform for employers and job seekers with AI assessment generation, candidate management, and Riipen integration.',
      tags: ['NEXT.js', 'React', 'Node.js', 'OpenAI', 'REST APIs', 'Postgres', 'AI/ML', 'OAuth', 'Riipen', 'Web Crawling', 'Prompt Engineering'],
      priority: 2,
      size: 'full',
      category: 'AI',
      year: 2025,
      status: 'Live',
      metrics: ['Riipen Integrated', 'AI Assessments', 'Web Crawler']
    }
  ],

  // Regular projects (smaller cards)
  projects: [
    { id: 'modal-project-2', img: './Assets/project_2.webp', title: 'Material Awesome', subtitle: 'Linux Window manager & Desktop Environment Alternative', tags: ['Lua', 'Process Management', 'Desktop Development'], priority: 2, category: 'Tools', year: 2021, status: 'Open Source' },
    { id: 'modal-project-6', img: './Assets/project_6.webp', title: 'X-axis OS', subtitle: 'An OS simulator built with C, semaphores, multithreading, and Bankers algorithm', tags: ['C', 'Glade', 'Shell Scripting', 'Algorithms'], priority: 3, category: 'Tools', year: 2021, status: 'Open Source' },
    { id: 'modal-project-1', img: './Assets/project_1.webp', title: 'Netflix', subtitle: 'Video Streaming Application that is inspired by netflix', tags: ['XML', 'C#', 'Algorithms', 'Data Structures'], priority: 3, category: 'Desktop Apps', year: 2020, status: 'Open Source' },
    { id: 'modal-project-3', img: './Assets/project_3.webp', title: 'Instagram Re-Imagened', subtitle: 'A social media application made from scratch', tags: ['XML', 'C#', 'T-SQL'], priority: 3, category: 'Desktop Apps', year: 2021, status: 'Open Source' },
    { id: 'modal-project-5', img: './Assets/project_5.webp', title: 'Starvation Analysis in Pakistan', subtitle: 'A desktop application that performs analysis and predicts starvation rates in Pakistan', tags: ['PYQT5', 'Distribution Models', 'Prediction Models', 'Regression Models', 'Data Science'], priority: 3, category: 'AI', year: 2021, status: 'Open Source' },
    { id: 'modal-project-8', img: './Assets/project_8.webp', title: 'IGI Predator', subtitle: 'A bot that plays IGI game using Human Detection Model.', tags: ['Python', 'Machine Learning', 'OpenCV'], priority: 3, category: 'AI', year: 2021, status: 'Open Source' }
  ],

  // Project modal details
  projectModals: {
    'modal-project-super': {
      title: 'Super™',
      subtitle: 'The ChatGPT of Quantum Computing — a revolutionary AI that bridges natural language problem descriptions, quantum and supercomputing technologies, and commercialized solutions.',
      tags: ['NEXT.js', 'React', 'Python', 'Gurobi', 'QuEra', 'Amazon Braket', 'IonQ', 'NVIDIA CUDA-Q', 'Dwave', 'NLP', 'LLM', 'Quantum Computing', 'REST APIs', 'WebSockets'],
      content: `
        <blockquote>
          <h3>Key Highlights</h3>
          <ul>
            <li>Architected a consumer-facing quantum/supercomputing product suite connected to <strong>CSE: QBTQ</strong></li>
            <li>Integrated quantum backends including <strong>IonQ, QuEra, Amazon Braket, D-Wave, NVIDIA CUDA-Q, and Quanfluence</strong></li>
            <li>Built AI orchestration that translates natural language into executable <strong>Python optimization code</strong></li>
          </ul>
        </blockquote>
        <h3>Core Features</h3>
        <ul>
          <li><strong>Natural-language optimization</strong> — transforms business constraints into solver-ready workflows</li>
          <li><strong>Amazon Braket execution</strong> — provider APIs for execution, monitoring, and results retrieval</li>
          <li><strong>Optimization dashboards</strong> — visualizes results for high-stakes planning problems</li>
          <li><strong>Code generation</strong> — generates production-ready Gurobi/Python optimization code</li>
          <li><strong>Deep-tech UX</strong> — makes quantum and supercomputing accessible through familiar product interfaces</li>
        </ul>
      `,
      images: [
        { src: './Assets/Super-Hero.webp', alt: 'Super Hero', basis: '100%' },
        { src: './Assets/Super-Home.webp', alt: 'Super Home', basis: '50%' },
        { src: './Assets/Super-Viz.webp', alt: 'Optimization Dashboard', basis: '50%' },
        { src: './Assets/Super-Code.webp', alt: 'Super Code Generation', basis: '100%' }
      ]
    },
    'modal-project-chatqlm': {
      title: 'ChatQLM',
      subtitle: 'The world\'s first consumer app powered by quantum and supercomputing. Solve complex decisions in natural language — CES 2026 World Premiere.',
      tags: ['React Native', 'Python', 'Quantum Computing', 'NLP', 'Gurobi', 'Optimization', 'Mobile App', 'Super™ Platform', 'REST APIs'],
      content: `
        <blockquote>
          <h3>Key Highlights</h3>
          <ul>
            <li><strong>CES 2026 World Premiere</strong> — First mobile quantum computing app</li>
            <li>Powered by the <strong>Super™ Platform</strong></li>
            <li>Publicly traded — <strong>CSE: QBTQ</strong> | <strong>OTC: QBTQF</strong> | <strong>FSE: 25X</strong></li>
          </ul>
        </blockquote>
        <h3>Core Features</h3>
        <ul>
          <li><strong>Quick Start Templates</strong> — Budget Allocation, Machine Scheduling, Portfolio Optimization, Grover's Search, Shor's Factorization</li>
          <li><strong>Natural Language Input</strong> — Describe optimization problems in plain English</li>
          <li><strong>Optimization Results</strong> — Rich visualizations with slot staffing, surge analysis, and more</li>
          <li><strong>Quantum Circuits</strong> — Build & execute quantum experiments directly</li>
          <li><strong>Impact Tracking</strong> — Track total problems solved, quantum runs, and success rates</li>
          <li><strong>General Chat</strong> — AI-powered conversational interface for problem solving</li>
        </ul>
      `,
      images: [
        { src: './Assets/Chatqlm-Hero.webp', alt: 'ChatQLM Hero', basis: '100%' },
        { src: './Assets/Chatqlm-Main.webp', alt: 'ChatQLM Home', basis: '50%' },
        { src: './Assets/Chatqlm-Problem-Set.webp', alt: 'ChatQLM Problem Set', basis: '50%' },
        { src: './Assets/Chatqlm-budget-problem.webp', alt: 'Budget Allocation', basis: '50%' },
        { src: './Assets/Chatqlm-Viz.webp', alt: 'Optimization Results', basis: '50%' }
      ]
    },
    'modal-project-akito': {
      title: 'Akito AI',
      subtitle: 'An AI-powered talent pipeline management platform for employers and job seekers with AI assessment generation, candidate management, and Riipen integration.',
      tags: ['NEXT.js', 'React', 'Node.js', 'OpenAI', 'REST APIs', 'Postgres', 'AI/ML', 'OAuth', 'Riipen', 'Web Crawling', 'Prompt Engineering'],
      content: `
        <blockquote>
          <h3>Key Highlights</h3>
          <ul>
            <li>AI-powered platform connecting <strong>employers</strong> and <strong>job seekers</strong></li>
            <li>Automated <strong>assessment generation</strong> with AI — MCQs, multi-select, short/long answers</li>
            <li>Built with <strong>Next.js, React, Python/FastAPI, Supabase/Postgres</strong> and Riipen integration</li>
          </ul>
        </blockquote>
        <h3>Employer Features</h3>
        <ul>
          <li><strong>Talent Pipeline Management</strong> — Create job listings, manage candidates, track assessment links</li>
          <li><strong>AI Assessment Creation</strong> — Generate comprehensive assessments via chat with split view canvas</li>
          <li><strong>Analytics & Recommendations</strong> — Data-driven insights for hiring decisions</li>
          <li><strong>API Keys & Data Sources</strong> — Enterprise-grade integration capabilities</li>
          <li><strong>Web Crawler</strong> — Automated talent sourcing from the web</li>
        </ul>
        <h3>Job Seeker Features</h3>
        <ul>
          <li><strong>Available Jobs</strong> — Browse and apply to positions across organizations</li>
          <li><strong>Jobs Applied</strong> — Track application status</li>
          <li><strong>Recommendations</strong> — AI-powered job matching</li>
        </ul>
      `,
      images: [
        { src: './Assets/Akito-Talent.webp', alt: 'Talent Pipeline Management', basis: '100%' },
        { src: './Assets/Akito-Chat.webp', alt: 'AI Assessment Generation', basis: '50%' },
        { src: './Assets/Akito-Assessment.webp', alt: 'Assessment View', basis: '50%' },
        { src: './Assets/Akito-job-seeker.webp', alt: 'Job Seeker Dashboard', basis: '100%' }
      ]
    },
    'modal-project-11': {
      title: 'Qanooni Legal Law Suite',
      subtitle: 'AI legal drafting suite for Draft, Review, and Global Changes workflows using RAG, LLM guardrails, and Microsoft Word automation.',
      tags: ['NEXT.js', 'React', 'FAST API', 'PostgreSQL', 'Python', 'LangChain', 'LangSmith', 'Pinecone', 'WebSockets', 'MS Word API', 'RAG', 'LLM Guardrails'],
      content: `
        <blockquote>
          <h3>Impact</h3>
          <ul>
            <li><strong>Draft</strong> — Generate legal documents in user's tone and style</li>
            <li><strong>Review</strong> — Review and make necessary amendments</li>
            <li><strong>Global Changes</strong> — Apply changes across documents</li>
            <li><strong>QCounsel</strong> — AI-powered legal Q&A</li>
          </ul>
        </blockquote>
        <h3>Core Components</h3>
        <ul>
          <li><strong>Draft, Review, Global Changes</strong> — full-stack legal drafting workflows in Next.js, FastAPI, and PostgreSQL</li>
          <li><strong>Advanced RAG</strong> — LangChain, LangSmith, semantic chunking, Pinecone vector DB, and LLM guardrails</li>
          <li><strong>Microsoft Word AI</strong> — WebSocket-powered chatbot for clause-by-clause modifications</li>
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
            <li>Architected the entire cloud computing framework for <strong>parallel computation</strong></li>
            <li>Reduced third-party cloud costs by <strong>60%</strong></li>
            <li>Scaled Models Lab to <strong>400,000+ MAU</strong> and <strong>$1M+ annual revenue</strong></li>
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
            <li><strong>Prime Minister National Innovation Award Finalist</strong> selected from 20,000+ applications</li>
            <li>Improved authenticity of degree distribution by <strong>80%</strong> using full-stack Web3 architecture</li>
            <li>Saved <strong>75%</strong> of verification time through 1-click NFT portfolios and consensus mechanisms</li>
          </ul>
        </blockquote>
        <h3>Key Features</h3>
        <ul>
          <li><strong>1-Click NFT Portfolios</strong> — Auto-generate and deploy globally</li>
          <li><strong>Easy Verification</strong> — Companies can download verified info instantly</li>
          <li><strong>Entrepreneurship Training</strong> — pitched at NUST Islamabad after KICS training at UET Lahore</li>
          <li><strong>Consensus Mechanism</strong> — Intra-university validation from authorized parties</li>
          <li><strong>Web3 Stack</strong> — React, Nest, Jest, Typescript, Solidity, Ethers.js, IPFS, and GraphQL</li>
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
      subtitle: 'A C#/.NET desktop video streaming application inspired by Netflix.',
      tags: ['XML', 'C#', 'Algorithms', 'Data Structures'],
      link: 'https://github.com/eqan/Netflix-In-CSharp',
      content: `
      <blockquote>
        <h3>Features</h3>
        <ul>
          <li>Built a Netflix-inspired desktop streaming application using <strong>C#</strong> and <strong>XML</strong></li>
          <li>Implemented a custom AX Movie Player experience for compact video playback</li>
          <li>Used the <strong>Fisher-Yates algorithm</strong> for recommendations based on collected user interactions</li>
          <li>Applied hashing algorithms for fast local search across video data</li>
          <li>Mastered usage of data structures such as doubly linkedlist for video navigation, Queue for watched history etc.
        </ul>
      </blockquote>
      <h3>Learning Focus</h3>
      <ul>
        <li>Data structures, algorithmic recommendations, and desktop UI patterns</li>
      </ul>
      <h2>Note</h2>
      <p>This project was built for educational purposes and has no relationship with Netflix or any other video streaming service.</p>`,
      images: [{ src: './Assets/project_1.webp', alt: 'Netflix', link: 'https://github.com/eqan/Netflix-In-CSharp' }]
    },
    'modal-project-2': {
      title: 'Material Awesome',
      subtitle: 'Linux Window manager & Desktop Environment Alternative',
      tags: ['Lua', 'Process Management', 'Desktop Development'],
      link: 'https://github.com/eqan/material-awesome',
      content: `
      <blockquote>
        <h3>Systems Engineering</h3>
        <ul>
          <li>Maintained a lightweight Linux window manager replacement built with <strong>Lua</strong></li>
          <li>Kept idle memory usage under approximately <strong>300MB</strong></li>
          <li>Supported native widgets, layouts, customization, and Vim-style key bindings</li>
        </ul>
      </blockquote>`,
      images: [{ src: './Assets/project_2.webp', alt: 'Awesome', link: 'https://github.com/eqan/material-awesome' }]
    },
    'modal-project-3': {
      title: 'Instagram Re-Imagened',
      subtitle: 'A C# desktop Instagram clone with localized T-SQL backend and custom flat UI.',
      tags: ['XML', 'C#', 'T-SQL'],
      link: 'https://github.com/eqan/Instagram-ReImagened',
      content: `
        <blockquote>
          <h3>Desktop App Showcase</h3>
          <ul>
            <li>Built a fully functional Instagram clone with <strong>C#</strong>, <strong>XML</strong>, and <strong>T-SQL</strong></li>
            <li>Implemented core social media functionality including posts, stories, activity tracking, profiles, profile following, and bio data</li>
            <li>Designed custom flat UI patterns with dark/light theme support</li>
          </ul>
        </blockquote>
        <h3>Features</h3>
        <ul>
          <li>Localized SQL backend for desktop data persistence</li>
          <li>Activity notifications, search, and profile views</li>
          <li>Posts, stories, likes, bookmarks, and other social interactions</li>
        </ul>
      `,
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
      tags: ['PyQt5', 'Prophet', 'Distribution Models', 'Regression Models', 'Data Science'],
      link: 'https://github.com/eqan/Starvation-Period-Analysis-And-Forecast',
      content: `
        <blockquote>
          <h3>Classical AI & Data Science</h3>
          <ul>
            <li>Built a <strong>PyQt5</strong> desktop application for analyzing and forecasting starvation trends in Pakistan</li>
            <li>Used Prophet, distribution models, and regression models for trend prediction</li>
          </ul>
        </blockquote>
        <h3>Modeling Features</h3>
        <ul>
          <li>Histogram and line chart views for exploring data trends</li>
          <li>Prophet forecasting for trend prediction</li>
          <li>Linear, polynomial, and multiple regression models</li>
          <li>Binomial and Poisson distribution-based data generation experiments</li>
        </ul>
      `,
      images: [{ src: './Assets/project_5.webp', alt: 'Starvation', link: 'https://github.com/eqan/Starvation-Period-Analysis-And-Forecast' }]
    },
    'modal-project-6': {
      title: 'X-axis OS',
      subtitle: 'An OS simulator',
      tags: ['Glade', 'Shell Scripting', 'C', 'Algorithms'],
      link: 'https://github.com/eqan/Xaxis-OS',
      content: `
        <blockquote>
          <h3>Systems Engineering</h3>
          <ul>
            <li>Built an OS simulator in <strong>C</strong> using multithreading, semaphores, and Banker's algorithm</li>
            <li>Created a custom shell, virtual drive, and virtual memory simulation</li>
          </ul>
        </blockquote>
        <h3>Features</h3>
        <ul>
          <li>Glade-based desktop interface</li>
          <li>Process handling concepts with synchronization primitives</li>
          <li>Linux application launching and virtual memory storage concepts</li>
        </ul>
      `,
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
      content: `
        <blockquote>
          <h3>Classical AI & Computer Vision</h3>
          <ul>
            <li>Built a Python/OpenCV game automation bot using human detection in the IGI game environment</li>
            <li>Used computer vision to identify and target players in real time</li>
          </ul>
        </blockquote>
        <h3>Features</h3>
        <ul>
          <li>Human detection pipeline with OpenCV</li>
          <li>Targeting and action automation for gameplay experiments</li>
        </ul>
      `,
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
      date: 'Jul 2025 – Apr 2026',
      title: 'Staque',
      role: 'Lead Full Stack Engineer',
      icon: 'fa-magic',
      metrics: ['CES 2026 World Premiere', 'Quantum AI', 'Amazon Braket APIs'],
      highlights: [
        'Architected <strong>Super™</strong> and <strong>ChatQLM</strong>, consumer apps powered by quantum/supercomputing',
        'Built React frontends end-to-end across Staque/Super products',
        'Developed AI orchestration bridging natural language with IonQ, QuEra, Amazon Braket, D-Wave, NVIDIA CUDA-Q, and Quanfluence',
        'Built <strong>Akito AI</strong> with Next.js, React, Python/FastAPI, Supabase/Postgres, split-view React canvas, and web crawling'
      ],
      tech: ['React', 'Next.js', 'Python', 'FastAPI', 'Amazon Braket', 'IonQ', 'QuEra', 'D-Wave', 'CUDA-Q', 'Gurobi', 'Agentic Workflows']
    },
    {
      date: 'Sep 2024 – Apr 2025',
      title: 'Qanooni AI',
      role: 'Full Stack AI Engineer',
      icon: 'fa-gavel',
      metrics: ['58% workload reduction', '$2M pre-seed', '83% accuracy'],
      highlights: [
        'Engineered Draft, Review, and Global Changes modules for MVP launch using Next.js, FastAPI, and PostgreSQL',
        'Implemented advanced RAG with LangChain, LangSmith, semantic chunking, Pinecone, and LLM guardrails',
        'Developed a dynamic AI chatbot controlling Microsoft Word API via WebSockets for clause-by-clause drafting'
      ],
      tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'LangChain', 'LangSmith', 'Pinecone', 'WebSockets', 'MS Word API', 'RAG']
    },
    {
      date: 'Feb 2024 – Present',
      title: 'AlphaSights',
      role: 'Software Consultant',
      icon: 'fa-comments',
      metrics: ['20+ engagements', 'Fortune 500', 'AI / Quantum / Cloud'],
      highlights: [
        'Advise Fortune 500 companies on platform scaling strategy across 20+ engagements',
        'Evaluate AI/ML, GPU cloud, quantum simulation, and Web3 stacks for clients such as Guidepoint',
        'Recommend architectures by weighing scaling, cost, and complexity tradeoffs'
      ],
      tech: ['AI/ML', 'Quantum Computing', 'Cloud Infrastructure', 'Blockchain', 'Platform Scaling']
    },
    {
      date: 'Jun 2023 – Jul 2024',
      title: 'Models Lab / GPU Lab',
      role: 'Lead Full Stack Cloud Engineer',
      icon: 'fa-cloud',
      metrics: ['400K+ MAU', '$1M+ revenue', '60% cost reduction'],
      highlights: [
        'Led full-stack engineering team to architect <strong>GPU Lab</strong> for in-house LLM deployments',
        'Scaled Models Lab to <strong>400,000+ MAU</strong> and <strong>$1M+ revenue earned within 1 year</strong>',
        'Developed multimodal diffusion pipelines using SDXL and LangChain with React/Redux frontends'
      ],
      tech: ['Docker', 'FastAPI', 'PostgreSQL', 'React', 'Redux', 'WebSockets', 'Stripe', 'Cloudflare', 'AWS']
    },
    {
      date: 'Sep 2022 – Present',
      title: 'Freelance',
      role: 'Forward Deployed Full Stack Engineer',
      icon: 'fa-briefcase',
      metrics: ['160+ Forex projects', '4.8+ rating', '2.5 week AI build'],
      highlights: [
        'Used AI-assisted delivery with Copilot and Cursor to ship <strong>Skoolie Support</strong> in 2.5 weeks',
        'Boosted YouTube views and referral revenue by <strong>30%</strong>',
        'Completed 160+ Forex automation projects using MQL4/5 and Pine Script with 70+ reviews'
      ],
      tech: ['Next.js', 'FastAPI', 'AI Chatbots', 'MQL4/5', 'Pine Script', 'Cursor', 'Copilot']
    },
    {
      date: 'Jan 2022 – Apr 2023',
      title: 'Microslush',
      role: 'Associate Software Engineer',
      icon: 'fa-code',
      metrics: ['4K+ DAU', '200% speedup', '1M+ desktop users'],
      highlights: [
        'Applied Agile SDLC to develop a Binance-based NFT marketplace Indexer API using Nest.js and GraphQL',
        'Improved backend speed by <strong>200%</strong> using PostgreSQL indexing, GraphQL, and Redis caching',
        'Scaled .NET desktop solutions to <strong>1M+ MAU</strong> while preserving core business workflows'
      ],
      tech: ['Nest.js', 'GraphQL', 'PostgreSQL', 'Redis', 'C#/.NET', 'Agile SDLC']
    }
  ],

  // Honors - Concise format
  honors: [
    {
      date: '2026',
      title: 'CES 2026 World Premiere',
      icon: 'fa-bolt',
      metric: '$5M Round',
      description: 'Super™ and ChatQLM selected as consumer apps powered by quantum/supercomputing',
      details: ['Built at Staque across Super and ChatQLM product lines']
    },
    {
      date: '2023',
      title: 'Prime Minister National Innovation Award Finalist',
      icon: 'fa-trophy',
      metric: 'Top 50 / 20,000',
      description: 'NUCES BLOCKED selected from 20,000+ applications nationwide and honored at the Prime Minister\'s House, Pakistan',
      details: ['Pitched at NUST Islamabad after KICS entrepreneurship training at UET Lahore']
    },
    {
      date: '2025',
      title: 'Qanooni AI Pre-seed Contribution',
      icon: 'fa-rocket',
      metric: '$2M Round',
      description: 'Shipped MVP modules that reduced attorney manual workload by 58%',
      details: ['Draft, Review, Global Changes, RAG, and Microsoft Word AI workflows']
    }
  ],

  // Education - Modern format
  education: [
    {
      date: 'Aug 2019 – Jun 2023',
      title: 'FAST NUCES',
      icon: 'fa-graduation-cap',
      degree: 'Bachelors in Computer Science',
      institution: 'National University of Computer & Emerging Sciences',
      location: 'Pakistan'
    },
    {
      date: 'May 2024 – Jun 2024',
      title: 'LUMS',
      icon: 'fa-university',
      degree: 'Executive Short Course, Entrepreneurship',
      institution: 'Lahore University of Management Sciences',
      location: 'Pakistan'
    },
    {
      date: '2022 – 2023',
      title: 'UET Lahore',
      icon: 'fa-lightbulb-o',
      degree: 'KICS Training, Entrepreneurship & Business Admin.',
      institution: 'University of Engineering and Technology',
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
