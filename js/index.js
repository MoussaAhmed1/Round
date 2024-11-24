// Testimonials
var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    speed: 800,
    grabCursor: 'true',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
},
breakpoints:{
    0: {
        slidesPerView: 1,
    },
    992: {
        slidesPerView: 2,
    },
    1200: {
        slidesPerView: 5,
    },
},
});
