'use client'

import { useId } from 'react'

/**
 * InterfaceLine - The signature visual motif for Organic Treatment
 *
 * Represents the organic-aqueous interface in a settler:
 * - Left side: Turbulent, unstable (degraded organic)
 * - Right side: Clean, sharp separation (treated organic)
 *
 * This is what organic treatment actually achieves - restoring
 * clean phase separation by removing contaminants that cause
 * emulsification and crud formation.
 */

export default function InterfaceLine({
  className = '',
  variant = 'default', // 'default' | 'hero' | 'subtle' | 'dark'
  animated = true,
  width = '100%',
  height = 120
}) {
  const variants = {
    default: {
      lineColor: '#10b981',
      lineOpacity: 0.15,
      glowColor: '#10b981',
      glowOpacity: 0.08,
      upperZone: 'rgba(16, 185, 129, 0.02)',
      lowerZone: 'rgba(16, 185, 129, 0.04)',
    },
    hero: {
      lineColor: '#10b981',
      lineOpacity: 0.2,
      glowColor: '#10b981',
      glowOpacity: 0.12,
      upperZone: 'rgba(16, 185, 129, 0.015)',
      lowerZone: 'rgba(16, 185, 129, 0.035)',
    },
    subtle: {
      lineColor: '#10b981',
      lineOpacity: 0.08,
      glowColor: '#10b981',
      glowOpacity: 0.04,
      upperZone: 'transparent',
      lowerZone: 'rgba(16, 185, 129, 0.02)',
    },
    dark: {
      lineColor: '#34d399',
      lineOpacity: 0.25,
      glowColor: '#34d399',
      glowOpacity: 0.15,
      upperZone: 'rgba(52, 211, 153, 0.03)',
      lowerZone: 'rgba(52, 211, 153, 0.06)',
    }
  }

  const v = variants[variant] || variants.default
  const uniqueId = useId()

  // Generate the interface path
  // Left side: turbulent (sine wave with noise)
  // Right side: progressively calmer until flat
  const generateInterfacePath = () => {
    const points = []
    const segments = 100
    const midY = height / 2

    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 100 // percentage

      // Turbulence decreases from left to right
      // Using exponential decay for natural feel
      const progress = i / segments
      const turbulenceDecay = Math.exp(-progress * 4) // Rapid decay

      // Base wave (larger, slower)
      const baseWave = Math.sin(progress * Math.PI * 3) * 8 * turbulenceDecay

      // Secondary wave (smaller, faster)
      const secondaryWave = Math.sin(progress * Math.PI * 7) * 4 * turbulenceDecay

      // Micro noise (high frequency, small amplitude)
      const noise = Math.sin(progress * Math.PI * 15) * 2 * turbulenceDecay

      const y = midY + baseWave + secondaryWave + noise

      points.push(`${x},${y}`)
    }

    return `M 0,${midY} ` + points.map((p, i) => i === 0 ? `L ${p}` : `L ${p}`).join(' ')
  }

  const interfacePath = generateInterfacePath()

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ width, height: '100%' }}
      >
        <defs>
          {/* Gradient for the interface line - fades at edges */}
          <linearGradient id={`${uniqueId}-line-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={v.lineColor} stopOpacity="0" />
            <stop offset="10%" stopColor={v.lineColor} stopOpacity={v.lineOpacity} />
            <stop offset="90%" stopColor={v.lineColor} stopOpacity={v.lineOpacity} />
            <stop offset="100%" stopColor={v.lineColor} stopOpacity="0" />
          </linearGradient>

          {/* Glow effect gradient */}
          <linearGradient id={`${uniqueId}-glow-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={v.glowColor} stopOpacity="0" />
            <stop offset="15%" stopColor={v.glowColor} stopOpacity={v.glowOpacity} />
            <stop offset="85%" stopColor={v.glowColor} stopOpacity={v.glowOpacity * 1.5} />
            <stop offset="100%" stopColor={v.glowColor} stopOpacity="0" />
          </linearGradient>

          {/* Blur filter for glow */}
          <filter id={`${uniqueId}-glow`} x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Upper zone fill (organic phase) */}
          <linearGradient id={`${uniqueId}-upper`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={v.upperZone} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Lower zone fill (aqueous phase) */}
          <linearGradient id={`${uniqueId}-lower`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor={v.lowerZone} />
          </linearGradient>
        </defs>

        {/* Upper phase zone */}
        <rect
          x="0"
          y="0"
          width="100"
          height={height / 2}
          fill={v.upperZone}
        />

        {/* Lower phase zone */}
        <rect
          x="0"
          y={height / 2}
          width="100"
          height={height / 2}
          fill={v.lowerZone}
        />

        {/* The interface line - glow layer */}
        <path
          d={interfacePath}
          fill="none"
          stroke={`url(#${uniqueId}-glow-grad)`}
          strokeWidth="6"
          filter={`url(#${uniqueId}-glow)`}
          className={animated ? 'interface-line-glow' : ''}
        />

        {/* The interface line - main */}
        <path
          d={interfacePath}
          fill="none"
          stroke={`url(#${uniqueId}-line-grad)`}
          strokeWidth="1.5"
          strokeLinecap="round"
          className={animated ? 'interface-line-main' : ''}
        />

        {/* Spec line indicator (the target) - subtle dashed line on right */}
        <line
          x1="70"
          y1={height / 2}
          x2="100"
          y2={height / 2}
          stroke={v.lineColor}
          strokeWidth="0.5"
          strokeDasharray="2,2"
          opacity={v.lineOpacity * 0.5}
        />
      </svg>
    </div>
  )
}

/**
 * InterfaceLineAnimated - Version with CSS animation
 * The line "calms down" over time, representing treatment progress
 *
 * Visual metaphor: Organic phase (top) separating from aqueous phase (bottom)
 * - Upper zone: Slightly warmer/amber tint (organic solvent)
 * - Lower zone: Slightly cooler/blue tint (aqueous solution)
 * - Interface line: The boundary where separation happens
 */
export function InterfaceLineAnimated({
  className = '',
  variant = 'hero',
  cycleDuration = 8 // seconds for one calm/turbulent cycle
}) {
  const uniqueId = useId()

  const variants = {
    hero: {
      lineColor: '#10b981',
      glowColor: '#10b981',
      // Organic phase (top) - subtle warm/amber tint
      upperColor: 'rgba(217, 119, 6, 0.06)', // amber-600 at 6% opacity
      // Aqueous phase (bottom) - subtle cool/teal tint
      lowerColor: 'rgba(14, 116, 144, 0.07)', // cyan-700 at 7% opacity
    },
    dark: {
      lineColor: '#34d399',
      glowColor: '#34d399',
      upperColor: 'rgba(251, 191, 36, 0.08)', // amber-400 at 8%
      lowerColor: 'rgba(34, 211, 238, 0.09)', // cyan-400 at 9%
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
          {/* Line gradient */}
          <linearGradient id={`${uniqueId}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={v.lineColor} stopOpacity="0" />
            <stop offset="15%" stopColor={v.lineColor} stopOpacity="0.2" />
            <stop offset="85%" stopColor={v.lineColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={v.lineColor} stopOpacity="0" />
          </linearGradient>

          <filter id={`${uniqueId}-glow`}>
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated interface line */}
        <path
          d="M 0,50 Q 100,35 200,55 T 400,45 T 600,52 T 800,49 L 1000,50"
          fill="none"
          stroke={`url(#${uniqueId}-grad)`}
          strokeWidth="2"
          filter={`url(#${uniqueId}-glow)`}
          className="interface-line-breathing"
          style={{ '--cycle-duration': `${cycleDuration}s` }}
        />
      </svg>
    </div>
  )
}

/**
 * PhaseSeparationBackground - Full background with phase zones
 * Used for section backgrounds to create the two-tone settler effect
 */
export function PhaseSeparationBackground({
  className = '',
  variant = 'light', // 'light' | 'dark'
  interfacePosition = 60, // percentage from top
  showInterface = true
}) {
  const isLight = variant === 'light'

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Upper phase (organic) */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: `${interfacePosition}%`,
          background: isLight
            ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(16,185,129,0.015) 100%)'
            : 'linear-gradient(180deg, rgba(17,24,39,0) 0%, rgba(16,185,129,0.03) 100%)'
        }}
      />

      {/* Lower phase (aqueous) */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: `${100 - interfacePosition}%`,
          background: isLight
            ? 'linear-gradient(180deg, rgba(16,185,129,0.025) 0%, rgba(16,185,129,0.04) 100%)'
            : 'linear-gradient(180deg, rgba(16,185,129,0.04) 0%, rgba(16,185,129,0.06) 100%)'
        }}
      />

      {/* Interface line */}
      {showInterface && (
        <div
          className="absolute inset-x-0"
          style={{ top: `${interfacePosition}%`, height: '1px' }}
        >
          <div
            className="h-full mx-auto"
            style={{
              width: '80%',
              background: `linear-gradient(90deg, transparent, ${isLight ? 'rgba(16,185,129,0.15)' : 'rgba(52,211,153,0.2)'}, transparent)`
            }}
          />
        </div>
      )}
    </div>
  )
}
