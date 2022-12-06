const mostrarMenu=(headertoggle,navbarId)=>{
    const toggleBtn = document.getElementById(headertoggle);
    const nav = document.getElementById(navbarId);
    if (headertoggle && navbarId) {
        toggleBtn.addEventListener("click", ()=>{
            nav.classList.toggle("show-menu");
            toggleBtn.classList.toggle("bx-x");
        })
    }

}

mostrarMenu("header-toggle", "navbar");


const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
    linkColor.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
}

linkColor.forEach(item => item.addEventListener("click", colorLink));