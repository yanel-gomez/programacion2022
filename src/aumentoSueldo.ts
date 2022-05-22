//entregable
let sueldo: number = Number(prompt("Ingresar sueldo"));
let aumento: number;

switch (true) {
  case sueldo > 0 && sueldo <= 15000:
    aumento = sueldo * 0.2;
    console.log("Su sueldo aumenta $", aumento);
    break;
  case sueldo > 15000 && sueldo <= 20000:
    aumento = sueldo * 0.1;
    console.log("Su sueldo aumenta $", aumento);
    break;
  case sueldo > 20000 && sueldo <= 25000:
    aumento = sueldo * 0.05;
    console.log("Su sueldo aumenta $", aumento);
    break;
  default:
    console.log("Su sueldo no recibe aumento");
    break;
}
