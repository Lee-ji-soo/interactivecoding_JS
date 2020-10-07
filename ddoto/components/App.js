import DdotoController from './DdotoController.js';

class App {
    constructor({ $target }) {
        this.$canvas = document.createElement('canvas');
        this.ctx = this.$canvas.getContext('2d');
        this.$target = $target;
        this.$target.appendChild(this.$canvas);

        this.ddotoController = new DdotoController();

        window.addEventListener('resize', this.resize.bind(this))

        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.$canvas.height = this.stageWidth * 2;
        this.$canvas.width = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.ddotoController.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ddotoController.draw(this.ctx, t);

    }
};

export default App;
