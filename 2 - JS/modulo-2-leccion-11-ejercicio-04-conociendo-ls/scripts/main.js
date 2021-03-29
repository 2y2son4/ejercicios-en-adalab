'use strict';

const inputElement = document.querySelector('.js-input');
const paragraphElement = document.querySelector('.js-paragraph');
let input = inputElement.value;

function inputHandler() {
  paragraphElement.innerHTML = inputElement.value;
  saveLocalStorage();
}

inputElement.addEventListener('keyup', inputHandler);

function saveLocalStorage() {
  localStorage.setItem('name', inputElement.value);
}

function getLocalStorage() {
  localStorage.getItem('name');
}

getLocalStorage();
