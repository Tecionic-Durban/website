'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Initialize PostHog once the main thread is idle. Running init at module
// scope put analytics setup on the critical path and delayed first paint;
// deferring costs at most the first seconds of session data. The initial
// pageview is captured in the loaded callback since the route tracker may
// fire before init completes.
function initPostHogDeferred() {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return
  if (window.__tsfPosthogInitScheduled) return
  window.__tsfPosthogInitScheduled = true

  const init = () => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // We'll manually capture page views for better control
      capture_pageleave: true, // Track when users leave pages (time on page)
      persistence: 'localStorage',
      loaded: (posthog) => {
        // Check consent status on load
        const consent = localStorage.getItem('cookie_consent')
        if (consent === 'declined') {
          posthog.opt_out_capturing()
        }
        // Capture the landing pageview that the route tracker missed pre-init
        posthog.capture('$pageview', { $current_url: window.location.href })
      }
    })
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(init, { timeout: 3000 })
  } else {
    setTimeout(init, 1500)
  }
}

// Component to track page views
function PostHogPageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Pre-init pageviews are captured by the init loaded callback instead
    if (pathname && posthog.__loaded) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + '?' + searchParams.toString()
      }
      posthog.capture('$pageview', {
        $current_url: url
      })
    }
  }, [pathname, searchParams])

  return null
}

// Wrapper with Suspense for useSearchParams
function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageViewTracker />
    </Suspense>
  )
}

export default function PostHogProvider({ children }) {
  useEffect(() => {
    initPostHogDeferred()
  }, [])

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  )
}
