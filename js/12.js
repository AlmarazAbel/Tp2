/*12- Realiza un script que genere un número aleatorio entre 1 y 99

*/
let numero
const minCeiled = Math.ceil(1);

const maxFloored = Math.floor(99);
console.log(Math.random())
console.log( numero=(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)));
alert("Número aleatorio: " + numero);