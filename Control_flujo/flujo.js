//Ejercicio 1: 
function businessHours(dayNumber, hourNumber){
    var dayNumber=parseInt(prompt("Coloca el dia de la semana 0-6"));
    if(dayNumber>=1 && dayNumber<=5){
        var hourNumber=parseInt(prompt("Introduce la hora del dia 0/24"));
        if(hourNumber>=9 && hourNumber<=18){
        
            alert("Estas en horario laboral");

        }else if((hourNumber>=0&&hourNumber<9)||(hourNumber>18&&hourNumber<24)){

            alert("No estas en horario laboral");          
        }
        else{
            alert("Numero de hora no valido");
        }
    }
    else if (dayNumber==0 || dayNumber==6){
        alert("No es dia laboral");
    }
    else {
        alert("Numero de dia no valido");
    }
}
//businessHours();
//Ejercicio 2
function week() {
    var getDayNumber = parseInt(prompt("Ingresa el dia en que empezó el año (0-6)"));
    var yearDayNumber = parseInt(prompt("Ingresa el dia del año(1-365)"));
    if (((getDayNumber >= 0 && getDayNumber <= 6) && (yearDayNumber > 0 && yearDayNumber <= 365))) {
        var residuo = yearDayNumber % 7;
        var dayofweek;
        if(getDayNumber==0){
                switch(residuo){
                    case 0:
                       return dayofweek=6;
                    break;
                    case 1:
                        return dayofweek=0;
                    break;
                    case 2:
                        return dayofweek=1;
                    break;
                    case 3:
                        return dayofweek=2;
                    break;
                    case 4:
                        return dayofweek=3;
                    break;
                    case 5:
                        return dayofweek=4;
                    break;
                    case 6:
                        return dayofweek=6;
                    break;
                };
        }else if(getDayNumber==1){
            switch(residuo){
                case 0:
                    return dayofweek=0;
                 break;
                 case 1:
                     return dayofweek=1;
                 break;
                 case 2:
                     return dayofweek=2;
                 break;
                 case 3:
                     return dayofweek=3;
                 break;
                 case 4:
                     return dayofweek=4;
                 break;
                 case 5:
                     return dayofweek=5;
                 break;
                 case 6:
                     return dayofweek=6;
                 break;
            };
        }else if(getDayNumber==2){
            switch(residuo){
                case 0:
                       return dayofweek=1;
                    break;
                    case 1:
                        return dayofweek=2;
                    break;
                    case 2:
                        return dayofweek=3;
                    break;
                    case 3:
                        return dayofweek=4;
                    break;
                    case 4:
                        return dayofweek=5;
                    break;
                    case 5:
                        return dayofweek=6;
                    break;
                    case 6:
                        return dayofweek=0;
                    break;
            };
        }else if(getDayNumber==3){
            switch(residuo){
                case 0:
                       return dayofweek=2;
                    break;
                    case 1:
                        return dayofweek=3;
                    break;
                    case 2:
                        return dayofweek=4;
                    break;
                    case 3:
                        return dayofweek=5;
                    break;
                    case 4:
                        return dayofweek=6;
                    break;
                    case 5:
                        return dayofweek=0;
                    break;
                    case 6:
                        return dayofweek=1;
                    break;
            };
        }
        else if(getDayNumber==4){
            switch(residuo){
                case 0:
                       return dayofweek=3;
                    break;
                    case 1:
                        return dayofweek=4;
                    break;
                    case 2:
                        return dayofweek=5;
                    break;
                    case 3:
                        return dayofweek=6;
                    break;
                    case 4:
                        return dayofweek=0;
                    break;
                    case 5:
                        return dayofweek=1;
                    break;
                    case 6:
                        return dayofweek=2;
                    break;
            };
        }
        else if(getDayNumber==5){
            switch(residuo){
                case 0:
                       return dayofweek=4;
                    break;
                    case 1:
                        return dayofweek=5;
                    break;
                    case 2:
                        return dayofweek=6;
                    break;
                    case 3:
                        return dayofweek=0;
                    break;
                    case 4:
                        return dayofweek=1;
                    break;
                    case 5:
                        return dayofweek=2;
                    break;
                    case 6:
                        return dayofweek=3;
                    break;
            };
        }
        else if(getDayNumber==6){
            switch(residuo){
                case 0:
                       return dayofweek=5;
                    break;
                    case 1:
                        return dayofweek=6;
                    break;
                    case 2:
                        return dayofweek=0;
                    break;
                    case 3:
                        return dayofweek=1;
                    break;
                    case 4:
                        return dayofweek=2;
                    break;
                    case 5:
                        return dayofweek=3;
                    break;
                    case 6:
                        return dayofweek=4;
                    break;
            };
        }
    } else { alert("no esta dentro del rango"); }
}

var a=week();
businessHour2(a);

//Ejercicio 3
function businessHour2(a){
    if(a>=1 && a<=5){
        var hourNumber=parseInt(prompt("Introduce la hora del dia 0-23"));
        if(hourNumber>=9 && hourNumber<=18){
        
            alert("Estas en horario laboral");

        }else if((hourNumber>=0&&hourNumber<9)||(hourNumber>18&&hourNumber<24)){

            alert("No estas en horario laboral");          
        }
        else{
            alert("Numero de hora no valido");
        }
    }
    else if (a==0 || a==6){
        alert("No es dia laboral");
    }
    else {
        alert("Numero de dia no valido");
    }
}