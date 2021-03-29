//Datos
//-input capítulos
//-span min
//-section resultado

//proceso:
// - querySelector para rescatar los elementos con los datos

const inputCapitulos = document.querySelector('.js-numCapitulos');
const spanMinutos = document.querySelector('.js-numMinutos');

const sectionResultado = document.querySelector(".js-resultado");


// - sacar los datos de los elementos en variables

const numeroCapitulos = parseInt(inputCapitulos.value); 
const numeroMinutos = parseInt(spanMinutos.innerHTML);
//los números los recoge como string, hay que hacerles el parseInt() o parseFloat();


// - multiplicación de min por capitulos

const resultadoMultiplicacion = numeroCapitulos * numeroMinutos;

// - mostrar el resultado en el HTML
sectionResultado.innerHTML = `Te hacen falta ${resultadoMultiplicacion} minutos para acabar la serie`;




'use strict'
const aPagar = 128;
const numComensales = 9;
const chupito = 2;

const everybodyElse = (aPagar - chupito) / numComensales ;
const ana = everybodyElse + chupito;

console.log(ana, everybodyElse);