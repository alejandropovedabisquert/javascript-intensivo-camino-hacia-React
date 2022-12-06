const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");


if (navToggle) {
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(item=>item.addEventListener("click",linkAction));

/**Swipper */
let homeSwiper = new Swiper(".home-swiper",{
    // Optional parameters
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
let newSwiper = new Swiper(".new-swiper",{
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

})

/**Scroll up */
function scrollUp() {
    const scroll_up = document.getElementById("scroll-up");
    if(this.scrollY>=460){
        scroll_up.classList.add("show-scroll");
    } else{
        scroll_up.classList.remove("show-scroll");
    }
    
}
window.addEventListener("scroll", scrollUp);


/**Sections Active */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.add("active-link");
        } else{
            document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.remove("active-link");
        }
    });
    
}
window.addEventListener("scroll", scrollActive);

/**Scroll reveal */
const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 1500,
    delay: 0,
    reset: true
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval:200});
sr.reveal(`.about__data, .discount__img`, {origin:"left"});
sr.reveal(`.about__img, .discount__data`, {origin:"right"});


  