/*
10- Realiza un script que pida número de filas y columnas 
y escriba una tabla. Dentro de cada una de las celdas deberá
 escribirse un número consecutivo en orden descendente. S
 i, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

*/ 
const pantalla = document.getElementById("pantalla");
const filas = parseInt(prompt("ingrese un numero de filas"));
const columnas = parseInt(prompt("ingrese un numero de columnas"));
let celda =filas * columnas

let tabla = `<table class="table table-striped"><tbody>`;

for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  tabla += `<tr>`
   
  for(let indiceColumnas =1;indiceColumnas <= columnas ;indiceColumnas++){
  tabla += `<td>${celda--}</td>`;
}
  tabla += `</tr>`;

}
tabla += `</tbody></table>`;

pantalla.innerHTML = tabla;