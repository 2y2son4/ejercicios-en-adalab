'use strict';
const hexElement = document.querySelector('.js-hex');
const hexParagraphElement = document.querySelector('.js-result');

function getEmoji() {
  fetch('https://api.rand.fun/number/hex')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = `#${data.result}`;
      const divColor = document.createElement('div');
      divColor.style.width = '50px';
      divColor.style.height = '50px';
      divColor.style.margin = '10px';
      divColor.style.borderRadius = '5px';
      divColor.style.backgroundColor = `#${data.result}`;
      hexParagraphElement.appendChild(divColor);
    });
}
hexElement.addEventListener('click', getEmoji);

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.style.width = '250px';
      img.style.height = '150px';
      img.style.borderRadius = '5px';
      img.style.objectFit = 'scale-down';
      img.style.borderRadius = '20px';
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

function getBreeds() {
  fetch('https://dog.ceo/api/breeds/list')
    .then((response) => response.json())
    .then((data) => {
      console.log('Breeds data response: ', data);

      const ul = document.querySelector('ul');
      const breeds = data.message;
      let ulContent = '';

      for (const breed of breeds) {
        const breedContent = `<li>${breed}.</li>`;
        ulContent += breedContent;
      }
      ul.innerHTML = ulContent;
    });
}
const btn2 = document.querySelector('.js-btn2');
btn2.addEventListener('click', getBreeds);
