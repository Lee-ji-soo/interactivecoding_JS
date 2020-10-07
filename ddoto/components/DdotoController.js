import Ddoto from './Ddoto.js';

class DdotoController {
    constructor() {
        this.$img = new Image();
        this.$img.onload = () => {
            this.loaded();
        }

        this.$img.src = './assets/ddoto.png';

        this.cur = 0;
        this.items = [];
        this.isloaded = false;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    loaded() {
        this.isLoaded = true;
        this.addDdoto();
    }

    addDdoto() {
        console.log('addDoto')
        this.items.push(
            new Ddoto(this.$img, this.stageWidth)
        )
    }

    draw(ctx, t) {
        if (this.isLoaded) {
            this.cur += 1;
            if (this.cur > 200) {
                this.cur = 0;
                this.addDdoto();
            }
            for (let i = this.items.length - 1; i >= 0; i--) {
                const item = this.items[i];
                if (item.x < -item.width) {
                    this.items.splice(i, 1);
                } else {
                    item.draw(ctx, t)
                }
            }
        }
    }
};

export default DdotoController;
