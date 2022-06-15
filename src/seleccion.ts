function buscarTradicional (valorBuscado:number, a:number[], lim:number) : number {
  let i:number;
  let posicion:number = -1;
  i = 0;
  while (i < lim - 1 && posicion == -1) {
  if (a[i] == valorBuscado) {
  posicion = i;
  }
  i++;
  }
  return posicion;
  }

function cargarClientes(clientes:string[], facturacion:number[], cantidad:number) {
   let cliente:string;
   let fact:number;
   let numCliente:number;
   for (numCliente=0; numCliente<cantidad; numCliente++) {
   cliente = prompt(`Cliente ${numCliente + 1}: `);
   fact = Number(prompt(`Facturacion ${numCliente + 1}: `);
   clientes[numCliente] = cliente;
   facturacion[numCliente] = fact;
   }
   }

function imprimirCliente (posicion:number, buscado:string, clientes:string[],
    facturacion:number[]) {
    if (posicion == -1) {
    console.log (`El cliente ${buscado} no pudo ser encontrado`);
    } else {
    console.log (`El cliente ${clientes[posicion]} con facturación
    ${facturacion[posicion]} está en la posición ${posicion+1}`);
    }
    }

function escribirEnUnaLinea(arreglo:number[], cantidad:number) {
      let i:number;
      let vector:string = "" ;
      for (i = 0 ; i<cantidad; i++) {
      vector += `${arreglo[i]} `;
      }
      console.log (vector);
      }
    
  //Algoritmo Busqueda
let cantidad : number = 10;
let posicion : number;
let clientes : string[] = new Array(cantidad);
let facturacion : number[] = new Array(cantidad);
let buscado : string = "Ale";
//Busqueda tradicional
console.log("Busqueda tradicional");
cargarClientes(clientes, facturacion, cantidad);
escribirEnUnaLinea(clientes, facturacion, cantidad);
posicion = buscarTradicional(buscado, clientes, cantidad);
imprimirCliente(posicion, buscado, clientes, facturacion);
