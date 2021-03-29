'use strict';
const numbers = [1, 2, 3];

function contentList() {
  for (let i = 0; i < numbers.length; i++) {
    const newLi = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
    newLi.appendChild(newContent);
    const list = document.querySelector('ul');
    list.appendChild(newLi);
  }
}
contentList();
