import SerUnoLogo from "../assets/logos/Ser1.png";
import JdiLogo from "../assets/logos/Jdi.png";
import DashSerUno from "../assets/dashboards/DASH1.png";
import DashJdi from "../assets/dashboards/DASH2.png";
import { waLink, ui, type Lang } from "../i18n/ui";

type Project = {
	title: string;
	techStack: string;
	description: string;
	ctaText: string;
	ctaLink: string;
	icon: ImageMetadata;
	image: ImageMetadata;
};

const projectsByLang: Record<Lang, Project[]> = {
	en: [
		{
			title: "SER UNO NUTRICIÓN — LIMA, PERU",
			techStack: "Power BI • Data consolidation • Automated reporting • KPIs",
			description:
				"They had several locations, and to know how the business was doing someone had to pull the numbers from each one by hand. Now they open one screen and see the sales and performance of every store, updated on its own.",
			ctaText: ui.en["projects.cta"],
			ctaLink: waLink(ui.en["projects.wa"]),
			icon: SerUnoLogo,
			image: DashSerUno,
		},
		{
			title: "JDI GRUPO CONSTRUCTOR SAC — LIMA, PERU",
			techStack: "Looker Studio • Financial analysis • KPIs • Budget control",
			description:
				"Money was coming in and going out through several places, and they noticed problems too late. Now income, expenses and petty cash live in one place, and they catch it in time when something goes off plan.",
			ctaText: ui.en["projects.cta"],
			ctaLink: waLink(ui.en["projects.wa"]),
			icon: JdiLogo,
			image: DashJdi,
		},
	],
	es: [
		{
			title: "SER UNO NUTRICION - LIMA - PERU",
			techStack: " Power BI • Consolidación de datos • Automatización de reportes • KPIs",
			description:
				"Tenían varias sedes y, para saber cómo iba el negocio, alguien tenía que juntar los números de cada una a mano. Ahora abren una sola pantalla y ven las ventas y el rendimiento de todas las tiendas, actualizada sola.",
			ctaText: ui.es["projects.cta"],
			ctaLink: waLink(ui.es["projects.wa"]),
			icon: SerUnoLogo,
			image: DashSerUno,
		},
		{
			title: "JDI GRUPO CONSTRUCTOR SAC - LIMA - PERU",
			techStack: "Looker Studio • Análisis financiero • KPIs • Control presupuestal",
			description:
				"La plata entraba y salía por varios lados, y los desvíos se notaban tarde. Ahora tienen ingresos, gastos y caja chica en un solo lugar, y se dan cuenta a tiempo cuando algo se sale de lo previsto.",
			ctaText: ui.es["projects.cta"],
			ctaLink: waLink(ui.es["projects.wa"]),
			icon: JdiLogo,
			image: DashJdi,
		},
	],
};

export function getProjects(lang: Lang = "en"): Project[] {
	return projectsByLang[lang] ?? projectsByLang.en;
}

/** Compatibilidad con importaciones previas. */
export const projects = projectsByLang.es;
