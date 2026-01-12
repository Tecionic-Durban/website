// src/app/[locale]/casos-de-exito/soporte-sx-dgm/layout.js - SEO metadata
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
      title: 'Caso de Éxito: Soporte SX DGM | Tecionic',
      description: 'Caso de éxito en soporte técnico para operaciones de extracción por solventes. Optimización de procesos y mejora de recuperación.',
      keywords: 'caso éxito soporte SX, extracción solventes, optimización SX, proyecto hidrometalurgia',
    },
    'es-mx': {
      title: 'Caso de Éxito: Soporte SX DGM | Tecionic',
      description: 'Caso de éxito en soporte técnico para operaciones de extracción por solventes. Optimización de procesos y mejora de recuperación.',
      keywords: 'caso éxito soporte SX, extracción solventes, optimización SX, proyecto hidrometalurgia',
    },
    'pt-br': {
      title: 'Caso de Sucesso: Suporte SX DGM | Tecionic',
      description: 'Caso de sucesso em suporte técnico para operações de extração por solventes. Otimização de processos e melhoria de recuperação.',
      keywords: 'caso sucesso suporte SX, extração solventes, otimização SX, projeto hidrometalurgia',
    },
    'en': {
      title: 'Success Story: SX DGM Support | Tecionic',
      description: 'Success story in technical support for solvent extraction operations. Process optimization and recovery improvement.',
      keywords: 'SX support success story, solvent extraction, SX optimization, hydrometallurgy project',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/casos-de-exito/soporte-sx-dgm`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/casos-de-exito/soporte-sx-dgm`,
        'es-MX': `${baseUrl}/es-mx/casos-de-exito/soporte-sx-dgm`,
        'pt-BR': `${baseUrl}/pt-br/casos-de-exito/soporte-sx-dgm`,
        'en': `${baseUrl}/en/casos-de-exito/soporte-sx-dgm`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/casos-de-exito/soporte-sx-dgm`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function SoporteSXDGMLayout({ children }) {
  return children;
}
