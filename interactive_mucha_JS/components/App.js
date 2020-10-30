import Mucha from './Mucha.js';
import Article from './Article.js';
import { text } from '../utils/text.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$main = document.createElement('main');
        this.$target.appendChild(this.$main);

        this.render();
    }
    render() {
        let mucha;
        for (let i = 0; i < 2; i++) {
            mucha = new Mucha({
                $target: this.$main, i
            })
        }
        this.article = new Article({
            $target: this.$main
        })

        text.map((typo, i) => this.article.setState(typo, i))
    };
};

export default App;
