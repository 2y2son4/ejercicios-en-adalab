'use strict';
const btn = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const resultElement = document.querySelector('.js-results');

// const nextPage = document.querySelector('.js-next');
// const previousPage = document.querySelector('.js-previous');

let characterName = '';
let characterGender = '';

// function handlerSearch() {
//   let search = inputElement.value;

//   fetch(`https://swapi.dev/api/people/?search=${search}`)
//     .then((response) => response.json())
//     .then((data) => {
//       let htmlCode = '';

//       for (let i = 0; i < 1; i++) {
//         characterName = data.results[i].name;
//         characterGender = data.results[i].gender;
//         htmlCode = '<ul class="list">';
//         htmlCode += '<li class="li-element">';
//         htmlCode += `<span class="bold">Character:</span> ${characterName}.`;
//         htmlCode += '</li>';
//         htmlCode += '<li class="li-element">';
//         htmlCode += `<span class="bold">Gender:</span> ${characterGender}.`;
//         htmlCode += '</li>';
//         htmlCode += '</ul>';
//         console.log(htmlCode);
//         // nextPage.href = data.next;
//         // previousPage.href = data.previous;
//       }
//       resultElement.innerHTML = htmlCode;
//     })

//     .catch((error) => {
//       resultElement.innerHTML = 'ERROR, merluza.';
//     });
// }

// btn.addEventListener('click', handlerSearch);

let timeOutID;

function fetchData() {
  let search = inputElement.value;
  fetch(`https://swapi.dev/api/people/?search=${search}`);
}

function handleKey() {
  if (timeOutID !== undefined) {
    timeOutID = setTimeout(fetchData, 500);
    // lanza la petición cuando se deja de escribir.
  }
}

inputElement.addEventListener('keyup', handleKey);
