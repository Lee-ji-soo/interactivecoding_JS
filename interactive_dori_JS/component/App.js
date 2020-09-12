import Dori from './Dori.js';
import Font from './Font.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$canvas = document.createElement('canvas');
        this.$dori = document.createElement('div');
        this.$dori.className = 'dori';
        this.$target.append(this.$canvas, this.$dori);

        this.ctx = this.$canvas.getContext('2d');
        this.pixelRatio = (window.devicePixelRatio > 1 ? 2 : 1)

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        // this.dori = new Dori({ $target: this.$dori });

        this.$fontWrap = document.createElement('div');
        this.$fontWrap.className = 'fontWrap';
        this.$dori.appendChild(this.$fontWrap);

        const fontD = new Font({ $target: this.$fontWrap, d: 'D', position: 10 });
        const fontO = new Font({ $target: this.$fontWrap, d: 'O', position: 20 });
        const fontR = new Font({ $target: this.$fontWrap, d: 'R', position: 30 });
        const fontI = new Font({ $target: this.$fontWrap, d: 'I', position: 40 });
        const fontD2 = new Font({ $target: this.$fontWrap, d: 'D', position: 50 });
        const fontO2 = new Font({ $target: this.$fontWrap, d: 'O', position: 60 });
        const fontR2 = new Font({ $target: this.$fontWrap, d: 'R', position: 70 });
        const fontI2 = new Font({ $target: this.$fontWrap, d: 'I', position: 80 });

        this.render.bind(this);
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.$canvas.width = this.stageWidth * this.pixelRatio;
        this.$canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.render();
    }

    render() {
        console.log(this);

        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    }
}

export default App;
