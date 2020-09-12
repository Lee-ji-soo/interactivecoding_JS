import { COLORS } from '../const/const.js'
import GlowParticle from './GlowParticle.js'

class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d')

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1

        this.totalParticles = 0
        this.curColor = 0
        this.particles = []
        this.maxRadius = 90
        this.minRadius = 40
        this.item = {}

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        this.render()
        this.evtBinding()
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * this.pixelRatio
        this.canvas.height = this.stageHeight * this.pixelRatio
        this.ctx.scale(this.pixelRatio, this.pixelRatio)

        this.render()
    }

    createParticles(x, y) {
        this.item = new GlowParticle(
            x,
            y,
            Math.random() *
            (this.maxRadius - this.minRadius) + this.minRadius,
            COLORS[this.curColor]
        )
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this))
        this.item.draw(this.ctx, this.stageWidth, this.stageHeight)
    }

    render() {
        this.ctx.fillStyle = '#F8B3C6'
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight)
    }

    evtBinding() {
        const soundEffect = document.getElementById('soundEffect')

        const addTotalPartile = (e) => {
            this.totalParticles += 1

            this.curColor === COLORS.length - 1
                ? this.curColor = 0
                : this.curColor += 1

            let tempX = e.clientX
            let tempY = e.clientY

            this.createParticles(tempX, tempY)
            window.requestAnimationFrame(this.animate.bind(this))
            soundEffect.play()
        }

        window.addEventListener('click', addTotalPartile)
    }

}

export default App
