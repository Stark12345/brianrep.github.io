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
				"Analytics solution that centralizes information across locations, sales and performance, making it possible to spot improvement opportunities and optimize daily operations.",
			ctaText: ui.en["projects.cta"],
			ctaLink: waLink(ui.en["projects.wa"]),
			icon: SerUnoLogo,
			image: DashSerUno,
		},
		{
			title: "JDI GRUPO CONSTRUCTOR SAC — LIMA, PERU",
			techStack: "Looker Studio • Financial analysis • KPIs • Budget control",
			description:
				"End-to-end financial control solution: a single dashboard for income, expenses and petty cash, making deviations visible early and improving how resources are managed.",
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
				"Solución de análisis que centraliza la información de sedes, ventas y desempeño, permitiendo identificar oportunidades de mejora y optimizar la operación del negocio nutricional.",
			ctaText: ui.es["projects.cta"],
			ctaLink: waLink(ui.es["projects.wa"]),
			icon: SerUnoLogo,
			image: DashSerUno,
		},
		{
			title: "JDI GRUPO CONSTRUCTOR SAC - LIMA - PERU",
			techStack: "Looker Studio • Análisis financiero • KPIs • Control presupuestal",
			description:
				"Solución integral de control financiero mediante un tablero que centraliza ingresos, gastos y caja chica, permitiendo detectar desviaciones y mejorar la gestión de recursos.",
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
