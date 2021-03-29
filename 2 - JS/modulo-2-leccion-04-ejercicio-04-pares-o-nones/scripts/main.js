"use strict";

function paresNones (number) {     
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(paresNones(5));
console.log(paresNones(22));
console.log(paresNones(4));