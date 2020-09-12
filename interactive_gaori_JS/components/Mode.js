class Mode {
    constructor({ $target }) {
        this.$target = $target;
        this.$target.classList.add('mode');

        this.isDark = false;

        this.render();
        this.$target.addEventListener('click', this.onChange.bind(this));
        window.addEventListener('keydown', this.stopPressBtn);
    }

    render() {
        this.$target.innerText = this.isDark ? '🌓' : '🌚';
        document.documentElement.setAttribute('color-mode', this.isDark ? 'dark' : 'light');
    }

    onChange() {
        this.isDark = !this.isDark;
        this.render()
    }

    stopPressBtn(e) {
        if (e.keyCode === 32) {
            e.preventDefault();
        }
    }
};

export default Mode
