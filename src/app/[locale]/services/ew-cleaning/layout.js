// src/app/[locale]/services/ew-cleaning/layout.js - SEO metadata
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Limpieza de Celdas EW y Desborre | 1 Celda/Día, Lista para Altitud',
    description: 'Desborre y limpieza de celdas EW en refinerías de cobre. 1 celda por día, sin parada de producción, probado sobre 4,000 msnm.',
    keywords: 'limpieza celdas EW, desborre electrowinning, filtración EW, mantenimiento celdas electrolíticas, minería cobre EW',
  },
  'es-mx': {
    title: 'Limpieza de Celdas EW y Remoción de Crud | 1 Celda/Día, Lista para Altitud',
    description: 'Remoción de crud y limpieza de celdas de electrodepósito en refinerías de cobre. 1 celda por día, sin parada de producción, probado sobre 4,000 msnm.',
    keywords: 'limpieza celdas EW, limpieza celdas electrodepósito, remoción de crud, planta ESDE, mantenimiento celdas electrolíticas, minería cobre EW',
  },
  'pt-br': {
    title: 'Limpeza de Células EW e Desborre | 1 Célula/Dia, Pronto p/ Altitude',
    description: 'Remoção de borra e limpeza de células EW em refinarias de cobre. 1 célula por dia, sem parada de produção, comprovado acima de 4,000 m.',
    keywords: 'limpeza células EW, desborre electrowinning, filtração EW, manutenção células eletrolíticas, mineração cobre EW',
  },
  'en': {
    title: 'EW Cell Cleaning & Desludging | 1 Cell/Day, Altitude-Ready',
    description: 'On-site EW cell sludge removal for copper electrowinning refineries. 1 cell per day throughput, no production halt, proven above 4,000 m altitude.',
    keywords: 'EW cell desludging, electrowinning cleaning, EW sludge removal copper, cathode contamination, high altitude EW service, copper refinery maintenance',
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
      canonical: `${baseUrl}/${locale}/services/ew-cleaning`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/ew-cleaning`,
        'es-MX': `${baseUrl}/es-mx/services/ew-cleaning`,
        'es':    `${baseUrl}/es-mx/services/ew-cleaning`,
        'pt-BR': `${baseUrl}/pt-br/services/ew-cleaning`,
        'en': `${baseUrl}/en/services/ew-cleaning`,
        'x-default': `${baseUrl}/en/services/ew-cleaning`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/ew-cleaning`,
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

export default async function EWCleaningLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'services/ew-cleaning',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'EW Cell Desludging Service',
          }),
        }}
      />
      {children}
    </>
  );
}
