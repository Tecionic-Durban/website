import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Spam query parameters that don't belong to this site
const SPAM_PARAMS = [
  // E-commerce spam (most common attack vector)
  'products', 'product', 'item', 'items', 'sku', 'pid', 'add-to-cart', 'cart',
  'shop', 'store', 'buy', 'order', 'checkout', 'purchase',
  // WordPress spam
  'replytocom', 'action', 'post', 'attachment_id', 'page_id', 'cat',
  // Generic spam patterns
  'redirect', 'url', 'link', 'goto', 'out', 'away',
  // Pharmacy/casino spam (common SEO spam)
  'viagra', 'cialis', 'casino', 'poker', 'slots', 'betting',
];

// Spam patterns in the raw query string (catches ?products/123 format)
const SPAM_QUERY_PATTERNS = [
  /^products?[\/=]/i,        // ?product= or ?products= or ?products/
  /^items?[\/=]/i,           // ?item= or ?items=
  /^p[\/=]\d/i,              // ?p=123
  /^id[\/=]\d/i,             // ?id=123
  /^shop[\/=]/i,             // ?shop=
  /^store[\/=]/i,            // ?store=
  /^buy[\/=]/i,              // ?buy=
  /^order[\/=]/i,            // ?order=
  /^\d+$/,                   // Just numbers like ?12345
  /^[a-z]{2,3}[\/=]/i,       // Short param hacks like ?en= ?de=
];

// Legacy WordPress paths and common attack vectors that don't exist on this Next.js site
// Returns 410 Gone to signal permanent removal and speed up de-indexing
const BLOCKED_PATHS = [
  // WordPress
  '/wp-login.php',
  '/wp-admin',
  '/wp-content',
  '/wp-includes',
  '/xmlrpc.php',
  '/wp-json',
  // Server files
  '/.env',
  '/.git',
  '/phpmyadmin',
  '/administrator',
  '/admin.php',
  // E-commerce paths (we don't have a store)
  '/shop',
  '/store',
  '/cart',
  '/checkout',
  '/products',
  '/product',
  '/add-to-cart',
  // Common spam injection paths
  '/feed',
  '/rss',
  '/trackback',
];

export default function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const rawQuery = request.nextUrl.search;
  const pathname = request.nextUrl.pathname;

  // Block legacy WordPress and common attack paths (returns 410 Gone)
  for (const blockedPath of BLOCKED_PATHS) {
    if (pathname.startsWith(blockedPath)) {
      return new NextResponse('Gone', { status: 410 });
    }
  }

  // Block spam URLs with fake query parameters (returns 410 Gone for faster de-indexing)
  for (const param of SPAM_PARAMS) {
    if (searchParams.has(param)) {
      return new NextResponse('Gone', { status: 410 });
    }
  }

  // Check raw query string for path-like spam patterns like ?products/123
  if (rawQuery) {
    const queryWithoutQuestion = rawQuery.slice(1);
    for (const pattern of SPAM_QUERY_PATTERNS) {
      if (pattern.test(queryWithoutQuestion)) {
        return new NextResponse('Gone', { status: 410 });
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
