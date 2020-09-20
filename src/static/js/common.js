$(document).ready(function () {
    // alert(1);
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

});
