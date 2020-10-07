import FadeInOut from './FadeInOut.js';

class App {
    constructor({ $target }) {
        this.$target = $target;

        this.fadeInOut = new FadeInOut({
            $target: this.$target
        })


        this.render();
    }

    render() { };
}

export default App;
