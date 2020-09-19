import { PI2 } from '../const/const.js'

class GlowParticle {
    constructor(x, y, radius, rgb) {
        this.x = x
        this.y = y
        this.radius = radius
        this.rgb = rgb

        this.vx = Math.random() * 4
        this.vy = Math.random() * 4
        this.sinValue = Math.random()
    }

    draw(ctx) {
        ctx.beginPath()

        ctx.fillStyle = `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b},1)`
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false)
        ctx.fill()

        this.move()
    }

    move(stageWidth, stageHeight) {

    }

}

export default GlowParticle
