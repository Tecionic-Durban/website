import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Spam query parameters that don't belong to this site
const SPAM_PARAMS = ['products', 'product', 'p', 'id', 'item', 'pid', 'sku', 'add-to-cart', 'replytocom', 'action', 'post'];

// Spam patterns in the raw query string (catches ?products/123 format)
const SPAM_QUERY_PATTERNS = [
  /^products[\/=]/i,
  /^product[\/=]/i,
  /^item[\/=]/i,
  /^p[\/=]\d/i,
  /^id[\/=]\d/i,
];

// Legacy WordPress paths that don't exist on this Next.js site
const BLOCKED_PATHS = [
  '/wp-login.php',
  '/wp-admin',
  '/wp-content',
  '/wp-includes',
  '/xmlrpc.php',
  '/wp-json',
  '/.env',
  '/phpmyadmin',
  '/administrator',
];

export default function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const rawQuery = request.nextUrl.search;
  const pathname = request.nextUrl.pathname;

  // Block legacy WordPress and common attack paths (returns 404)
  for (const blockedPath of BLOCKED_PATHS) {
    if (pathname.startsWith(blockedPath)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // Block spam URLs with fake query parameters (returns 404)
  for (const param of SPAM_PARAMS) {
    if (searchParams.has(param)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // Check raw query string for path-like spam patterns like ?products/123
  if (rawQuery) {
    const queryWithoutQuestion = rawQuery.slice(1);
    for (const pattern of SPAM_QUERY_PATTERNS) {
      if (pattern.test(queryWithoutQuestion)) {
        return new NextResponse('Not Found', { status: 404 });
      }
    }
  }

  // Get country from geo headers (Netlify, Vercel, Cloudflare all provide this)
  const country = request.headers.get('x-country') ||
                  request.headers.get('x-vercel-ip-country') ||
                  request.headers.get('cf-ipcountry') ||
                  '';

  // Check if user already has a locale in the URL
  const hasLocale = routing.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in URL and visiting root, redirect based on country
  if (!hasLocale && pathname === '/') {
    let locale = 'es-cl';

    if (country === 'CL') {
      locale = 'es-cl';
    } else if (country === 'MX') {
      locale = 'es-mx';
    } else if (country === 'BR') {
      locale = 'pt-br';
    } else if (['AR', 'CO', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY'].includes(country)) {
      locale = 'es-mx';
    } else if (country) {
      locale = 'en';
    }

    return Response.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\..*).*)']
};
