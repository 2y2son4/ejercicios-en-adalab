"use strict";

//función para coger selectores:
const getSelector =  a => `document.querySelector('.${a}');`;

console.log(getSelector('btn'));