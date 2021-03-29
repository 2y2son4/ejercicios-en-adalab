'use strict';

const clockElement = document.querySelector('.js-clock');
const clockElement2 = document.querySelector('.js-clock2');

let hours = 0;
let minutes = 0;
let seconds = 0;

function updateClock() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
  }
  clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

function updateClock2() {
  const now = new Date();
  const hoursSpan = document.querySelector('.js-hours');
  const minutesSpan = document.querySelector('.js-minutes');
  const secondsSpan = document.querySelector('.js-seconds');

  hoursSpan.innerHTML = now.getHours().toString().padStart(2, '0') + ':';
  minutesSpan.innerHTML = now.getMinutes().toString().padStart(2, '0') + ':';
  secondsSpan.innerHTML = now.getSeconds().toString().padStart(2, '0');
}

setInterval(updateClock2, 1000);
updateClock2();
updateClock();

// hacer botón con clearInterval para parar el reloj.
