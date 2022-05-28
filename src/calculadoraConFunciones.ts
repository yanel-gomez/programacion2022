function obtener_suma(n1: number, n2: number): number {
  return n1 + n2;
}

function obtener_resta(n1: number, n2: number): number {
  return n1 - n2;
}

function obtener_div(n1: number, n2: number): number {
  return n1 / n2;
}

function obtener_mult(n1: number, n2: number): number {
  return n1 * n2;
}

function calculador(operacion: string, n1: number, n2: number): number {
  let resultado: number;

  switch (operacion) {
    case "+":
      resultado = obtener_suma(n1, n2);
      break;
    case "-":
      resultado = obtener_resta(n1, n2);
      break;
    case "/":
      resultado = obtener_div(n1, n2);
      break;
    case "*":
      resultado = obtener_mult(n1, n2);
      break;
    default:
      resultado = -1;
      break;
  }
  return resultado;
}

let operacion: string = prompt("Ingrese un símbolo");
let numero1: number = Number(prompt("Ingrese un número"));
let numero2: number = Number(prompt("ingrese otro número"));

console.log(calculador(operacion, numero1, numero2));
