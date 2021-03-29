'use strict';

const times = [56, 9, 45, 28, 35];

const media = times.reduce((a, number) => a + number / times.length, 0);

console.log(media);
