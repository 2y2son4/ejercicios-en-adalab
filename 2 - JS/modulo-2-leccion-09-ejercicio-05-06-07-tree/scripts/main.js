"use strict";

for (let i = 1; i<=5; i++) {
    let line = '';
    for (let j = 1; j<=i; j++) {
        line += '▲';
        //console.log(i, j, line);
    }    
    console.log(line);
}

console.log('★');
for (let i = 1; i<=5; i++) {
    let line = '';
    for (let j = 1; j<=i; j++) {
        line += '▲';
        //console.log(i, j, line);
    }    
    console.log(line);
}
console.log('|');

/* se utilizan mucho para recorreres arrays dentro de arrays 
(matrices).*/


// El viento que agita el arbol de Navidad.
console.log( '        ★');
for (let i = 1; i<=5; i++) {
    let line = '';
    for (let j = 1; j<=i; j++) {
        line += '▲▲';
        //console.log(i, j, line);
    }
    let space = '';
    //Este bucle se va ejecutando menos veces según i aumenta. Para i=1, j=4;
    for (let j = 1; j<=5-i; j++) {
        space += '  ';
    }   
    console.log(space.slice(1) + line.slice(1));
}
console.log('   /');

console.log('    ★');
for (let i = 1; i<=5; i++) {
    let line = '';
    for (let j = 1; j<=i; j++) {
        line += '▲▲';
        //console.log(i, j, line);
    }
    let space = '';
    //Este bucle se va ejecutando menos veces según i aumenta. Para i=1, j=4;
    for (let j = 1; j<=5-i; j++) {
        space += ' ';
    }   
    console.log(space + line.slice(1));
}
console.log('    |');