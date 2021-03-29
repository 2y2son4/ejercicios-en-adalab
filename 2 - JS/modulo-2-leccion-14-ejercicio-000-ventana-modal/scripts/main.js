'use strict';

const buttonElement = document.querySelector('.div-button');
const modalWindow = document.querySelector('.js-modal');

// function showModal() {
//   modalWindow.classList.remove('hidden');
// }

// setTimeout(showModal, 2000);

setTimeout(() => {
  modalWindow.classList.remove('hidden');
}, 2000);

// function closeModal() {
//   modalWindow.classList.add('hidden');
// }

// buttonElement.addEventListener('click', closeModal);

buttonElement.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});
