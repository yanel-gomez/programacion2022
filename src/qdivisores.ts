/*Actividad
Implemente un método llamado cantidadDeDivisores
que reciba un número entero y devuelva la cantidad 
de divisores. Por ejemplo, para el número 16, sus 
divisores son 1, 2, 4, 8, 16, por lo que la respuesta 
debería ser 5.Re-utilice el método esMultiplo 
implementado para el ejercicio anterior
*/
function esMultiplo(numero1: number, numero2: number): boolean {
  return numero2 % numero1 === 0;
}

function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor < numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}

let numero: number = Number(prompt("Ingrese un número"));
let qDivisores: number = cantidadDeDivisores(numero);
console.log("El número", numero, "tiene", qDivisores, "divisores.");
