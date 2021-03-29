'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('.js-img');
      img.src = data.message;

      img.style.borderRadius = '5px';
      img.style.objectFit = 'scale-down';
      img.style.borderRadius = '20px';
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getDogImage);
