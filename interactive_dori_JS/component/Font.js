class Font {
    constructor({ $target, d, position }) {
        this.$target = $target;
        this.$font = document.createElement('span');
        this.$target.appendChild(this.$font);
        this.$font.className = 'font';

        this.font = d;
        this.position = position;
        this.state = false;

        this.render();
        this.$font.addEventListener('mouseover', this.rotate.bind(this))
        this.$font.addEventListener('mouseleave', this.rotate.bind(this))
    }

    rotate() {
        this.state = !this.state;
        const deg = this.state ? 180 : 0;
        this.$font.style.transform = `rotate(${deg}deg)`;
    }

    render() {
        this.$font.innerText = this.font;
        this.$font.style.left = `${this.position}%`;

    }
}

export default Font;
