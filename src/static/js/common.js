$(document).ready(function () {

    $('.select select').selectric();

    $('.catalog-btn').click(function () {
        $('.menu-laptop').fadeIn();
    });

    $('.dropdownmenu__close').click(function () {
        $('.menu-laptop').fadeOut();
    });

    $('.menu-laptop__list li').click(function () {
        $('.menu-laptop__list li').removeClass('is-active');
        $(this).addClass('is-active');
        $('.dropdownmenu_laptop').css('display', 'none');
        $(this).find('.dropdownmenu_laptop').fadeIn();
    });

    $(window).resize(function () {
        if (window.matchMedia('(min-width: 1280px)').matches) {
            $('.menu-laptop').removeAttr('style');
        }
    });

    $('.mob-menu__cat-link').click(function () {
        $(this).next().addClass('is-active');
    });

    $('.mob-menu__back').click(function () {
        $(this).parent().removeClass('is-active');
    });

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.mob-menu').toggleClass('is-active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 250) {
            $('.sticky-panel').addClass('is-active');
        }
        else {
            $('.sticky-panel').removeClass('is-active');
        }
    });

    $('.footer__list-title').click(function () {
        $(this).next().slideToggle();
    });

    $('.brends-list__modal').mCustomScrollbar({
        axis: 'y',              // вертикальный скролл 
        theme: 'dark',  // тема 
        // scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
        setHeight: 264,         // высота блока (переписывает CSS) 
        // mouseWheel: {
        //     deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
        // }
    });

    function tabsScroll() {
        var screenWidth = $(window).width();
        if (screenWidth < 400) {
            $('.tabs-btn').mCustomScrollbar({
                axis: 'x',              // вертикальный скролл 
                theme: 'dark',  // тема 
                // scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
                //setHeight: 264,         // высота блока (переписывает CSS) 
                // mouseWheel: {
                //     deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
                // }
            });
        }
    }

    tabsScroll();

    var bannerSlider = undefined;

    function initBannerSlider() {
        var screenWidth = $(window).width();
        if (screenWidth < 1280 && bannerSlider == undefined) {

            var bannerSlider = new Swiper('.banner-block', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    1079: {
                        slidesPerView: 1.3,
                        spaceBetween: 10,
                    },
                    1279: {
                        slidesPerView: 1.6,
                        spaceBetween: 10,
                    }
                },
            });

        } else if (screenWidth > 1279 && bannerSlider != undefined) {
            bannerSlider.destroy();
            bannerSlider = undefined;
        }
    }

    initBannerSlider();

    var actionSlider = new Swiper('.tab-slider', {
        slidesPerView: 4,
        spaceBetween: 45,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1.6,
                spaceBetween: 7,
            },
            599: {
                slidesPerView: 2.3,
                spaceBetween: 7,
            },
            767: {
                slidesPerView: 3.1,
                spaceBetween: 7,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });

    $('.tabs-btn span').click(function () {
        $('.tabs-btn__el').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.action-tab').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.tabs-btn span:first-child').click();

});
