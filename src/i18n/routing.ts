import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es-cl', 'es-mx', 'pt-br', 'en'],
  defaultLocale: 'es-cl',
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
