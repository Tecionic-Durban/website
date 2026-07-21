// src/app/[locale]/industries/crude-oil/layout.js - SEO metadata for crude oil industry page
import { routing } from '@/i18n/routing';
import { serviceSchemaJson } from '@/lib/schema';

export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

const metadataByLocale = {
  'es-cl': {
    title: 'Servicios Técnicos de Refinería | Recuperación de Hidrocarburos',
    description: 'Servicios técnicos para refinerías: tratamiento de lodos con recuperación de hidrocarburos. 60-75% recuperado como combustible. Probado por ENAP.',
    keywords: 'filtración petróleo, tratamiento lodos petroleros, recuperación hidrocarburos, filtro prensa refinería, borra petrolera, servicios petroleros Chile, tratamiento residuos refinería',
  },
  'es-mx': {
    title: 'Servicios Técnicos de Refinería | Recuperación de Hidrocarburos',
    description: 'Servicios técnicos para refinerías: tratamiento de lodos con recuperación de hidrocarburos. 60-75% recuperado como combustible. Probado por ENAP.',
    keywords: 'filtración petróleo, tratamiento lodos petroleros, recuperación hidrocarburos, filtro prensa refinería, borra petrolera, servicios petroleros México, tratamiento residuos refinería',
  },
  'pt-br': {
    title: 'Serviços Técnicos de Refinaria | Recuperação de Hidrocarbonetos',
    description: 'Serviços técnicos para refinarias: tratamento móvel de borra com recuperação de hidrocarbonetos. 60-75% recuperado como combustível. ENAP-comprovado.',
    keywords: 'filtração petróleo, tratamento lodos petróleo, recuperação hidrocarbonetos, filtro prensa refinaria, borra petrolífera, serviços petrolíferos Brasil, tratamento resíduos refinaria',
  },
  'en': {
    title: 'Refinery Technical Services | Sludge & Hydrocarbon Recovery',
    description: 'Refinery technical services: mobile sludge treatment with hydrocarbon recovery. 60-75% oil content recovered as fuel. ENAP-proven on-site service.',
    keywords: 'refinery technical services, refinery sludge treatment, hydrocarbon recovery service, oil sludge filtration, refinery filter press, refinery maintenance services, ENAP refinery',
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
      canonical: `${baseUrl}/${locale}/industries/crude-oil`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/industries/crude-oil`,
        'es-MX': `${baseUrl}/es-mx/industries/crude-oil`,
        'es':    `${baseUrl}/es-mx/industries/crude-oil`,
        'pt-BR': `${baseUrl}/pt-br/industries/crude-oil`,
        'en': `${baseUrl}/en/industries/crude-oil`,
        'x-default': `${baseUrl}/en/industries/crude-oil`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/industries/crude-oil`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/oil_refinery.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Servicios de filtración para industria petrolera',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/oil_refinery.jpg`],
    },
  };
}

export default async function CrudeOilLayout({ children, params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale['es-cl'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceSchemaJson({
            locale,
            pathSegment: 'industries/crude-oil',
            name: meta.title.replace(/\s*\|\s*Tecionic$/, ''),
            description: meta.description,
            serviceType: 'Refinery Sludge Treatment Service',
          }),
        }}
      />
      {children}
    </>
  );
}
