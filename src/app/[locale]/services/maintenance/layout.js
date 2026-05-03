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
      title: 'Mantenimiento de Filtros Prensa y Soporte Técnico | Tecionic',
      description: 'Mantenimiento preventivo y correctivo de filtros prensa industriales. Soporte técnico especializado, repuestos originales, servicio en sitio.',
      keywords: 'mantenimiento filtros prensa, soporte técnico filtración, repuestos filtración, mantenimiento preventivo, servicio técnico minería',
    },
    'es-mx': {
      title: 'Mantenimiento de Filtros Prensa y Soporte Técnico | Tecionic',
      description: 'Mantenimiento preventivo y correctivo de filtros prensa industriales. Soporte técnico especializado, repuestos originales, servicio en sitio.',
      keywords: 'mantenimiento filtros prensa, soporte técnico filtración, repuestos filtración, mantenimiento preventivo, servicio técnico minería',
    },
    'pt-br': {
      title: 'Manutenção de Filtros Prensa e Suporte Técnico | Tecionic',
      description: 'Manutenção preventiva e corretiva de filtros prensa industriais. Suporte técnico especializado, peças originais, serviço em campo.',
      keywords: 'manutenção filtros prensa, suporte técnico filtração, peças reposição filtração, manutenção preventiva, serviço técnico mineração',
    },
    'en': {
      title: 'Filter Press Maintenance & Technical Support | Tecionic',
      description: 'Preventive and corrective maintenance for industrial filter presses. Specialized technical support, original spare parts, on-site service.',
      keywords: 'filter press maintenance, filtration technical support, filtration spare parts, preventive maintenance, mining technical service',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    // Spanish-only content — block indexing on non-Spanish locale URLs
    robots: locale === 'pt-br' || locale === 'en'
      ? { index: false, follow: true }
      : undefined,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/maintenance`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/maintenance`,
        'es-MX': `${baseUrl}/es-mx/services/maintenance`,
        'es':    `${baseUrl}/es-mx/services/maintenance`,
        'pt-BR': `${baseUrl}/pt-br/services/maintenance`,
        'en': `${baseUrl}/en/services/maintenance`,
        'x-default': `${baseUrl}/en/services/maintenance`,
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
