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

});
