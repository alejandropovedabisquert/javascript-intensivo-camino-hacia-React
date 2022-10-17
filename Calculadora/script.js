const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item)=>{
    item.onclick=()=>{
        console.log(item.id)
        if(item.id=="clear"){
            display.innerText="";
            console.log("s")
        }else if(item.id=="backespace"){
            console.log("as")
        }
    }
})