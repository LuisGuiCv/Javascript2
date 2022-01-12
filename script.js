//Este es un comentario de una línea

/*Este es
un comentario
multilinea*/
/*
alert ("Hola Mundo");

console.log("Este es un mensaje para la consola");

var nombre= "Luis Guillermo";
var apellidos= "Cruz Vargas";

var edad=22;

alert("Mi nombre es: "+nombre);
console.log("Mi nombre es: "+nombre);

alert("Mi nombre es: "+nombre+" mis apellidos son: "+apellidos+" y mi edad es de: "+edad+" años");
console.log("Mi nombre es: "+nombre);

var num1=5;
var num2=7;
var resultado=num1+num2;

console.log("el resultado de la suma es "+resultado)


//Sintaxis básica de una función

function nombrefuncion (parámetros){
instrucciones;
}*/

//Declaración de función
/*
function saludar(){
    alert("Hola a todos");
}
saludar();

var Cantar = function(){
    alert("A mi me gusta cantar");
}

Cantar();

//funcion sin parametros

function sumar(){
    var num1=5;
    var num2=6;
    var suma=num1+num2;
    alert("la suma de la función sin parámetros es: "+suma);
}
sumar();
function restar(num1,num2,resta){
   var num1=6;
   var num2=8;
   var resta=num1-num2;
   alert("la resta de la función con parámetros es: "+resta);
}
restar();

function Cuadrado(cuadrado){
    var rescuadrado= cuadrado*cuadrado;
    alert("el cuadrado del número es: "+rescuadrado);
}

Cuadrado(4);

function Operaciones(num1,num2,num3,suma,resta,multi){
    var suma=num1+num2+num3;
    var resta=num1-num2-num3;
    var multi=num1*num2*num3;
    alert("la suma es: "+suma+" ,la resta es: "+resta+" ,la multiplicación es: "+multi);
 }
 Operaciones(5,6,7);*/

 //Function Prompter
/*
 function Prompter(){
     var respuesta=prompt("Buenos días, ¿Cuál es tu nombre?");
     alert("Es un gusto saludarte "+respuesta)
 }

 Prompter();

 function AreaCuadrado(){
     var l=prompt("Ingresa el lado del cuadrado: ");
     var r=l*l;
     alert("El área del cuadrado es "+r+ " porque el número que ingresaste es "+l);
 }

 AreaCuadrado();
*/
function confirmacion(){
    var pregunta= confirm("¿Deseas visitar Google.com y buscar fotos de perritos?");
    if (pregunta){
        alert("Te enviare rápidamente.");
        window.location="https:www.google.com";

    }
    else{
        alert("No hay problema,nos vemos luego.");
    }
}

function cambiarColor(nuevoColor){
    var elem= document.getElementById("parrafo");
    elem.style.color=nuevoColor;
}

function Accion (Tipo){
    var elem= document.getElementById("DivBotones");
    if(Tipo=="Ocultar"){
        elem.style.display = 'none';
    }else{
        elem.style.display='';
    }
}