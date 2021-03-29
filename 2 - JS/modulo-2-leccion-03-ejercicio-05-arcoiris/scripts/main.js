"use strict";

const mainTitle = document.querySelector("h1");
const mainText = document.querySelector("p");

if (mainTitle.classList.contains("warning")) {
    mainTitle.innerHTML = "AVISO"; 
    mainText.innerHTML = "Tenga cuidado";
} else if (mainTitle.classList.contains("error")) {
    mainTitle.innerHTML = "ERROR";
    mainText.innerHTML = "Ha surgido un error";
} else  if (mainTitle.classList.contains("success")) {
    mainTitle.innerHTML = "CORRECTO";
    mainText.innerHTML = "Los datos son correctos";
}