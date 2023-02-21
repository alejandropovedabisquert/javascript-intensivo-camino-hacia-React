const container = document.querySelector(".container");
const btnRegister = document.getElementById("sign-up-btn");
const btnLogIn = document.getElementById("sign-in-btn");

btnRegister.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode");    
});
btnLogIn.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode");    
});