export const profile = {
  name: "Yaswanth Naidu Vegi",
  initials: "YNV",
  role: "LCT Technical Consultant",
  company: "Blue Yonder",
  years: "3+",
  email: "yaswanthssnaidu07@gmail.com",
  phone: "9676862619",
  linkedin: "https://www.linkedin.com/in/yaswanth-naidu-vegi-blueyonder/",
  github: "https://github.com/yaswanthss",
  summary:
    "Technical Consultant with 3+ years of experience in supply chain analytics, API/EDI integrations, and large-scale workflow automation on Blue Yonder LCT. Proven track record of reducing manual effort, improving data accuracy, and building production-grade analytics solutions using Python, SQL, and Power BI.",
};

export const stats = [
  { num: "3+",   label: "Years Exp" },
  { num: "10+",  label: "Carriers" },
  { num: "70%",  label: "Effort ↓" },
];

export const aboutStats = [
  { num: "100+", label: "Users Automated" },
  { num: "80+",  label: "Change Requests" },
  { num: "~30%", label: "Defect Reduction" },
  { num: "🏆",   label: "Pillar Award", amber: true },
];

export const experience = [
  {
    company: "Blue Yonder",
    role: "LCT Technical Consultant",
    period: "March 2023 – Present",
    current: true,
    bullets: [
      "Led implementation of Order Collaboration (P2I), Invoice, and Change Request workflows, reducing process failures by ~25% through optimized state-machine logic (YAML)",
      "Resolved 80+ ServiceNow change requests, improving system stability and reducing recurring production defects by ~30%",
      "Built and maintained API & EDI integrations for 10+ carriers, resolving mapping issues and improving end-to-end data accuracy",
      "Automated onboarding of 100+ users using Python-based workflows (RBAC, policy groups), eliminating manual provisioning effort",
      "Developed a Python-based data purging framework for orders, deliveries, shipments, and invoices, reducing manual cleanup effort by ~70%",
      "Designed SAP-LCT integration to automate delivery schedule deletion, saving 15+ hours/week of manual effort",
      "Built an AI-driven reporting automation system, reducing daily reporting effort from 4 hours to near zero through automated data extraction and root cause analysis",
      "Created Power BI dashboards (PTA vs ATA accuracy, carrier scorecards) enabling real-time performance tracking across routes and carriers",
      "Wrote optimized SQL queries (joins, aggregations) to validate and analyze shipment and integration data",
      "Resolved 100+ production incidents and trained end users, improving platform adoption and reducing support dependency",
      "Developed an AI-driven reporting agent using Python, automating data extraction (DB + UI), root cause analysis, and report distribution via email—reducing manual reporting effort from ~4 hours/day to near zero",
    ],
  },
];

export const skills = [
  { name: "Python",              pct: 95, gradient: "linear-gradient(90deg,#06b6d4,#8b5cf6)" },
  { name: "SQL / Data Analysis", pct: 90, gradient: "linear-gradient(90deg,#8b5cf6,#06b6d4)" },
  { name: "API / EDI Integration",pct:88, gradient: "linear-gradient(90deg,#06b6d4,#f59e0b)" },
  { name: "Blue Yonder LCT",     pct: 92, gradient: "linear-gradient(90deg,#f59e0b,#06b6d4)" },
  { name: "Power BI",            pct: 85, gradient: "linear-gradient(90deg,#8b5cf6,#f59e0b)" },
  { name: "Workflow Automation", pct: 93, gradient: "linear-gradient(90deg,#06b6d4,#8b5cf6)" },
  { name: "Java",                pct: 75, gradient: "linear-gradient(90deg,#f59e0b,#8b5cf6)" },
  { name: "Streamlit / Data Viz",pct: 87, gradient: "linear-gradient(90deg,#8b5cf6,#06b6d4)" },
];

export const techStack = [
  "Python","SQL","Java","Power BI","Streamlit","ServiceNow",
  "Blue Yonder LCT","FourKites","JIRA","Confluence","Excel",
  "EDI Integration","API Integration","Data Analysis","YAML","RBAC Automation",
  "Supply Chain Analytics","Workflow Automation","KPI Monitoring","Logistics Ops",
];

export const projects = [
  {
    badge: "Live · Streamlit Cloud",
    title: "Shipment Analytics Dashboard",
    desc: "Production-ready dashboard analysing 900+ shipments to identify delay patterns and carrier risks with real-time KPI tracking and anomaly detection.",
    metrics: [
      { val: "900+", label: "Shipments Analyzed" },
      { val: "IQR+Z", label: "Anomaly Detection" },
    ],
    tags: ["Streamlit","Python","Pandas","Plotly","IQR / Z-score"],
    link: "#",
    linkLabel: "View Source Code",
  },
  {
    badge: "Automation · Internal",
    title: "AI-Driven Reporting Agent",
    desc: "Python-based AI agent that automates data extraction from DB and UI, performs root cause analysis, and distributes reports via email—eliminating ~4 hrs/day of manual effort.",
    metrics: [
      { val: "~4h", label: "Daily Time Saved" },
      { val: "0",   label: "Manual Effort" },
    ],
    tags: ["Python","AI/ML","SQL","Email Automation"],
    link: "#",
    linkLabel: "Blue Yonder Internal",
  },
  {
    badge: "Integration · Production",
    title: "SAP-LCT Automation Pipeline",
    desc: "End-to-end integration between SAP and Blue Yonder LCT to automate delivery schedule deletion and sync, saving 15+ hours/week of manual operations.",
    metrics: [
      { val: "15h+", label: "Weekly Hours Saved" },
      { val: "10+",  label: "Carrier EDI Flows" },
    ],
    tags: ["SAP","EDI","Blue Yonder","YAML","API"],
    link: "#",
    linkLabel: "Enterprise Project",
  },
];

export const achievements = [
  {
    icon: "🏆",
    text: 'Awarded "Pillar Award" at Blue Yonder for delivering high-impact automation solutions reducing manual effort by ~70%',
    highlight: '"Pillar Award"',
  },
  {
    icon: "🤖",
    text: "Recognized for building AI-driven reporting automation, eliminating ~4 hours/day of manual work across the team",
    highlight: "~4 hours/day",
  },
  {
    icon: "🔗",
    text: "Delivered 10+ successful carrier integrations, improving data visibility and operational efficiency across the logistics network",
    highlight: "10+ successful carrier integrations",
  },
  {
    icon: "🛡️",
    text: "Key contributor in reducing production defects and improving system reliability across critical supply chain workflows",
    highlight: "system reliability",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) — Electronics & Communication Engineering",
    school: "Swarnandhra Engineering College",
    location: "Narsapur, Andhra Pradesh",
    icon: "🎓",
  },
];

export const languages = ["English", "Telugu"];
