// src/app/[locale]/cumplimiento/layout.js - SEO metadata
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
      title: 'Cumplimiento y Certificaciones | Tecionic',
      description: 'Información sobre cumplimiento normativo, certificaciones y estándares de calidad de Tecionic. ISO, seguridad y medio ambiente.',
      keywords: 'cumplimiento normativo, certificaciones minería, ISO, estándares calidad, seguridad industrial',
    },
    'es-mx': {
      title: 'Cumplimiento y Certificaciones | Tecionic',
      description: 'Información sobre cumplimiento normativo, certificaciones y estándares de calidad de Tecionic. ISO, seguridad y medio ambiente.',
      keywords: 'cumplimiento normativo, certificaciones minería, ISO, estándares calidad, seguridad industrial',
    },
    'pt-br': {
      title: 'Conformidade e Certificações | Tecionic',
      description: 'Informações sobre conformidade normativa, certificações e padrões de qualidade da Tecionic. ISO, segurança e meio ambiente.',
      keywords: 'conformidade normativa, certificações mineração, ISO, padrões qualidade, segurança industrial',
    },
    'en': {
      title: 'Compliance and Certifications | Tecionic',
      description: 'Information about regulatory compliance, certifications and quality standards at Tecionic. ISO, safety and environment.',
      keywords: 'regulatory compliance, mining certifications, ISO, quality standards, industrial safety',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/cumplimiento`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/cumplimiento`,
        'es-MX': `${baseUrl}/es-mx/cumplimiento`,
        'pt-BR': `${baseUrl}/pt-br/cumplimiento`,
        'en': `${baseUrl}/en/cumplimiento`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/cumplimiento`,
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

export default function CumplimientoLayout({ children }) {
  return children;
}
