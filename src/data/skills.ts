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
      title: "Real-Time Business Control",
      description:
        "Today you wait until month end to know how you did, when the decision has already been made. I bring your sales, costs, inventory and profit together on a single panel that updates automatically.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
      title: "Process Automation",
      description:
        "The report rebuilt every Monday, the invoices someone enters by hand. I automate that repetitive work so your team recovers those hours for good.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
      title: "Centralized, Reliable Information",
      description:
        "The system says one thing, the spreadsheet another, and nobody knows which is correct. I integrate your data sources so your numbers match and you can rely on them.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
      title: "Documented, Independent Processes",
      description:
        "When the one person who understands the spreadsheet is away, the business is left in the dark. I leave every process documented and running, so it never depends on a single person.",
    },
  ],
  es: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
      title: "Control del Negocio al Día",
      description:
        "Hoy esperas a fin de mes para saber cómo te fue, cuando la decisión ya está tomada. Reúno tus ventas, costos, inventario y utilidad en un solo panel que se actualiza de forma automática.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
      title: "Automatización de Procesos",
      description:
        "El reporte que se rehace cada lunes, las facturas que alguien ingresa a mano. Automatizo ese trabajo repetitivo para que tu equipo recupere esas horas de forma definitiva.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
      title: "Información Centralizada y Confiable",
      description:
        "El sistema dice una cosa, el Excel otra, y nadie sabe cuál es la correcta. Integro tus fuentes de información para que tus números coincidan y puedas confiar en ellos.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
      title: "Procesos Documentados e Independientes",
      description:
        "Cuando la única persona que entiende el Excel se ausenta, el negocio se queda a ciegas. Dejo cada proceso documentado y funcionando, para que no dependa de una sola persona.",
    },
  ],
};

export function getSkills(lang: Lang): Skill[] {
  return skillsByLang[lang];
}
