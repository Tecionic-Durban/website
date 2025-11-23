'use client'

// src/components/CustomCursor.js - Premium Custom Cursor
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorTextRef = useRef(null)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return

    const cursor = cursorRef.current
    const text = cursorTextRef.current

    setIsVisible(true)

    // Track mouse position
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    // Handle hoverable elements
    const handleMouseEnter = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        const cursorType = target.getAttribute('data-cursor')
        setCursorText(cursorType)
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        setCursorText('')
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    // Add event listeners
    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-full h-full rounded-full border-2 border-white flex items-center justify-center">
        <span
          ref={cursorTextRef}
          className="text-white text-xs font-bold uppercase tracking-wider"
        >
          {cursorText}
        </span>
      </div>
    </div>
  )
}
