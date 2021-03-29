"use strict";

const container = document.querySelector(".bg");

function changeColor () {
    let y = window.scrollY;  

    container.classList.remove("bg", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7");

    if (y === 0 && y < 1000) { 
        container.classList.add("bg");
    } else if (y > 1000 && y < 2000) { 
        container.classList.add("bg2");
    } else if (y > 2000 && y < 3000) {
        container.classList.add("bg3");
    } else if (y > 3000 && y < 4000) {
        container.classList.add("bg4");
    }else if (y > 4000 && y < 5000) {
        container.classList.add("bg5");
    }else if (y > 5000 && y < 6000) {
        container.classList.add("bg6");
    } else {      
        container.classList.add("bg7");    }
}
window.addEventListener('scroll', changeColor);

