'use strict'
alert('Falta el botón de reset');

//get numberAElement DOM element
const numberAElement = document.querySelector('.js-number-a');
//get numberBElement DOM element
const numberBElement = document.querySelector('.js-number-b');
//get resultElement DOM element
const resultElement = document.querySelector('.js-result');

//const suma =  numberAElement + numberBElement;

// las variables dentro de la constante add solo se crean dentro de la función, de modo que resultValue puede ser una constante.
const add = function () {
    // get numberAElement value
    let numberAValue = numberAElement.value;
    // parse string value to number value
    numberAValue =parseInt(numberAValue);
    // get numberBElement value
    let numberBValue = numberBElement.value;
    // parse string value to number value
    numberBValue =parseInt(numberBValue);

    // add values
    const resultValue = numberAValue + numberBValue;

    // check resultElement
    if (isNaN(resultValue)) {
        resultElement.classList.add('text--error');
        resultElement.innerHTML = 'Datos inválidos';
    } else {
        // set resultElement value in resultElement input element
        resultElement.classList.remove('text-error');
        resultElement.innerHTML = resultValue;
    }
}

// Evento
//listen changes in numberAElement input
numberAElement.addEventListener('change', add);
//listen changes in numberBElement input
numberBElement.addEventListener('change', add);

//reset button

//get resetElement dom element
const resetElement =document.querySelector ('.js-reset');

//clear all inputs
const reset = function () {
    numberAElement.value = " ";
    numberBElement.value = " ";
    resultElement.innerHTML = " ";
}

//listen click and reset button
resetElement.addEventListener("click", reset);