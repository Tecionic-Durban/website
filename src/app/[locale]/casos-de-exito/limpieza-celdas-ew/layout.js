// src/app/[locale]/casos-de-exito/limpieza-celdas-ew/layout.js - SEO metadata
import { routing } from '@/i18n/routing';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadata = {
    'es-cl': {
      title: 'Caso de Éxito: Limpieza Celdas EW | Tecionic',
      description: 'Caso de éxito en limpieza y desborre de celdas de electrowinning. Mejora de eficiencia y reducción de tiempos de mantenimiento.',
      keywords: 'caso éxito limpieza EW, desborre celdas, electrowinning resultados, proyecto EW minería',
    },
    'es-mx': {
      title: 'Caso de Éxito: Limpieza Celdas EW | Tecionic',
      description: 'Caso de éxito en limpieza y desborre de celdas de electrowinning. Mejora de eficiencia y reducción de tiempos de mantenimiento.',
      keywords: 'caso éxito limpieza EW, desborre celdas, electrowinning resultados, proyecto EW minería',
    },
    'pt-br': {
      title: 'Caso de Sucesso: Limpeza Células EW | Tecionic',
      description: 'Caso de sucesso em limpeza e desborre de células de electrowinning. Melhoria de eficiência e redução de tempos de manutenção.',
      keywords: 'caso sucesso limpeza EW, desborre células, electrowinning resultados, projeto EW mineração',
    },
    'en': {
      title: 'Success Story: EW Cell Cleaning | Tecionic',
      description: 'Success story in electrowinning cell cleaning and sludge removal. Efficiency improvement and maintenance time reduction.',
      keywords: 'EW cleaning success story, cell sludge removal, electrowinning results, EW mining project',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/casos-de-exito/limpieza-celdas-ew`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/casos-de-exito/limpieza-celdas-ew`,
        'es-MX': `${baseUrl}/es-mx/casos-de-exito/limpieza-celdas-ew`,
        'pt-BR': `${baseUrl}/pt-br/casos-de-exito/limpieza-celdas-ew`,
        'en': `${baseUrl}/en/casos-de-exito/limpieza-celdas-ew`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/casos-de-exito/limpieza-celdas-ew`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function LimpiezaCeldasEWLayout({ children }) {
  return children;
}
