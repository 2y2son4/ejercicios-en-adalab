"use strict";

function getXNumber(num) {
    const arr = [];
    for (let i = 1 ; i <= num ; i++) {
        arr.push(i);
    }
    return arr;
}


const get100Number = getXNumber(100)
console.log(get100Number);

const srebmuN001teg =  get100Number.reverse();

console.log(srebmuN001teg);
