// src/app/[locale]/services/tsf-monitoring/layout.js - SEO metadata for TSF monitoring service
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
      title: 'Monitoreo TSF en Tiempo Real | Analytics Procesos SX | Tecionic',
      description: 'Sistema de monitoreo TSF (Total Suspended Ferrous) para control de calidad en circuitos hidrometalúrgicos. Dashboards en tiempo real, alertas predictivas y optimización de procesos.',
      keywords: 'monitoreo TSF, Total Suspended Ferrous, analytics SX, control calidad, hidrometalurgia, dashboard tiempo real, alertas predictivas, optimización procesos',
    },
    'es-mx': {
      title: 'Monitoreo TSF en Tiempo Real | Analytics Procesos SX | Tecionic',
      description: 'Sistema de monitoreo TSF (Total Suspended Ferrous) para control de calidad en circuitos hidrometalúrgicos. Dashboards en tiempo real, alertas predictivas y optimización de procesos.',
      keywords: 'monitoreo TSF, Total Suspended Ferrous, analytics SX, control calidad, hidrometalurgia, dashboard tiempo real, alertas predictivas, optimización procesos',
    },
    'pt-br': {
      title: 'Monitoramento TSF em Tempo Real | Analytics Processos SX | Tecionic',
      description: 'Sistema de monitoramento TSF (Total Suspended Ferrous) para controle de qualidade em circuitos hidrometalúrgicos. Dashboards em tempo real, alertas preditivos e otimização de processos.',
      keywords: 'monitoramento TSF, Total Suspended Ferrous, analytics SX, controle qualidade, hidrometalurgia, dashboard tempo real, alertas preditivos, otimização processos',
    },
    'en': {
      title: 'Real-Time TSF Monitoring | SX Process Analytics | Tecionic',
      description: 'TSF (Total Suspended Ferrous) monitoring system for quality control in hydrometallurgical circuits. Real-time dashboards, predictive alerts, and process optimization.',
      keywords: 'TSF monitoring, Total Suspended Ferrous, SX analytics, quality control, hydrometallurgy, real-time dashboard, predictive alerts, process optimization',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/tsf-monitoring`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/tsf-monitoring`,
        'es-MX': `${baseUrl}/es-mx/services/tsf-monitoring`,
        'pt-BR': `${baseUrl}/pt-br/services/tsf-monitoring`,
        'en': `${baseUrl}/en/services/tsf-monitoring`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/tsf-monitoring`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/filtro_prensa_1200_drone_view.png`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Sistema de Monitoreo TSF en Tiempo Real',
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

export default function TsfMonitoringLayout({ children }) {
  return children;
}
