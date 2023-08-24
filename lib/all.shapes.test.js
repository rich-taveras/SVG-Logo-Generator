const Circle = require("./Circle");
const Square = require("./Square");
const Triangle = require("./Triangle");

describe("Shapes classes", () => {
  test("Circle render method generates SVG correctly", () => {
    const circle = new Circle();
    circle.shapeColor = "red";
    circle.textColor = "white";
    circle.text = "Hello";
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Hello</text></svg>`;
    
    expect(circle.render()).toBe(expectedSvg);
  });

  test("Square render method generates SVG correctly", () => {
    const square = new Square();
    square.shapeColor = "blue";
    square.textColor = "white";
    square.text = "World";
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">  <rect x="10" y="10" width="300" height="200" stroke="black" fill="blue" stroke-width="0"/><text x="150" y="125" font-size="40" text-anchor="middle" fill="white">World</text></svg>`;
    
    expect(square.render()).toBe(expectedSvg);
  });

  test("Triangle render method generates SVG correctly", () => {
    const triangle = new Triangle();
    triangle.shapeColor = "green";
    triangle.textColor = "black";
    triangle.text = "Triangle";
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="125" font-size="40" text-anchor="middle" fill="black">Triangle</text></svg>`;
    
    expect(triangle.render()).toBe(expectedSvg);
  });
});
