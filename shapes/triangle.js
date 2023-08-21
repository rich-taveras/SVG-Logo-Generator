function generateTriangleSVG(shapeColor, borderColor) {
    const borderAttribute = borderColor ? `stroke="${borderColor}" stroke-width="5"` : '';
    return `<polygon points="150,20 275,180 25,180" fill="${shapeColor}" ${borderAttribute} />`;
}

module.exports = generateTriangleSVG;
