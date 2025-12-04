'use client';

import { useEffect, useState } from 'react';

export default function BypassAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 900 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blueprint grid background */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          <pattern id="grid-large" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#grid)"/>
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1e293b" strokeWidth="1" opacity="0.5"/>
          </pattern>
        </defs>

        {/* Background */}
        <rect width="900" height="600" fill="#0f172a"/>
        <rect width="900" height="600" fill="url(#grid-large)"/>

        {/* PLANTA SX (Left) */}
        <g id="planta-sx">
          {/* Tank structure - SX mixer-settler */}
          <rect x="50" y="160" width="220" height="260" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4,2"/>

          {/* Mixer section */}
          <rect x="70" y="180" width="75" height="115" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
          <circle cx="107" cy="237" r="23" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.6">
            <animate attributeName="r" values="19;27;19" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
          </circle>
          <text x="107" y="315" fontSize="13" fill="#94a3b8" textAnchor="middle">MIXER</text>

          {/* Settler tanks */}
          <rect x="155" y="180" width="50" height="115" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
          <rect x="210" y="180" width="50" height="115" fill="#1e293b" stroke="#475569" strokeWidth="2"/>

          {/* Organic layer */}
          <rect x="159" y="187" width="42" height="45" fill="#f59e0b" opacity="0.3"/>
          <rect x="214" y="187" width="42" height="45" fill="#f59e0b" opacity="0.3"/>

          {/* Aqueous layer */}
          <rect x="159" y="237" width="42" height="53" fill="#3b82f6" opacity="0.3"/>
          <rect x="214" y="237" width="42" height="53" fill="#3b82f6" opacity="0.3"/>

          <text x="182" y="315" fontSize="13" fill="#94a3b8" textAnchor="middle">SETTLERS</text>

          {/* Electrolyte tanks below */}
          <rect x="70" y="335" width="85" height="65" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
          <rect x="165" y="335" width="85" height="65" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
          <rect x="74" y="344" width="77" height="40" fill="#3b82f6" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
          </rect>
          <rect x="169" y="344" width="77" height="40" fill="#3b82f6" opacity="0.2">
            <animate attributeName="opacity" values="0.4;0.2;0.4" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
          </rect>

          <text x="160" y="140" fontSize="22" fill="#f5f5f5" textAnchor="middle" fontWeight="bold">
            PLANTA SX
          </text>
        </g>

        {/* Flow OUT from plant (contaminated organic) */}
        <g id="flow-out">
          <path
            d="M 270 237 L 530 237"
            stroke="#ef4444"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Flow arrow */}
          <polygon points="518,231 535,237 518,243" fill="#ef4444" opacity="0.8"/>

          {/* Animated particles */}
          <circle r="5" fill="#fca5a5">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 270 237 L 530 237" calcMode="linear"/>
          </circle>
          <circle r="5" fill="#fca5a5">
            <animateMotion dur="4s" begin="1.33s" repeatCount="indefinite" path="M 270 237 L 530 237" calcMode="linear"/>
          </circle>
          <circle r="5" fill="#fca5a5">
            <animateMotion dur="4s" begin="2.66s" repeatCount="indefinite" path="M 270 237 L 530 237" calcMode="linear"/>
          </circle>

          {/* Label */}
          <text x="400" y="220" fontSize="16" fill="#fca5a5" textAnchor="middle" fontWeight="600">
            Orgánico con impurezas
          </text>
        </g>

        {/* TSF FILTRO PRENSA (Right) */}
        <g id="tsf-filter">
          {/* Equipment frame */}
          <rect x="530" y="160" width="330" height="180" fill="#059669" fillOpacity="0.15" stroke="#10b981" strokeWidth="3" rx="4"/>

          {/* Filter press plates - realistic representation */}
          <g id="filter-plates">
            {[...Array(18)].map((_, i) => (
              <g key={i}>
                <rect
                  x={555 + i * 17}
                  y="185"
                  width="12"
                  height="105"
                  fill="#334155"
                  stroke="#475569"
                  strokeWidth="1"
                  rx="1"
                />
                {/* Cake between plates */}
                {i < 17 && (
                  <rect
                    x={567 + i * 17}
                    y="193"
                    width="5"
                    height="89"
                    fill="#78716c"
                    opacity="0.6"
                  />
                )}
              </g>
            ))}
          </g>

          {/* Hydraulic ram */}
          <rect x="830" y="215" width="12" height="60" fill="#64748b"/>
          <polygon points="830,215 842,215 848,221 848,269 842,275 830,275" fill="#475569"/>

          {/* Filtrate outlet (clean) - going back */}
          <rect x="555" y="298" width="290" height="12" fill="#10b981" opacity="0.4" rx="2">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
          </rect>

          {/* Equipment label */}
          <text x="695" y="140" fontSize="22" fill="#10b981" textAnchor="middle" fontWeight="bold">
            FILTRO PRENSA TSF
          </text>
        </g>

        {/* Flow BACK to plant (clean organic) */}
        <g id="flow-back">
          <path
            d="M 530 304 L 270 304"
            stroke="#10b981"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Flow arrow */}
          <polygon points="282,298 265,304 282,310" fill="#10b981" opacity="0.8"/>

          {/* Animated particles */}
          <circle r="5" fill="#6ee7b7">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 530 304 L 270 304" calcMode="linear"/>
          </circle>
          <circle r="5" fill="#6ee7b7">
            <animateMotion dur="4s" begin="1.33s" repeatCount="indefinite" path="M 530 304 L 270 304" calcMode="linear"/>
          </circle>
          <circle r="5" fill="#6ee7b7">
            <animateMotion dur="4s" begin="2.66s" repeatCount="indefinite" path="M 530 304 L 270 304" calcMode="linear"/>
          </circle>

          {/* Label */}
          <text x="400" y="328" fontSize="16" fill="#6ee7b7" textAnchor="middle" fontWeight="600">
            Orgánico purificado
          </text>
        </g>

        {/* BORRA DISCHARGE (Bottom) */}
        <g id="borra-discharge">
          {/* Discharge pipe from filter */}
          <path
            d="M 695 340 L 695 450"
            stroke="#78716c"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />

          {/* Conveyor belt system */}
          <g id="conveyor">
            {/* Belt surface */}
            <rect x="530" y="450" width="330" height="14" fill="#475569" rx="2"/>

            {/* Belt movement pattern */}
            <rect x="536" y="452" width="318" height="10" fill="#334155">
              <animate attributeName="x" values="536;551;536" dur="3s" repeatCount="indefinite" calcMode="linear"/>
            </rect>

            {/* Drive rollers */}
            <circle cx="540" cy="464" r="10" fill="#374151" stroke="#475569" strokeWidth="2">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 540 464"
                to="360 540 464"
                dur="3s"
                repeatCount="indefinite"
              />
              <line x1="535" y1="459" x2="545" y2="469" stroke="#64748b" strokeWidth="2"/>
            </circle>
            <circle cx="850" cy="464" r="10" fill="#374151" stroke="#475569" strokeWidth="2">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 850 464"
                to="360 850 464"
                dur="3s"
                repeatCount="indefinite"
              />
              <line x1="845" y1="459" x2="855" y2="469" stroke="#64748b" strokeWidth="2"/>
            </circle>

            {/* Borra pile on belt */}
            <ellipse cx="695" cy="438" rx="55" ry="18" fill="#78716c" opacity="0.8">
              <animate attributeName="rx" values="52;58;52" dur="3.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
            </ellipse>
            <ellipse cx="645" cy="442" rx="42" ry="15" fill="#57534e" opacity="0.6"/>
            <ellipse cx="745" cy="443" rx="38" ry="13" fill="#57534e" opacity="0.6"/>

            {/* Borra particles falling */}
            <circle r="5" fill="#78716c">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 695 340 L 695 438" calcMode="linear"/>
              <animate attributeName="opacity" values="0.9;0.9;0.3" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1; 0.4 0 1 1"/>
            </circle>
            <circle r="5" fill="#78716c">
              <animateMotion dur="2.5s" begin="0.83s" repeatCount="indefinite" path="M 695 340 L 695 438" calcMode="linear"/>
              <animate attributeName="opacity" values="0.9;0.9;0.3" dur="2.5s" begin="0.83s" repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1; 0.4 0 1 1"/>
            </circle>
            <circle r="5" fill="#78716c">
              <animateMotion dur="2.5s" begin="1.66s" repeatCount="indefinite" path="M 695 340 L 695 438" calcMode="linear"/>
              <animate attributeName="opacity" values="0.9;0.9;0.3" dur="2.5s" begin="1.66s" repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1; 0.4 0 1 1"/>
            </circle>
          </g>

          {/* Label */}
          <text x="695" y="500" fontSize="16" fill="#a8a29e" textAnchor="middle" fontWeight="600">
            BORRA SECA
          </text>
        </g>

        {/* Process flow indicators */}
        <g id="flow-indicators">
          {/* Plant output */}
          <circle cx="350" cy="237" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
          </circle>

          {/* Filter processing */}
          <circle cx="695" cy="250" r="4" fill="#10b981">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.66s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
          </circle>

          {/* Plant return */}
          <circle cx="350" cy="304" r="4" fill="#10b981">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.33s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
          </circle>
        </g>
      </svg>
    </div>
  );
}
