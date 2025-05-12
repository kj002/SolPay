"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function BackgroundElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particles: Particle[] = []
    // Increase particle count for more density
    const particleCount = 70

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      // Add pulse effect
      alpha: number
      alphaSpeed: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        // Slightly larger particles
        this.size = Math.random() * 2.5 + 0.7
        this.speedX = (Math.random() - 0.5) * 0.6
        this.speedY = (Math.random() - 0.5) * 0.6
        // More vibrant colors with higher opacity
        this.color = this.getRandomColor()
        // For pulsing effect
        this.alpha = Math.random() * 0.5 + 0.3
        this.alphaSpeed = Math.random() * 0.01 + 0.005
      }

      // Add color variation for more vibrancy
      getRandomColor() {
        const colors = [
          `rgba(6, 182, 212, ${Math.random() * 0.3 + 0.2})`, // Cyan (brighter)
          `rgba(14, 165, 233, ${Math.random() * 0.3 + 0.2})`, // Light blue
          `rgba(56, 189, 248, ${Math.random() * 0.3 + 0.2})`, // Sky blue
          `rgba(2, 132, 199, ${Math.random() * 0.3 + 0.2})`, // Blue
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Pulse effect
        this.alpha += this.alphaSpeed
        if (this.alpha >= 0.5 || this.alpha <= 0.1) {
          this.alphaSpeed = -this.alphaSpeed
        }

        if (canvas) {
          if (this.x > canvas.width) this.x = 0
          else if (this.x < 0) this.x = canvas.width

          if (this.y > canvas.height) this.y = 0
          else if (this.y < 0) this.y = canvas.height
        }
      }

      draw() {
        if (!ctx) return
        // Extract base color and apply current alpha
        const baseColor = this.color.substring(0, this.color.lastIndexOf(",") + 1)
        const dynamicColor = `${baseColor} ${this.alpha})`

        ctx.fillStyle = dynamicColor
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      const maxDistance = 180 // Increased connection distance
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            // Brighter connection lines
            ctx!.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.15})`
            ctx!.lineWidth = 0.6 // Slightly thicker lines
            ctx!.beginPath()
            ctx!.moveTo(particles[a].x, particles[a].y)
            ctx!.lineTo(particles[b].x, particles[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Increase canvas opacity for more visibility */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      {/* Enhanced decorative elements with higher opacity and more vibrant colors */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />

      {/* Add a new glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl" />

      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1], // Add subtle pulsing
          transition: {
            rotate: { duration: 120, ease: "linear", repeat: Number.POSITIVE_INFINITY },
            scale: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
          },
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1], // Add subtle pulsing
          transition: {
            rotate: { duration: 100, ease: "linear", repeat: Number.POSITIVE_INFINITY },
            scale: { duration: 6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, delay: 2 },
          },
        }}
      />

      {/* Enhanced gradient overlays with higher opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>

      {/* Add a new gradient for more color variation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.1),transparent_60%)]"></div>
    </div>
  )
}
