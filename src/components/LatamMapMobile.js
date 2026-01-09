'use client'

import React from 'react'

// Stylized Latin America map for mobile - shows TSF office locations
export default function LatamMapMobile({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))' }}
      >
        <defs>
          {/* Gradient for Latin America */}
          <linearGradient id="latamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
          </linearGradient>
          {/* Glow effect for markers */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          {/* Pulse animation */}
          <radialGradient id="pulseGradient">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background ocean effect */}
        <rect x="0" y="0" width="400" height="500" fill="#0f172a" rx="16" />

        {/* Grid pattern for tech feel */}
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
        <rect x="0" y="0" width="400" height="500" fill="url(#grid)" rx="16" />

        {/* Simplified Latin America silhouette */}
        <g transform="translate(50, 20)">
          {/* Mexico & Central America */}
          <path
            d="M 80 30
               C 100 35, 130 40, 150 50
               L 155 70 L 145 90 L 130 100
               L 120 95 L 110 100 L 100 95
               L 95 85 L 85 80 L 75 70
               L 70 50 Z"
            fill="url(#latamGradient)"
            opacity="0.7"
          />

          {/* Colombia, Venezuela, Guianas */}
          <path
            d="M 130 100
               L 145 105 L 170 100 L 200 95
               L 220 105 L 230 120 L 220 140
               L 200 150 L 180 145 L 160 155
               L 140 150 L 125 140 L 120 120
               Z"
            fill="url(#latamGradient)"
            opacity="0.75"
          />

          {/* Ecuador, Peru */}
          <path
            d="M 100 140
               L 125 140 L 140 150 L 135 180
               L 120 210 L 100 240 L 85 250
               L 80 220 L 85 180 L 90 150
               Z"
            fill="url(#latamGradient)"
            opacity="0.85"
          />

          {/* Brazil */}
          <path
            d="M 140 150
               L 160 155 L 180 145 L 200 150
               L 220 140 L 240 150 L 260 160
               L 270 180 L 275 210 L 270 250
               L 255 290 L 230 320 L 200 340
               L 170 335 L 150 310 L 140 280
               L 145 240 L 135 200 L 135 180
               Z"
            fill="url(#latamGradient)"
            opacity="0.7"
          />

          {/* Bolivia, Paraguay */}
          <path
            d="M 120 210
               L 135 200 L 145 240 L 140 280
               L 130 290 L 115 280 L 110 250
               Z"
            fill="url(#latamGradient)"
            opacity="0.8"
          />

          {/* Chile - elongated western coast */}
          <path
            d="M 85 250
               L 100 240 L 110 250 L 115 280
               L 110 320 L 100 360 L 90 400
               L 80 430 L 85 445 L 75 460
               L 65 450 L 70 400 L 75 350
               L 80 300 L 82 270
               Z"
            fill="url(#latamGradient)"
            opacity="1"
          />

          {/* Argentina */}
          <path
            d="M 115 280
               L 130 290 L 150 310 L 170 335
               L 165 370 L 150 400 L 130 430
               L 110 450 L 95 460 L 85 445
               L 80 430 L 90 400 L 100 360
               L 110 320
               Z"
            fill="url(#latamGradient)"
            opacity="0.75"
          />

          {/* Office markers with pulse effect */}
          {/* Lima, Peru */}
          <g transform="translate(95, 190)">
            <circle r="12" fill="#10b981" opacity="0.2">
              <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="5" fill="#10b981" filter="url(#glow)" />
            <circle r="2" fill="white" />
          </g>

          {/* Santiago, Chile */}
          <g transform="translate(90, 320)">
            <circle r="12" fill="#10b981" opacity="0.2">
              <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle r="5" fill="#10b981" filter="url(#glow)" />
            <circle r="2" fill="white" />
          </g>

          {/* Calama, Chile */}
          <g transform="translate(100, 265)">
            <circle r="12" fill="#10b981" opacity="0.2">
              <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle r="5" fill="#10b981" filter="url(#glow)" />
            <circle r="2" fill="white" />
          </g>

          {/* Industry regions - subtle dots */}
          {/* Copper regions */}
          <circle cx="105" cy="248" r="3" fill="#f97316" opacity="0.6" />
          <circle cx="100" cy="195" r="3" fill="#f97316" opacity="0.6" />

          {/* Lithium regions */}
          <circle cx="110" cy="258" r="3" fill="#06b6d4" opacity="0.6" />
          <circle cx="125" cy="275" r="3" fill="#06b6d4" opacity="0.6" />

          {/* Zinc regions */}
          <circle cx="230" cy="250" r="3" fill="#64748b" opacity="0.6" />

          {/* Oil regions */}
          <circle cx="82" cy="440" r="3" fill="#f59e0b" opacity="0.6" />
          <circle cx="120" cy="385" r="3" fill="#f59e0b" opacity="0.6" />

          {/* Potassium */}
          <circle cx="98" cy="255" r="3" fill="#a855f7" opacity="0.6" />
        </g>

        {/* Labels */}
        <g className="text-xs" fill="white" fontFamily="system-ui, sans-serif">
          <text x="145" y="228" fontSize="10" opacity="0.9" fontWeight="600">Lima</text>
          <text x="140" y="358" fontSize="10" opacity="0.9" fontWeight="600">Santiago</text>
          <text x="150" y="303" fontSize="10" opacity="0.9" fontWeight="600">Calama</text>
        </g>
      </svg>
    </div>
  )
}
