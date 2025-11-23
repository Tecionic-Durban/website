'use client'

// src/components/PremiumLoader.js - Oil Drop Preloader
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PremiumLoader({ onComplete }) {
  const loaderRef = useRef(null)
  const dropRef = useRef(null)
  const percentRef = useRef(null)

  useEffect(() => {
    const loader = loaderRef.current
    const drop = dropRef.current
    const percent = percentRef.current

    if (!loader || !drop || !percent) return

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (onComplete) onComplete()
          }
        })
      }
    })

    // Counter animation
    const counter = { value: 0 }
    tl.to(counter, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: function() {
        percent.textContent = Math.floor(counter.value) + '%'
      }
    })

    // Drop animation
    tl.from(drop, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)'
    }, 0)

    tl.to(drop, {
      y: 20,
      duration: 1,
      repeat: 2,
      yoyo: true,
      ease: 'power1.inOut'
    }, 0.8)

    // Ripple effect
    const ripples = drop.querySelectorAll('.ripple')
    tl.to(ripples, {
      scale: 2.5,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power2.out'
    }, 0.5)

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black z-[9999] flex flex-col items-center justify-center"
    >
      {/* Oil Drop */}
      <div className="relative mb-8">
        <div
          ref={dropRef}
          className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full relative shadow-2xl"
        >
          {/* Highlight */}
          <div className="absolute top-4 left-6 w-8 h-8 bg-white/20 rounded-full blur-md" />

          {/* Ripples */}
          <div className="ripple absolute inset-0 rounded-full border-2 border-gray-500" />
          <div className="ripple absolute inset-0 rounded-full border-2 border-gray-500" />
          <div className="ripple absolute inset-0 rounded-full border-2 border-gray-500" />
        </div>
      </div>

      {/* Percentage */}
      <div
        ref={percentRef}
        className="text-6xl font-black text-white mb-4"
      >
        0%
      </div>

      {/* Loading Text */}
      <div className="text-gray-400 text-lg font-medium tracking-wider">
        Cargando experiencia premium...
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-700 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-gray-500 to-gray-400 animate-[loading_2.5s_ease-in-out_forwards]" />
      </div>

      <style jsx>{`
        @keyframes loading {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
