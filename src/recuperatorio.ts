//función que carga los nombres de los productos
function cargarProductos(arrayProducto:string[]):void{
  for(let i:number=0;i<arrayProducto.length;i++){
  arrayProducto[i] = prompt("Ingrese producto"+ (i+1) +"en el carrito");
  }
  }
  
//función que carga el precio de cada producto
function cargarPrecioProductos(arrayPrecioProductos:number[]):void{
for(let i:number=0;i<arrayPrecioProductos.length;i++){
let precio:number=Number(prompt("ingrese precio del producto"+productos[i]));
while(precio<=0)
precio=Number(prompt("ingrese precio del producto"+productos[i]));
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
console.log(cantidadProducto[i] + " unidades de "+productos[i]+"a un precio unitario de $"+ precioUnitario[i]+", en total $"+ cantidadProducto[i]*precioUnitario[i]);
}
  
//carga la cantidad de productos diferentes
let cantidad:number=Number(prompt("Ingrese la cantidad de productos"));
//arreglo para los diferentes productos
let productos:string[]= new Array (cantidad);
//arreglo para los precios unitarios de cada producto
let precioUnitario:number[]= new Array(cantidad);
//cantidad de un mismo producto
let cantidadProducto:number[]=(cantidad);
//precio total de la compra
let compraTotal: number = 0;
  
  
cargarProductos(productos);
cargarPrecioProductos(precioUnitario);
cargarCantidadProductos(cantidadProducto);
compraTotal=calcularPrecioTotal(precioUnitario,cantidadProducto);
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