"use strict";
const inputElement = document.querySelector('.js-input');
const paragraphElement = document.querySelector('.js-name');




/*const handleKeydown = (event) => {
    console.log(event.key);
    paragraphElement.innerHTML += event.key;
}*/

const handleChange = (event) => 
paragraphElement.innerHTML = `¡Hola ${event.currentTarget.value}!`;




inputElement.addEventListener("change", handleChange);
