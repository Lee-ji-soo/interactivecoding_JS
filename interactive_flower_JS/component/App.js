import Flower from './Flower.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$flowerBg = document.createElement('div');
        this.$flowerBg.className = 'flowerBg';
        this.$target.appendChild(this.$flowerBg);

        this.render();
    }

    render() {
        let flower;
        for (let i = 0; i < 20; i++) {
            const width = Math.random() * 100;
            const left = Math.random() * 900;
            const top = Math.random() * 900;
            flower = new Flower({
                $target: this.$target,
                width: width,
                left: left,
                top: top
            })
        }
    }
}

export default App;
