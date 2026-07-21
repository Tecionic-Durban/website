// src/app/[locale]/services/concentrate-dehydration/layout.js - SEO metadata
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Deshidratación en Procesos Minerales | Filtro Prensa Móvil',
    description: 'Deshidratación móvil en procesos minerales. Reducción de humedad en concentrados de cobre, despliegue 48h, sin CAPEX. Minería y refinerías.',
    keywords: 'deshidratación concentrados, filtro prensa móvil, concentrado cobre, reducción humedad, transporte concentrados, minería cobre',
  },
  'es-mx': {
    title: 'Deshidratación en Procesos Minerales | Filtro Prensa Móvil',
    description: 'Deshidratación móvil en procesos minerales. Reducción de humedad en concentrados de cobre, despliegue 48h, sin CAPEX. Minería y refinerías.',
    keywords: 'deshidratación concentrados, filtro prensa móvil, concentrado cobre, reducción humedad, transporte concentrados, minería cobre',
  },
  'pt-br': {
    title: 'Desidratação em Processos Minerais | Filtro Prensa Móvel',
    description: 'Desidratação móvel em processos minerais. Redução de umidade em concentrados de cobre, mobilização 48h, sem CAPEX. Para mineração e refino.',
    keywords: 'desidratação concentrados, filtro prensa móvel, concentrado cobre, redução umidade, transporte concentrados, mineração cobre',
  },
  'en': {
    title: 'Mineral Processing Dehydration | Mobile Filter Press',
    description: 'Mobile dehydration of mineral processing products. Copper concentrate moisture reduction, 48h deployment, zero CAPEX. For mining and refining ops.',
    keywords: 'concentrate dehydration, mobile filter press, copper concentrate, moisture reduction, concentrate transport, copper mining',
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
      canonical: `${baseUrl}/${locale}/services/concentrate-dehydration`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/concentrate-dehydration`,
        'es-MX': `${baseUrl}/es-mx/services/concentrate-dehydration`,
        'es':    `${baseUrl}/es-mx/services/concentrate-dehydration`,
        'pt-BR': `${baseUrl}/pt-br/services/concentrate-dehydration`,
        'en': `${baseUrl}/en/services/concentrate-dehydration`,
        'x-default': `${baseUrl}/en/services/concentrate-dehydration`,
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

export default async function ConcentrateDehydrationLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'services/concentrate-dehydration',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'Concentrate Dehydration Service',
          }),
        }}
      />
      {children}
    </>
  );
}
