//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un 
// mensaje que ya puede conducir, 
// si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad = prompt("Ingrese su edad:");

//edad.trim() === "" elimina los espacios en blanco al inicio y al final de un texto.
//isNaN() → verifica si lo ingresado no es un número.

if (isNaN(edad) || edad.trim() === "") {
    alert("La edad ingresada no es un número válido.");
} else {
    edad = Number(edad);

    if (edad >= 18) {
        alert("Ya puede conducir.");
    } else {
        alert("Es menor de 18 años, no puede conducir.");
    }
}