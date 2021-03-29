'use strict';

const marks = [5, 4, 6, 7, 9];

const inflate = (mark) => mark + 1;
const inflatedMarks = marks.map(inflate);

console.log(inflatedMarks);
