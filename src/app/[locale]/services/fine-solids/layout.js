// src/app/[locale]/services/fine-solids/layout.js - SEO metadata
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Filtración de Sólidos Finos | Recuperación de Clarificadores',
    description: 'Filtración móvil de sólidos finos en clarificadores y espesadores. Capacidad 14 TPD, recuperación de rebose, instalación en sitio en 48h.',
    keywords: 'sólidos finos, filtración partículas finas, clarificación soluciones, hidrometalurgia, recuperación finos, minería procesamiento',
  },
  'es-mx': {
    title: 'Filtración de Sólidos Finos | Recuperación de Clarificadores',
    description: 'Filtración móvil de sólidos finos en clarificadores y espesadores. Capacidad 14 TPD, recuperación de rebose, instalación en sitio en 48h.',
    keywords: 'sólidos finos, filtración partículas finas, clarificación soluciones, hidrometalurgia, recuperación finos, minería procesamiento',
  },
  'pt-br': {
    title: 'Filtração de Sólidos Finos | Recuperação de Clarificadores',
    description: 'Filtração móvel de sólidos finos em clarificadores e espessadores. Capacidade 14 TPD, recuperação de overflow, instalação em 48h.',
    keywords: 'sólidos finos, filtração partículas finas, clarificação soluções, hidrometalurgia, recuperação finos, mineração processamento',
  },
  'en': {
    title: 'Fine Solids Filtration | Clarifier & Thickener Recovery',
    description: 'Mobile fine solids filtration from clarifiers and thickeners. 14 TPD capacity, clear overflow recovery, 48-hour on-site installation.',
    keywords: 'fine solids filtration, clarifier fines recovery, thickener underflow filtration, mining fine particles, mobile clarification service, LATAM hydrometallurgy',
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
      canonical: `${baseUrl}/${locale}/services/fine-solids`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/fine-solids`,
        'es-MX': `${baseUrl}/es-mx/services/fine-solids`,
        'es':    `${baseUrl}/es-mx/services/fine-solids`,
        'pt-BR': `${baseUrl}/pt-br/services/fine-solids`,
        'en': `${baseUrl}/en/services/fine-solids`,
        'x-default': `${baseUrl}/en/services/fine-solids`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/fine-solids`,
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

export default async function FineSolidsLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'services/fine-solids',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'Fine Solids Filtration Service',
          }),
        }}
      />
      {children}
    </>
  );
}
