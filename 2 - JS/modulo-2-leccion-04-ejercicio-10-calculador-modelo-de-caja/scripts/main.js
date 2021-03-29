"use strict";

function modeloDeCaja (bb, w, p, bs) {
    if (bb === "border-box") {
        p = 0;
        bs = 0;
    } else {
        false;
    }
    

    return `El ancho del contenido es: ${w}px y el ancho total de la caja es: ${w+p+bs}px.`

}

console.log(modeloDeCaja("border-box", 200, 20, 5 ));
console.log(modeloDeCaja("content-box", 200, 20, 5 ));