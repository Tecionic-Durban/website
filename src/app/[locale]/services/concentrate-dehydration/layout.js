// src/app/[locale]/services/concentrate-dehydration/layout.js - SEO metadata
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
      title: 'Deshidratación de Concentrados - Filtro Prensa Móvil | Tecionic',
      description: 'Servicio de deshidratación de concentrados de cobre con filtros prensa móviles. Reducción de humedad para transporte eficiente. Sin CAPEX.',
      keywords: 'deshidratación concentrados, filtro prensa móvil, concentrado cobre, reducción humedad, transporte concentrados, minería cobre',
    },
    'es-mx': {
      title: 'Deshidratación de Concentrados - Filtro Prensa Móvil | Tecionic',
      description: 'Servicio de deshidratación de concentrados de cobre con filtros prensa móviles. Reducción de humedad para transporte eficiente. Sin CAPEX.',
      keywords: 'deshidratación concentrados, filtro prensa móvil, concentrado cobre, reducción humedad, transporte concentrados, minería cobre',
    },
    'pt-br': {
      title: 'Desidratação de Concentrados - Filtro Prensa Móvel | Tecionic',
      description: 'Serviço de desidratação de concentrados de cobre com filtros prensa móveis. Redução de umidade para transporte eficiente. Sem CAPEX.',
      keywords: 'desidratação concentrados, filtro prensa móvel, concentrado cobre, redução umidade, transporte concentrados, mineração cobre',
    },
    'en': {
      title: 'Concentrate Dehydration - Mobile Filter Press | Tecionic',
      description: 'Copper concentrate dehydration service with mobile filter presses. Moisture reduction for efficient transport. Zero CAPEX.',
      keywords: 'concentrate dehydration, mobile filter press, copper concentrate, moisture reduction, concentrate transport, copper mining',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/concentrate-dehydration`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/concentrate-dehydration`,
        'es-MX': `${baseUrl}/es-mx/services/concentrate-dehydration`,
        'pt-BR': `${baseUrl}/pt-br/services/concentrate-dehydration`,
        'en': `${baseUrl}/en/services/concentrate-dehydration`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/concentrate-dehydration`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function ConcentrateDehydrationLayout({ children }) {
  return children;
}
