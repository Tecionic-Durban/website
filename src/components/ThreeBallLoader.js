'use client'

// src/components/ThreeBallLoader.js
// Universal loading animation matching the Tecionic logo
// Only use this for actual loading states, not artificial delays

export default function ThreeBallLoader({ size = 'md', className = '' }) {
  // Size variants matching different use cases
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }

  const ballSize = sizes[size] || sizes.md

  return (
    <div className={`flex space-x-2 justify-center items-center ${className}`}>
      {/* Ball 1 - matches logo first ball */}
      <div
        className={`${ballSize} bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-sm animate-bounce [animation-delay:-0.3s]`}
      />
      {/* Ball 2 - matches logo second ball */}
      <div
        className={`${ballSize} bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full shadow-sm animate-bounce [animation-delay:-0.15s]`}
      />
      {/* Ball 3 - matches logo third ball */}
      <div
        className={`${ballSize} bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full shadow-sm animate-bounce`}
      />
    </div>
  )
}

// Full page loader variant for page transitions
export function FullPageLoader({ message = 'Cargando...' }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <ThreeBallLoader size="lg" />
        <p className="mt-4 text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  )
}
