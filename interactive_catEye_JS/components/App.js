import Eye from './Eye.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$cat = document.createElement('div');
        this.$cat.className = 'cat';
        this.$cat.style.backgroundImage = "url('./assets/cat2.png')";
        this.$target.appendChild(this.$cat);
        this.render();
    };

    render() {
        for (let i = 0; i < 2; i++) {
            const eye = new Eye({
                $cat: this.$cat,
            });
        }
    }
};

export default App;
