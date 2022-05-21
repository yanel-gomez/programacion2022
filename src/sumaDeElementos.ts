/*•Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario*/

function sumar(): number {
  let suma: number = 0;
  for (let indice: number = 0; indice < longitud; indice++) {
    suma = suma + arregloNumeros[indice];
  }
  return suma;
}

let longitud: number = Number(prompt("longitud del arreglo: "));
let arregloNumeros: number[] = new Array(longitud);

for (let indice: number = 0; indice < longitud; indice++) {
  arregloNumeros[indice] = Number(prompt("ingrese numero: "));
}

console.log(sumar());
