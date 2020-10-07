class FadeInOut {
    constructor({ $target }) {
        this.$target = $target;
        this.$fadeInOut = document.createElement('div');
        this.$fadeInOut.className = 'fadeInOut';
        this.$checkbox = document.createElement('input');
        this.$checkbox.setAttribute('type', 'checkbox');
        this.$checkbox.className = 'checkbox';

        this.$target.appendChild(this.$fadeInOut);
        this.$target.appendChild(this.$checkbox);

        this.check = false;
        this.init();

        this.$checkbox.addEventListener('change', () => {
            this.handleCheck(this.check, this.$checkbox)
        })
    }

    init() {
        if (this.check) {
            this.$fadeInOut.classList.add('fadeIn');
            return;
        }
    }

    render() {
        this.$fadeInOut.classList.toggle('fadeIn');
    }

    setState(nextCheck) {
        this.check = nextCheck;
        this.render();
    }

    handleCheck(check, $checkbox) {
        this.check = check;
        this.$checkbox = $checkbox;

        this.check = !this.check;
        this.setState(this.check);
    }
}

export default FadeInOut;
