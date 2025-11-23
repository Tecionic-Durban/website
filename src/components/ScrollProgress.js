'use client'

// src/components/ScrollProgress.js - Scroll Progress Indicator
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollProgress({ color = '#10b981' }) {
  const progressRef = useRef(null)

  useEffect(() => {
    const progress = progressRef.current
    if (!progress) return

    // Animate progress bar based on scroll
    gsap.to(progress, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === 'body') {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 w-1 h-full bg-gray-200 z-50 hidden lg:block">
      <div
        ref={progressRef}
        className="w-full h-0 transition-colors duration-300"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}
