// exports `triangle`, `circule`, and `square` classes
class Shape {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shapeColor = "";
  }
  setText(text) {
    this.text = text;
  }
  setColor(textColor) {
    this.textColor = textColor;
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return Error("Child must create its render function");
  }
}
module.exports = Shape;
