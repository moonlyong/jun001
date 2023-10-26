var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2000,
        // 상호작용(건드려놓기)
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
       
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        1000: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
