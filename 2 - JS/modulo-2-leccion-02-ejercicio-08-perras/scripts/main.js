"use strict"
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const first = document.querySelector(".firstLi");
console.log(first);
const firstLi = first.innerHTML = `${firstDogName} <img src=${firstDogImage}>`;
console.log(firstLi);

const second = document.querySelector(".secondLi");
second.innerHTML = `${secondDogName} <img src=${secondDogImage}>`;

const third = document.querySelector(".thirdLi");
third.innerHTML = `${thirdDogName} <img src=${thirdDogImage}>`;



