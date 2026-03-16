/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() 

*/ 
let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = Number(prompt("Ingrese la edad de " + nombre1));

let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = Number(prompt("Ingrese la edad de " + nombre2));

let nombre3 = prompt("Ingrese el nombre de la tercera persona:");
let edad3 = Number(prompt("Ingrese la edad de " + nombre3));

let mayor = Math.max(edad1, edad2, edad3);// busca el mayo de las 3 edades

if (mayor === edad1) {
    alert("El mayor es: " + nombre1);
} else if (mayor === edad2) {
    alert("El mayor es: " + nombre2);
} else {
    alert("El mayor es: " + nombre3);
}