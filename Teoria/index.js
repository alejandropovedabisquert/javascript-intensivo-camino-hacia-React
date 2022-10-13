console.log("Hola mundo soy un console log");
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