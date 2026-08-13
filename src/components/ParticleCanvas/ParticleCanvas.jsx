import { useEffect, useRef } from "react"

class Particle {
    constructor(x, y) {
        this.radius = Math.random() * 2 + 1
        this.x = x
        this.y = y
        this.velocityX = Math.random() * 1.2 - 0.6
        this.velocityY = Math.random() * 1.2 - 0.6
        this.life = 1
    }
}

class ParticleSystem {
    constructor() {
        this.particles = []
        this.maxParticles = 60
        this.connectDistance = 90
        this.hue = 200
    }

    update(ctx) {
        this.hue = (this.hue + 0.15) % 360

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i]
            p.x += p.velocityX
            p.y += p.velocityY
            p.life -= 0.003

            ctx.beginPath()
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            ctx.fillStyle = `hsla(${this.hue}, 90%, 60%, ${p.life})`
            ctx.shadowColor = `hsla(${this.hue}, 90%, 60%, ${p.life})`
            ctx.shadowBlur = 8
            ctx.fill()
            ctx.shadowBlur = 0

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j]
                const dx = p.x - p2.x
                const dy = p.y - p2.y
                const distance = Math.hypot(dx, dy)

                if (distance < this.connectDistance) {
                    const alpha = (1 - distance / this.connectDistance) * 0.5
                    ctx.strokeStyle = `hsla(${this.hue}, 90%, 60%, ${alpha})`
                    ctx.lineWidth = 0.6
                    ctx.beginPath()
                    ctx.moveTo(p.x, p.y)
                    ctx.lineTo(p2.x, p2.y)
                    ctx.stroke()
                }
            }
        }

        this.particles = this.particles.filter(p => p.life > 0)
        if (this.particles.length > this.maxParticles) {
            this.particles = this.particles.slice(-this.maxParticles)
        }
    }

    addParticle(x, y) {
        this.particles.push(new Particle(x, y))
    }
}

export default function ParticleCanvas() {
    const canvasRef = useRef(null)
    const pSystemRef = useRef(new ParticleSystem())
    const rafRef = useRef(null)
    const lastAddRef = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        const pSystem = pSystemRef.current

        function init() {
            const dpr = window.devicePixelRatio || 1
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr
            canvas.style.width = window.innerWidth + "px"
            canvas.style.height = window.innerHeight + "px"
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        function animate() {
            ctx.fillStyle = "#212528"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            pSystem.update(ctx)
            rafRef.current = requestAnimationFrame(animate)
        }

        function addParticleFromPointer(e) {
            const now = performance.now()
            if (now - lastAddRef.current < 30) return
            lastAddRef.current = now
            pSystem.addParticle(e.clientX, e.clientY)
        }

        function addParticleFromTouch(e) {
            const touch = e.touches?.[0]
            if (!touch) return
            pSystem.addParticle(touch.clientX, touch.clientY)
        }

        init()
        animate()

        window.addEventListener("resize", init)
        window.addEventListener("pointermove", addParticleFromPointer)
        window.addEventListener("touchmove", addParticleFromTouch, { passive: true })

        return () => {
            cancelAnimationFrame(rafRef.current)
            window.removeEventListener("resize", init)
            window.removeEventListener("pointermove", addParticleFromPointer)
            window.removeEventListener("touchmove", addParticleFromTouch)
        }
    }, [])

    return <canvas id='canvas' ref={canvasRef}></canvas>
}