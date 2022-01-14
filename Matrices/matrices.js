/*var cars=["Saab","Volvo","BMW"];

var cars1=["Saab","Volvo","BMW"];

var cars2=new Array("Saab","Volvo","BMW");

console.log(cars);
console.log(cars1);
console.log(cars2);

console.log("Mis dos marcas favotitas de carros son: "+cars[0],cars2[2]);
*/
/*
var equipo = ["Luis", "Miryam", "Lupita", "Ernesto Diaz", "Ernesto Alonso", "Arturo", "Fernando", "Ulises"];

function agrega_final() {
    equipo.push("Itachi");
}

function elimina_final() {
    equipo.pop();
}

function agrega_inicio() {
    equipo.unshift("Kisame");
}

function elimina_principio() {
    equipo.shift();
}

elimina_final();
console.log(equipo);

agrega_final();
console.log(equipo);

elimina_principio();
console.log(equipo);

agrega_inicio();
console.log(equipo);
*/
/*
let frutas=["Manzana","Banana","Fresa"];

console.log(frutas);

frutas.forEach(function(element,index,array){
    console.log(element,index,array);
});


let pos=frutas.indexOf("Banana");


console.log(pos);*/

var akatsuki = [];

akatsuki.push("Luis", "Miryam", "Lupita", "Ernesto Diaz", "Ernesto Alonso", "Arturo", "Fernando", "Ulises");


// ["Manzana", "Banana", "Fresa"]
/*
let frutas=["Manzana","Banana","Fresa"];

let pos=1;
let elementoEliminado = frutas.splice(pos, 1)
//["Manzana", "Fresa"]
*/
/*
let kagebunshin= akatsuki.slice();


console.log(kagebunshin);

console.log(akatsuki.length);

console.log(Object.keys(akatsuki));

console.log(akatsuki.length);

akatsuki.length=10;

console.log(akatsuki);

console.log(akatsuki.length);

akatsuki.length=3;

console.log(akatsuki);

console.log(akatsuki.length);

*/
/*
var miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; 

function longitud(miAlfabeto){
console.log(miAlfabeto.length);
}

longitud(miAlfabeto);

var planetas=["Jupiter","Plutón","Mercurio","Venus","Saturno"];

planetas.forEach(function (elemento, indice, array) {
    console.log(elemento,indice,array);
});

var myArr = [ 1, 2, 'Uno', true];

myArr.forEach(function (elemento, indice, array) {
    console.log(elemento,indice,array);
});
*/
/*
var elementos=["Carbono","Oxígeno","Hierro"];

var simbolo=["C","O","Fe"];

var num_atomico=[6,8,26];

var tabla_per=[elementos,simbolo,num_atomico];

console.log(tabla_per);
*/
/*
var tabla_per=[["Carbono","Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]];

//console.log(tabla_per[0][1]);

console.log(`El ${tabla_per[0][0]} tiene como simbolo la letra ${tabla_per[1][0]} y su número atómico es ${tabla_per[2][0]}
`);

var tabla_per=[[["Sofía","Aguilar"],"Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]];
*/

const armando = [[["Manzana","Piña","Sandía"],["Jitomate","Lechuga"],["Gryffindor","Hufflepuff","Slytheryn","Ravenclaw"],["Lentes"]],["Cubone","Rayquaza","Charizard"],[["Sonriente"],["Felíz"],["Triste"],["Sonrojado"],["Entusiasmado"],["Juguetón"]],["Vegetitta","Kokun"]]

console.log(`El ${armando[0][1][0]} color ${armando[1][2]} se ve ${armando[2][0]}  por que vio a ${armando[3][0]}`
);




