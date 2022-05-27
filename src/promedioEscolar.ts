/*Actividad (Promedio Escolar)
Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno 
(ingresado por el usuario).Luego de resolverlo, pensar en aprovechar métodos y discutir como 
representar la información*/

function ingresarDatosDeAlumnos() {
  for (let index: number = 0; index < numeroAlumnos; index++) {
    nombres[index] = prompt("Ingrese el nombre del alumno");
    nota1[index] = Number(prompt("Ingrese la nota del primer trimestre"));
    nota2[index] = Number(prompt("Ingrese la nota del segundo trimestre"));
    nota3[index] = Number(prompt("Ingrese la nota del tercer trimestre"));
  }
}

let numeroAlumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let nombres: string[] = new Array(numeroAlumnos);
let nota1: number[] = new Array(numeroAlumnos);
let nota2: number[] = new Array(numeroAlumnos);
let nota3: number[] = new Array(numeroAlumnos);

ingresarDatosDeAlumnos();

let nombreElegido: string = prompt(
  "Ingrese el nombre del alumno cuyo promedio desea conocer: "
);
let position: number = 0;
let match: boolean = false;
let promedioAnual: number = 0;
while (position < numeroAlumnos && !match) {
  if (nombres[position] === nombreElegido) {
    match = true;
    promedioAnual = (nota1[position] + nota2[position] + nota3[position]) / 3;
  }
  position++;
}

if (match) {
  console.log(
    "El/la alumno/a " +
      nombreElegido +
      " tiene un promedio anual de " +
      promedioAnual
  );
} else {
  console.log("Los datos ingresados son incorrectos. Intente nuevamente.");
}
