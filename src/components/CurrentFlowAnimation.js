'use client'

import { useId } from 'react'

/**
 * CurrentFlowAnimation - The signature visual motif for EW Cell Cleaning
 *
 * Represents electrical current flowing through electrowinning cells:
 * - Horizontal lines representing current paths (like wires/conductors)
 * - Electric pulses flowing left to right
 * - Subtle glow effect representing active current
 *
 * Visual metaphor: Clean cells = smooth current flow = quality cathodes
 */

export default function CurrentFlowAnimation({
  className = '',
  variant = 'hero', // 'hero' | 'dark'
  cycleDuration = 8
}) {
  const uniqueId = useId()

  const variants = {
    hero: {
      lineColor: '#10b981', // emerald
      glowColor: '#34d399',
    },
    dark: {
      lineColor: '#34d399',
      glowColor: '#6ee7b7',
    }
  }

  const v = variants[variant] || variants.hero

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Line gradient - fades at edges */}
          <linearGradient id={`${uniqueId}-line-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={v.lineColor} stopOpacity="0" />
            <stop offset="15%" stopColor={v.lineColor} stopOpacity="0.15" />
            <stop offset="85%" stopColor={v.lineColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor={v.lineColor} stopOpacity="0" />
          </linearGradient>

          {/* Electric pulse gradient - bright center */}
          <linearGradient id={`${uniqueId}-pulse-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={v.glowColor} stopOpacity="0" />
            <stop offset="40%" stopColor={v.glowColor} stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="60%" stopColor={v.glowColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={v.glowColor} stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id={`${uniqueId}-glow`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong glow for pulses */}
          <filter id={`${uniqueId}-pulse-glow`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Line 1 - Top current line */}
        <path
          d="M 0,42 L 1000,42"
          fill="none"
          stroke={`url(#${uniqueId}-line-grad)`}
          strokeWidth="1.5"
          filter={`url(#${uniqueId}-glow)`}
          className="current-line-base"
        />

        {/* Line 2 - Middle current line (main) */}
        <path
          d="M 0,50 L 1000,50"
          fill="none"
          stroke={`url(#${uniqueId}-line-grad)`}
          strokeWidth="2"
          filter={`url(#${uniqueId}-glow)`}
          className="current-line-base"
        />

        {/* Line 3 - Bottom current line */}
        <path
          d="M 0,58 L 1000,58"
          fill="none"
          stroke={`url(#${uniqueId}-line-grad)`}
          strokeWidth="1.5"
          filter={`url(#${uniqueId}-glow)`}
          className="current-line-base"
        />

        {/* Electric pulse on line 1 */}
        <rect
          x="-100"
          y="40"
          width="100"
          height="4"
          fill={`url(#${uniqueId}-pulse-grad)`}
          filter={`url(#${uniqueId}-pulse-glow)`}
          className="electric-pulse"
          style={{ animationDelay: '0s' }}
        />

        {/* Electric pulse on line 2 (main) */}
        <rect
          x="-100"
          y="47"
          width="120"
          height="6"
          fill={`url(#${uniqueId}-pulse-grad)`}
          filter={`url(#${uniqueId}-pulse-glow)`}
          className="electric-pulse"
          style={{ animationDelay: '0.8s' }}
        />

        {/* Electric pulse on line 3 */}
        <rect
          x="-100"
          y="56"
          width="100"
          height="4"
          fill={`url(#${uniqueId}-pulse-grad)`}
          filter={`url(#${uniqueId}-pulse-glow)`}
          className="electric-pulse"
          style={{ animationDelay: '1.6s' }}
        />

        {/* Secondary smaller pulses for more electric feel */}
        <rect
          x="-50"
          y="41"
          width="50"
          height="2"
          fill={v.glowColor}
          opacity="0.6"
          filter={`url(#${uniqueId}-glow)`}
          className="electric-pulse-fast"
          style={{ animationDelay: '0.3s' }}
        />

        <rect
          x="-50"
          y="49"
          width="60"
          height="2"
          fill={v.glowColor}
          opacity="0.7"
          filter={`url(#${uniqueId}-glow)`}
          className="electric-pulse-fast"
          style={{ animationDelay: '1.2s' }}
        />

        <rect
          x="-50"
          y="57"
          width="50"
          height="2"
          fill={v.glowColor}
          opacity="0.6"
          filter={`url(#${uniqueId}-glow)`}
          className="electric-pulse-fast"
          style={{ animationDelay: '2.1s' }}
        />
      </svg>
    </div>
  )
}
