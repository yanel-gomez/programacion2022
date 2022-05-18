/*Crear un programa con una funcion que reciba 
por parametro su nombre y apellido y lo imprima 
por consola.
crear una funcion que reciba un valor numerico 
y devuelva true si es par o false si es impar
(con retorno)
*/

function parOImpar(numero: number): boolean {
  return numero % 2 === 0;
}

let numero: number = Number(prompt("Ingrese un número"));

if (parOImpar(numero)) {
    console.log("true");
} else {
  console.log("false");
}