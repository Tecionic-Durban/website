// src/app/[locale]/services/maintenance/layout.js - SEO metadata
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
      title: 'Mantenimiento de Equipos de Filtración | Tecionic',
      description: 'Servicios de mantenimiento preventivo y correctivo para equipos de filtración. Soporte técnico especializado y repuestos para filtros prensa.',
      keywords: 'mantenimiento filtros prensa, soporte técnico filtración, repuestos filtración, mantenimiento preventivo, servicio técnico minería',
    },
    'es-mx': {
      title: 'Mantenimiento de Equipos de Filtración | Tecionic',
      description: 'Servicios de mantenimiento preventivo y correctivo para equipos de filtración. Soporte técnico especializado y repuestos para filtros prensa.',
      keywords: 'mantenimiento filtros prensa, soporte técnico filtración, repuestos filtración, mantenimiento preventivo, servicio técnico minería',
    },
    'pt-br': {
      title: 'Manutenção de Equipamentos de Filtração | Tecionic',
      description: 'Serviços de manutenção preventiva e corretiva para equipamentos de filtração. Suporte técnico especializado e peças de reposição para filtros prensa.',
      keywords: 'manutenção filtros prensa, suporte técnico filtração, peças reposição filtração, manutenção preventiva, serviço técnico mineração',
    },
    'en': {
      title: 'Filtration Equipment Maintenance | Tecionic',
      description: 'Preventive and corrective maintenance services for filtration equipment. Specialized technical support and spare parts for filter presses.',
      keywords: 'filter press maintenance, filtration technical support, filtration spare parts, preventive maintenance, mining technical service',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/maintenance`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/maintenance`,
        'es-MX': `${baseUrl}/es-mx/services/maintenance`,
        'pt-BR': `${baseUrl}/pt-br/services/maintenance`,
        'en': `${baseUrl}/en/services/maintenance`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/maintenance`,
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

export default function MaintenanceLayout({ children }) {
  return children;
}
