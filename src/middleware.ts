import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Serve 410 Gone for legacy WordPress spam-injection URLs.
  // Pattern: /?products/12345 — query string starts with literal "products/"
  // (not "products=" or other patterns that legit tracking params might use).
  // Telling Google these URLs are permanently gone speeds up index removal.
  const search = request.nextUrl.search;
  if (search.startsWith('?products/')) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'Content-Type': 'text/plain',
        'X-Robots-Tag': 'noindex',
      },
    });
  }

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
    // Geo-varying target → temporary redirect is semantically correct here.
    return Response.redirect(new URL(`/${locale}`, request.url));
  }

  // Legacy non-prefixed deep paths (e.g. /services/filtration) still indexed
  // from before the locale migration. Redirect permanently (308) to the
  // default-locale URL so Google consolidates signals onto one canonical
  // instead of keeping the old URL alive (which a 307 tells it to do).
  if (!hasLocale && pathname !== '/') {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}${pathname}`, request.url),
      308
    );
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
