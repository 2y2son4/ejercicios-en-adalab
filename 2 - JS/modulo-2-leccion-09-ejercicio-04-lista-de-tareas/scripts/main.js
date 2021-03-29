"use strict";
const tasks = [
	{ name: "Recoger setas en el campo.", completed: true },
	{ name: "Comprar pilas.", completed: true },
	{ name: "Poner una lavadora de blancos.", completed: true },
	{
		name: "Aprender cómo se realizan las peticiones al servidor en JavaScript.",
		completed: false,
	},
	{ name: "Aprender a colapsar y descolapsar movidas.", completed: false },
	{ name: "Recoger la ropa tendida.", completed: true },
	{ name: "Organizar las comidas de la semana.", completed: false },
];

const listElement = document.querySelector(".list");

const liElement = document.querySelector(".li-element");

const textElement = document.querySelector(".text");



let html = '';

for (let i = 0; i < tasks.length; i++) {
	// Tareas a), b).
	if (tasks[i].completed) {
		html += `<li class="li-element line"><input class="input" type="checkbox" id="cbox${i}" value="first_checkbox" checked ><label for="cbox${i}" class="label">${tasks[i].name}</label></li>`;
	} else {
		html += `<li class="li-element"><input class="input" type="checkbox" id="cbox${i}" value="first_checkbox"><label for="cbox${i}" class="label">${tasks[i].name}</label></li>`;
	}
}

listElement.innerHTML = html;


// Tarea c):
const liElements = document.querySelectorAll(".li-element");

for (let i = 0; i < liElements.length; i++) {
	liElements[i].querySelector(".input").addEventListener("change", function inputHandler() {
    liElements[i].classList.toggle("line");	
    updateSummary();
    //tasks[i].completed = !tasks[i].completed;
    if (tasks[i].completed) {
      tasks[i].completed = false;
    } else {
      tasks[i].completed = true;
    };
	});
}

// Tarea d):
function updateSummary() {
	
  const completedTasks = document.querySelectorAll('.line');

  textElement.innerHTML = `Tienes <span>${liElements.length}</span> tareas. <span>${completedTasks.length}</span> completadas y <span>${liElements.length - completedTasks.length}</span> por realizar.`
}

updateSummary();
