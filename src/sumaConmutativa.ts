/* Suma conmutativa del 03/05 */
let numero1: number = Number(prompt("ingrese número 1"));
let numero2: number = Number(prompt("ingrese número 2"));
let suma, inicio, aux: number;
inicio = numero1;

if (numero1 > numero2) {
  aux = numero1;
  numero1 = numero2;
  numero2 = aux;
}
suma = 0;
for (let inicio: number = numero1; inicio <= numero2; inicio++) {
  suma = suma + inicio;
}
console.log("El resultado de la suma es", suma);
