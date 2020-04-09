var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 10,
    watchOverflow: true,
    slidesPerGroup: 8,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});