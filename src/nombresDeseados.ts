/*•Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee

•Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas*/

let longitud: number = Number(prompt("longitud del arreglo: "));
let arreglo_Nombres: string[] = new Array(longitud);

for (let indice: number = 0; indice < longitud; indice++) {
  arreglo_Nombres[indice] = prompt("ingrese nombre: ");
}

for (let indice: number = 0; indice < longitud; indice++) {
  console.log(arreglo_Nombres[indice]);
}
