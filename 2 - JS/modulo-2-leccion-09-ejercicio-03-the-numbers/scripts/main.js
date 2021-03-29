"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber() {
	const evenNumbers = [];
	const threeNumbers = [];
	for (let i = 0; i < lostNumbers.length; i++) {
		if (lostNumbers[i] % 2 === 0) {
            evenNumbers.push(lostNumbers[i]);
        }   
		if (lostNumbers[i] % 3 === 0) {
			threeNumbers.push(lostNumbers[i]);
		}
	}

	const bestLostNumbers = evenNumbers.concat(threeNumbers);

	return bestLostNumbers;
}

console.log(bestLostNumber());

/*const lostNumbers = [4, 8, 15, 16, 23, 42];

const evenNumbers = lostNumbers.filter(lostNumbers => lostNumbers % 2 === 0);
const threeNumbers = lostNumbers.filter(lostNumbers => lostNumbers % 3 === 0);

const bestLostNumbers = evenNumbers.concat(threeNumbers);

console.log(evenNumbers);
console.log(threeNumbers);
console.log(bestLostNumbers);*/
