class Flower {
    constructor({ $target, width, left, top }) {
        this.state = {
            isCursorOn: false
        }

        this.width = width;
        this.left = left;
        this.top = top;
        this.vt = 5;

        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.$target = $target;
        this.$flower = document.createElement('img');
        this.$flower.className = 'flower';
        this.$flower.setAttribute('src', './assets/flower.png');
        this.$target.appendChild(this.$flower);

        this.$flower.style.width = `${this.width}px`;
        this.$flower.style.left = `${this.left}px`;


        this.$flower.addEventListener('mouseenter', this.handleMouse.bind(this));
        this.$flower.addEventListener('mouseleave', this.handleMouse.bind(this));

        window.requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        this.top += this.vt;

        if (this.top > this.stageHeight) {
            this.top = -40;
        }

        this.$flower.style.top = `${this.top}px`;
        requestAnimationFrame(this.animate.bind(this));
    }

    rotate() {
        // this.domRect = this.$flower.getBoundingClientRect();
        // this.domX = this.domRect.x;
        // this.domY = this.domRect.y;

        // const my = this.state.my;
        // const mx = this.state.mx;

        // this.radi = Math.atan2(my - (this.domY - this.width / 2), mx - (this.domX - this.width / 2));
        // this.deg = this.radi * 180 / Math.PI;
        // this.$flower.style.transform = `translate(-50%,-50%) rotate(${this.deg}deg)`;

        if (this.state.isCursorOn) {
            this.$flower.classList.add('rotate');
        } else {
            this.$flower.classList.remove('rotate');
        }
    }

    handleMouse() {
        this.state.isCursorOn = !this.state.isCursorOn;
        this.rotate();
    }
}

export default Flower;
