/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let texto = prompt("Ingrese un texto:");
let contador = 0;

texto = texto.toLowerCase();// pasa el texto a minuscula

for (let i = 0; i < texto.length; i++) { //recorro el string
    if (
        texto[i] === "a" ||
        texto[i] === "e" ||
        texto[i] === "i" ||
        texto[i] === "o" ||
        texto[i] === "u"
    ) {
        contador++;// va contando la cantidad de vocales
    }
}

alert("El texto tiene " + contador + " vocales");