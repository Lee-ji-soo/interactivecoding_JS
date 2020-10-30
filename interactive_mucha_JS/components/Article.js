class Article {
    constructor({ $target }) {
        this.$target = $target;
        this.text = '';
        this.top = 0;
    }
    render() {
        this.$text = document.createElement('h1');
        this.$text.className = 'h1';
        this.$target.appendChild(this.$text);
        this.$text.innerText = this.text;

        this.top = this.top > 100 ? 0 : this.top;

        this.$text.style.top = `${this.top}%`;
    }

    setState(nextText, index) {
        this.text = nextText;

        this.top = index * 75;
        this.render();
    }
};

export default Article;
