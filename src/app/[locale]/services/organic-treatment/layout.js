// src/app/[locale]/services/organic-treatment/layout.js - SEO metadata
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Tratamiento de Borra SX y Recuperación de Orgánico | Reduce Pérdidas',
    description: 'Eliminación de borra SX y recuperación de orgánico para circuitos de cobre. Restablece separación de fases, reduce pérdidas, sin paradas.',
    keywords: 'tratamiento orgánico SX, eliminación degradados, recuperación solventes, extracción por solventes, crud treatment, minería cobre',
  },
  'es-mx': {
    title: 'Tratamiento de Crud SX y Recuperación de Orgánico | Reduce Pérdidas',
    description: 'Eliminación de crud SX y recuperación de orgánico para circuitos de cobre. Restablece separación de fases, reduce pérdidas, sin paradas.',
    keywords: 'tratamiento de crud SX, tratamiento orgánico SX, eliminación degradados, recuperación solventes, extracción por solventes, planta ESDE, minería cobre',
  },
  'pt-br': {
    title: 'Tratamento de Borra SX e Recuperação de Orgânico | Reduz Perdas',
    description: 'Remoção de borra SX e recuperação de orgânico para circuitos de cobre. Restaura separação de fases, reduz perdas de orgânico, sem paradas de planta.',
    keywords: 'tratamento orgânico SX, eliminação degradados, recuperação solventes, extração por solventes, crud treatment, mineração cobre',
  },
  'en': {
    title: 'SX Crud & Organic Recovery Service | Cut Organic Losses',
    description: 'On-site SX crud removal and organic recovery for copper solvent extraction. Restore phase separation, cut organic losses, zero plant downtime.',
    keywords: 'SX crud treatment, organic recovery SX, solvent extraction service, crud removal copper, SX phase separation, LATAM copper mining service',
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
      canonical: `${baseUrl}/${locale}/services/organic-treatment`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/organic-treatment`,
        'es-MX': `${baseUrl}/es-mx/services/organic-treatment`,
        'es':    `${baseUrl}/es-mx/services/organic-treatment`,
        'pt-BR': `${baseUrl}/pt-br/services/organic-treatment`,
        'en': `${baseUrl}/en/services/organic-treatment`,
        'x-default': `${baseUrl}/en/services/organic-treatment`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/organic-treatment`,
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

export default async function OrganicTreatmentLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'services/organic-treatment',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'SX Organic Treatment Service',
          }),
        }}
      />
      {children}
    </>
  );
}
