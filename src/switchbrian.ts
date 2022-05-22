//switchbrian 05/05

let numero1:number=Number(prompt("Ingrese un número"));
let par: boolean=true;
if (numero1 % 2 === 0){
  par=true;
} else{
  par=false
}

switch par{
  case true:
  if(numero1===0){
    console.log("Este número es 0")
  }
  console.log("Este número es par")
    break;
  case false:
    console.log("Este número es impar");
    break;
  }
