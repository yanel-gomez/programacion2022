/**Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.*/
//Math.floor(Math.random()*100)

function azar(): number {
  return Math.floor(Math.random() * 100);
}

let arreglo: number = new Array(10);

for (let indice: number = 0; indice < 10; indice++) {
  arreglo[indice] = azar();
}

for (let indice: number = 0; indice < 10; indice++) {
  console.log(arreglo[indice]);
}
