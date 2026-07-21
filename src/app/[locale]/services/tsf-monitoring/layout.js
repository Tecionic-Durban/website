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
      title: 'Monitoreo TSF y Analítica de Proceso SX',
      description: 'Monitoreo de Fe Suspendido Total (TSF) para circuitos hidrometalúrgicos. Dashboards en tiempo real, alertas predictivas, optimización SX-EW.',
      keywords: 'monitoreo TSF, Total Suspended Ferrous, analytics SX, control calidad, hidrometalurgia, dashboard tiempo real, alertas predictivas, optimización procesos',
    },
    'es-mx': {
      title: 'Monitoreo TSF y Analítica de Proceso SX',
      description: 'Monitoreo de Fe Suspendido Total (TSF) para circuitos hidrometalúrgicos. Dashboards en tiempo real, alertas predictivas, optimización SX-EW.',
      keywords: 'monitoreo TSF, Total Suspended Ferrous, analytics SX, control calidad, hidrometalurgia, dashboard tiempo real, alertas predictivas, optimización procesos',
    },
    'pt-br': {
      title: 'Monitoramento TSF e Analytics de Processo SX',
      description: 'Monitoramento de Fe Suspenso Total (TSF) para circuitos hidrometalúrgicos. Dashboards em tempo real, alertas preditivos, otimização SX-EW.',
      keywords: 'monitoramento TSF, Total Suspended Ferrous, analytics SX, controle qualidade, hidrometalurgia, dashboard tempo real, alertas preditivos, otimização processos',
    },
    'en': {
      title: 'TSF Monitoring & SX Process Analytics',
      description: 'TSF (Total Suspended Ferrous) monitoring for hydrometallurgy. Real-time dashboards, predictive alerts, SX-EW process optimization.',
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
        'es':    `${baseUrl}/es-mx/services/tsf-monitoring`,
        'pt-BR': `${baseUrl}/pt-br/services/tsf-monitoring`,
        'en': `${baseUrl}/en/services/tsf-monitoring`,
        'x-default': `${baseUrl}/en/services/tsf-monitoring`,
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
