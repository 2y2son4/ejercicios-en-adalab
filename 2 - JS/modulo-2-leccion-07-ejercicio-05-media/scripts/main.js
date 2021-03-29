'use strict';

const numbers = [42, 27, 33, 12, 78];



/*for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
    return acc/numbers.length;
}
console.log(acc/numbers.length);


console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}

console.log(acc/numbers.length);*/

function average (numbers) {
    let acc = 0;
    for (let i = 0; i < numbers.length; i++) {
        acc += numbers[i];
    }
    return acc/numbers.length;
};

console.log(average(numbers));

numbers[5] = 21;

console.log(average(numbers));


