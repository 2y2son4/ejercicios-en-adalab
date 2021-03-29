'use strict';

const paragraphElement = document.querySelector('.paragraph');

const clickButton = document.querySelector('.button');

function changeText() {
  paragraphElement.innerHTML = 'Mi primer click, ¡olé yo y la madre que me parió!';
}

clickButton.addEventListener('click', changeText);

function handleButtonClick(event) {
  console.log(event.currentTarget);
}

clickButton.addEventListener('click', handleButtonClick);
