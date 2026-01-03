'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const localeConfig = {
  'es-cl': { name: 'Espanol (CL)', flag: 'CL', shortName: 'ES-CL' },
  'es-mx': { name: 'Espanol (MX)', flag: 'MX', shortName: 'ES-MX' },
  'pt-br': { name: 'Portugues', flag: 'BR', shortName: 'PT-BR' },
  'en': { name: 'English', flag: 'US', shortName: 'EN' }
};

// Simple flag emoji component
function FlagEmoji({ code }) {
  const flags = {
    'CL': '\u{1F1E8}\u{1F1F1}',
    'MX': '\u{1F1F2}\u{1F1FD}',
    'BR': '\u{1F1E7}\u{1F1F7}',
    'US': '\u{1F1FA}\u{1F1F8}'
  };
  return <span className="text-base">{flags[code] || code}</span>;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('languageSwitcher');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const currentLocale = localeConfig[locale] || localeConfig['es-cl'];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors rounded-lg hover:bg-gray-50 cursor-pointer"
        aria-label={t('selectLanguage')}
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLocale.shortName}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            {routing.locales.map((loc) => {
              const config = localeConfig[loc];
              const isActive = loc === locale;

              return (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'text-emerald-600 font-semibold bg-emerald-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FlagEmoji code={config.flag} />
                  <span>{config.name}</span>
                  {isActive && (
                    <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
