class App {
  constructor({ $document }) {
    this.$document = $document;
    this.$happy = document.createElement("div");
    this.$happy.className = "happy";
    this.$document.append(this.$happy);
    this.render();
    this.x;
    this.y;

    this.borderRight;
    this.borderLeft;

    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    window.addEventListener("mousemove", this.dotFollowMouse.bind(this));
    window.addEventListener("mousedown", this.getMousePosition.bind(this));
  }
  dotFollowMouse(e) {
    this.getMousePosition(e);
  }
  getMousePosition(e) {
    this.x = this.stageWidth - e.offsetX;
    this.y = this.stageHeight - e.offsetY;
    this.draw();
  }
  draw() {
    this.$happy.style.bottom = `${this.y}px`;
    this.$happy.style.right = `${this.x}px`;
  }
  render() {}
}

export default App;
