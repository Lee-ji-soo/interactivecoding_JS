class Fish {
    constructor({ $target, $key
    }) {
        this.$target = $target;
        this.$key = $key;
        this.$key.classList.add('keys');
        this.$target.setAttribute('src', './assets/fish.png');

        this.createEle();

        this.x = 15;
        this.vx = 0.1;
        this.y = 30;
        this.vy = 0.1;

        this.isMove = false;
        this.direcTo = 'right';

        this.render();

        this.evtBinding();
    }

    createEle() {
        this.$move = document.createElement('span');
        this.$left = document.createElement('span');
        this.$right = document.createElement('span');
        this.$up = document.createElement('span');
        this.$down = document.createElement('span');

        this.keys = [
            { target: this.$move, id: 'move', html: '●' },
            { target: this.$left, id: 'left', html: '⇠' },
            { target: this.$right, id: 'right', html: '⇢' },
            { target: this.$up, id: 'up', html: '⇡' },
            { target: this.$down, id: 'down', html: '⇣' }
        ]

        this.keys.map(key => {
            this.$key.appendChild(key.target);
            key.target.setAttribute('id', key.id);
            key.target.innerHTML = key.html;
            key.target.classList.add('key');
        })
    }

    render() {
        this.$target.style.left = `${this.x}%`;
        this.$target.style.top = `${this.y}%`;
    }

    move() {
        if (this.isMove) {

            if (this.direcTo === 'right') {
                this.x += this.vx;
                this.$right.classList.add('moving');
                this.$target.setAttribute('src', './assets/fish.png');
                this.$target.style.left = `${this.x}%`;

            } else if (this.direcTo === 'left') {
                this.x -= this.vx;
                this.$left.classList.add('moving');
                this.$target.setAttribute('src', './assets/fish2.png');
                this.$target.style.left = `${this.x}%`;

            } else if (this.direcTo === 'down') {
                this.y += this.vy;
                this.$down.classList.add('moving');
                this.$target.setAttribute('src', './assets/fish4.png');
                this.$target.style.top = `${this.y}%`;

            } else if (this.direcTo === 'up') {
                this.y -= this.vy;
                this.$up.classList.add('moving');
                this.$target.setAttribute('src', './assets/fish3.png');
                this.$target.style.top = `${this.y}%`;
            }

            if (this.x < -20) {
                this.x = 110
            } else if (this.x > 110) {
                this.x = -10
            } else if (this.y > 110) {
                this.y = -10
            } else if (this.y < -10) {
                this.y = 110
            }

            this.$move.classList.add('moving');
            this.$target.style.transform = `translate(${this.x}%,${this.y}%)`;
            requestAnimationFrame(this.move.bind(this))
        } else {
            return;
        }
    }

    onKeydown(e) {
        if (e.keyCode === 32) { //space
            this.setMove();

        } if (e.keyCode === 40) {
            this.direcTo = 'down';
            this.$down.classList.add('moving');
            this.setMove();

        } if (e.keyCode === 38) {
            this.direcTo = 'up';
            this.$up.classList.add('moving');
            this.setMove();

        } if (e.keyCode === 39) {
            this.direcTo = 'right';
            this.$right.classList.add('moving');
            this.setMove();

        } if (e.keyCode === 37) {
            this.direcTo = 'left';
            this.$left.classList.add('moving');
            this.setMove();

        } else return;
    }

    onKeyup() {
        this.keys.map(key => key.target.classList.remove('moving'));
    }

    setMove() {
        this.isMove = !this.isMove;
        this.move();
    }

    evtBinding() {
        this.$target.addEventListener('click', this.setMove.bind(this));
        window.addEventListener('keydown', this.onKeydown.bind(this));
        window.addEventListener('keyup', this.onKeyup.bind(this));
    }
}

export default Fish;
