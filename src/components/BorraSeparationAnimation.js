'use client'

import { useId } from 'react'

/**
 * BorraSeparationAnimation - The signature visual motif for Filtration
 *
 * Visual metaphor: A horizontal band showing separation - particles moving
 * up and down within a constrained area, representing borra being separated
 * into organic (rises) and solids (sinks) phases.
 *
 * Constrained to a thin horizontal strip like InterfaceLineAnimated.
 */

export default function BorraSeparationAnimation({
  className = '',
  variant = 'hero',
  cycleDuration = 10
}) {
  const uniqueId = useId()

  const variants = {
    hero: {
      lineColor: '#10b981',
      dotRiseColor: '#059669',     // emerald-600 - rises
      dotMiddleColor: '#10b981',   // emerald-500 - middle
      dotSinkColor: '#374151',     // gray-700 - sinks (solids)
    },
    dark: {
      lineColor: '#34d399',
      dotRiseColor: '#34d399',     // emerald-400
      dotMiddleColor: '#6ee7b7',   // emerald-300
      dotSinkColor: '#4b5563',     // gray-600
    }
  }

  const v = variants[variant] || variants.hero

  // Generate particles that will animate within the band
  const particles = []
  for (let i = 0; i < 30; i++) {
    const x = 30 + (i * 32) + (i % 3) * 8
    const delay = (i * 0.35) % cycleDuration
    const type = i % 3 // 0 = organic (rises), 1 = aqueous (middle), 2 = solids (sinks)
    particles.push({ x, delay, type, id: i })
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          {/* Line gradient - fades at edges */}
          <linearGradient id={`${uniqueId}-line-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={v.lineColor} stopOpacity="0" />
            <stop offset="15%" stopColor={v.lineColor} stopOpacity="0.2" />
            <stop offset="85%" stopColor={v.lineColor} stopOpacity="0.25" />
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

        {/* Center separation line - the main visual element */}
        <line
          x1="0" y1="50"
          x2="1000" y2="50"
          stroke={`url(#${uniqueId}-line-grad)`}
          strokeWidth="2"
          filter={`url(#${uniqueId}-glow)`}
        />

        {/* Animated particles within the band (y: 35-65 range) */}
        {particles.map((p) => {
          // Particles that rise above the line
          if (p.type === 0) {
            return (
              <circle
                key={p.id}
                cx={p.x}
                r="2"
                fill={v.dotRiseColor}
                opacity="0.7"
                className="borra-particle-rise"
                style={{
                  '--cycle-duration': `${cycleDuration}s`,
                  '--delay': `${p.delay}s`
                }}
              />
            )
          }
          // Particles that hover near the line
          if (p.type === 1) {
            return (
              <circle
                key={p.id}
                cx={p.x}
                r="1.5"
                fill={v.dotMiddleColor}
                opacity="0.6"
                className="borra-particle-middle"
                style={{
                  '--cycle-duration': `${cycleDuration}s`,
                  '--delay': `${p.delay}s`
                }}
              />
            )
          }
          // Solid particles sink below the line
          return (
            <circle
              key={p.id}
              cx={p.x}
              r="2.5"
              fill={v.dotSinkColor}
              opacity="0.6"
              className="borra-particle-sink"
              style={{
                '--cycle-duration': `${cycleDuration}s`,
                '--delay': `${p.delay}s`
              }}
            />
          )
        })}
      </svg>

      <style jsx>{`
        @keyframes particleRise {
          0%, 100% {
            cy: 50;
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            cy: 35;
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
        }

        @keyframes particleMiddle {
          0%, 100% {
            cy: 50;
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          25% {
            cy: 45;
          }
          50% {
            cy: 55;
            opacity: 0.6;
          }
          75% {
            cy: 48;
          }
          90% {
            opacity: 0.6;
          }
        }

        @keyframes particleSink {
          0%, 100% {
            cy: 50;
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            cy: 65;
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
        }

        .borra-particle-rise {
          animation: particleRise var(--cycle-duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .borra-particle-middle {
          animation: particleMiddle var(--cycle-duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .borra-particle-sink {
          animation: particleSink var(--cycle-duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
      `}</style>
    </div>
  )
}
