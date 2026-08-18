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
      id: 'modal-project-dispatch',
      img: './Assets/fleetdispatcher.webp',
      title: 'Dispatch Mission Control',
      subtitle: 'Senior-grade logistics dispatch platform with Redis-first state, event-driven optimization, Kubernetes deployment, and real-time SSE updates.',
      tags: ['Bun', 'TypeScript', 'React', 'Express', 'Redis', 'MongoDB', 'Zod', 'Kubernetes', 'Helm', 'Grafana', 'Prometheus', 'Loki', 'SSE'],
      priority: 1,
      size: 'full',
      category: 'Cloud',
      year: 2026,
      status: 'Public',
      metrics: ['Redis-first', 'Helm + kind', 'SSE + Grafana']
    },
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
    'modal-project-dispatch': {
      title: 'Dispatch Mission Control',
      subtitle: 'A full-stack logistics dispatch platform built as a Bun monorepo with atomic Redis workflows, asynchronous optimization, and production-style Kubernetes observability.',
      tags: ['Bun Monorepo', 'React', 'Express', 'TypeScript', 'Redis Lua', 'Redis Streams', 'MongoDB', 'Zod', 'SSE', 'Kubernetes', 'Helm', 'Grafana', 'Prometheus', 'Loki', 'pytest'],
      content: `
        <blockquote>
          <h3>Key Highlights</h3>
          <ul>
            <li>Built a <strong>senior-grade dispatch platform</strong> with shared Zod schemas for end-to-end type safety across the React SPA, Express API, and worker services</li>
            <li>Architected a <strong>Redis-first control plane</strong> using Lua scripts for atomic mutations, Redis Streams for optimization jobs, and SSE fan-out across API replicas</li>
            <li>Shipped a <strong>production-style platform workflow</strong> with kind, Helm, ingress-nginx, HPA, NetworkPolicies, pytest infra smoke tests, and Grafana/Prometheus/Loki monitoring</li>
          </ul>
        </blockquote>
        <h3>Platform Capabilities</h3>
        <ul>
          <li><strong>Real-time dispatch board</strong> — optimistic frontend updates keep assignments, orders, and vehicle state responsive for operators</li>
          <li><strong>Asynchronous optimization pipeline</strong> — optimize requests queue through Redis Streams, execute in a worker, then replay results back to clients over SSE</li>
          <li><strong>Hot + durable storage split</strong> — Redis handles low-latency operational state while MongoDB stores saved snapshots and boot hydration</li>
          <li><strong>Type-safe monorepo contracts</strong> — shared schemas remove drift between frontend, backend, and infrastructure-facing integrations</li>
        </ul>
        <h3>Operations & Reliability</h3>
        <ul>
          <li><strong>One-command bootstrap</strong> — provisions cluster dependencies, monitoring, TLS, deployments, and ingress smoke checks from a single control script</li>
          <li><strong>Probe-aware resilience</strong> — readiness depends on Redis/Mongo health while liveness stays dependency-free to avoid restart loops during transient outages</li>
          <li><strong>Built-in observability</strong> — pre-provisioned Grafana dashboards surface route heatmaps, 4xx/5xx trends, dependency latency, pod health, and API logs</li>
          <li><strong>Deployment flexibility</strong> — Kubernetes is the primary path, with Docker Compose retained as a fallback for no-cluster demos</li>
        </ul>
      `,
      images: [
        { src: './Assets/fleetdispatcher.webp', alt: 'Dispatch Mission Control logistics dispatch interface', basis: '50%' },
        { src: './Assets/fleetdispatcher-grafana-dashboard.webp', alt: 'Dispatch Mission Control Grafana observability dashboard', basis: '50%' }
      ]
    },
    'modal-project-super': {
      title: 'Super™',
      subtitle: 'The ChatGPT of Quantum Computing — a revolutionary AI that bridges natural language problem descriptions, quantum and supercomputing technologies, and commercialized solutions.',
      tags: ['NEXT.js', 'React', 'Python', 'Gurobi', 'QuEra', 'Amazon Braket', 'IonQ', 'NVIDIA CUDA-Q', 'Dwave', 'NLP', 'LLM', 'Quantum Computing', 'REST APIs', 'WebSockets'],
      content: `
        <blockquote>
          <h3>Key Highlights</h3>
          <ul>
            <li>Architected <strong>CES 2026 World Premiere</strong> product surfaces for a consumer quantum/supercomputing platform connected to <strong>CSE: QBTQ</strong></li>
            <li>Built React/Tailwind product interfaces, Node.js service flows, and Python orchestration that bridged natural language requests with real quantum providers</li>
            <li>Integrated backends including <strong>IonQ, QuEra, Amazon Braket, D-Wave, NVIDIA CUDA-Q, and Quanfluence</strong> for execution, monitoring, and result retrieval</li>
          </ul>
        </blockquote>
        <h3>Product & Experience</h3>
        <ul>
          <li><strong>Natural-language optimization</strong> — transforms business constraints into solver-ready workflows</li>
          <li><strong>Code generation</strong> — converts prompts into executable optimization logic and Python/Gurobi-style workflows</li>
          <li><strong>Optimization dashboards</strong> — visualizes outcomes for planning and high-stakes decision support</li>
          <li><strong>Deep-tech UX</strong> — makes advanced quantum and supercomputing concepts approachable through familiar consumer-style interfaces</li>
        </ul>
        <h3>Platform Depth</h3>
        <ul>
          <li><strong>Provider orchestration</strong> — handles execution routing, job monitoring, and retrieval across multiple quantum backends</li>
          <li><strong>Internal admin surfaces</strong> — dashboards for regional user stats, solved problems, password resets, DB lookup, and partner-facing operational visibility</li>
          <li><strong>Reliability & security</strong> — informed by AI-assisted security testing across backend and PWA surfaces, covering auth, billing, prompt-injection, CSP, CORS, and logging posture</li>
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
            <li>Powered by the <strong>Super™ Platform</strong> and launched as part of the broader Staque quantum product suite</li>
            <li>Served an estimated <strong>2,000 users</strong> and routed approximately <strong>4,000 quantum jobs</strong> through queued provider workflows</li>
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
        <h3>Execution Pipeline</h3>
        <ul>
          <li><strong>Queued quantum processing</strong> — AWS SQS-backed orchestration pushed thousands of jobs through provider execution paths without blocking the user experience</li>
          <li><strong>Amazon Braket integration</strong> — provider APIs handled execution, monitoring, and results retrieval for real quantum workloads</li>
          <li><strong>Operational visibility</strong> — internal admin tooling exposed product metrics, problem counts, regional usage, and CloudWatch-linked observability for the team</li>
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
            <li>Built as an <strong>AI-native talent pipeline</strong> connecting employers and job seekers through assessments, candidate workflows, and recommendations</li>
            <li>Used <strong>AI-assisted engineering</strong> and direct model APIs to move from architecture to production quickly without sacrificing testability</li>
            <li>Shipped with <strong>Next.js, React, Tailwind, Python/FastAPI, Supabase/Postgres, Supabase Auth/RLS</strong>, and Riipen integration</li>
          </ul>
        </blockquote>
        <h3>Employer Features</h3>
        <ul>
          <li><strong>Talent Pipeline Management</strong> — Create job listings, manage candidates, track assessment links</li>
          <li><strong>AI Assessment Creation</strong> — Generate MCQs, multi-select, and long-form assessments inside a split-view React canvas</li>
          <li><strong>Workspace controls</strong> — Role-aware access and guarded data boundaries through Supabase Auth and row-level security</li>
          <li><strong>Regression-aware delivery</strong> — Backend validation and output checks reduced the risk of broken LLM-driven assessments</li>
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
            <li>Reduced attorney manual workload by <strong>58%</strong> based on internal admin tracking while supporting approximately <strong>4,000 MAU</strong></li>
            <li>Contributed to a <strong>$2M pre-seed</strong> stage product by shipping core Draft, Review, and Global Changes workflows</li>
            <li>Enabled <strong>100% original drafts</strong> in the user's writing style with reported output accuracy around <strong>83%</strong></li>
          </ul>
        </blockquote>
        <h3>Core Components</h3>
        <ul>
          <li><strong>Draft, Review, Global Changes</strong> — full-stack legal drafting workflows in a monorepo with shared backend services across product surfaces</li>
          <li><strong>Typed AI contracts</strong> — OpenAPI-backed request/response schemas reduced frontend-backend drift across AI-heavy flows</li>
          <li><strong>Microsoft Word AI</strong> — WebSocket-powered chatbot for clause-by-clause modifications and structured legal drafting</li>
        </ul>
        <h3>RAG & Evaluation Stack</h3>
        <ul>
          <li><strong>Advanced retrieval</strong> — LangChain, LangGraph, LangSmith, semantic chunking, Pinecone, and prompt version management</li>
          <li><strong>Ingestion workflows</strong> — processed hundreds of PDFs and email content items daily, plus weekly law-site and repository ingestion</li>
          <li><strong>Guardrails & quality checks</strong> — lawyer feedback loops, regex validation, semantic checks, JSON output constraints, and secondary-model review reduced hallucinations before release</li>
          <li><strong>Feature-flagged rollout</strong> — incomplete surfaces stayed hidden until backend behavior, UI states, and regression checks were release-ready</li>
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
            <li>Owned <strong>GPU Lab end-to-end</strong> as the technical reference for a customer-facing GPU cloud service for local LLM and diffusion deployment</li>
            <li>Designed a distributed control plane across an estimated <strong>100 GPU servers</strong> and <strong>400 deployed models</strong></li>
            <li>Reduced third-party cloud costs by <strong>60%</strong></li>
            <li>Helped Models Lab support <strong>400,000+ MAU</strong>, approximately <strong>5,000 RPS</strong>, and <strong>$1M+ revenue within 1 year</strong></li>
          </ul>
        </blockquote>
        <h3>Platform Architecture</h3>
        <ul>
          <li><strong>Docker-first product control layer</strong> — standardized model deployment, health checks, and lifecycle control on in-house GPUs</li>
          <li><strong>Two-backend design</strong> — per-server services handled deployments and self-healing, while a central backend owned users, payments, telemetry, orchestration, retries, queue failures, and concurrency</li>
          <li><strong>Production payments</strong> — Stripe-backed purchase flows, reconciliation hooks, and customer checkout states tied infrastructure usage to revenue operations</li>
        </ul>
        <h3>Infra & Operations</h3>
        <ul>
          <li><strong>Bare-metal constraints</strong> — handled CUDA driver crashes, GPU overload, CPU/RAM pressure, NAS failover, Docker incidents, and server recovery workflows</li>
          <li><strong>Edge routing</strong> — Cloudflare tunnels, reverse proxies, DNS, SSL/TLS routing, and gpulab.ai domain setup connected the fleet to customers</li>
          <li><strong>Operational leadership</strong> — wrote deployment runbooks, debugged production incidents, reviewed teammate code, and turned recurring failures into preventive follow-up work</li>
        </ul>
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
            <li>Improved authenticity of degree distribution by <strong>80%</strong> using a full-stack Web3 verification architecture</li>
            <li>Saved <strong>75%</strong> of verification time through 1-click NFT portfolios and intra-university consensus mechanisms</li>
          </ul>
        </blockquote>
        <h3>Product Scope</h3>
        <ul>
          <li><strong>Founder-led build</strong> — led the product as founder and full-stack engineer from concept through shipping</li>
          <li><strong>1-Click NFT Portfolios</strong> — auto-generate academic portfolios and push them into verifiable Web3-backed records</li>
          <li><strong>Easy Verification</strong> — companies can download and validate candidate credentials quickly without back-and-forth manual checks</li>
          <li><strong>Consensus Mechanism</strong> — intra-university approval flow for trusted issuance and verification</li>
          <li><strong>Web3 Stack</strong> — React, Nest.js, TypeORM, TypeScript, Solidity, Ethers.js, IPFS, GraphQL, and React PDF</li>
        </ul>
        <h3>Commercial & Delivery Context</h3>
        <ul>
          <li><strong>National recognition</strong> — pitched at NUST Islamabad after KICS entrepreneurship training at UET Lahore</li>
          <li><strong>Institutional constraints</strong> — built and pitched the system despite slow public-sector integration cycles and hard stakeholder feedback loops</li>
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
        <h3>Desktop Product Build</h3>
        <ul>
          <li>Built a Metro-style <strong>C# desktop streaming client</strong> with localized signup, login, profile selection, watch history, preferences, and genre-organized local media catalogs</li>
          <li>Implemented a custom <strong>AX Movie Player</strong> playback experience for compact in-app video streaming</li>
          <li>Used the <strong>Fisher-Yates algorithm</strong> to generate shuffled recommendations from collected user interactions</li>
          <li>Applied hashing with collision handling for fast local search across media data</li>
          <li>Used linked lists, queues, and stacks for navigation history, playback flow, and efficient local state management</li>
        </ul>
      </blockquote>
      <h3>Why It Mattered</h3>
      <ul>
        <li>Built strong foundations in desktop UI architecture, recommendation logic, and practical data-structure usage inside a real product surface</li>
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
          <li>Extended an AwesomeWM configuration into a near-desktop Linux environment using <strong>Lua</strong> and native widget composition</li>
          <li>Kept idle memory usage under approximately <strong>300MB</strong> while preserving a rich daily-driver experience</li>
          <li>Balanced performance and usability through tiled layouts, panels, Rofi menus, and Vim-style keyboard shortcuts</li>
        </ul>
      </blockquote>
      <h3>Platform Features</h3>
      <ul>
        <li><strong>Native widgets</strong> — wifi, weather, volume, brightness, battery, and workflow utilities without heavy external desktop shells</li>
        <li><strong>Lightweight stack</strong> — replaced heavier third-party utilities with Picom, policykit, clipboard, and lockscreen modules</li>
        <li><strong>Theme consistency</strong> — coordinated GTK/Qt styling so the environment felt cohesive rather than pieced together</li>
      </ul>`,
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
            <li>Shipped an Instagram-style <strong>WinForms client</strong> on SQL Server LocalDB with a purpose-built ER-modeled schema</li>
            <li>Implemented posts, stories, likes, bookmarks, search, profiles, following flows, and activity notifications</li>
            <li>Designed a custom flat UI with dark/light themes and desktop-native interaction patterns</li>
          </ul>
        </blockquote>
        <h3>Backend Design</h3>
        <ul>
          <li><strong>T-SQL stored procedures</strong> — used routines like <strong>Check_UserName</strong> and <strong>Check_Password</strong> for auth workflows</li>
          <li><strong>Dynamic per-user tables</strong> — provisioned post, story, like, and bookmark data at signup for localized desktop persistence experiments</li>
          <li><strong>SQL-first product thinking</strong> — strengthened schema design and backend modeling instincts later reused in production .NET systems</li>
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
            <li>Built a <strong>PyQt5</strong> desktop analytics application around WFP Pakistan food-price data plus custom macroeconomic datasets</li>
            <li>Surfaced <strong>five starvation-correlation views</strong> across consumption/production, trade, unemployment, inflation, and poverty</li>
            <li>Used Prophet and multiple regression approaches for forecasting and comparative policy analysis</li>
          </ul>
        </blockquote>
        <h3>Modeling Features</h3>
        <ul>
          <li><strong>Embedded Matplotlib canvases</strong> — histogram and line-chart views for interactive trend exploration</li>
          <li><strong>Forecasting workflows</strong> — linear, polynomial, and multivariate regression using inflation, GDP, population, poverty, and unemployment predictors</li>
          <li><strong>Editable CSV ingestion</strong> — added Ctrl+S persistence for iterative scenario analysis</li>
          <li><strong>Experimental modeling</strong> — distribution-based analysis using classical statistical approaches alongside forecasting</li>
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
            <li>Built a <strong>C/GTK OS simulator</strong> with pthread-based multithreading, synchronization primitives, and process-management concepts</li>
            <li>Implemented a memory-aware process manager that queued workloads under virtual RAM caps</li>
            <li>Combined systems coursework ideas with a graphical shell-driven product surface instead of a console-only demo</li>
          </ul>
        </blockquote>
        <h3>Features</h3>
        <ul>
          <li><strong>Process orchestration</strong> — mutex and condition-variable synchronization plus fork-based process spawning</li>
          <li><strong>Virtual environment tools</strong> — custom root shell, virtual drive, RAM specs, and live <strong>memusage</strong>-style process tracking</li>
          <li><strong>Linux integration concepts</strong> — simulated app launching and virtual-memory behavior through a Glade-based interface</li>
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
            <li>Engineered real-time game automation using <strong>OpenCV HOG + SVM people detection</strong>, MSS screen capture, and non-max suppression</li>
            <li>Classified in-game enemies from live frames with sub-second feedback loops</li>
            <li>Turned detection events into direct keyboard and mouse actions for a full CV-to-input control pipeline</li>
          </ul>
        </blockquote>
        <h3>Features</h3>
        <ul>
          <li><strong>Hotkey-gated runtime</strong> — gameplay automation only activated inside a controlled loop for testing</li>
          <li><strong>PyDirectInput actions</strong> — automated targeting and combat responses after successful detections</li>
          <li><strong>Reusable architecture</strong> — laid groundwork for future deep-learning detectors and mission-navigation extensions</li>
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
