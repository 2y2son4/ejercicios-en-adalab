'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const greeting = (member) => 'Holi,' + member; //`Holi, ${member}`; o 'Holi,' + ' ' + member;
const greetingsForAll = names.map(greeting);

console.log(greetingsForAll);
