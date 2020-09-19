import Bubble from './Bubble.js'

class App {
    constructor({ $canvas, $soundEffect, $bubbleWrap }) {
        let $target;
        this.$canvas = $canvas
        this.$soundEffect = $soundEffect
        this.$bubbleWrap = $bubbleWrap

        document.body.appendChild(this.$canvas)
        document.body.appendChild(this.$bubbleWrap)

        $bubbleWrap.classList.add('bubble-wrap')

        this.ctx = this.$canvas.getContext('2d')
        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1

        this.totalBubble = 200;

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        this.render()
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.$canvas.width = this.stageWidth * this.pixelRatio
        this.$canvas.height = this.stageHeight * this.pixelRatio
        this.ctx.scale(this.pixelRatio, this.pixelRatio)

        this.render()
    }

    render() {
        this.ctx.fillStyle = '#dbdbdb'
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight)

        for (let i = 0; i < this.totalBubble; i++) {
            const bubble = new Bubble({
                $bubbleWrap: this.$bubbleWrap,
                $soundEffect: this.$soundEffect
            })
        }
    }
}

export default App
