$(document).ready(function () {

    // function activateFastReview() {
    $('.fastview-btn').click(function () {
        var htmlModal = $(this).parents('.product-card').find('.fastview-item').html();

        // $('.fastview').fadeOut();
        // $('.fastview').remove();
        // $('.select-refprod select').selectric('destroy');
        // $('.select-refprod select').selectric();

        var reviewModal = $('<div class="fastview"></div>');

        $('body').append(reviewModal);
        $('.fastview').append(htmlModal);
        $('.fastview').fadeIn();
        $('.addfavor').click(function () {
            $(this).toggleClass("is-active");
        });
        $('.select-refprod select').selectric();
        $('.overlay').fadeIn();

        var galleryThumbs = new Swiper('.fastview .fastview-gallery-thumb', {
            spaceBetween: 10,
            slidesPerView: 4,
            observer: true,
            observeParents: true,
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        var galleryTop = new Swiper('.fastview .fastview-gallery-top', {
            spaceBetween: 10,
            loop: true,
            observer: true,
            observeParents: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

        $('.fastview__close').click(function () {
            $('.fastview').fadeOut();
            $('.overlay').fadeOut();
            $('.fastview').remove();
            $('.select-refprod select').selectric('destroy');
        });
    });
    // }

    var galleryProductThumbs = new Swiper('.product-gallery-thumb', {
        spaceBetween: 10,
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var galleryProductTop = new Swiper('.product-gallery-top', {
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        loopedSlides: 5, //looped slides should be the same
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryProductThumbs,
        },
    });

    $('.delivery-btn').click(function () {
        $('.delivery').slideToggle();
    });

    $('.select_sorting select').selectric();

    $('.product-select select').selectric();

    $('.addfavor').click(function () {
        $(this).toggleClass("is-active");
    });

    $('.filter-mob__list li span').click(function () {
        $(this).parent().toggleClass('is-active');
        $(this).next().slideToggle();
    });

    $('.filter-mob__sort li').click(function () {
        $('.filter-mob__sort li').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.catalogtop-mob__filter-btn').click(function () {
        $('.filter-mob_checks').fadeIn();
    });

    $('.catalogtop-mob__sort-btn').click(function () {
        $('.filter-mob_sort').fadeIn();
    });

    $('.filter-mob__close').click(function () {
        $('.filter-mob').fadeOut();
    });

    $('.reviews-like__btn').click(function () {
        $(this).parent().children().removeClass('is-active');
        $(this).addClass("is-active");
    });

    $('.show-article').click(function () {
        $(this).parent().find('.product-specif__article').addClass('height-auto');
        $(this).addClass('hidden');
    });

    $('.tab-slider').each(function () {
        var actionSlider = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 45,
            loop: false,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 6,
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
        actionSlider.on('transitionEnd', function () {
            $('.btn_buy').click(function () {
                $(this).addClass('is-active');
                $(this).html('В корзине');
            });
            $('.addfavor').click(function () {
                $(this).toggleClass("is-active");
            });
        });
    });

    $('.product-slider').each(function () {
        var productSlider = new Swiper(this, {
            slidesPerView: 3,
            spaceBetween: 45,
            loop: false,
            navigation: {
                nextEl: $(this).parent().find('.swiper-button-next'),
                prevEl: $(this).parent().find('.swiper-button-prev'),
            },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 35,
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
    });

    $('.recom-slider').each(function () {
        var productSlider = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 45,
            loop: false,
            navigation: {
                nextEl: $(this).parent().find('.swiper-button-next'),
                prevEl: $(this).parent().find('.swiper-button-prev'),
            },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 6,
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
    });

    // activateFastReview();

    function selecticActivate() {
        $('.select_city select').selectric();
    }

    selecticActivate();

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

    function showSidebar() {
        var screenWidth = $(window).width();
        if (screenWidth < 1280) {
            $('.category-block__top').click(function () {
                $('.category-block__list').slideToggle();
            });
        }
    }

    showSidebar();

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
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    991: {
                        slidesPerView: 1.3,
                        spaceBetween: 38,
                    },
                    1079: {
                        slidesPerView: 1.4,
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

    $('.product-list-slider').each(function () {
        var productListSlider = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 45,
            loop: false,
            // navigation: {
            //     nextEl: $(this).parent().find('.swiper-button-next'),
            //     prevEl: $(this).parent().find('.swiper-button-prev'),
            // },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 6,
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
    });

    $('.reviews-gallery').each(function () {
        var revGallerySlider = new Swiper(this, {
            slidesPerView: 2.5,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                767: {
                    slidesPerView: 4,
                    spaceBetween: 7,
                }
            }
        });
    });

    var newsSlider = new Swiper('.news-slider', {
        slidesPerView: 3.8,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            599: {
                slidesPerView: 1.6,
                spaceBetween: 5,
            },
            767: {
                slidesPerView: 2.3,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 1.6,
                spaceBetween: 25,
            },
            1099: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            1279: {
                slidesPerView: 2.6,
                spaceBetween: 10,
            },
            1899: {
                slidesPerView: 3.2,
                spaceBetween: 10,
            }
        },
    });

    $('.btn_buy').click(function () {
        $(this).addClass('is-active');
        $(this).html('В корзине');
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
