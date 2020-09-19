class Ball {
    constructor({ $target, color, left, stageHeight }) {
        this.$target = $target;
        this.color = color;
        this.left = left;
        this.stageHeight = stageHeight;

        this.$ball = document.createElement('span');
        this.$target.appendChild(this.$ball);
        this.$ball.className = 'ball';

        this.y = 30;
        this.vy = 5;
        this.ay = 0.2;

        this.init();

        this.$ball.addEventListener('click', this.handleClick.bind(this));

    }

    handleClick() {
        window.requestAnimationFrame(this.moveBall.bind(this));
    }

    moveBall() {
        this.vy += this.ay;
        this.y += this.vy;
        if (this.y > this.stageHeight) {
            this.vy *= -1;
        } if (this.y < 0) {
            this.vy *= -1;
        }
        this.$ball.style.top = `${this.y}px`;
        requestAnimationFrame(this.moveBall.bind(this))
    }

    init() {
        this.$ball.style.backgroundColor = this.color;
        this.$ball.style.top = `${this.y}px`
        this.$ball.style.left = `${this.left}%`;
    }
}

export default Ball;
