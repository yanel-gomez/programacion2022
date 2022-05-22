/*Define el mayor 05/05*/
let numero1: number = Number(prompt("ingrese un número"));
let numero2: number = Number(prompt("ingrese otro número"));
let numero3: number = Number(prompt("ingrese otro número"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log("El mayor es", numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("El mayor es", numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log("El mayor es", numero3);
}
