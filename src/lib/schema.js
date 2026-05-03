// src/lib/schema.js - JSON-LD schema helpers

const baseUrl = 'https://tecionic.com';

const providerRef = {
  '@type': 'Organization',
  name: 'Tecionic',
  url: baseUrl,
};

const defaultAreaServed = [
  { '@type': 'Country', name: 'Chile' },
  { '@type': 'Country', name: 'Peru' },
  { '@type': 'Country', name: 'Mexico' },
  { '@type': 'Country', name: 'Argentina' },
  { '@type': 'Country', name: 'Brazil' },
];

/**
 * Build a Service JSON-LD payload for a service or industry page.
 * Returns the stringified JSON ready to inject via dangerouslySetInnerHTML.
 */
export function serviceSchemaJson({
  locale,
  pathSegment,
  name,
  description,
  serviceType = 'Industrial Filtration Service',
  areaServed,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: providerRef,
    serviceType,
    areaServed: areaServed || defaultAreaServed,
    url: `${baseUrl}/${locale}/${pathSegment}`,
  };
  return JSON.stringify(schema);
}
