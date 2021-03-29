"use strict";

function getEl (a) {     
    return document.querySelector(a);
}


function paresNones (num) {  
    num = parseInt(getEl('.paragraph').innerHTML);     
    if(num % 2 === 0) {
        return console.log('Este número es PAR.');
    }
    else {
        return console.log('Este número es IMPAR.');;
    }
}


console.log(paresNones())