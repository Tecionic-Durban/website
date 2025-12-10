'use client'

import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

// TSF Office locations (3 offices)
const OFFICES = {
  santiago: { lat: -33.45, lng: -70.67, name: 'Santiago', country: 'Chile' },
  calama: { lat: -22.47, lng: -68.93, name: 'Calama', country: 'Chile' },
  lima: { lat: -12.05, lng: -77.04, name: 'Lima', country: 'Peru' },
}

// Mining regions by industry (destinations for arcs)
const MINING_REGIONS = {
  // Copper - orange (#f97316)
  copper_antofagasta: { lat: -23.65, lng: -70.40, name: 'Antofagasta', country: 'Chile' },
  copper_arequipa: { lat: -16.41, lng: -71.54, name: 'Arequipa', country: 'Peru' },
  copper_mexico: { lat: 23.63, lng: -102.55, name: 'Zacatecas', country: 'México' },
  // Lithium - cyan (#06b6d4)
  lithium_atacama: { lat: -23.50, lng: -68.20, name: 'Salar de Atacama', country: 'Chile' },
  lithium_jujuy: { lat: -24.18, lng: -65.30, name: 'Jujuy', country: 'Argentina' },
  // Zinc - slate (#64748b)
  zinc_brazil: { lat: -19.92, lng: -43.94, name: 'Minas Gerais', country: 'Brasil' },
  zinc_mexico: { lat: 25.67, lng: -100.31, name: 'Monterrey', country: 'México' },
  // Crude Oil - amber (#f59e0b)
  oil_magallanes: { lat: -53.16, lng: -70.91, name: 'Magallanes', country: 'Chile' },
  oil_neuquen: { lat: -38.95, lng: -68.06, name: 'Neuquén', country: 'Argentina' },
  oil_santos: { lat: -25.25, lng: -44.80, name: 'Santos Basin', country: 'Brasil' },
  // Potassium - purple (#a855f7)
  potassium_tarapaca: { lat: -20.21, lng: -70.14, name: 'Tarapacá', country: 'Chile' },
}

function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

function isInLatam(lat, lng) {
  return lat >= -56 && lat <= 33 && lng >= -120 && lng <= -34
}

// Globe dots component that samples from texture
function GlobeDots({ radius = 2, imageData }) {
  const pointsRef = useRef()

  const { positions, colors, isLatamLand } = useMemo(() => {
    if (!imageData) return { positions: new Float32Array(0), colors: new Float32Array(0), isLatamLand: [] }

    const positions = []
    const colors = []
    const isLatamLandArr = []

    // Iterate through lat/lng grid and sample texture
    // This ensures accurate geographic mapping
    const rows = 180 // latitude divisions
    const baseCols = 360 // longitude divisions at equator

    for (let latIdx = 0; latIdx <= rows; latIdx++) {
      const lat = 90 - (latIdx / rows) * 180 // 90 to -90

      // Adjust number of columns based on latitude (fewer points near poles)
      const latRad = lat * Math.PI / 180
      const cols = Math.max(12, Math.floor(baseCols * Math.cos(latRad)))

      for (let lngIdx = 0; lngIdx < cols; lngIdx++) {
        const lng = -180 + (lngIdx / cols) * 360 // -180 to 180

        // Sample texture using equirectangular projection
        const u = (lng + 180) / 360
        const v = (90 - lat) / 180

        const px = Math.floor(u * (imageData.width - 1))
        const py = Math.floor(v * (imageData.height - 1))
        const idx = (py * imageData.width + px) * 4

        const r = imageData.data[idx]
        const g = imageData.data[idx + 1]
        const b = imageData.data[idx + 2]
        const brightness = (r + g + b) / 3

        const isLand = brightness < 128 // Land is dark in earth-land.png
        const inLatam = isInLatam(lat, lng)

        // Convert lat/lng to 3D position
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = (lng + 180) * (Math.PI / 180)
        const x = -(radius * Math.sin(phi) * Math.cos(theta))
        const z = radius * Math.sin(phi) * Math.sin(theta)
        const y = radius * Math.cos(phi)

        if (isLand) {
          positions.push(x, y, z)
          if (inLatam) {
            colors.push(0.15, 0.85, 0.5) // Bright emerald
            isLatamLandArr.push(1)
          } else {
            colors.push(0.2, 0.3, 0.28) // Dimmer gray-green
            isLatamLandArr.push(0)
          }
        }
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      isLatamLand: isLatamLandArr
    }
  }, [radius, imageData])

  // Twinkling animation
  useFrame(({ clock }) => {
    if (pointsRef.current && isLatamLand.length > 0) {
      const time = clock.getElapsedTime()
      const colorsAttr = pointsRef.current.geometry.attributes.color
      const array = colorsAttr.array

      for (let i = 0; i < array.length; i += 3) {
        const idx = i / 3
        if (isLatamLand[idx]) {
          const twinkle = 0.9 + Math.sin(time * 1.5 + idx * 0.015) * 0.1
          array[i] = 0.15 * twinkle
          array[i + 1] = 0.85 * twinkle
          array[i + 2] = 0.5 * twinkle
        }
      }
      colorsAttr.needsUpdate = true
    }
  })

  if (positions.length === 0) return null

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        vertexColors
        transparent
        opacity={0.95}
        sizeAttenuation
      />
    </points>
  )
}

// Arc component - fades out at destination
function Arc({ start, end, color = '#10b981', delay = 0 }) {
  const [progress, setProgress] = useState(0)
  const [opacity, setOpacity] = useState(0)

  const curve = useMemo(() => {
    const startVec = latLngToVector3(start.lat, start.lng, 2)
    const endVec = latLngToVector3(end.lat, end.lng, 2)
    const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5)
    const distance = startVec.distanceTo(endVec)
    midPoint.normalize().multiplyScalar(2 + distance * 0.35)
    return new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec)
  }, [start, end])

  const fullPoints = useMemo(() => curve.getPoints(50), [curve])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const cycleTime = 8 // Full cycle duration
    const animTime = (time - delay) % cycleTime

    if (animTime < 0) {
      setProgress(0)
      setOpacity(0)
    } else if (animTime < 2) {
      // Draw arc (0-2s)
      const t = animTime / 2
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      setProgress(eased)
      setOpacity(0.8)
    } else if (animTime < 3) {
      // Hold at destination (2-3s)
      setProgress(1)
      setOpacity(0.8)
    } else if (animTime < 5) {
      // Fade out (3-5s)
      setProgress(1)
      const fadeT = (animTime - 3) / 2
      setOpacity(0.8 * (1 - fadeT))
    } else {
      // Hidden (5-8s)
      setProgress(0)
      setOpacity(0)
    }
  })

  const visiblePoints = useMemo(() => {
    const count = Math.max(2, Math.floor(fullPoints.length * progress))
    return fullPoints.slice(0, count)
  }, [fullPoints, progress])

  if (visiblePoints.length < 2 || opacity < 0.01) return null

  return <Line points={visiblePoints} color={color} lineWidth={2} transparent opacity={opacity} />
}

// Simple office marker - just a dot
function LocationMarker({ position, color = '#10b981', size = 0.05 }) {
  const pos = useMemo(() => latLngToVector3(position.lat, position.lng, 2.02), [position])

  return (
    <mesh position={pos}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

// Main globe
function Globe({ imageData }) {
  const globeRef = useRef()
  const { camera } = useThree()

  useEffect(() => {
    // Camera positioned to make LATAM + Brazil the visual hero
    // Rotated slightly southeast to show more of Brazil/Atlantic
    camera.position.set(1.5, -0.6, 5.0)
    camera.lookAt(0.3, -0.3, 0)
  }, [camera])


  // Industry-colored arcs from offices to mining regions (spread out timing)
  const arcs = useMemo(() => [
    // Copper (orange) - Chile, Peru, Mexico
    { start: OFFICES.calama, end: MINING_REGIONS.copper_antofagasta, color: '#f97316', delay: 0 },
    { start: OFFICES.santiago, end: MINING_REGIONS.copper_antofagasta, color: '#f97316', delay: 4 },
    { start: OFFICES.lima, end: MINING_REGIONS.copper_arequipa, color: '#f97316', delay: 8 },
    { start: OFFICES.santiago, end: MINING_REGIONS.copper_mexico, color: '#f97316', delay: 12 },
    // Lithium (cyan) - Chile, Argentina
    { start: OFFICES.calama, end: MINING_REGIONS.lithium_atacama, color: '#06b6d4', delay: 2 },
    { start: OFFICES.santiago, end: MINING_REGIONS.lithium_jujuy, color: '#06b6d4', delay: 10 },
    // Zinc (slate) - Brazil, Mexico
    { start: OFFICES.santiago, end: MINING_REGIONS.zinc_brazil, color: '#64748b', delay: 6 },
    { start: OFFICES.calama, end: MINING_REGIONS.zinc_brazil, color: '#64748b', delay: 32 },
    { start: OFFICES.lima, end: MINING_REGIONS.zinc_mexico, color: '#64748b', delay: 18 },
    // Crude Oil (amber) - Chile, Argentina, Brazil
    { start: OFFICES.santiago, end: MINING_REGIONS.oil_magallanes, color: '#f59e0b', delay: 16 },
    { start: OFFICES.santiago, end: MINING_REGIONS.oil_neuquen, color: '#f59e0b', delay: 20 },
    { start: OFFICES.santiago, end: MINING_REGIONS.oil_santos, color: '#f59e0b', delay: 28 },
    // Potassium (purple) - Chile
    { start: OFFICES.calama, end: MINING_REGIONS.potassium_tarapaca, color: '#a855f7', delay: 24 },
  ], [])

  // 3 office markers
  const officeMarkers = useMemo(() => [
    { ...OFFICES.santiago, key: 'santiago', color: '#10b981' },
    { ...OFFICES.calama, key: 'calama', color: '#10b981' },
    { ...OFFICES.lima, key: 'lima', color: '#10b981' },
  ], [])

  return (
    <group ref={globeRef}>
      {/* Ocean sphere - dark blue */}
      <Sphere args={[1.96, 64, 64]}>
        <meshBasicMaterial color="#0a1628" transparent opacity={0.98} />
      </Sphere>
      {/* Outer glow */}
      <Sphere args={[2.25, 64, 64]}>
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.02} side={THREE.BackSide} />
      </Sphere>
      <GlobeDots radius={2} imageData={imageData} />
      {/* 3 Office markers - Santiago, Calama, Lima */}
      {officeMarkers.map(office => (
        <LocationMarker
          key={office.key}
          position={office}
          color={office.color}
          size={0.025}
        />
      ))}
      {/* Industry-colored arcs to mining regions */}
      {arcs.map((arc, i) => <Arc key={i} {...arc} />)}
    </group>
  )
}

export default function LatamGlobe({ className = '' }) {
  const [isClient, setIsClient] = useState(false)
  const [imageData, setImageData] = useState(null)

  useEffect(() => {
    setIsClient(true)

    // Load the earth texture and extract pixel data
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const data = ctx.getImageData(0, 0, img.width, img.height)
      setImageData(data)
    }
    img.src = '/earth-land.png'
  }, [])

  if (!isClient) {
    return (
      <div className={`bg-slate-900 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-emerald-400 animate-pulse">Cargando mapa...</div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width: '900px', height: '900px' }}>
      <Canvas
        camera={{ position: [1.5, -0.6, 5.0], fov: 42 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Globe imageData={imageData} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  )
}
