'use strict';

const jsResult = document.querySelector('.js-result');
const jsResultBtn = document.querySelector('.js-btn');

function getpassword() {
  fetch('https://api.rand.fun/text/password?length=20')
    .then((response) => response.json())
    .then((data) => {
      jsResult.innerHTML = data.result;
    });
}

function getInteger() {
  getpassword();
}

jsResultBtn.addEventListener('click', getInteger);
