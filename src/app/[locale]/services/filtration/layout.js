// src/app/[locale]/services/filtration/layout.js - SEO metadata
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Servicio de Filtro Prensa Móvil | 130 TPD, Despliegue 48h, Sin CAPEX',
    description: 'Flota de filtros prensa móviles para minería e industria. 130 TPD de queque seco, despliegue 48h, sin CAPEX. Filtración como servicio en las Américas.',
    keywords: 'filtración industrial, filtro prensa móvil, separación sólido-líquido, servicios filtración minería, equipos móviles filtración',
  },
  'es-mx': {
    title: 'Servicio de Filtro Prensa Móvil | 130 TPD, Despliegue 48h, Sin CAPEX',
    description: 'Flota de filtros prensa móviles para minería e industria. 130 TPD de queque seco, despliegue 48h, sin CAPEX. Filtración como servicio en las Américas.',
    keywords: 'filtración industrial, filtro prensa móvil, separación sólido-líquido, servicios filtración minería, equipos móviles filtración',
  },
  'pt-br': {
    title: 'Serviço de Filtro Prensa Móvel | 130 TPD, Mobilização 48h, Sem CAPEX',
    description: 'Frota de filtros prensa móveis para mineração e indústria. 130 TPD de torta seca, mobilização 48h, sem CAPEX. Filtração como serviço nas Américas.',
    keywords: 'filtração industrial, filtro prensa móvel, separação sólido-líquido, serviços filtração mineração, equipamentos móveis filtração',
  },
  'en': {
    title: 'Mobile Filter Press Service | 130 TPD, 48h Deploy, Zero CAPEX',
    description: 'Mobile filter press fleet for mining and industrial ops. 130 TPD dry cake, 48-hour deployment, zero CAPEX. Filtration-as-a-service across the Americas.',
    keywords: 'mobile filter press, mining filtration service, solid-liquid separation, filtration rental mining, copper tailings filtration, LATAM filtration service',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/filtration`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/filtration`,
        'es-MX': `${baseUrl}/es-mx/services/filtration`,
        'es':    `${baseUrl}/es-mx/services/filtration`,
        'pt-BR': `${baseUrl}/pt-br/services/filtration`,
        'en': `${baseUrl}/en/services/filtration`,
        'x-default': `${baseUrl}/en/services/filtration`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/filtration`,
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

export default async function FiltrationLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'services/filtration',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'Mobile Filter Press Service',
          }),
        }}
      />
      {children}
    </>
  );
}
