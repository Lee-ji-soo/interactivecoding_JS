class Mucha {
    constructor({ $target }) {
        this.$target = $target;
        this.$div = document.createElement('div');
        this.$target.appendChild(this.$div);
        this.$div.className = 'muchaBOX';

        this.$mucha = new Image();
        this.$muchaWoman = new Image();
        this.$muchaCircle = new Image();

        this.$mucha.className = 'mucha';
        this.$muchaWoman.className = 'muchaWoman';
        this.$muchaCircle.className = 'muchaCircle';

        this.width = this.$muchaCircle.style.width;

        this.$div.append(this.$mucha, this.$muchaCircle, this.$muchaWoman);

        this.render();

        window.addEventListener('mousemove', this.onMove.bind(this))
    }

    render() {
        this.$mucha.setAttribute('src', './assets/mucha_bg.jpg')
        this.$muchaCircle.setAttribute('src', './assets/mucha_cir.png')
        this.$muchaWoman.setAttribute('src', './assets/mucha_wo.png')
    }

    rotate(mouseX, mouseY) {
        this.domRect = this.$muchaCircle.getBoundingClientRect();

        this.domX = this.domRect.x;
        this.domY = this.domRect.y;

        this.radi = Math.atan2(mouseY - (this.domY - this.width / 2), mouseX - (this.domX - this.width / 2));

        this.deg = this.radi * 180 / Math.PI;

        this.$muchaCircle.style.transform = `rotate(${this.deg}deg)`;
    }

    onMove(e) {
        this.rotate(e.pageX, e.pageY)
    }
};
export default Mucha;
