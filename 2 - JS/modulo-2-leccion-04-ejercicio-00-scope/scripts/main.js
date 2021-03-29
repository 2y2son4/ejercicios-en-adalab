"use strict";

// Usamos una variable de ámbito global

const secretLetter = 'y';
function mySecretLetter() {
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "y"
console.log(secretLetter); // devuelve "y"

// modificamos una variable de ámbito global
let secretLetter2 = 'y';
function mySecretLetter2() {
  secretLetter2 = 'x';
  return secretLetter2;
}
console.log(mySecretLetter2()); // devuelve "x"
console.log(secretLetter2); // devuelve "x"

// Usamos una variable de ámbito local que se llama igual que la global
const secretLetter3 = 'y';
function mySecretLetter3() {
  const secretLetter3 = 'x';
  return secretLetter3;
}
console.log(mySecretLetter3()); // devuelve "x"
console.log(secretLetter3); // devuelve "y"

// intentamos usar una variable local fuera de su ámbito
function mySecretLetter4() {
    const secretLetter4 = 'x';
    return secretLetter4;
  }
  console.log(mySecretLetter4()); // devuelve "x"
  console.log(secretLetter4); // da un error porque la variable solo está definida dentro del bloque de la función