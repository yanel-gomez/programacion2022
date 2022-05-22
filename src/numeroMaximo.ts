let num = Number(prompt("Ingrese un número"));
let numPositivos: number = 0;
let porcentaje: number = 0;
let total: number = 0;

while (num !== 0) {
  if (num > 0) {
    numPositivos++;
  }
  total++;
  num = Number(prompt("Ingrese un número"));
}
if (total > 0) {
  porcentaje = (numPositivos * 100) / total;
  console.log(
    "Hay",
    numPositivos,
    " números positivos y representan el",
    porcentaje,
    " % del total."
  );
}
