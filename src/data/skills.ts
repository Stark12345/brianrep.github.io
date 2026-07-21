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
      title: "You find out too late what happened",
      description:
        "You wait until month end to know how you did — and by then the decision was already made. I put your sales, costs, stock and profit on one screen, updated by itself.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
      title: "The same task eats your week",
      description:
        "That report you rebuild every Monday, those invoices someone types in by hand. I leave it running on its own, so your team gets those hours back for good.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
      title: "Your information lives in ten places",
      description:
        "The POS says one thing, the spreadsheet another, and nobody knows which one is right. I bring it all together so your numbers finally agree and you can trust them.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
      title: "Everything depends on one person",
      description:
        "If the person who knows the spreadsheet goes on holiday, the business goes blind. I leave the process documented and running so it does not depend on anyone.",
    },
  ],
  es: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
      title: "Te enteras tarde de lo que pasa",
      description:
        "Esperas a fin de mes para saber cómo te fue — y para entonces la decisión ya la tomaste. Pongo tus ventas, costos, stock y ganancia en una sola pantalla que se actualiza sola.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
      title: "La misma tarea te come la semana",
      description:
        "Ese reporte que rearmas cada lunes, esas facturas que alguien digita a mano. Lo dejo funcionando solo, y tu equipo recupera esas horas para siempre.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
      title: "Tu información está en diez sitios",
      description:
        "El POS dice una cosa, el Excel otra, y nadie sabe cuál está bien. Junto todo para que tus números por fin cuadren y puedas confiar en ellos.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
      title: "Todo depende de una sola persona",
      description:
        "Si el que sabe manejar el Excel se va de vacaciones, el negocio se queda ciego. Dejo el proceso documentado y andando para que no dependa de nadie.",
    },
  ],
};

export function getSkills(lang: Lang): Skill[] {
  return skillsByLang[lang];
}
