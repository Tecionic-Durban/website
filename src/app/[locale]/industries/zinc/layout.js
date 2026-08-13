// src/app/[locale]/industries/zinc/layout.js - SEO metadata for zinc industry page
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Filtración de Zinc | Electrolito y Borra de Jarosita',
    description: 'Servicio móvil de filtración de zinc para refinerías. Filtración de electrolito y borra de jarosita. Movilización 48h, probado en Cajamarquilla.',
    keywords: 'filtración zinc, tratamiento electrolito zinc, purificación zinc, filtro prensa zinc, minería zinc Chile, electrowinning zinc, hidrometalurgia zinc',
  },
  'es-mx': {
    title: 'Filtración de Zinc | Electrolito y Lodos de Jarosita',
    description: 'Servicio móvil de filtración de zinc para refinerías. Filtración de electrolito y lodos de jarosita. Probado en Cajamarquilla.',
    keywords: 'filtración zinc, tratamiento electrolito zinc, purificación zinc, filtro prensa zinc, minería zinc México, electrodepósito zinc, hidrometalurgia zinc',
  },
  'pt-br': {
    title: 'Filtração de Zinco | Eletrólito e Borra de Jarosita',
    description: 'Serviço móvel de filtração de zinco para refinarias. Filtração de eletrólito e borra de jarosita. Mobilização 48h, comprovado em Cajamarquilla.',
    keywords: 'filtração zinco, tratamento eletrólito zinco, purificação zinco, filtro prensa zinco, mineração zinco Brasil, electrowinning zinco, hidrometalurgia zinco',
  },
  'en': {
    title: 'Zinc Filtration Service | Electrolyte & Jarosite Sludge Removal',
    description: 'Mobile zinc filtration service for refineries. Electrolyte filtration and jarosite sludge removal. 48-hour mobilization, proven at Cajamarquilla.',
    keywords: 'zinc filtration, zinc electrolyte filtration, jarosite sludge removal, goethite treatment zinc, zinc hydrometallurgy service, Cajamarquilla zinc, zinc refinery filtration',
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
      canonical: `${baseUrl}/${locale}/industries/zinc`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/industries/zinc`,
        'es-MX': `${baseUrl}/es-mx/industries/zinc`,
        'es':    `${baseUrl}/es-mx/industries/zinc`,
        'pt-BR': `${baseUrl}/pt-br/industries/zinc`,
        'en': `${baseUrl}/en/industries/zinc`,
        'x-default': `${baseUrl}/en/industries/zinc`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/industries/zinc`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/zinc_ore.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Servicios de filtración para minería de zinc',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/zinc_ore.jpg`],
    },
  };
}

export default async function ZincLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'industries/zinc',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'Zinc Mining Filtration Service',
          }),
        }}
      />
      {children}
    </>
  );
}
