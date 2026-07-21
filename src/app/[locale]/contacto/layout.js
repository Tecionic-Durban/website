// src/app/[locale]/contacto/layout.js - SEO metadata for contact page
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
      title: 'Contacto - Consulta Técnica Especializada',
      description: 'Contacte a Tecionic para servicios móviles de filtración y separación sólido-líquido en procesos LIX/SX/EW. Movilización en 48 horas en toda Latinoamérica.',
      keywords: 'contacto tecionic, consulta técnica filtración, servicios móviles minería, LIX SX EW contacto, filtro prensa móvil consulta',
    },
    'es-mx': {
      title: 'Contacto - Consulta Técnica Especializada',
      description: 'Contacte a Tecionic para servicios móviles de filtración y separación sólido-líquido en procesos LIX/SX/EW. Movilización en 48 horas en toda Latinoamérica.',
      keywords: 'contacto tecionic, consulta técnica filtración, servicios móviles minería, LIX SX EW contacto, filtro prensa móvil consulta',
    },
    'pt-br': {
      title: 'Contato - Consulta Técnica Especializada',
      description: 'Entre em contato com a Tecionic para serviços móveis de filtração e separação sólido-líquido em processos LIX/SX/EW. Mobilização em 48 horas em toda a América Latina.',
      keywords: 'contato tecionic, consulta técnica filtração, serviços móveis mineração, LIX SX EW contato, filtro prensa móvel consulta',
    },
    'en': {
      title: 'Contact - Specialized Technical Consultation',
      description: 'Contact Tecionic for mobile filtration and solid-liquid separation services in LIX/SX/EW processes. 48-hour mobilization throughout Latin America.',
      keywords: 'contact tecionic, filtration technical consultation, mobile mining services, LIX SX EW contact, mobile filter press inquiry',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/contacto`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/contacto`,
        'es-MX': `${baseUrl}/es-mx/contacto`,
        'es':    `${baseUrl}/es-mx/contacto`,
        'pt-BR': `${baseUrl}/pt-br/contacto`,
        'en': `${baseUrl}/en/contacto`,
        'x-default': `${baseUrl}/en/contacto`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/contacto`,
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

export default function ContactoLayout({ children }) {
  return children;
}
