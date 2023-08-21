const readline = require('readline');
const fs = require('fs');
const opn = require('opn');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const generateCircleSVG = require('./shapes/circle');
const generateTriangleSVG = require('./shapes/triangle');
const generateSquareSVG = require('./shapes/square');

rl.question('Enter up to three characters: ', (text) => {
    rl.question('Enter text color (color keyword or hex): ', (textColor) => {
        const shapeOptions = ['circle', 'triangle', 'square'];
        const shapeList = shapeOptions.map((shape, index) => `${index + 1}. ${shape}`).join('\n');

        rl.question(`Choose a shape:\n${shapeList}\n`, (shapeChoice) => {
            const selectedShape = shapeOptions[parseInt(shapeChoice) - 1];

            if (!selectedShape) {
                console.error('Invalid shape choice');
                rl.close();
                return;
            }

            rl.question('Enter shape color (color keyword or hex): ', (shapeColor) => {
                let borderColor = '';
                if (shapeColor.toLowerCase() === 'white') {
                    rl.question('Enter border color for white shape (color keyword or hex): ', (borderColorChoice) => {
                        borderColor = borderColorChoice;
                        processUserInput(text, textColor, selectedShape, shapeColor, borderColor);
                    });
                } else {
                    processUserInput(text, textColor, selectedShape, shapeColor, borderColor);
                }
            });
        });
    });
});

function processUserInput(text, textColor, shape, shapeColor, borderColor) {
    rl.close();

    let svgCode = '';
    switch (shape) {
        case 'circle':
            svgCode = generateCircleSVG(shapeColor, borderColor);
            break;
        case 'triangle':
            svgCode = generateTriangleSVG(shapeColor, borderColor);
            break;
        case 'square':
            svgCode = generateSquareSVG(shapeColor, borderColor);
            break;
    }

    const textSvg = `<text x="150" y="100" fill="${textColor}" font-size="24" text-anchor="middle" dominant-baseline="middle">${text}</text>`;

    const fullSvgCode = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${svgCode}
            ${textSvg}
        </svg>
    `;

    fs.writeFileSync('logo.svg', fullSvgCode);

    console.log('Generated logo.svg');

    opn('logo.svg');
}
