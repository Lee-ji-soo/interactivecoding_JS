import Ball from './Ball.js';
import { COLOR, LEFT } from './element.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.canvas = document.createElement('canvas');
        this.$target.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalBalls = 6;

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        this.drawBall();
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.render();
    }

    render() {
        this.ctx.fillStyle = '#efefef';
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    }

    drawBall() {
        let balls;
        for (let i = 0; i < this.totalBalls; i++) {
            balls = new Ball({
                $target: this.$target,
                color: COLOR[i],
                left: LEFT[i],
                stageHeight: this.stageHeight
            })
        }
    }
}

export default App;
