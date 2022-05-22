/*Actividad (Sumar dos Arreglos) 23/05/22
Sumar los elementos de cada una de las posiciones 
de dos arreglos y guardar el resultado en otro 
arreglo. El arreglo tiene dimensión 6 y los números 
de los dos vectores los carga el usuario.
Ejemplo:
v1 =        1, 3, 7, 9, 9, 5 
v2 =        6, 9, 2, 5, 9, 4
vSuma =    7, 12, 9, 14, 18, 9*/
function ingresarPrimerArreglo() {
  for (let indice: number = 0; indice < 6; indice++) {
    v1[indice] = Number(prompt("Ingrese número del primer vector: "));
  }
}

function ingresarSegundoArreglo() {
  for (let indice: number = 0; indice < 6; indice++) {
    v2[indice] = Number(prompt("Ingrese número del segundo vector: "));
  }
}

function mostrarSuma() {
  for (let indice: number = 0; indice < 6; indice++) {
    vSuma[indice] = v1[indice] + v2[indice];
    console.log(vSuma[indice]);
  }
}

let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);

ingresarPrimerArreglo();
ingresarSegundoArreglo();
mostrarSuma();
