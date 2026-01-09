// src/app/[locale]/services/tif-measurement/layout.js - SEO metadata for TIF measurement service
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
      title: 'Medición TIF en Tiempo Real | Monitoreo SX | Tecionic',
      description: 'Sistema de medición TIF (Total Insoluble Fe) en tiempo real para circuitos de extracción por solventes. Optimiza recuperación de cobre, reduce pérdidas de orgánico y mejora eficiencia operacional.',
      keywords: 'medición TIF, Total Insoluble Fe, monitoreo SX, extracción por solventes, analytics minería, optimización cobre, pérdidas orgánico, datos tiempo real',
    },
    'es-mx': {
      title: 'Medición TIF en Tiempo Real | Monitoreo SX | Tecionic',
      description: 'Sistema de medición TIF (Total Insoluble Fe) en tiempo real para circuitos de extracción por solventes. Optimiza recuperación de cobre, reduce pérdidas de orgánico y mejora eficiencia operacional.',
      keywords: 'medición TIF, Total Insoluble Fe, monitoreo SX, extracción por solventes, analytics minería, optimización cobre, pérdidas orgánico, datos tiempo real',
    },
    'pt-br': {
      title: 'Medição TIF em Tempo Real | Monitoramento SX | Tecionic',
      description: 'Sistema de medição TIF (Total Insoluble Fe) em tempo real para circuitos de extração por solventes. Otimiza recuperação de cobre, reduz perdas de orgânico e melhora eficiência operacional.',
      keywords: 'medição TIF, Total Insoluble Fe, monitoramento SX, extração por solventes, analytics mineração, otimização cobre, perdas orgânico, dados tempo real',
    },
    'en': {
      title: 'Real-Time TIF Measurement | SX Monitoring | Tecionic',
      description: 'Real-time TIF (Total Insoluble Fe) measurement system for solvent extraction circuits. Optimize copper recovery, reduce organic losses, and improve operational efficiency.',
      keywords: 'TIF measurement, Total Insoluble Fe, SX monitoring, solvent extraction, mining analytics, copper optimization, organic losses, real-time data',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/tif-measurement`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/tif-measurement`,
        'es-MX': `${baseUrl}/es-mx/services/tif-measurement`,
        'pt-BR': `${baseUrl}/pt-br/services/tif-measurement`,
        'en': `${baseUrl}/en/services/tif-measurement`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/tif-measurement`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/filtro_prensa_1200_drone_view.png`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Sistema de Medición TIF en Tiempo Real',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/filtro_prensa_1200_drone_view.png`],
    },
  };
}

export default function TifMeasurementLayout({ children }) {
  return children;
}
