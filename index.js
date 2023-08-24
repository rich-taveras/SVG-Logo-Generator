const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter SVG text:",
      name: "text",
      validate: (text)=> text.length <=3 || "Text must be less than 3 characters",
    },
    {
      type: "list",
      message: "Enter text color:",
      name: "textColor",
      choices: ["blue", "green", "red", "yellow"],
    },
    {
      type: "list",
      message: "Enter SVG shape:",
      name: "shape",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "list",
      message: "Enter SVG shape color:",
      name: "shapeColor",
      choices: ["blue", "green", "red", "yellow"],
    },
  ])

  .then((response) => {
    if (response.shape === "circle") {
      const circle = new Circle();
      circle.setColor(response.textColor);
      circle.setText(response.text);
      circle.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", circle.render(), (err) => {
        console.log("Generated logo.svg");
      });
    } else if (response.shape === "square") {
      const square = new Square();
      square.setColor(response.textColor);
      square.setText(response.text);
      square.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", square.render(), (err) => {
        console.log("Generated logo.svg");
      });
    } else if (response.shape === "triangle") {
      const triangle = new Triangle();
      triangle.setColor(response.textColor);
      triangle.setText(response.text);
      triangle.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", triangle.render(), (err) => {
        console.log("Generated logo.svg");
      });
    }
  });
