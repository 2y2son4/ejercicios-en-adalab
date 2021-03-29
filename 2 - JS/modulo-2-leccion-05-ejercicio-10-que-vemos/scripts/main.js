'use strict';
const btnElement = document.querySelector('.btn');
const listElement = document.querySelector('.list');
const paragraphElement = document.querySelector('.paragraph');

function btnHandler() {
  const rhps = 'The Rocky Horror Picture Show.';
  const hairspray = 'Hairspray (1988).';
  const hairspray2 = 'Hairspray (2007).';
  const hedwig = 'Hedwig and the Angry Inch.';
  const hamilton = 'Hamilton.';

  let films = `<li class="li-element">${rhps}</li> `;
  films += `<li class="li-element">${hairspray}</li> `;
  films += `<li class="li-element">${hairspray2}</li> `;
  films += `<li class="li-element">${hedwig}</li> `;
  films += `<li class="li-element">${hamilton}</li>`;
  listElement.innerHTML = films;
}

btnElement.addEventListener('click', btnHandler);

function ulHandler(ev) {
  const currentTargetList = ev.target;
  console.log(currentTargetList.innerHTML);

  paragraphElement.innerHTML = currentTargetList.innerHTML;
}

listElement.addEventListener('click', ulHandler);
