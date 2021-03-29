"use strict";

const añosPerraValue = document.querySelector(".dogYears");
const añosPerra = parseInt(añosPerraValue.value);

console.log(añosPerra);

const añosHumanaSpan = document.querySelector('.humanYears');

const resultYears1 = 15;
const resultYears2 = resultYears1 + 9;
const resultYears3 = resultYears2 + (5 * (añosPerra - 2));


if (añosPerra === 1) {
  añosHumanaSpan.innerHTML = `La edad de tu humana es ${resultYears1}.`;
} else if (añosPerra === 2) {
  añosHumanaSpan.innerHTML = `La edad de tu humana es ${resultYears2}.`;
} else if (añosPerra >= 3) {
  añosHumanaSpan.innerHTML = `La edad de tu humana es ${resultYears3}.`;
}