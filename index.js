const readline = require('readline');
const fs = require('fs');
const opn = require('opn');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const generateCircleSVG = require('./shapes/circle');



    console.log('Generated logo.svg');

    opn('logo.svg');
