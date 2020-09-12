class Gaori {
    constructor({
        $target, position
    }) {
        this.RX = 100;
        this.X = 100;
        this.$target = $target;
        this.position = position === 'left' ? true : false;
        this.width = Math.random() * 100;

        this.$gaori = document.createElement('img');
        this.$target.appendChild(this.$gaori);
        this.$gaori.classList.add('gaori');

        this.render();

    }

    render() {
        this.x = this.X;
        this.rx = -this.RX;
        this.vx = 0.1;

        this.$gaori.style.width = `${this.width}%`;

        if (this.position) {
            this.$gaori.style.left = `${this.x}%`;
            this.$gaori.setAttribute('src', './assets/gaori.png');
            window.requestAnimationFrame(this.animateLeft.bind(this));
        } else {
            this.$gaori.style.left = `${this.rx}%`;
            this.$gaori.setAttribute('src', './assets/gaori2.png');
            window.requestAnimationFrame(this.animateRight.bind(this));
        }

        if (this.width < 50) {
            this.$gaori.style.opacity = `${this.width / 100}`;
            this.$gaori.style.zIndex = 1;
        } else {
            this.$gaori.style.zIndex = 5;
        }
    }

    animateRight() {
        this.top = Math.random() * 20;
        this.width = Math.random() * 100;

        this.rx += this.vx;
        this.$gaori.style.left = `${this.rx}%`

        if (this.rx > this.RX) {
            this.rx = -this.RX
            this.$gaori.style.width = `${this.width}%`;
            this.$gaori.style.top = `${this.top}%`;

            if (this.width < 50) {
                this.$gaori.style.opacity = `${this.width / 100}`;
                this.$gaori.style.zIndex = 1;
            } else {
                this.$gaori.style.opacity = 1;
                this.$gaori.style.zIndex = 5;
            }
        }

        requestAnimationFrame(this.animateRight.bind(this))
    }

    animateLeft() {
        this.top = Math.random() * 20;
        this.width = Math.random() * 100;

        this.x -= this.vx
        this.$gaori.style.left = `${this.x}%`

        if (this.x < -this.X - 10) {
            this.x = this.X
            this.$gaori.style.width = `${this.width}%`;
            this.$gaori.style.top = `${this.top}%`;

            if (this.width < 50) {
                this.$gaori.style.opacity = `${this.width / 100}`;
                this.$gaori.style.zIndex = 1;
            } else {
                this.$gaori.style.opacity = 1;
                this.$gaori.style.zIndex = 5;
            }
        }


        requestAnimationFrame(this.animateLeft.bind(this))
    }
};

export default Gaori
