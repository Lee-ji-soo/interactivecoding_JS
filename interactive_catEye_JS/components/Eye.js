class Eye {
    constructor({ $cat }) {
        this.$cat = $cat;
        this.render();
        window.addEventListener('mousemove', (e) => { this.onMove(e) })
    };

    render() {
        this.$eye = document.createElement('span');
        this.$eye.innerHTML = '❍';
        this.$eye.className = 'eye';
        this.$cat.appendChild(this.$eye);
    }

    rotate(mouseX) {
        this.domRect = this.$eye.getBoundingClientRect();
        this.domX = this.domRect.x;
        this.$eye.style.transform = `translate(${mouseX / 20}%)`
    }

    onMove(e) {
        this.rotate(e.pageX)
    }
};

export default Eye;
