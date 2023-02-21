const swiper = new Swiper(".swiper-container",{
    autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate: 20,
        stretch: 0,
        modifier: 1,
        slideShadows: true
    }
});