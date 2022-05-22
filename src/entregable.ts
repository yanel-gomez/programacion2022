/*22/04  Ejercicio entregable
Actividad
Implemente un algoritmo que calcule y muestre por 
pantalla el precio final de un producto después 
de aplicarle un descuento
El precio inicial lo ingresa el usuario usando prompt
El descuento a aplicar es del 10%. Recuerde que puede 
obtener el 10% de un valor multiplicado por 0,1
El descuento debe ser guardados en una variable 
(no ingresados por teclado)*/

let precioDelProducto: number = Number(prompt("ingresa el precio"));
let porcentajeDeDescuento: number = 0.1;
let descuento: number = precioDelProducto * porcentajeDeDescuento;
let precioFinal: number = precioDelProducto - descuento;
console.log(precioFinal);
