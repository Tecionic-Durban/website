'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import posthog from 'posthog-js'
import { Close } from '@carbon/icons-react'
import Link from 'next/link'

export default function CookieConsent() {
  const t = useTranslations('cookieConsent')
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent')
    if (consent === null) {
      // No choice made yet, show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    } else if (consent === 'declined') {
      // User declined, opt out of tracking
      posthog.opt_out_capturing()
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    posthog.opt_in_capturing()
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    posthog.opt_out_capturing()
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <p className="text-gray-200 text-sm">
              {t('message')}{' '}
              <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 underline">
                {t('privacyPolicy')}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
            >
              {t('decline')}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              {t('accept')}
            </button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 sm:hidden text-gray-400 hover:text-white"
            aria-label={t('close')}
          >
            <Close size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
