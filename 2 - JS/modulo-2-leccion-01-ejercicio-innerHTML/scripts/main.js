'use strict'

//Lo que está entre los () se denominan parámetros.

//1. Coger elemento del HTML y guardarlo en una variable:

const titleElement = document.querySelector('.main__title');

// 2. Usar classList para añadir clase.

titleElement.classList.add('my-title');

// 3. Usar classList para quitar clase.

titleElement.classList.remove('my-title');

// 4. Usar classList para añadir clase si no la tiene y quitársela si la tiene.

titleElement.classList.toggle('my-title');

titleElement.classList.toggle('hidden');


// innerHTML

const mainElement = document.querySelector('.page');

const queTieneInnerHTML = mainElement.innerHTML;

console.log(queTieneInnerHTML);

const sectionElement = document.querySelector('.page__section');

sectionElement.innerHTML = 'Otra cosa' + '<h3>Otro título</h3>';