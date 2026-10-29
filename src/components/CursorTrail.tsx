import { useEffect, useRef } from 'react'

type Particle = { x: number; y: number; age: number; radius: number }

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const pointerSupport = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!canvas || !context || !pointerSupport.matches || reducedMotion.matches) return

    let width = 0
    let height = 0
    let pixelRatio = 1
    let frame = 0
    let previousPoint: { x: number; y: number } | null = null
    let lastTime = 0
    const particles: Particle[] = []
    const color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#a8c1ff'

    function resize() {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = Math.round(width * pixelRatio)
      canvas!.height = Math.round(height * pixelRatio)
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      context!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    function draw(time: number) {
      const elapsed = lastTime ? Math.min(time - lastTime, 32) : 16
      lastTime = time
      context!.clearRect(0, 0, width, height)
      context!.fillStyle = color
      context!.globalCompositeOperation = 'lighter'

      for (let index = particles.length - 1; index >= 0; index--) {
        const particle = particles[index]
        particle.age += elapsed / 460
        if (particle.age >= 1) {
          particles.splice(index, 1)
          continue
        }
        const fade = 1 - particle.age
        const radius = particle.radius * (.45 + fade * .55)
        context!.globalAlpha = fade * .42
        context!.shadowColor = color
        context!.shadowBlur = 13 * fade
        context!.beginPath()
        context!.arc(particle.x, particle.y, radius, 0, Math.PI * 2)
        context!.fill()
      }

      context!.globalAlpha = 1
      context!.globalCompositeOperation = 'source-over'
      context!.shadowBlur = 0
      if (particles.length) frame = requestAnimationFrame(draw)
      else frame = 0
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return
      const current = { x: event.clientX, y: event.clientY }
      if (previousPoint) {
        const dx = current.x - previousPoint.x
        const dy = current.y - previousPoint.y
        const distance = Math.hypot(dx, dy)
        const steps = Math.min(Math.floor(distance / 4), 20)
        for (let step = 1; step <= steps; step++) {
          const progress = step / steps
          particles.push({ x: previousPoint.x + dx * progress, y: previousPoint.y + dy * progress, age: 0, radius: 2.4 + Math.random() * 1.5 })
        }
        if (particles.length > 140) particles.splice(0, particles.length - 140)
      }
      previousPoint = current
      if (!frame && particles.length) frame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />
}
