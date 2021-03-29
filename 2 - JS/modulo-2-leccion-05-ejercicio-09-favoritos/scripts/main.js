"use strict";

const teachersList = document.querySelector('.teachers');
// const oneTeacherElement = teachersList.querySelector('.teacher');

console.log(teachersList);

const changeClassHandler = function (event) {
    const selectedEvent = event.target;
    const liElement = selectedEvent.closest('.teacher');
    liElement.classList.toggle('.teacher--selected')

    const favoriteElement = liElement.querySelector('.favorite');
    //console.log(selectedEvent);
    
    if (favoriteElement.innerHTML === "Añadir" || selectedEvent.classList.toggle('teacher--selected')) {
        divElement.innerHTML = "Quitar";
    } else {
        divElement.innerHTML = "Añadir";
    }   

} 
console.log(changeClassHandler);

teachersList.addEventListener('click', changeClassHandler);
