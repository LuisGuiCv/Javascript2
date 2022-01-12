//Sin parámetros

function triangulo(){
    var bt=5;
    var ht=6;
    var area=(bt*ht)/2;
    alert("el área del triángulo sin parámetros es: "+area);
}

function circulo(){
    var r=5;
    var areac=Math.PI*r*r;
    alert("el área del circulo sin parámetros es: "+areac);
}
function rectangulo(){
    var b=5;
    var h=6;
    var arearec=b*h;
    alert("el área del rectangulo sin parámetros es: "+arearec);
}

triangulo();
circulo();
rectangulo();


function Triangulo(bt,ht){
    var area=(bt*ht)/2;
    alert("el área del triángulo con parámetros  es: "+area);
}
function Circulo(r){
    var areac=Math.PI*r*r;
    alert("el área del circulo con parámetros es: "+areac);
}

function Rectangulo(b,h){
    var arearec=b*h;
    alert("el área del rectangulo con parámetros es: "+arearec);
}

Triangulo (3,5);
Circulo (3);
Rectangulo (3,5);