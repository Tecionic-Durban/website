'use client'

import { useEffect, useRef } from 'react'

// Particle Filtration Animation - represents fine solid separation
// Shows particles of varying sizes flowing through a filter membrane
export default function ParticleFiltrationAnimation({ variant = 'hero', className = '' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Constrained vertical band (like the other service pages)
    const getBandY = () => {
      const bandHeight = canvas.height * 0.15 // 15% of height
      const bandCenter = canvas.height * 0.5 // centered vertically
      return {
        min: bandCenter - bandHeight / 2,
        max: bandCenter + bandHeight / 2
      }
    }

    // Particle class
    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        const band = getBandY()
        // Start from left side
        this.x = -20
        this.y = band.min + Math.random() * (band.max - band.min)
        // Varied sizes representing different particle sizes
        this.size = Math.random() * 4 + 1
        // Speed inversely proportional to size (smaller particles move faster through filter)
        this.speed = (6 - this.size) * 0.3 + 0.5
        // Emerald green color theme
        this.opacity = Math.random() * 0.5 + 0.3
        // Some particles get filtered (stopped), smaller ones pass through
        this.filtered = this.size > 3 && Math.random() > 0.3
        this.filterX = canvas.width * 0.5 + Math.random() * 50
      }

      update() {
        const band = getBandY()

        if (this.filtered && this.x >= this.filterX) {
          // Particle is filtered - slowly fade and sink
          this.opacity -= 0.005
          this.y += 0.3
          if (this.opacity <= 0) {
            this.reset()
          }
        } else {
          this.x += this.speed
          // Slight vertical drift within the band
          this.y += Math.sin(this.x * 0.02) * 0.3
          // Keep within band
          if (this.y < band.min) this.y = band.min
          if (this.y > band.max) this.y = band.max

          // Reset when off screen
          if (this.x > canvas.width + 20) {
            this.reset()
          }
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(52, 211, 153, ${this.opacity})` // Emerald green (stronger)
        ctx.fill()
      }
    }

    // Initialize particles
    const particleCount = variant === 'hero' ? 60 : 40
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle()
      p.x = Math.random() * canvas.width // Spread initial positions
      particles.push(p)
    }

    // Draw filter membrane (subtle vertical line)
    const drawFilter = () => {
      const filterX = canvas.width * 0.5
      const band = getBandY()
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.08)'
      ctx.lineWidth = 1

      // Draw subtle mesh pattern within the band
      for (let y = band.min; y < band.max; y += 15) {
        ctx.beginPath()
        ctx.moveTo(filterX - 2, y)
        ctx.lineTo(filterX + 2, y + 8)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw filter membrane
      drawFilter()

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    animationRef.current = animationFrameId

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [variant])

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.6 }}
      />
    </div>
  )
}
