'use client'

import { useId } from 'react'

/**
 * CompressionAnimation - The signature visual motif for Concentrate Dehydration
 *
 * Two parallel lines (like filter press plates) that squeeze together,
 * with material dots between them that get compressed/flattened
 */

export default function CompressionAnimation({
  className = '',
  variant = 'hero',
  cycleDuration = 8
}) {
  const uniqueId = useId()

  const variants = {
    hero: {
      lineColor: '#10b981',
      glowColor: '#10b981',
    },
    dark: {
      lineColor: '#34d399',
      glowColor: '#34d399',
    }
  }

  const v = variants[variant] || variants.hero

  // Generate dots between the plates (the material being compressed)
  const materialDots = []
  for (let i = 1; i < 25; i++) {
    const x = i * 40 + (i % 2 === 0 ? 5 : -5)
    materialDots.push({ x })
  }

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
            <stop offset="15%" stopColor={v.lineColor} stopOpacity="0.3" />
            <stop offset="85%" stopColor={v.lineColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor={v.lineColor} stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id={`${uniqueId}-glow`}>
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top plate line - moves DOWN */}
        <line
          x1="0" y1="30"
          x2="1000" y2="30"
          stroke={`url(#${uniqueId}-line-grad)`}
          strokeWidth="3"
          filter={`url(#${uniqueId}-glow)`}
          className="compression-plate-top"
          style={{ '--cycle-duration': `${cycleDuration}s` }}
        />

        {/* Bottom plate line - moves UP */}
        <line
          x1="0" y1="70"
          x2="1000" y2="70"
          stroke={`url(#${uniqueId}-line-grad)`}
          strokeWidth="3"
          filter={`url(#${uniqueId}-glow)`}
          className="compression-plate-bottom"
          style={{ '--cycle-duration': `${cycleDuration}s` }}
        />

        {/* Material dots between plates - get squished vertically */}
        <g
          className="compression-material"
          style={{ '--cycle-duration': `${cycleDuration}s` }}
        >
          {materialDots.map((dot, i) => (
            <ellipse
              key={i}
              cx={dot.x}
              cy="50"
              rx="6"
              ry="8"
              fill={v.lineColor}
              filter={`url(#${uniqueId}-glow)`}
              opacity={0.12 + (i / materialDots.length) * 0.12}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
