/*
Realiza un script que pida una cadena de texto 
y la devuelva al revés. Es decir, si tecleo 
“hola que tal” deberá mostrar “lat euq aloh”.
*/
let texto = prompt("Ingrese un texto:");
let invertido = "";

for (let i = texto.length - 1; i >= 0; i--) { //texto.length - 1,empieza a recorrer desde el ultimo caracter
    invertido += texto[i];
}

alert("Texto invertido: " + invertido);