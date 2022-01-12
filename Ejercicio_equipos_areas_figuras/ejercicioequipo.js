//Area Triangulo Con parametros
function areat(base, altura){
    var area = ((base * altura)/2);
    alert ("esta es la base del triangulo: " + area);
    }

areat (3, 5);  

//Area Cuadrado Sin Parametros
function arearec(){
    var l1 = 3;
    var l2 = 5;
    var res = (l1 * l2);

    alert ("El area del rectangulo es: " + res);
}
arearec();

//Area Circulo Con Parametros
function areacir(radio){
    var resultado = (Math.PI * radio * radio);
    alert ("El area de rectandulo es: " + resultado);
}
 
areacir(3);
