/*console.log("Hola mundo soy un console log");
let variable=true;
console.log(variable);
const constante=5;
console.log(constante);
variable=false;
console.log(variable);
//constante=8;
console.log(constante);

let numero1=7;
let numero2=8;
let respuesta=numero1*numero2;
console.log("La respuesta es: "+respuesta);

let respuesta2=Math.pow(numero1,numero2) - (numero1/(numero2 + 45));
console.log("La respuesta 2 es: " + respuesta2);
let respuesta3= numero1**3;
console.log("La respuesta 3 es: " + respuesta3);
let respuesta4= numero1%3;
console.log("La respuesta 4 es: " + respuesta4);
let respuesta5= numero1==numero2;
console.log("La respuesta 5 es: " + respuesta5);
numero1="8";
let respuesta6= numero1===numero2;
console.log("La respuesta 6 es: " + respuesta6);
numero1=8;
let respuesta7= (numero1<=numero1) && numero1>6;
console.log("La respuesta 7 es: " + respuesta7);

let a=1;
a+=5;
a-=5;
console.log(a);

let valor=8;
if(valor==7){
    console.log("Si es 7");
}else{
    console.log("No es 7");
}


let contador=0;
while (contador<=10) {
    console.log(contador++);
}


let contador2=12;
for (let i = 0; i <= contador2; i++) {
        console.log(i);
}

let functionResult = "capuchino";
function cafetera(ingrediente1, ingrediente2){
    if (ingrediente1=="leche" && ingrediente2=="cafe") {
        return functionResult;
    }
}
let taza=cafetera("leche","cafe");
console.log(taza);*/

const txtn1=document.getElementById("n1");
const txtn2=document.getElementById("n2");
const respuesta=document.getElementById("respuesta");
const botonCalcular=document.getElementById("calcular");

botonCalcular.addEventListener("click", calcular);

function calcular(){
    const op1=parseFloat(txtn1.value);
    const op2=parseFloat(txtn2.value);
    let resp=op1+op2;

    respuesta.innerText=resp;
    respuesta.style="color:red";

}

const respArr=document.getElementById("respuestaArr");
const botonEjecutarArr=document.getElementById("ejecuta");
botonEjecutarArr.addEventListener("click", iniciar);

let datos= ["manzana", 2, false, "naranja"];

function iniciar(){
    //respArr.innerText=frutas[frutas.length-1]
    datos.forEach(function(item, index, array){
        respArr.innerText = array;
    })
}

async function obtenerData(){
    //const response= await fetch("https://api.github.com/repos/hadley/ggplot2/commits");
    //const json = await response.text();
    //console.log(JSON.parse(json));
    await fetch("https://api.github.com/repos/hadley/ggplot2/commits")
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(error=>console.log("Fallo",error));
}
obtenerData();
