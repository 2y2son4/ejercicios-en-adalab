"use strict";

const buttonElement = document.querySelector(".button");
const inputElement = document.querySelector(".firstName");


buttonElement.addEventListener("click", function log () {
    console.log("Hola, " + inputElement.value);
})