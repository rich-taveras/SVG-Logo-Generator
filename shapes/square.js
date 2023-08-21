function generateSquareSVG(shapeColor, borderColor) {
    const borderAttribute = borderColor ? `stroke="${borderColor}" stroke-width="5"` : '';
    return `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" ${borderAttribute} />`;
}

module.exports = generateSquareSVG;
