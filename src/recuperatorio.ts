/*Hacer un programa que simule la compra que hace un cliente en un
supermercado. El cliente va tener que ingresar por teclado la
CANTIDAD de productos que va a llevar, los PRODUCTOS que va
a comprar, el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
Finalizada la compra, el programa va a mostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led*/


//función que carga los nombres de los productos
function cargarProductos(arrayProductos: string[]): void{
  for(let i: number = 0; i < arrayProductos.length; i++) {
    arrayProductos[i] = prompt("Ingrese producto en el carrito");
  }
}
  
//función que carga el precio de cada producto
function cargarPrecioProductos(arrayPrecioProductos:number[]):void{
  for(let i:number=0;i<arrayPrecioProductos.length;i++){
    let precio:number=Number(prompt("Ingrese precio del producto"+productos[i]));
      while(precio<=0)
      precio=Number(prompt("Ingrese precio del producto"+productos[i]));
      arrayPrecioProductos[i] = precio;
  }
}
  
//función que carga la cantidad de un mismo producto
function cargarCantidadProductos(arrayCantidadProductos:number[]):void{
  for(let i:number=0; i<arrayCantidadProductos.length;i++){
    let q:number = Number(prompt("Ingrese cuántas unidades de "+productos[i] + "desea comprar."));
      while(q<=0){
      q= Number(prompt("Ingrese cantidad de "+productos[i] + "en el carrito"));
  }
    arrayCantidadProductos[i]=q;
  }
}
  
//función que calcula el precio total de la compra 
function calcularPrecioTotal(arregloPrecios:number[],arregloQ:number[]):number{
  let total:number=0;
  for(let i:number=0;i<arregloPrecios.length;i++){
    total=total+Number(arregloPrecios[i])*Number(arregloQ[i]);
  }
    return total;
}
  
//función que muestra el detalle de la compra  
function mostrarDetalleCompra():void{
  console.log("El detalle de su compra es: ");
  for(let i:number=0;i<cantidad;i++){
    console.log(qProducto[i] + " unidades de "+productos[i]+"a un precio unitario de $"+ precioUnitario[i]+", en total $"+ qProducto[i]*precioUnitario[i]);
}

//carga la cantidad de productos diferentes
let cantidad:number=Number(prompt("Ingrese la cantidad de productos"));
//arreglo para los diferentes productos
let productos:string[]= new Array (cantidad);
//arreglo para los precios unitarios de cada producto
let precioUnitario:number[]= new Array(cantidad);
//cantidad de un mismo producto
let qProducto:number[]= new Array(cantidad);
//precio total de la compra
let compraTotal: number = 0;
  
  
cargarProductos(productos);
cargarPrecioProductos(precioUnitario);
cargarCantidadProductos(qProducto);
compraTotal=calcularPrecioTotal(precioUnitario,qProducto);
mostrarDetalleCompra();
  
if(compraTotal<1000){
mostrarDetalleCompra();
  console.log("El total de su compra es de $"+compraTotal+". ¡Muchas gracias por elegirnos!");
  }else if(compraTotal>3000){
  mostrarDetalleCompra();
    console.log("El total de su compra es de $"+compraTotal+". Con su compra participa del sorteo de un 0km. ¡Mucha suerte!");
    }else if(compraTotal>2000){
    mostrarDetalleCompra();
      console.log("El total de su compra es de $"+compraTotal+". Con su compra participa del sorteo de una moto 0km. ¡Mucha suerte!");
      }else if(compraTotal>1000){
      mostrarDetalleCompra();
        console.log("El total de su compra es de $"+compraTotal+". Con su compra participa del sorteo de un TV LED. ¡Mucha suerte!");
        }