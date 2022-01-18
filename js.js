const slider = document.querySelector(".slider-main");
const sliderNav = document.querySelector(".slider-nav");

let mySwiperNav = new Swiper(sliderNav, {
    slidesPerView: 5,
    spaceBetween: 7,
    loopedSlides: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    direction: "vertical",
});

let mySwiper = new Swiper(slider, {
    thumbs: {
        swiper: mySwiperNav,
    },
});
