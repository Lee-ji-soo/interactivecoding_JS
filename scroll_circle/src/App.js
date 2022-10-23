class App {
  constructor({ $target }) {
    this.yScroll;
    this.x = 1;
    this.y = 1;

    this.$target = $target;
    this.$scroll = document.createElement("div");
    this.$circle1 = document.createElement("div");
    this.$circle2 = document.createElement("div");
    this.$circle3 = document.createElement("div");
    this.$circle4 = document.createElement("div");

    this.$target.appendChild(this.$scroll);
    this.$scroll.appendChild(this.$circle1);
    this.$scroll.insertBefore(this.$circle2, this.$circle1);
    this.$scroll.insertBefore(this.$circle3, this.$circle2);
    this.$scroll.insertBefore(this.$circle4, this.$circle3);

    this.$scroll.className = "scroll";
    this.$circle1.className = "circle circle1 fixed";
    this.$circle2.className = "circle circle2 fixed";
    this.$circle3.className = "circle circle3 fixed";
    this.$circle4.className = "circle circle4 fixed";

    this.scrollHeight = this.$target.clientHeight;
    this.$scroll.style.height = `${this.scrollHeight * 10}px`;
    this.$circle1.style.width = `${this.x}px`;
    this.$circle1.style.height = `${this.y}px`;

    this.init();
  }

  init() {
    this.addEventListener();
  }

  handleScroll() {
    this.yScroll = window.pageYOffset;
    this.x++;
    this.$circle1.style.width = `${this.yScroll}px`;
    this.$circle1.style.height = `${this.yScroll}px`;

    if (this.yScroll >= 500) {
      this.$circle2.classList.add("show");
      this.$circle2.style.width = `${this.yScroll - 500}px`;
      this.$circle2.style.height = `${this.yScroll - 500}px`;
    } else {
      this.$circle2.classList.remove("show");
    }
    if (this.yScroll >= 1000) {
      this.$circle3.classList.add("show");
      this.$circle3.style.width = `${this.yScroll - 1000}px`;
      this.$circle3.style.height = `${this.yScroll - 1000}px`;
    } else {
      this.$circle3.classList.remove("show");
    }
    if (this.yScroll >= 1500) {
      this.$circle4.classList.add("show");
      this.$circle4.style.width = `${this.yScroll - 1500}px`;
      this.$circle4.style.height = `${this.yScroll - 1500}px`;
    } else {
      this.$circle4.classList.remove("show");
    }
  }

  addEventListener() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  render() {}
}

export default App;
