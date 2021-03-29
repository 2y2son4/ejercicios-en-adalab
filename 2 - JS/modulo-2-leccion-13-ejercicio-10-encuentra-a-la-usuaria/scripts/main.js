'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const ticketA = users.find((pinName) => pinName.pin === 5232);

console.log(ticketA.name);

const ticketB = users.findIndex((password) => password.pin === 5232);

console.log(ticketB);

console.log(users);
const deletedUser = users.splice(ticketB, 1);

console.log(deletedUser);
console.log(users);
