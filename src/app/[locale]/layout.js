// src/app/[locale]/layout.js
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {Open_Sans, Titillium_Web, Playfair_Display} from 'next/font/google';
import {routing} from '@/i18n/routing';
import '../../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostHogProvider from '@/components/PostHogProvider';
import CookieConsent from '@/components/CookieConsent';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-titillium-web',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display',
  display: 'swap',
});
// TEMPORARILY DISABLED: AI Chatbot and Dashboard per stakeholder request
// import FloatingElements from "@/components/FloatingElements"

// Force static generation for Cloudflare Pages deployment
export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

// Viewport configuration for safe area support (notched devices)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#059669',
};

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}) {
  const {locale} = await params;

  // Localized metadata for SEO
  const titles = {
    'es-cl': 'Tecionic - Servicios Móviles de Filtración LIX/SX/EW',
    'es-mx': 'Tecionic - Servicios Móviles de Filtración LIX/SX/EW',
    'pt-br': 'Tecionic - Serviços Móveis de Filtração LIX/SX/EW',
    'en': 'Tecionic - Mobile Filtration Services LIX/SX/EW'
  };

  const descriptions = {
    'es-cl': 'Más de 23 años de experiencia en filtración móvil y tratamiento de borra para minería LIX/SX/EW. Sin CAPEX, movilización en 48 horas. Servicio en las Américas y operaciones globales.',
    'es-mx': 'Más de 23 años de experiencia en filtración móvil y tratamiento de crud para minería LIX/SX/EW (plantas ESDE). Sin CAPEX. Servicio en las Américas y operaciones globales.',
    'pt-br': 'Mais de 23 anos de experiência em filtração móvel e tratamento de borra para mineração LIX/SX/EW. Sem CAPEX, mobilização em 48 horas. Serviço nas Américas e operações globais.',
    'en': "Over 23 years of experience in mobile filtration and sludge treatment for LIX/SX/EW mining operations. Zero CAPEX, 48-hour mobilization. Service across the Americas and global operations."
  };

  const keywords = {
    'es-cl': 'filtración móvil, tratamiento borra, LIX SX EW, minería cobre, hidrometalurgia, filtro prensa móvil, Chile, las Américas, servicios industriales',
    'es-mx': 'filtración móvil, tratamiento de crud, planta ESDE, LIX SX EW, minería cobre, jales mineros, hidrometalurgia, filtro prensa móvil, renta de filtro prensa, México, las Américas, servicios industriales',
    'pt-br': 'filtração móvel, tratamento borra, LIX SX EW, mineração cobre, hidrometalurgia, filtro prensa móvel, Brasil, as Américas, serviços industriais',
    'en': 'mobile filtration, sludge treatment, LIX SX EW, copper mining, hydrometallurgy, mobile filter press, Americas, industrial services'
  };

  const title = titles[locale] || titles['es-cl'];
  const description = descriptions[locale] || descriptions['es-cl'];

  return {
    title: {
      default: title,
      template: `%s | Tecionic`
    },
    description: description,
    keywords: keywords[locale] || keywords['es-cl'],
    authors: [{ name: 'Tecionic' }],
    creator: 'Tecionic',
    publisher: 'Tecionic',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'es-CL': `${baseUrl}/es-cl`,
        'es-MX': `${baseUrl}/es-mx`,
        'es':    `${baseUrl}/es-mx`,
        'pt-BR': `${baseUrl}/pt-br`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/filtro_prensa_1200_drone_view.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Filtro Prensa Móvil para Minería',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`${baseUrl}/filtro_prensa_1200_drone_view.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification when available
      // google: 'your-google-verification-code',
    },
  };
}

// Organization JSON-LD Schema for rich snippets
function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tecionic',
    legalName: 'Inversiones Durban S.A.',
    alternateName: ['Tec-Ionic Durban', 'TSF'],
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Empresa líder en servicios móviles de filtración y tratamiento de borra para operaciones mineras LIX/SX/EW en las Américas y operaciones globales.',
    foundingDate: '2001',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 100
    },
    areaServed: [
      { '@type': 'Country', name: 'Chile' },
      { '@type': 'Country', name: 'Peru' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Country', name: 'Brazil' },
      { '@type': 'Continent', name: 'South America' }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Luis Thayer Ojeda 95, of. 312',
      addressLocality: 'Providencia',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL'
    },
    location: [
      {
        '@type': 'Place',
        name: 'Tecionic Santiago',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Luis Thayer Ojeda 95, of. 312',
          addressLocality: 'Providencia',
          addressRegion: 'Región Metropolitana',
          addressCountry: 'CL'
        }
      },
      {
        '@type': 'Place',
        name: 'Tecionic Antofagasta',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Miraflores 1260 B',
          addressLocality: 'Calama',
          addressRegion: 'Antofagasta',
          addressCountry: 'CL'
        }
      },
      {
        '@type': 'Place',
        name: 'Tecionic Lima',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Felipe Pardo y Aliaga 699, Piso 8',
          addressLocality: 'San Isidro',
          addressRegion: 'Lima',
          postalCode: '15073',
          addressCountry: 'PE'
        }
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contacto@tsf.cl',
      availableLanguage: ['Spanish', 'Portuguese', 'English']
    },
    sameAs: [
      // Add social media URLs when available
      // 'https://www.linkedin.com/company/tecionic',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Filtración Móvil',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tratamiento Orgánico SX',
            description: 'Eliminación de degradados orgánicos en circuitos de extracción por solventes'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza Celdas EW',
            description: 'Limpieza especializada de celdas de electrowinning'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deshidratación de Concentrados',
            description: 'Equipos móviles para deshidratación de concentrados de cobre'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tratamiento de Sólidos Finos',
            description: 'Filtración de partículas finas en procesos hidrometalúrgicos'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness JSON-LD Schemas — one per office for local-pack visibility
// (Calama / Santiago / Lima queries during SEO recovery)
function LocalBusinessSchemas() {
  const offices = [
    {
      name: 'Tecionic Santiago',
      address: {
        streetAddress: 'Luis Thayer Ojeda 95, of. 312',
        addressLocality: 'Providencia',
        addressRegion: 'Región Metropolitana',
        addressCountry: 'CL',
      },
      country: 'Chile',
    },
    {
      name: 'Tecionic Antofagasta',
      address: {
        streetAddress: 'Miraflores 1260 B',
        addressLocality: 'Calama',
        addressRegion: 'Antofagasta',
        addressCountry: 'CL',
      },
      country: 'Chile',
    },
    {
      name: 'Tecionic Lima',
      address: {
        streetAddress: 'Av. Felipe Pardo y Aliaga 699, Piso 8',
        addressLocality: 'San Isidro',
        addressRegion: 'Lima',
        postalCode: '15073',
        addressCountry: 'PE',
      },
      country: 'Peru',
    },
  ];

  return offices.map((office, i) => {
    const slug = office.name.toLowerCase().replace(/\s+/g, '-');
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#${slug}`,
      name: office.name,
      url: baseUrl,
      image: `${baseUrl}/logo.png`,
      email: 'contacto@tsf.cl',
      address: {
        '@type': 'PostalAddress',
        ...office.address,
      },
      areaServed: { '@type': 'Country', name: office.country },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Tecionic',
        url: baseUrl,
      },
    };

    return (
      <script
        key={i}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  });
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();
  const tCommon = await getTranslations('common');

  return (
    <html lang={locale} className={`${openSans.variable} ${titilliumWeb.variable} ${playfairDisplay.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchemas />
      </head>
      <body className="min-h-screen bg-white overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          {tCommon('skipToContent')}
        </a>
        <PostHogProvider>
          <NextIntlClientProvider messages={messages}>
            <BreadcrumbSchema />
            <Header />
            <main id="main">
              {children}
            </main>
            <Footer />
            <CookieConsent />
            {/* TEMPORARILY DISABLED: AI Chatbot and Dashboard per stakeholder request */}
            {/* <FloatingElements /> */}
          </NextIntlClientProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
