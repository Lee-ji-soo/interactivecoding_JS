import Orange from './Orange.js'

class App {
    constructor({ $canvas, $soundEffect, $orangeWrap }) {
        let $target;
        this.$canvas = $canvas
        this.$soundEffect = $soundEffect
        this.$orangeWrap = $orangeWrap

        document.body.appendChild(this.$canvas)
        document.body.appendChild(this.$orangeWrap)

        $orangeWrap.classList.add('orange-wrap')

        this.ctx = this.$canvas.getContext('2d')
        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1

        this.totalOrange = 20;

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
        this.ctx.fillStyle = '#1ca4ff'
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight)

        for (let i = 0; i < this.totalOrange; i++) {
            const orange = new Orange({
                $orangeWrap: this.$orangeWrap,
                $soundEffect: this.$soundEffect
            })
        }
    }
}

export default App
