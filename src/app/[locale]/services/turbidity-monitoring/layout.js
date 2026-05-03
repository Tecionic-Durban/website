// src/app/[locale]/services/turbidity-monitoring/layout.js - SEO metadata for turbidity monitoring service
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
      title: 'Monitoreo de Turbidez en Tiempo Real para Aguas Mineras | Tecionic',
      description: 'Sistema de monitoreo de turbidez para calidad de agua en minería y refinerías. Sensores IoT, dashboards en tiempo real, cumplimiento ambiental.',
      keywords: 'monitoreo turbidez, calidad agua minería, sensores IoT, analytics agua, cumplimiento ambiental, control turbidez, datos tiempo real, procesos hidrometalúrgicos',
    },
    'es-mx': {
      title: 'Monitoreo de Turbidez en Tiempo Real para Aguas Mineras | Tecionic',
      description: 'Sistema de monitoreo de turbidez para calidad de agua en minería y refinerías. Sensores IoT, dashboards en tiempo real, cumplimiento ambiental.',
      keywords: 'monitoreo turbidez, calidad agua minería, sensores IoT, analytics agua, cumplimiento ambiental, control turbidez, datos tiempo real, procesos hidrometalúrgicos',
    },
    'pt-br': {
      title: 'Monitoramento de Turbidez em Tempo Real para Águas | Tecionic',
      description: 'Sistema de monitoramento de turbidez para qualidade de água em mineração e refino. Sensores IoT, dashboards em tempo real, conformidade ambiental.',
      keywords: 'monitoramento turbidez, qualidade água mineração, sensores IoT, analytics água, conformidade ambiental, controle turbidez, dados tempo real, processos hidrometalúrgicos',
    },
    'en': {
      title: 'Real-Time Turbidity Monitoring for Mining Water | Tecionic',
      description: 'Turbidity monitoring system for water quality in mining and refining processes. IoT sensors, real-time dashboards, environmental regulatory compliance.',
      keywords: 'turbidity monitoring, mining water quality, IoT sensors, water analytics, environmental compliance, turbidity control, real-time data, hydrometallurgical processes',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/turbidity-monitoring`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/turbidity-monitoring`,
        'es-MX': `${baseUrl}/es-mx/services/turbidity-monitoring`,
        'es':    `${baseUrl}/es-mx/services/turbidity-monitoring`,
        'pt-BR': `${baseUrl}/pt-br/services/turbidity-monitoring`,
        'en': `${baseUrl}/en/services/turbidity-monitoring`,
        'x-default': `${baseUrl}/en/services/turbidity-monitoring`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/turbidity-monitoring`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/filtro_prensa_1200_drone_view.png`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Sistema de Monitoreo de Turbidez en Tiempo Real',
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

export default function TurbidityMonitoringLayout({ children }) {
  return children;
}
