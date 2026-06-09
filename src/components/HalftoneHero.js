'use client'

// Halftone hero (light "operational" variant).
// Ported from the Claude Design handoff "Hero Halftone.html".
// The background is a sparse emerald dot-field that forms a soft disc
// pushed to the right edge; the photo emerges from it. Styles live in
// globals.css under the `htn-` namespace.

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

function ArrowIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

// smoothstep
function smooth(e0, e1, x) {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)))
  return t * t * (3 - 2 * t)
}

// Light palette: warm-neutral field with emerald-600 concentrated in the dense core.
function drawHalftone(canvas) {
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (!w || !h) return

  canvas.width = Math.round(w * dpr)
  canvas.height = Math.round(h * dpr)
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, w, h)

  // sparse, airy grid forming a defined soft disc pushed to the right edge
  const gap = 25
  const maxR = gap * 0.44
  const fx = 0.86
  const fy = 0.62
  const aspect = w / h

  for (let y = gap * 0.5; y < h; y += gap) {
    for (let x = gap * 0.5; x < w; x += gap) {
      const nx = x / w
      const ny = y / h
      const dx = (nx - fx) * aspect
      const dy = ny - fy
      const dist = Math.hypot(dx, dy)
      // tight smoothstep => a clearly-shaped soft disc, not a vague haze
      let v = 1 - smooth(0.07, 0.6, dist)
      // deterministic jitter so it doesn't read as a rigid grid
      const j = ((Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1 + 1) % 1
      v *= 0.88 + 0.2 * j
      v = Math.max(0, Math.min(1, v))
      if (v <= 0.05) continue
      const r = maxR * Math.pow(v, 0.95)
      if (r < 0.5) continue

      // crisp two-tone: neutral field, pure emerald-600 concentrated in the core
      const col = v > 0.54 ? [5, 150, 105] : [176, 168, 154]
      const alpha = 0.12 + 0.46 * v
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha.toFixed(3)})`
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 6.2832)
      ctx.fill()
    }
  }
  canvas.classList.add('in')
}

export default function HalftoneHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  image,
  caption,
  proof = [],
  compact = false,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const render = () => drawHalftone(canvas)
    render()
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(render)

    let rt
    const onResize = () => {
      clearTimeout(rt)
      rt = setTimeout(render, 160)
    }
    window.addEventListener('resize', onResize)
    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)

    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(rt)
      ro.disconnect()
    }
  }, [])

  return (
    <section className={compact ? 'htn-hero htn-compact' : 'htn-hero'}>
      <canvas ref={canvasRef} className="htn-canvas" aria-hidden="true" />
      <div className="htn-grid">
        <div className="htn-content">
          {eyebrow && (
            <div className="htn-eyebrow">
              <span className="htn-triad"><i /><i /><i /></span>
              {eyebrow}
            </div>
          )}

          <h1 className="htn-head">{title}</h1>

          {lead && <p className="htn-lead">{lead}</p>}

          {(primary || secondary) && (
            <div className="htn-actions">
              {primary && (
                <Link href={primary.href} className="htn-btn-primary">
                  {primary.label}
                  <ArrowIcon size={18} />
                </Link>
              )}
              {secondary && (
                <Link href={secondary.href} className="htn-btn-link">
                  <u>{secondary.label}</u>
                  <ArrowIcon size={16} />
                </Link>
              )}
            </div>
          )}

          {proof.length > 0 && (
            <div className="htn-proof">
              {proof.map((p, i) => (
                <div className="p" key={i}>
                  <div className="v">
                    {p.value}
                    {p.unit && <small>{p.unit}</small>}
                  </div>
                  <div className="l">{p.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="htn-stage">
            <figure className="htn-photo">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              {caption && (
                <figcaption className="htn-cap">
                  <b>{caption.bold}</b>
                  <span className="d" />
                  {caption.detail}
                </figcaption>
              )}
            </figure>
          </div>
        )}
      </div>
    </section>
  )
}
