// Part 1: Type Converter
var x = false;
console.log(Number(x));
console.log(String(x));
console.log(typeof(x));

var y = true
console.log(Number(y));
console.log(String(y));
console.log(typeof(y));

var cero = 0;
console.log(typeof(cero));
console.log(String(cero));
console.log(Boolean(cero));

var uno = 1;
console.log(typeof(uno));
console.log(String(uno));
console.log(Boolean(uno));

var ceroencadena= "0";
console.log(Number(ceroencadena));
console.log(typeof(ceroencadena));
console.log(Boolean(ceroencadena));

var ceroscadena = "000";
console.log(Number(ceroscadena));
console.log(typeof(ceroscadena));
console.log(Boolean(ceroscadena));

var unocadena = "1";
console.log(Number(unocadena));
console.log(typeof(unocadena));
console.log(Boolean(unocadena));

var notanumber = NaN;
console.log(typeof(notanumber));
console.log(String(notanumber));
console.log(Boolean(notanumber));

var infinito = Number.POSITIVE_INFINITY;
console.log(typeof(infinito));
console.log(String(infinito));
console.log(Boolean(infinito));

var neginfinito = Number.NEGATIVE_INFINITY;
console.log(typeof(neginfinito));
console.log(String(neginfinito));
console.log(Boolean(neginfinito));

var comillas = "";
console.log(Number(comillas));
console.log(typeof(comillas));
console.log(Boolean(comillas));

var veinte = "20";
console.log(Number(veinte));
console.log(typeof(veinte));
console.log(Boolean(veinte));

var twenty = "Twenty";
console.log(Number(twenty));
console.log(typeof(twenty));
console.log(Boolean(twenty));

var nulo = null;
console.log(Number(nulo));
console.log(String(nulo));
console.log(Boolean(nulo));

var indefinido;
console.log(Number(indefinido));
console.log(String(indefinido));
console.log(Boolean(indefinido));

//Part 2: New contender
var añonacimiento=prompt("Ingresa tu año de nacimiento");

var año=prompt("Ingresa un año futuro");

var edadfutura=año-parseInt(añonacimiento);

alert ("tu edad en el " + año + " sera: " + edadfutura);

//Create an information card
var nombre = prompt("Ingresa tu nombre");
var locacion = prompt("Ingresa tu locacion");
var hobby = prompt("Ingresa tu hobby");

alert("Hola, mi nombre es " + nombre + " . Yo vivo en " + locacion + " y me gusta " + hobby);