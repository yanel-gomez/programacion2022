function esMultiplo(numero1: number, numero2: number): boolean {
  return numero2 % numero1 === 0;
}

let numero1: number = Number(prompt("Ingrese un número"));
let numero2: number = Number(prompt("Ingrese un múltiplo"));

if (esMultiplo(numero1, numero2)) {
  console.log(numero2, "es múltiplo de", numero1);
} else {
  console.log(numero2, "no es múltiplo de", numero1);
}
