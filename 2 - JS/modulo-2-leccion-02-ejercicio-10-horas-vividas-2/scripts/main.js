"use strict";

const age = document.querySelector("p");
const hoursInYear = 365 * 24;
const hoursLived = hoursInYear * parseInt(age.innerHTML);

console.log(hoursLived);