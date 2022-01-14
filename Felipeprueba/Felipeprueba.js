var carreritas=["Lucía","Roberto","María","Jesús","Andrea","José"];

carreritas.splice(2,0,'Andrea');
carreritas.splice(5,1);
console.log(carreritas);

carreritas.splice(1,0,'Cristobal','Fernanda','Armando');

console.log(carreritas);

carreritas.unshift('Federico');

console.log(carreritas);