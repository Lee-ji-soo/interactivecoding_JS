class Dori {
    constructor({ $target }) {
        //img
        this.$target = $target;
        this.$doriImg = document.createElement('img');
        this.$doriImg.className = 'doriImg';
        this.$target.appendChild(this.$doriImg);
        this.$sound = document.querySelector('#doriSound');

        this.clicked = false;
        this.render();

        this.$doriImg.addEventListener('click', this.handleDori.bind(this))
    }

    render() {
        const img = this.clicked ? 2 : 1
        this.$doriImg.setAttribute('src', `./assets/dori${img}.png`);
    }

    handleDori() {
        this.clicked = !this.clicked;
        if (this.clicked) {
            this.$sound.play();
        }
        this.render();
    }
}

export default Dori;
