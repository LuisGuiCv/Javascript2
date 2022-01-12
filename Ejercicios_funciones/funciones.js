//Ejercicio 1




function costo(transaccion,tarifa,impuesto){
    var transaccion=parseInt(prompt("¿Cuantas transacciones hiciste?"));
    var montotal=parseInt(prompt("¿Cuál es el monto total?"));
    var tarifa=transaccion*3;
    var impuesto=tarifa*0.01;
    var total=montotal+tarifa+impuesto;
    alert("el costo total es: "+total);
};



function nombres(){
    var y = new Date().getFullYear();
    var nombre1=prompt("Ingresa el primer nombre");
    var año1=parseInt(prompt("Ingresa tu año de nacimiento"));
    var edad1= y-año1;
    var nombre2=prompt("Ingresa el segundo nombre");
    var año2=parseInt(prompt("Ingresa tu año de nacimiento"));
    var edad2= y-año2;
    var nombre3=prompt("Ingresa el tercer nombre");
    var año3=parseInt(prompt("Ingresa tu año de nacimiento"));
    var edad3= y-año3;
    console.log("Welcome: "+nombre1+" your age is: "+edad1+"."+" Welcome: "+nombre2+" your age is: "+edad2+"."+" Welcome: "+nombre3+" your age is: "+edad3+".");
};


function grade(){
    var grade=parseInt(prompt("Ingresa la nota: "));
    if(grade>=5&&grade<=8){
       alert(true);
    }else if(grade>8&&grade<11){
    
      alert("Excellent");
    }else if(grade==11){
        alert("Perfect");
        
      }
    else{
         alert(false); 
    }
}
grade();

