// src/app/sitemap.ts - Dynamic sitemap generation for SEO
import { MetadataRoute } from 'next';

const baseUrl = 'https://tecionic.com';
const locales = ['es-cl', 'es-mx', 'pt-br', 'en'];

// Define all routes with their properties
const routes = [
  // Home page - highest priority
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },

  // Main pages - high priority
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/contacto', changeFrequency: 'monthly' as const, priority: 0.9 },

  // Industry pages - high priority (commercial pages)
  { path: '/industries/copper', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/industries/zinc', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/industries/lithium', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/industries/potassium', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/industries/crude-oil', changeFrequency: 'weekly' as const, priority: 0.9 },

  // Service pages - high priority
  { path: '/services/filtration', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/services/organic-treatment', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/services/ew-cleaning', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/services/concentrate-dehydration', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/services/fine-solids', changeFrequency: 'monthly' as const, priority: 0.85 },

  // Analytics & Monitoring services - high priority (new data services)
  { path: '/services/tif-measurement', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/services/tsf-monitoring', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/services/turbidity-monitoring', changeFrequency: 'monthly' as const, priority: 0.85 },

  // Case studies - medium-high priority (trust signals)
  { path: '/casos-de-exito', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/casos-de-exito/deshidratacion-concentrados', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/casos-de-exito/lodos-petroleros', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/casos-de-exito/limpieza-celdas-ew', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/casos-de-exito/solidos-finos-yoduro', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/casos-de-exito/soporte-sx-dgm', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/casos-de-exito/tratamiento-organico-sx', changeFrequency: 'monthly' as const, priority: 0.7 },

  // Resources - medium priority
  { path: '/tendencias-industria', changeFrequency: 'weekly' as const, priority: 0.7 },

  // Tendencias-industria articles - medium priority (long-form content)
  { path: '/tendencias-industria/perdidas-solvente-sx', changeFrequency: 'monthly' as const, priority: 0.65 },
  { path: '/tendencias-industria/litio-triangulo-agua', changeFrequency: 'monthly' as const, priority: 0.65 },
  { path: '/tendencias-industria/politica-minera-2050', changeFrequency: 'monthly' as const, priority: 0.65 },
  { path: '/tendencias-industria/boom-cobre-chile-peru', changeFrequency: 'monthly' as const, priority: 0.65 },
  { path: '/tendencias-industria/deshidratacion-movil-vs-capex', changeFrequency: 'monthly' as const, priority: 0.65 },

  // Note: /calculadora, /privacy, and /terms are noindexed — deliberately NOT
  // listed here. A sitemap must only contain indexable URLs; mixing signals
  // (sitemap says index, page says noindex) erodes crawl trust.
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const currentDate = new Date().toISOString();

  // Generate entries for each locale and route
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            'es-CL': `${baseUrl}/es-cl${route.path}`,
            'es-MX': `${baseUrl}/es-mx${route.path}`,
            'es':    `${baseUrl}/es-mx${route.path}`,
            'pt-BR': `${baseUrl}/pt-br${route.path}`,
            'en': `${baseUrl}/en${route.path}`,
            'x-default': `${baseUrl}/en${route.path}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
