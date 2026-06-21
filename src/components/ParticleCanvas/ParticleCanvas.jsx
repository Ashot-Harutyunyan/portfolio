import { useEffect, useRef } from "react"

class Particle {
    constructor(x, y) {
        this.radius = 20
        this.x = x
        this.y = y
        this.velocityX = Math.random() * 3 - 1.5
        this.velocityY = Math.random() * 3 - 1.5
    }
}

class ParticleSystem {
    constructor() {
        this.particles = []
        this.maxParticles = 60
        this.connectDistance = 50
        this.color = 0
    }

    update(ctx) {
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i]
            p.x += p.velocityX
            p.y += p.velocityY

            ctx.fillStyle = `hsl(${this.color}, 100%, 10%)`
            ctx.beginPath()
            ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
            ctx.fill()

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j]
                const dx = p.x - p2.x
                const dy = p.y - p2.y
                const distance = Math.hypot(dx, dy)

                if (distance < this.connectDistance) {
                    ctx.strokeStyle = `hsla(${this.color}, 100%, 10%, ${1 - distance / this.connectDistance + 0.2})`
                    ctx.beginPath()
                    ctx.moveTo(p.x, p.y)
                    ctx.lineTo(p2.x, p2.y)
                    ctx.stroke()
                }
            }
        }

        if (this.particles.length > this.maxParticles) {
            this.particles = this.particles.slice(-this.maxParticles)
            this.color = this.color > 360 ? 0 : this.color + 0.5
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
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            pSystem.update(ctx)
            rafRef.current = requestAnimationFrame(animate)
        }

        function addParticleFromPointer(e) {
            const x = e.clientX
            const y = e.clientY
            if (x == null || y == null) return
            pSystem.addParticle(x, y)
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