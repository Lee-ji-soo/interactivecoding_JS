import Gaori from './Gaori.js';
import Fish from './Fish.js';
import Bgm from './Bgm.js';
import Mode from './Mode.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$ocean = document.createElement('div');
        this.$fish = document.createElement('img');
        this.$key = document.createElement('section');
        this.$bgm = document.createElement('audio');
        this.$play = document.createElement('button');
        this.$mode = document.createElement('button');

        this.$target.appendChild(this.$ocean);
        this.$target.appendChild(this.$fish);
        this.$target.appendChild(this.$key);
        this.$target.appendChild(this.$bgm);
        this.$target.appendChild(this.$play);
        this.$target.appendChild(this.$mode);

        this.$ocean.classList.add('ocean');
        this.$fish.classList.add('fish');

        this.mode = new Mode({
            $target: this.$mode
        })

        this.bgm = new Bgm({
            $target: this.$play,
            $bgm: this.$bgm
        })

        this.fish = new Fish({
            $target: this.$fish,
            $key: this.$key
        })

        this.gaori = [
            new Gaori({ $target: this.$target, position: 'left' }),
            new Gaori({ $target: this.$target, position: 'right' })
        ]

        window.addEventListener('resize', this.resize.bind(this));

        this.resize();
        this.render();
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }

    render() {
        this.gaori.map(gr => {
            gr.render();
        })

        this.fish.render(this.stageWidth)
    }
};

export default App;
