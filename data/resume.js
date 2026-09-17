export const profile = {
  name: "Ridham Pansuriya",
  initials: "RP",
  title: "Senior React.js / Next.js Developer",
  tagline: [
    "Building real-time systems that scale.",
    "Crafting pixel-perfect UI, fast.",
    "5+ years across SaaS, healthcare & blockchain.",
  ],
  email: "ridhampansuriya2000@gmail.com",
  phone: "+91 6353714147",
  github: "ridhampansuriya2000",
  githubUrl: "https://github.com/ridhampansuriya2000",
  location: "IST, UTC+5:30 (Remote)",
  availability:
    "Open to full-time remote roles — 4–6 hr overlap with UK/EU, flexible for US EST mornings.",
  summary:
    "Senior React.js / Next.js Developer with 5+ years building production-grade SaaS and enterprise platforms across healthcare, privacy, and blockchain industries. Currently working remotely with a UK-based team, delivering real-time systems, complex admin panels, and pixel-perfect, high-performance web applications used by thousands of users.",
  summaryExtra:
    "Proven track record of measurable impact: 20–30% reduction in page load times, real-time messaging infrastructure built with Ably (multi-channel Pub/Sub, live sync), and AWS S3 / CloudFront file pipelines with client-side Web Worker processing. Experienced across the full React ecosystem — Next.js, Redux Toolkit, React Query, TanStack, TypeScript, Tailwind CSS.",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Page Load Improvement", value: "20-30%" },
    { label: "Industries Served", value: "3" },
    { label: "Production Projects", value: "5+" },
  ],
};

export const experience = [
  {
    company: "Niiyo Technology",
    role: "Sr. React JS Developer",
    period: "Jan 2025 – Present",
    location: "UK (Remote)",
    points: [
      "Developed and maintained the NeemConnect platform and Admin Panel using Next.js, React.js, Redux, MUI, and Tailwind CSS.",
      "Built role-based user management and dashboard modules, improving administrative efficiency by 25-30%.",
      "Developed reusable components and optimized rendering performance, reducing page load times by 20%.",
      "Developed a real-time messaging system using Ably with multi-channel Pub/Sub, typing indicators, unread message tracking, and automatic reconnection.",
      "Synchronized React Query cache with Ably events to enable real-time conversation and message updates.",
      "Implemented authentication and authorization workflows, ensuring secure access management across the platform.",
      "Built multi-step file upload pipeline: client-side image compression via Web Worker (non-blocking), signed URL generation, S3/CloudFront upload with real-time progress tracking, and video thumbnail generation.",
    ],
  },
  {
    company: "Propelius Technology",
    role: "Sr. ReactJS Developer",
    period: "Jan 2024 – Dec 2024",
    location: "Surat (Remote)",
    points: [
      "Developed dynamic and responsive web applications using Next.js and Tailwind CSS.",
      "Integrated GPT API for a custom chatbot to enhance user engagement.",
      "Optimized application performance using React.memo, dynamic imports, adaptive srcSet, and Cloudflare CDN.",
      "Implemented build-time environment validation using T3 Env and Zod across server, client, and edge runtimes.",
      "Built interactive, mobile-friendly UIs ensuring cross-browser compatibility and seamless user experience.",
      "Integrated Sentry (Node & Edge) for error monitoring and PostHog for analytics and user behavior tracking.",
    ],
  },
  {
    company: "anTrix Infotech",
    role: "MERN Developer",
    period: "Jan 2020 – Dec 2023",
    location: "Surat",
    points: [
      "Achieved a 20% application speed increase by optimizing React components, reducing page load times by 15%.",
      "Improved development efficiency by 30% through reusable ReactJS components and Redux implementation.",
      "Developed SEO-friendly web apps using Next.js, achieving 20-30% optimization for enhanced user experience.",
      "Implemented Error Boundaries to improve application stability and reduce runtime failures by 50–60%.",
      "Developed new features for the Optery platform, improving application performance by 10–15%.",
      "Developed health report generation modules for EduHealth, reducing report processing time by 10–20%.",
      "Implemented efficient paginated FAQ for Treebo's Direct and Msite, trimming website loading time by 20-30%.",
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Socket.io", "React Query", "Redux Toolkit", "Material UI", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    category: "Cloud",
    items: ["AWS S3", "CloudFront"],
  },
  {
    category: "Core Skills",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Testing",
    items: ["Cypress", "Jest"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma", "Jira"],
  },
  {
    category: "Monitoring",
    items: ["Sentry", "PostHog"],
  },
];

export const projects = [
  {
    name: "NeemConnect",
    tech: ["Next.js", "Redux", "Material-UI", "Tailwind CSS", "Zod", "TanStack Query", "REST APIs"],
    points: [
      "Developed the customer-facing application and Admin Panel using Next.js and React.js.",
      "Built role-based access control, dashboard modules, user management, and content management features.",
      "Implemented real-time messaging using Ably with live conversation updates.",
      "Designed scalable file upload workflows using AWS S3, CloudFront, and signed URLs.",
    ],
  },
  {
    name: "MyLaminin",
    tech: ["React.js", "Next.js", "Redux", "Material UI"],
    points: [
      "Developed secure document management and verification modules using React.js, Next.js, and Node.js.",
      "Built reusable UI components and integrated REST APIs for seamless document workflows.",
      "Implemented authentication, role-based access control, and optimized frontend performance.",
      "Collaborated with backend developers to integrate blockchain-based document verification services.",
    ],
  },
  {
    name: "Optery",
    tech: ["Next.js", "Redux", "MUI", "Tailwind CSS"],
    points: [
      "Developed responsive user interfaces using Next.js, Redux, Material-UI, and Tailwind CSS.",
      "Integrated APIs for managing user privacy data and account settings.",
      "Optimized application performance through code splitting and reusable components.",
    ],
  },
  {
    name: "EduHealth",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Redux", "MUI", "Tailwind CSS"],
    points: [
      "Developed healthcare management modules for school nurses using React.js and Node.js.",
      "Built report generation, document scanning, and student health record management features.",
      "Integrated REST APIs and optimized application performance for faster report generation.",
    ],
  },
  {
    name: "Fair-play",
    tech: ["Next.js", "Redux", "Material-UI", "Socket.io", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Developed responsive betting interfaces using Next.js, Redux, and Material-UI.",
      "Integrated real-time game updates using Socket.io.",
      "Implemented secure authentication and payment-related user flows.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Information Technology",
    school: "L.E. College - Morbi",
    location: "Morbi, India",
  },
  {
    degree: "GSEB - 11th & 12th",
    school: "P.P.S.V. - Hirabaug",
    location: "Surat, India",
  },
];

export const certificates = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
