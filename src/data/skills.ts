export const skills = [
  /*{
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "System Design & Architecture",
    description: "Designing scalable, resilient services, clear boundaries, and data models; pragmatic trade‑offs documented via ADRs/RFCs.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Full‑Stack Development",
    description: "End‑to‑end features with React/Next.js, Node.js, and TypeScript, with strong UX, accessibility, and performance.",
  },*/
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "Data Analysis & Business Intelligence",
    description: "Análisis y visualización de datos para convertir información dispersa en indicadores claros, reportes ejecutivos y tableros de control que apoyan la toma de decisiones estratégicas y el seguimiento del desempeño del negocio.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "APIs & Distributed Systems",
    description: "Extracción e integración de información desde múltiples fuentes (sistemas internos, APIs, archivos y plataformas externas), centralizando los datos en un solo lugar para asegurar consistencia, trazabilidad y disponibilidad operativa.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
    title: "Databases & Data Management",
    description: "Diseño y estructuración de bases de datos para un manejo ordenado, seguro y escalable de la información, facilitando consultas rápidas, reportes confiables y crecimiento futuro sin reprocesos innecesarios.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
    title: "Automation & Process Optimization",
    description: "Automatización de flujos de datos, reportes y procesos repetitivos para reducir errores manuales, ahorrar tiempo operativo y asegurar que la información crítica esté siempre actualizada y disponible cuando se necesita.",
  },
];

export type Skill = (typeof skills)[number];

