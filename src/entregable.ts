let precioDelProducto: number = Number(prompt("ingresa el precio"));
let porcentajeDeDescuento: number = 0.1;
let descuento: number = precioDelProducto * porcentajeDeDescuento;
let precioFinal: number = precioDelProducto - descuento;
console.log(precioFinal);
