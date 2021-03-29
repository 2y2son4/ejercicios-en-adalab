'use strict'

const kiwi = document.querySelector(".kiwis");
const totalKiwi = kiwi.innerHTML = 2 * 5;
const pera = document.querySelector(".peras");
const totalPera = pera.innerHTML = 3 * 2;
const uva = document.querySelector(".uvas");
const totalUva = uva.innerHTML = 0.5 * 4;
const totalDeTotales = document.querySelector(".total")
totalDeTotales.innerHTML = totalKiwi + totalPera + totalUva + " €";

console.log(kiwi, totalKiwi);
console.log(pera, totalPera);
console.log(uva, totalUva);
console.log(totalDeTotales);
