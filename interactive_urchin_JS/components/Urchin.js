class Urchin {
    constructor({
        $target }) {
        this.$target = $target;
        window.addEventListener('mousemove', this.onMove.bind(this))
    }

    render(width, i) {
        this.width = width
        this.$urchin = document.createElement('img');
        this.$target.appendChild(this.$urchin);
        this.$urchin.setAttribute('src', './assets/urchin.png');
        this.$urchin.classList.add(`urchin${i}`);
        this.$urchin.style.width = `${this.width}px`;
    }

    rotate(mouseX, mouseY) {

        this.domRect = this.$urchin.getBoundingClientRect();
        this.domX = this.domRect.x;
        this.domY = this.domRect.y;

        this.radi = Math.atan2(mouseY - (this.domY - this.width / 2), mouseX - (this.domX - this.width / 2));
        this.deg = this.radi * 180 / Math.PI;
        this.$urchin.style.transform = `rotate(${this.deg}deg)`
        console.log(this.$urchin)
    }

    onMove(e) {
        this.rotate(e.pageX, e.pageY)
    }
}

export default Urchin;
