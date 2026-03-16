//3- Realiza un script que pida cadenas de texto  hasta que 
// se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las 
// cadenas concatenadas con un guión -.
//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let resultado = "";
let continuar = true;

while (continuar) {
    let texto = prompt("Ingrese un texto:");

    if (texto !== null) {
        if (resultado === "") {
            resultado = texto;
        } else {
            resultado = resultado + "-" + texto;
        }
    }

    continuar = confirm("¿Desea ingresar otro texto?");
}

alert("Cadenas concatenadas: " + resultado);