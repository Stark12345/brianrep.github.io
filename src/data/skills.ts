import type { Lang } from "../i18n/ui";

export type Skill = {
  icon: string;
  title: string;
  description: string;
};

const skillsByLang: Record<Lang, Skill[]> = {
  en: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
      title: "Business Analysis & Control (BI)",
      description:
        "We centralize and analyze your company's data to show you, on a single dashboard, how your sales, costs, margins and results are doing — so decisions are clear and timely.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
      title: "Data & Systems Integration (APIs)",
      description:
        "I connect information that's scattered today (spreadsheets, internal systems, external platforms) so all your data works together and you get one complete, reliable view of the business.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
      title: "Data Management & Organization (Databases)",
      description:
        "I structure and organize your company's data to prevent errors, duplicates and lost information, keeping your reports consistent as you grow.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
      title: "Process Automation & Optimization",
      description:
        "I automate data flows and repetitive processes to cut manual work, reduce errors, and keep your information always up to date and available.",
    },
  ],
  es: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
      title: "Análisis y Control del Negocio (BI)",
      description:
        "Centralizamos y analizamos la información de tu empresa para mostrarte, en un solo tablero, cómo están tus ventas, costos, márgenes y resultados, facilitando decisiones claras y oportunas.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
      title: "Integración de Información y Sistemas (APIs)",
      description:
        "Conecto información que hoy está separada (Excel, sistemas internos, plataformas externas) para que todos los datos trabajen juntos y tengas una visión completa y confiable del negocio.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
      title: "Gestión y Organización de Datos (Bases de Datos)",
      description:
        "Estructuro y ordeno la información de tu empresa para evitar errores, duplicidades y pérdidas de datos, asegurando reportes consistentes y crecimiento ordenado.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
      title: "Automatización y Optimización de Procesos",
      description:
        "Automatizo flujos de datos y procesos repetitivos para reducir tareas manuales, minimizar errores y asegurar que la información esté siempre actualizada y disponible.",
    },
  ],
};

export function getSkills(lang: Lang): Skill[] {
  return skillsByLang[lang];
}
