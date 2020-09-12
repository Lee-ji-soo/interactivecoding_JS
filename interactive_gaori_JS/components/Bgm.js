class Bgm {
    constructor({ $target, $bgm }) {
        this.$target = $target;
        this.$bgm = $bgm;
        this.$target.classList.add('play');
        this.$bgm.setAttribute('src', './assets/bgm.mp3');

        this.isPlay = false;

        this.render();
        this.$target.addEventListener('click', this.play.bind(this));
        window.addEventListener('keydown', this.stopPressBtn);
    }

    render() {
        if (this.isPlay) {
            this.$target.innerText = '➖';
            this.$bgm.play();
            this.$bgm.loop = true;

        } else {
            this.$target.innerText = '〰️';
            this.$bgm.pause();
        }
    }

    play() {
        this.isPlay = !this.isPlay;
        this.render()
    }

    stopPressBtn(e) {
        if (e.keyCode === 32) {
            e.preventDefault();
        }
    }
};

export default Bgm;
