"use strict";

// Input Data:
// - Año actual en una constante.

// Output data:
// - Próximo año bisiesto en una constante.


//Calcular si el año actual es bisiesto. Si no lo es, calcular cuándo será el próximo.


const actualYear = 2021; //se podría coger de un formulario con el valor que se le introduzca.
const moduleYear = actualYear % 4;
// const leapYear = 4;
// const lastLeapYear = 2020;
// const nextLeapYear = lastLeapYear + leapYear;

/* if (actualYear % 4 === 0) {
    console.log(`${actualYear} es un año bisiesto`)
} else {
    console.log(`${actualYear} no es un año bisiesto. El próximo año bisiesto será ${nextLeapYear}.`)
} */

if (moduleYear === 0) {
    console.log(`${actualYear} es un año bisiesto`)
} else if (moduleYear === 1) {
    let nextLeapYear = actualYear + 3;
    console.log(`${actualYear} no es un año bisiesto. El próximo año bisiesto será ${nextLeapYear}.`);
} else if (moduleYear === 2) {
    let nextLeapYear = actualYear + 2;
    console.log(`${actualYear} no es un año bisiesto. El próximo año bisiesto será ${nextLeapYear}.`);
} else {
    let nextLeapYear = actualYear + 1;
    console.log(`${actualYear} no es un año bisiesto. El próximo año bisiesto será ${nextLeapYear}.`);
}