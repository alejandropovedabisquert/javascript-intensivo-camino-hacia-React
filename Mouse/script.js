const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");
const texto = document.querySelector(".texto");

let cursorPos={x:0, y:0};
let windowWidth=window.innerWidth;
let windowHeight=window.innerHeight;

function definirTamaVentana(){
    windowWidth=window.innerWidth;
    windowHeight=window.innerHeight;
}
function mouseMove(e){
    cursorPos={x:e.clientX, y:e.clientY};
    seguir();
    //console.log(cursorPos);
}
function touchMove(e){
    cursorPos={x:e.targetTouches[0].offsetX, y:e.targetTouches[0].offsetY};
    console.log(cursorPos)
    seguir();
}
const seguirCursor=(element, xRelacion, yRelacion)=>{
    const elOffset = element.getBoundingClientRect();
    const centerX = elOffset.x + elOffset.width/2;
    //texto.innerText=centerX;
    const centerY = elOffset.y + elOffset.height/2;
    //texto.innerText=centerY;
    const distanceLeft = Math.round(((cursorPos.x - centerX)*100)/window.innerWidth);
    //texto.innerText=distanceLeft;
    const distanceTop = Math.round(((cursorPos.y - centerY)*100)/window.innerHeight);
    //texto.innerText=distanceTop;
    element.style.transform=`translate(${distanceLeft/xRelacion}px, ${distanceTop/yRelacion}px)`


}
const seguir=()=>{
    if (ears) seguirCursor(ears, -2.8, -2.8);
    if (head) seguirCursor(head, 6, 6);
    if (nose) seguirCursor(nose, 1.8, 1.8);
    if (snout) seguirCursor(snout, 1.8, 1.8);
    if (eyes) seguirCursor(eyes, 1.3, 1.3);
}

window.addEventListener('resize', definirTamaVentana);
window.addEventListener('mousemove', mouseMove);
window.addEventListener('touchmove', touchMove);