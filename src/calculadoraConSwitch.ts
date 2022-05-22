//entregable

function dibujarLinea() {
  let linea = "-";
  for (let index: number = 0; index <= 40; index++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("Ingrese un número"));
let numero2: number = Number(prompt("Ingrese otro número"));
let opcion: number = Number(
  prompt(
    "Ingrese 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir y cualquier tecla para finalizar"
  )
);
let result: number = 0;

switch (opcion) {
  case 1:
    result = numero1 + numero2;
    dibujarLinea();
    console.log("El resultado de la suma es ", result);
    dibujarLinea();
    break;
  case 2:
    result = numero1 - numero2;
    dibujarLinea();
    console.log("El resultado de la resta es ", result);
    dibujarLinea();
    break;
  case 3:
    result = numero1 * numero2;
    dibujarLinea();
    console.log("El resultado de la multiplicación es ", result);
    dibujarLinea();
    break;
  case 4:
    result = numero1 / numero2;
    dibujarLinea();
    console.log("El resultado de la división es ", result);
    dibujarLinea();
    break;
  default:
    console.log("Programa finalizado");
}
