import Mucha from './Mucha.js';
import Article from './Article.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$main = document.createElement('main');
        this.$target.appendChild(this.$main);

        this.render();
    }
    render() {
        this.mucha = new Mucha({
            $target: this.$main
        })
        this.articel = new Article({
            $target: this.$main
        })
    };
};

export default App;
