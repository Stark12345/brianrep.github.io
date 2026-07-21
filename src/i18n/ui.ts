export type Lang = 'en' | 'es';

export const LANGS: Lang[] = ['en', 'es'];
export const DEFAULT_LANG: Lang = 'en';

/**
 * Rutas equivalentes por idioma.
 * El inglés vive en la raíz (default) y el español bajo /es/.
 */
export const routes = {
  en: {
    home: '/',
    portfolio: '/portfolio',
    about: '/about',
  },
  es: {
    home: '/es/',
    portfolio: '/es/portfolio',
    about: '/es/about',
  },
} as const;

/** Devuelve la ruta equivalente en el otro idioma, para el selector. */
export function altRoute(lang: Lang, page: keyof typeof routes.en): string {
  const other: Lang = lang === 'en' ? 'es' : 'en';
  return routes[other][page];
}

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'lang.en': 'English',
    'lang.es': 'Spanish',
    'footer.title': "Let's talk about your business",
    'footer.subtitle': 'Start running on real numbers today.',
    'footer.cta': 'Message me on WhatsApp',
    'footer.wa': "Hi Brian, I'd like to talk about improving how my business runs.",
    'portfolio.title': 'Selected work',
    'portfolio.subtitle': 'Organizations that trust my work.',
    'projects.cta': 'Book a call',
    'projects.wa': "Hi Brian, I'd like to discuss a solution similar to the one on your website.",
    '404.title': 'Page not found',
    '404.text': 'The page you are looking for doesn’t exist or has moved.',
    '404.home': 'Go to Home',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.about': 'Nosotros',
    'lang.en': 'Inglés',
    'lang.es': 'Español',
    'footer.title': '¿Hablamos de tu negocio?',
    'footer.subtitle': 'Optimicemos tu operación desde hoy.',
    'footer.cta': 'Escríbeme por WhatsApp',
    'footer.wa': 'Hola Brian, me gustaría conversar sobre la optimización de mi negocio.',
    'portfolio.title': 'Experiencia profesional',
    'portfolio.subtitle': 'Organizaciones que confían en mi trabajo.',
    'projects.cta': 'Agenda una cita',
    'projects.wa': 'Hola Brian, quisiera conversar sobre una solución similar a la mostrada en tu web.',
    '404.title': 'Página no encontrada',
    '404.text': 'La página que buscas no existe o fue movida.',
    '404.home': 'Ir al inicio',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key] ?? ui[DEFAULT_LANG][key];
  };
}

export const WHATSAPP_NUMBER = '51940167360';

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
