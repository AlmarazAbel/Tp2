/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456

*/
let numero = prompt("Ingrese un número (máximo 50)");

if (isNaN(numero) || numero.trim() === "") {
    alert("Debe ingresar un número válido");
} else {

    numero = parseInt(numero);

    if (numero > 50) {
        alert("El número no puede ser mayor a 50");
    } else {

        for (let i = 1; i <= numero; i++) {

            for (let j = 1; j <= i; j++) {
                document.write(j);
            }

            document.write("<br>");
        }

    }
}