function dibujarLinea() {
  let linea: string = "-";
  for (let indice: number = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("Ingrese un número"));
let numero2: number = Number(prompt("Ingrese otro número"));
let resultado: number = 0;

let opcion: number = Number(
  prompt("Ingrese 1 para sumar, 2 para restar y otra tecla para finalizar")
);

if (opcion === 1) {
  resultado = numero1 + numero2;
  dibujarLinea();
  console.log("El resultado de la operación es ", resultado);
  dibujarLinea();
} else if (opcion === 2) {
  resultado = numero1 - numero2;
  dibujarLinea();
  console.log("El resultado de la operación es ", resultado);
  dibujarLinea();
} else {
  dibujarLinea();
  console.log("Opción inválida");
  dibujarLinea();
}
