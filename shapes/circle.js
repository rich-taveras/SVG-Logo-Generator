function generateCircleSVG(shapeColor, borderColor) {
    const borderAttribute = borderColor ? `stroke="${borderColor}" stroke-width="5"` : '';
    return `<circle cx="150" cy="100" r="50" fill="${shapeColor}" ${borderAttribute} />`;
}

module.exports = generateCircleSVG;
