"use strict";

function precioIva (a) {
    const iva = a * 0.21;
    const total = a + iva;
    return `Precio sin IVA: ${a} €, IVA: ${iva}  € y Total: ${total}  €`;
}

console.log(precioIva(5));
console.log(precioIva(22));
console.log(precioIva(4));