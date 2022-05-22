/* 02/05*/
let contador: number = 1;
let claveUsuario: string;

while (contador <= 3 && claveUsuario !== "eureka") {
  claveUsuario = prompt("ingrese clave");
  contador++;
}
if (claveUsuario === "eureka") {
  console.log("salir del sistema");
} else {
  console.log("se ha quedado sin intentos");
}
