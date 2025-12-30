import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Get country from geo headers (Netlify, Vercel, Cloudflare all provide this)
  const country = request.headers.get('x-country') ||
                  request.headers.get('x-vercel-ip-country') ||
                  request.headers.get('cf-ipcountry') ||
                  '';

  // Check if user already has a locale in the URL
  const pathname = request.nextUrl.pathname;
  const hasLocale = routing.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in URL and visiting root, redirect based on country
  if (!hasLocale && pathname === '/') {
    let locale = 'es-cl'; // Default for Chile and unknown

    if (country === 'CL') {
      locale = 'es-cl';
    } else if (country === 'MX') {
      locale = 'es-mx';
    } else if (country === 'BR') {
      locale = 'pt-br';
    } else if (['AR', 'CO', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY'].includes(country)) {
      // Other Latin American Spanish-speaking countries → Mexico Spanish
      locale = 'es-mx';
    } else if (country) {
      // Any other detected country → English
      locale = 'en';
    }
    // If no country detected, falls through to es-cl (default)

    return Response.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for:
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - Static files (favicon, images, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
