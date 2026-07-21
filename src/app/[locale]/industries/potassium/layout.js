// src/app/[locale]/industries/potassium/layout.js - SEO metadata for potassium industry page
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Servicios de Filtración para Minería de Potasio',
    description: 'Soluciones móviles de filtración para operaciones de potasio y fertilizantes. Equipos para cristalización y procesamiento de sales. Servicio en toda Latinoamérica.',
    keywords: 'filtración potasio, tratamiento sales potasio, filtro prensa potasio, minería potasio Chile, cloruro de potasio, fertilizantes potasio, procesamiento sales',
  },
  'es-mx': {
    title: 'Servicios de Filtración para Minería de Potasio',
    description: 'Soluciones móviles de filtración para operaciones de potasio y fertilizantes. Equipos para cristalización y procesamiento de sales. Servicio en toda Latinoamérica.',
    keywords: 'filtración potasio, tratamiento sales potasio, filtro prensa potasio, minería potasio México, cloruro de potasio, fertilizantes potasio, procesamiento sales',
  },
  'pt-br': {
    title: 'Serviços de Filtração para Mineração de Potássio',
    description: 'Soluções móveis de filtração para operações de potássio e fertilizantes. Equipamentos para cristalização e processamento de sais. Serviço em toda a América Latina.',
    keywords: 'filtração potássio, tratamento sais potássio, filtro prensa potássio, mineração potássio Brasil, cloreto de potássio, fertilizantes potássio, processamento sais',
  },
  'en': {
    title: 'Potash Filtration & Crystallization Service | LATAM',
    description: 'Mobile filtration for potash, KCl, and salt crystallization plants. On-site deployment for fertilizer producers across Latin America. Zero CAPEX.',
    keywords: 'potash filtration, KCl crystallization filtration, fertilizer plant filtration, potassium mining service LATAM, salt crystallization service, potash Chile',
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
      canonical: `${baseUrl}/${locale}/industries/potassium`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/industries/potassium`,
        'es-MX': `${baseUrl}/es-mx/industries/potassium`,
        'es':    `${baseUrl}/es-mx/industries/potassium`,
        'pt-BR': `${baseUrl}/pt-br/industries/potassium`,
        'en': `${baseUrl}/en/industries/potassium`,
        'x-default': `${baseUrl}/en/industries/potassium`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/industries/potassium`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/potassium_industry.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Servicios de filtración para minería de potasio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/potassium_industry.jpg`],
    },
  };
}

export default async function PotassiumLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'industries/potassium',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'Potash Filtration Service',
          }),
        }}
      />
      {children}
    </>
  );
}
