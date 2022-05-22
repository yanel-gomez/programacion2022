/*05/05 
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.
*/

function calculoPotencia() {
  if (exponente === 0) {
    resultado = 1;
  } else {
    resultado = base ** exponente;
  }
  console.log("El resultado es ", resultado);
}

let base: number = Number(prompt("Ingrese un número"));
let exponente: number = Number(
  prompt("¿A qué potencia desea elevar el número?")
);
let resultado: number = 0;

if (exponente >= 0) {
  calculoPotencia();
} else {
  console.log("Exponente inválido");
}
