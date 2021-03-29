"use strict";
const options = ['coche', 'viaje', 'crucero', 'llavero'];
const lotteryNumberInput = document.querySelector('#lotteryNumber');

function handleLotteryNumberChange(event) {
  const input = event.currentTarget;
  const selectedNumber = parseInt(input.value);
  const ind = selectedNumber - 1; // El índice empieza en 0
  const result = options[ind]; // Utilizamos una constante que contiene un número como valor
  console.log('Premio: ', result);
}

lotteryNumberInput.addEventListener('keyup', handleLotteryNumberChange);

for (let i = 0; i < 20; i++) {
  console.log('Me encantan los bucles 💪');
};

for (let i = 1; i < 11; i++) {
  console.log('Voy por la vuelta ' + i);
};

for (let acc = 0; acc < 20 ; acc += 2) {
  console.log('El resultado es ' + acc)
};