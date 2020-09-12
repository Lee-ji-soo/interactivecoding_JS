import Urchin from './Urchin.js';

class App {
    constructor({ $target }) {
        this.$target = $target;

        this.urchins = [
            new Urchin({ $target: this.$target }),
            new Urchin({ $target: this.$target }),
            new Urchin({ $target: this.$target }),
            new Urchin({ $target: this.$target })
        ];
        this.render()
    }

    render() {
        this.urchins.map((urchin, index) => {
            const width = Math.random() * 500;
            urchin.render(width, index)
        })
    }
}

export default App;
