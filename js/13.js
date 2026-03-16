/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/
let texto = prompt("Ingrese un texto:");

if (texto !== null) {
    let mayusculas = texto.toUpperCase();
    alert("Texto en mayúsculas: " + mayusculas);
}