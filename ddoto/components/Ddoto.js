class Ddoto {
    constructor(img, stageWidth) {
        this.$img = img;

        this.totalFrame = 6;
        this.curFrame = 0;

        this.imgWidth = 310;
        this.imgHeight = 300;

        this.ddotoWidth = 180;
        this.ddotoHeight = 150;

        this.ddotoWidthHalf = this.ddotoWidth / 2;

        this.x = stageWidth;
        this.y = 0;
        this.speed = 1;

        this.fps = 6;
        this.fpsTime = 1000 / this.fps;
    }

    draw(ctx, t) {
        if (!this.time) {
            this.time = t;
        }
        const now = t - this.time;
        if (now > this.fpsTime) {
            this.time = t;
            this.curFrame += 1;
            if (this.curFrame === this.totalFrame) {
                this.curFrame = 0;
            }
        }

        this.animate(ctx);
    }
    animate(ctx) {
        this.x = this.speed;
        this.y = 0;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.drawImage(
            this.$img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            10,
            10,
            this.ddotoWidth,
            this.ddotoHeight
        );
        ctx.restore();
    }
}

export default Ddoto;
