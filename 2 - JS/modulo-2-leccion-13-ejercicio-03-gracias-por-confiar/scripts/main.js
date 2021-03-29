'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const greeting = function premiumOrNot(member) {
  member.isPremium
    ? console.log(`Bienvenida, ${member.name}. Gracias por confiar en nosotros.`)
    : console.log(`Holi, ${member.name}`);

  /*  if (member.isPremium) {
    console.log(`Bienvenida, ${member.name}. Gracias por confiar en nosotros.`);
  } else {
    console.log(`Holi, ${member.name}`);
  }*/
};

const greetingsForAll = users.map(greeting);

console.log(greetingsForAll);
