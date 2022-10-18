const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item)=>{
    item.onclick=()=>{
        console.log(item.id)
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backespace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.length-1);
        }else if(display.innerText != "" && item.id=="igual"){
            display.innerText= eval(display.innerText);
        }else if(display.innerText=="" && item.id=="igual"){
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""), 2000);
        }else{
            display.innerText+=item.id;
        }
    }
})