

$(document).ready(function () {
    $('.swiper-product').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.swiper-product-prev'),
        nextArrow: $('.swiper-product-next'),
        autoplay: true,
        autoplaySpeed: 100,
        speed: 4000,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 2000,
                    speed: 2000,
                }
            }
        ]
    });
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.product-slider__prev'),
        nextArrow: $('.product-slider__next'),
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    $('.product-slider-see').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.product-slider-see__prev'),
        nextArrow: $('.product-slider-see__next'),
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    $('.progress-slider').slick({
        slidesToShow: 4,
        infinite: false,
        prevArrow: $('.progress-prev'),
        nextArrow: $('.progress-next'),
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $('.sl1').slick({
        asNavFor: ".sl2, .sl3, .sl4",
        arrows: false,
        speed: 100,
        infinite: false,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            //FYI just have a look at the object to find aviable information
            //press f12 to access the console
            //you could also debug or look in the source
            return (i + 1) + ' из ' + slider.slideCount;
        },
        appendDots: '.compare__dots',
    })
    $('.sl2').slick({
        asNavFor: ".sl1, .sl3, .sl4",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl3').slick({
        asNavFor: ".sl2, .sl1, .sl4",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl4').slick({
        asNavFor: ".sl1, .sl2, .sl3",
        arrows: false,
        speed: 100,
        infinite: false,
    });


    $('.sl5').slick({
        asNavFor: ".sl6, .sl7, .sl8",
        arrows: false,
        speed: 100,
        infinite: false,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            //FYI just have a look at the object to find aviable information
            //press f12 to access the console
            //you could also debug or look in the source
            return (i + 1) + ' из ' + slider.slideCount;
        },
        appendDots: '.compare__dots2',
    })
    $('.sl6').slick({
        asNavFor: ".sl7, .sl8, .sl5",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl7').slick({
        asNavFor: ".sl8, .sl5, .sl6",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl8').slick({
        asNavFor: ".sl5, .sl6, .sl7",
        arrows: false,
        speed: 100,
        infinite: false,
    });

    $('.publication__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.publication__prev'),
        nextArrow: $('.publication__next'),
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 945,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    $('.small-location').hover(
        function () {
            $('.location').css("opacity", "1");
            $(this).css("opacity", "0");
            $('.location-main').css("opacity", "1");
            $('.popup__title').html($(this).attr('location-data'));
            $('.popup').show();
        },
        function () {
        }
    );

    $('.location-main').hover(
        function () {
            $(this).css("opacity", "1");
            $('.location').css("opacity", "1");
            $('.popup').hide();
        },
        function () {
            $(this).css("opacity", "0");
            $('.location').css("opacity", "0");
        }
    );


    $('.school').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '150px',
                'left': '550px'
            });
        }
    });
    $('.hospital').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '40px',
                'left': '565px'
            });
        }
    });
    $('.azs').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '60px',
                'left': '250px'
            });
        }
    });
    $('.autoservise').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '240px',
                'left': '305px'
            });
        }
    });
    $('.hotel').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '175px',
                'left': '280px'
            });
        }
    });
    $('.restaurant').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '190px',
                'left': '325px'
            });
        }
    });
    $('.shop').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '270px',
                'left': '440px'
            });
        }
    });
    $('.office').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '320px',
                'left': '530px'
            });
        }
    });
    $('.bakery').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '380px',
                'left': '600px'
            });
        }
    });
    $('.delivery').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '210px',
                'left': '420px'
            });
        }
    });
    $('.clining').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '220px',
                'left': '430px'
            });
        }
    });
    $('.fabrica').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '180px',
                'left': '500px'
            });
        }
    });
    $('._icon-search').on('click', function () {
        $('.search-form__input').focus();
    });

    $(document).mouseup(function (e) {
        var burg = $('.burger, .popup-cooki');
        if (!burg.is(e.target)
            && burg.has(e.target).length === 0) {
            $('.burger__conteiner, .burger-menu, .burger, .header__burger ').removeClass('active');
            $('.menu-mobile').css('display', 'none');
            $('.menu-mobile__body').slideUp(300);
            $('.menu-mobile__header').removeClass('active');
            $('.menu-mobile__item').removeClass('active').next().slideUp(300);
            $('.menu-mobile__header').show();
            $('._all-categories').hide();
        }
    });

    $('.popup-cooki').click(function () {
        if ($('.burger, .pop-up').hasClass('active')) {
            $('body').addClass('locked');
        }
    })

    $('.header__burger').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('locked');
            $('.burger__conteiner, .burger-menu, .burger').removeClass('active');
        } else {
            $(this).addClass('active');
            $('body').addClass('locked');
            $('.burger-menu, .burger__conteiner, .burger').addClass('active');
        }
        if ($('.menu-mobile').css('display', 'block')) {
            $('.menu-mobile').css('display', 'none');
            $('.menu-mobile__body').slideUp(300);
            $('.menu-mobile__header').removeClass('active');
            $('.menu-mobile__item').removeClass('active').next().slideUp(300);
            $('.menu-mobile__header').show();
            $('._all-categories').hide();
        }
    });

    $('.burger').click(function () {
        if ($(this).hasClass('active')) {
            $('body').addClass('locked');
        }
    });

    $('.pop-up').click(function () {
        if ($(this).hasClass('active')) {
            $('body').addClass('locked');
        }
    })

    //--------catalog-menu-mobile-----
    $('.items-catalog-mobile').click(function () {
        $('.menu-mobile').show();
        $('body').addClass('locked');
    });
    $('.menu-mobile').children().click(function () {
        $('body').addClass('locked');
    })
    $('.menu-mobile__header').click(function () {
        $('.menu-mobile__header').hide();
        $(this).show().addClass('active').next().slideDown(300);
        $('._first').css('margin-top', '0');
        $('._all-categories').show();
    });
    $('.menu-mobile__item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next().slideToggle(300);
        } else {
            $('.menu-mobile__item, .menu-mobile__item_link').removeClass('active').next().hide(300);
            $(this).addClass('active').next().slideToggle(300);
        }
    });
    $('.menu-mobile__item_link').click(function () {
        $('.menu-mobile__item').removeClass('active').next().hide(300);
    })
    $('._all-categories').click(function () {
        $(this).hide(300);
        $('.menu-mobile__body').slideUp(300);
        $('.menu-mobile__header').removeClass('active');
        $('.menu-mobile__item').removeClass('active').next().slideUp(300);
        $('.menu-mobile__header').show();
        $('._first').css('margin-top', '12.5px');
    });
    $('._main').click(function () {
        $('.menu-mobile').hide();
        $('.menu-mobile__body').slideUp(300);
        $('.menu-mobile__header').removeClass('active');
        $('.menu-mobile__item').removeClass('active').next().slideUp(300);
    })
    //-------------------------------------------
    $('#1catalog-menu').click(function () {
        $('.catalog-menu').toggleClass('active');
        $('body').addClass('locked');
    });
    $('.body-catalog__close').click(function () {
        $('.catalog-menu').removeClass('active');
        $('body').removeClass('locked');
    });

    $('.catalog__elemet span').click(function (e) {
        $(this).parent().addClass('active');
    })
    $('.catalog__elemet svg').click(function () {
        $(this).parent().removeClass('active');
    })

    $('._catalog').click(function (e) {
        $(this).toggleClass('active');
        $('._hide-footer-list').slideToggle(300)

    }); //каталог в футере

    $('.heart-out').click(function (e) {
        $(this).hide().prev().show();
    });
    $('.heart-in').click(function (e) {
        $(this).hide().next().show();
    }); //сердечко в карточках

    $('._icon-compare').click(function () {
        $(this).toggleClass('active');
    })
    $('.choice-about__item').click(function () {
        $('.choice-about__item').removeClass('active');
        $(this).toggleClass('active');
    }) //описание, характеристики, сертификат

    $('.packing__item').click(function () {
        $('.packing__item').removeClass('active');
        $(this).toggleClass('active');
    })
    $('.packing-product__item').click(function () {
        $(this).parent().find('.packing-product__item').removeClass('active');
        $(this).toggleClass('active');
    })//фасовка

    $('._phone').mask('+7 (999) 999-99-99', {
        autoclear: false
    });
    $('._phone2').mask('+7 999 999-99-99', {
        autoclear: false
    });

    /* $('.data-mask').mask('99.99.9999', {
        autoclear: false
    }); */
    /* $('.button-request').click(function (event) {
        $('.popup-request').toggleClass('active');
        $('body').addClass('locked');
    }) */

    $('.button-request').click(function (event) {
        $('.popup-request').toggleClass('active');
        $('body').addClass('locked');
    })

    $('#add-in-basket').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find('.button-main').text('В корзину');
        } else {
            $(this).addClass('active').find('.button-main').text('В корзине');
        }

    })

    $('.popup__button').click(function () {
        if ($('pop-up input').val > 0) {
            $('body').removeClass('lock');
        } else {
            $('body').addClass('locked');
        }
    })

    $('.popup__close, .will-aut, .will-reg').click(function (event) {
        /* $('.popup-request, .popup-reg, .popup-reg2, .popup-reg3, .popup-autoriz, .popup-forgot').removeClass('active'); */
        $('.pop-up').removeClass('active');
        $('body').removeClass('lock');
        $('body').removeClass('locked');
    })

    $('.form-write__button, .send-response').click(function (event) {
        $('.send-message').toggleClass('active');
        $('body').addClass('locked');
        $('.pop-up, .editing-matrix, .extend-matrix').removeClass('active');
    })
    $('.popups__close').click(function (event) {
        $('.popups').removeClass('active');
        $('body').removeClass('locked');
    })

    $('.will-reg, .user-reg').click(function () {
        $('.popup-reg').toggleClass('active');
        $('body').addClass('locked');
        if ($('.burger').hasClass('active')) {
            $('.burger, .burger__conteiner, .header__burger, .burger-menu').removeClass('active');
            $('.menu-mobile').css('display', 'none');
            $('.menu-mobile__body').slideUp(300);
            $('.menu-mobile__header').removeClass('active');
            $('.menu-mobile__item').removeClass('active').next().slideUp(300);
            $('.menu-mobile__header').show();
            $('._all-categories').hide();
        }
    })

    $('.button-next').click(function () {
        $('.popup-reg').removeClass('active');
        $('.popup-reg2').toggleClass('active');
    })
    $('.button-next2').click(function () {
        $('.popup-reg2').removeClass('active');
        $('.popup-reg3').toggleClass('active');
    })
    $('.button-reg').click(function () {
        $('.popup-reg3').removeClass('active');
        $('.popups-reg').toggleClass('active');
    })

    $('.header-exit, .will-aut, .user-exit').click(function () {
        $('.popup-autoriz').toggleClass('active');
        $('body').addClass('locked');
        if ($('.burger').hasClass('active')) {
            $('.burger, .burger__conteiner, .header__burger, .burger-menu').removeClass('active');
        }
    })
    $('.popup__forget').click(function () {
        $('.popup-autoriz').removeClass('active');
        $('.popup-forgot').toggleClass('active');
        $('body').addClass('locked');
    })

    $('.prev-popup').click(function () {
        $('.popup-autoriz').toggleClass('active');
        $('.popup-forgot').removeClass('active');
        $('body').addClass('locked');
    });

    $('.button-restore').click(function () {
        $('.check-your-email').toggleClass('active');
        $('.popup-forgot').removeClass('active');
    })

    $('.button-accept').click(function () {
        $('.popup-cooki').removeClass('active');
    })

    $('.header__element-basket').click(function () {
        $('.add-basket').toggleClass('active');
    });

    $('.add-basket__add').click(function () {
        $('.add-basket').removeClass('active');
        $('.create-basket').toggleClass('active');
        $('body').addClass('locked');
    })
    $('.add-basket__close').click(function () {
        $('.add-basket').removeClass('active');
    });

    $('.button-cancel ').click(function () {
        $('.filter-catalog__item, .control__item').removeClass('active');
        $('.filter-catalog__item input, .control__item input').attr('checked', false);
    })

    $('.filter-click').click(function () {
        $('.filter-catalog2, .sidebar-p-catalog2').slideToggle();
    })
    $('.fav').click(function () {
        $(this).toggleClass('active');
    });

    $('.request').click(function () {
        $('.popup-request').toggleClass('active');
    });

    $('._ok').click(function () {
        $('.popups').removeClass('active');
        $('body').removeClass('locked');
    });

    $('.sidebar-catalog__item').click(function () {
        $(this).toggleClass('active');
    })
    //-------results-search---

    $('._icon-grid').click(function () {
        $('.icon-result').removeClass('active');
        $(this).addClass('active');
        $('.body-result').hide();
        $('.body-grid').css('display', 'flex');
    });
    $('._icon-list').click(function () {
        $('.icon-result').removeClass('active');
        $(this).addClass('active');
        $('.body-result').hide();
        $('.body-list').css('display', 'flex');
    });
    $('._icon-line').click(function () {
        $('.icon-result').removeClass('active');
        $(this).addClass('active');
        $('.body-result').hide();
        $('.body-line').css('display', 'flex');
    })

    $('.sidebar-p-catalog__more').click(function () {
        $(this).hide().next().show();
        $(this).parent().find('.sidebar-p-catalog__link:nth-child(4) ~ .sidebar-p-catalog__link').css('display', 'block');
    })

    $('.roll-up').click(function () {
        $(this).hide().prev().show();
        $(this).parent().find('.sidebar-p-catalog__link:nth-child(4) ~ .sidebar-p-catalog__link').css('display', 'none');
    })

    $('.sidebar-p-catalog__items').each(function () {
        let a = parseInt($('.sidebar-p-catalog__items').children('.how-mach').text());
        let b = parseInt($('.sidebar-p-catalog__items').children('.hm').text());
        let c = a - b;
        $('.sidebar-p-catalog__items').children('.balance').text(c);
    });

    $('.top-product__icon:last-child').click(function () {
        $(this).toggleClass('active');
    })

    //---------catalog-autoriz------

    $('.icon-grid-avtoriz-catalog').click(function () {
        $('.body-catalogs__icon').removeClass('active');
        $(this).addClass('active');
        $('.body-autoriz').removeClass('active');
        $('.body-grid-avtoriz-catalog').addClass('active');
    });

    $('.icon-list-avtoriz-catalog').click(function () {
        $('.body-catalogs__icon').removeClass('active');
        $(this).addClass('active');
        $('.body-autoriz').removeClass('active');
        $('.body-list-avtoriz-catalog').addClass('active');
    });

    $('.icon-line-avtoriz-catalog').click(function () {
        $('.body-catalogs__icon').removeClass('active');
        $(this).addClass('active');
        $('.body-autoriz').removeClass('active');
        $('.body-line-avtoriz-catalog').addClass('active');
    });

    //-------------------------
    $('.el').hover(
        function () {
            $(this).toggleClass('active');
        },
        function () {
            $(this).removeClass('active');
        }
    );
    $('.el1').hover(
        function () {
            $('.elem1').toggleClass('active');
        },
        function () {
            $('.elem1').removeClass('active');
        }
    );
    $('.el2').hover(
        function () {
            $('.elem2').toggleClass('active');
        },
        function () {
            $('.elem2').removeClass('active');
        }
    );
    $('.el3').hover(
        function () {
            $('.elem3').toggleClass('active');
        },
        function () {
            $('.elem3').removeClass('active');
        }
    );
    $('.el4').hover(
        function () {
            $('.elem4').toggleClass('active');
        },
        function () {
            $('.elem4').removeClass('active');
        }
    );
    $('.el5').hover(
        function () {
            $('.elem5').toggleClass('active');
        },
        function () {
            $('.elem5').removeClass('active');
        }
    );
    $('.el6').hover(
        function () {
            $('.elem6').toggleClass('active');
        },
        function () {
            $('.elem6').removeClass('active');
        }
    );
    $('.el7').hover(
        function () {
            $('.elem7').toggleClass('active');
        },
        function () {
            $('.elem7').removeClass('active');
        }
    );
    $('.el8').hover(
        function () {
            $('.elem8').toggleClass('active');
        },
        function () {
            $('.elem8').removeClass('active');
        }
    );
    $('.el9').hover(
        function () {
            $('.elem9').toggleClass('active');
        },
        function () {
            $('.elem9').removeClass('active');
        }
    );
    $('.spoiler-mobile__item').click(function (event) {
        if ($('.footer-mobile').hasClass('mobile')) {
            $('.spoiler-mobile__item').not($(this)).removeClass('active');
            $('.spoiler-mobile__body').not($(this).next()).slideUp(300);

        } // при нажатии на следующее подменю, текущее закрывается
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $('.spoiler-mobile__link').click(function () {
        $('.spoiler-mobile__item').removeClass('active');
        $('.spoiler-mobile__body').not($(this).next()).slideUp(300);
    });

    $('.footer-mobile__map').click(function () {
        $('.our-adres').toggleClass('active');
        $('body').addClass('locked');
    });
    $('.popups__close_x').click(function () {
        $('.our-adres').removeClass('active');
        $('body').removeClass('lock');
    });
    $(document).mouseup(function (e) {
        var div = $('.our-adres');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.our-adres').removeClass('active');
            $('body').removeClass('lock');
        }
    });

    $('.control__button').click(function () {
        $('.delit-list').addClass('active');
    });
    $('.title-char').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.sl2').slick('reinit');
        $('.sl6').slick('reinit');
    });
    $('.title-advantage').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.sl3').slick('reinit');
        $('.sl7').slick('reinit');
    });

    $('.top-block__arrow').click(function () {
        $(this).toggleClass('static');
        $('.top-block__block').toggleClass('open');
    });

    $('.top-block__item span').click(function (event) {
        $(this).parent().addClass('active');
    });
    $('.teg-close').click(function (event) {
        $(this).parent().removeClass('active');
    });


    $(window).on('resize', function () {
        if ($(window).width() < 1376) {
            $('.header-vacanci').removeClass('vacanci')
        } else {
            $('.header-vacanci').addClass('vacanci')
        }
    });
});

$(document).mouseup(function (e) {
    var popup = $('.popup__conteiner, .popup-cooki');
    if (!popup.is(e.target)
        && popup.has(e.target).length === 0) {
        $('.pop-up').removeClass('active');
        $('body').removeClass('locked');
    }
});
$(document).mouseup(function (e) {
    var popups = $('.popups__conteiner, .popup-cooki');
    if (!popups.is(e.target)
        && popups.has(e.target).length === 0) {
        $('.popups').removeClass('active');
        $('body').removeClass('locked');
    }
});


$(document).on('click', '.popup__check', function (event) {
    if ($('.remember-me').hasClass('active')) {
        $(this).find('input').attr('checked', false);
        $('.remember-me').removeClass('active');
    } else {
        $(this).find('input').attr('checked', true);
        $('.remember-me').toggleClass('active');
    }
    return false;
});//чекбокс в попапе авторизация

$(document).on('click', '.filter-catalog__item, .control__item, .sidebar-lk__item', function (event) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active').find('input').attr('checked', false);
    } else {
        $(this).toggleClass('active').find('input').attr('checked', true);
    }
    return false;
});//чекбоксы в каталоге



$.each($('.radiobuttons__item'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
        $(this).addClass('active');
    }
});
$(document).on('click', '.radiobuttons__item', function (event) {
    $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
    $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
});


setTimeout(() => { $('.popup-cooki').addClass('active') }, 5000);
setTimeout(() => { $('.multy-basket').addClass('active') }, 1500);

/* $(document).click(function (e) {
    var div = $('.burger, .burger-menu, .header__burger');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.burger, .header__burger, .burger-menu, .burger__conteiner').removeClass('active');
        $('body').removeClass('lock');
    }
}); */

/* $(document).mouseup(function (e) {
    var div = $('.popups__conteiner');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.popups').removeClass('active');
        $('body').removeClass('lock');
    }
}); */
let mySliderTitle = new Swiper('.slider-title', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 300,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});


new Swiper('.swiper-progress', {
    slidesPerView: 2,
    spaceBetween: 7,
    navigation: {
        nextEl: '.progress-next',
        prevEl: '.progress-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 7,
        },
        620: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


new Swiper('.small-swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.small-swiper__dots',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        200: {
            direction: 'horizontal',
        },
        768: {
            direction: 'vertical',
        },
    },
});

let myFirst = new Swiper('.slider', {
    simulateTouch: false,
    touchRatio: 0,
    freeMode: true,
    spaceBetween: 24,
    whatchOverflow: true,
    navigation: {
        nextEl: '.slider-compare__arrow-next',
        prevEl: '.slider-compare__arrow-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        980: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        200: {
            slidesPerView: 1,
            spaceBetween: 10,
            simulateTouch: true,
            touchRatio: 1,
        }
    },
});


var sliderIndex = 8;
let myShaddow = document.querySelector('.scrollbar__shaddow');
let mySlideScroll = document.querySelector('._last-slide');
let myArN = document.querySelector('.scrollbar__next');

let myScroll = new Swiper('.scrollbar', {
    slidesPerView: "auto",
    freeMode: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    touchRatio: 0,
    simulateTouch: false,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: '.scrollbar__next',
        prevEl: '.scrollbar__prev'
    },
    breakpoints: {
        1270: {
            spaceBetween: 40,
        },
        300: {
            spaceBetween: 20,
        }
    }
});

myScroll.on('reachEnd', function () { //когда слайдер коснется последнего слайда
    myShaddow.style.display = 'none';
});
myScroll.on('fromEdge', function () { //когда слайдер уйдет от последнего или первого слайда
    myShaddow.style.display = 'block';

});



/* $(document).ready(function () {
    $('.scrollbar').scroll(function(){
        if($('.scrollbar__next').hasClass('swiper-button-disabled')){
            $('.scrollbar__shaddow').hide();
        }else{
            $('.scrollbar__shaddow').show();
        }
    })
}); */




/* $("body").on('click', '[href="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
}); *///скролл до нужного блока

$("body").on('click', '[href="#progress-block"], [href="#from-top"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});
$("body").on('click', '[href="#write-us"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

$("body").on('click', '[href="#description"], [href="#characters"], [href="#sertificates"], [href="#duties"], [href="#our-wishes"], [href="#we-offer"], [href="#weoffer"], [href="#expert"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

$('.btn-more').click(function () {
    $(this).hide().next().show();
    $('.description__text').toggleClass('show');
});
$('.btn-hide').click(function () {
    $(this).hide().prev().show();
    $('.description__text').removeClass('show');
});


$('.btn-more-char').click(function () {
    $(this).hide().next().show();
    $('.about-product__list:last-child').css('display', 'flex');
    $('.about-product__col-right').show();
});
$('.btn-hide-char').click(function () {
    $(this).hide().prev().show();
    $('.about-product__list:last-child').css('display', 'none');
    $('.about-product__col-right').hide();
});


$(window).on('resize', function () {
    if ($(window).width() < 521) {
        $("body").on('click', '[href*="#description"], [href*="#characters"], [href*="#sertificates"]', function (e) {
            var fixed_offset = 15;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
            e.preventDefault();
        });
    }
});
$(window).on('resize', function () {
    if ($(window).width() < 521) {
        $("body").on('click', '[href*="#weoffer"], [href*="#expert"]', function (e) {
            var fixed_offset = 0;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
            e.preventDefault();
        });
    }
});

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 1) {
        $('.header').addClass('scrolled');
        $('.podlozhka').addClass('active');
    }
    if (scrolled <= 1) {
        $('.header').removeClass('scrolled');
        $('.podlozhka').removeClass('active');
    }
    if (scrolled > 600) {
        $('.fixed__conteiner, .slider-compare__arrow').addClass('active');
    } else {
        $('.fixed__conteiner, .slider-compare__arrow').removeClass('active');
    }
});//шапка становится фиксированной

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 620) {
        $('.fixed__conteiners2, .fixed__conteiners, .compare__dots, .compare__dots2').addClass('active');
    } else {
        $('.fixed__conteiners2, .fixed__conteiners, .compare__dots, .compare__dots2').removeClass('active');
    }
});


/* let sliderBlock = document.querySelector('.slider-title__slide');
let mySlider = document.querySelector('.slider-title');
 
sliderBlock.addEventListener("mouseenter", function (e) {
    mySlider.params.autoplay.disableOnInteraction = false;
    mySlider.params.autoplay.delay = 500;
    mySlider.autoplay.start();
});
 
sliderBlock.addEventListener("mouseleave", function (e) {
    mySlider.autoplay.stop();
}) */   //попробовать сделать остановку слайдера при наведении мыши


function isInView(elem) {
    return $('._last').offset().left - $('.scrollbar__body').scrollLeft() < $(elem).width(); //последний элемент в прокручиваемом блоке
}
$('.scrollbar__body').scroll(function () {
    if (isInView($('._last'))) {
        $('.scrollbar__next, .scrollbar__shaddow').hide();
    } else {
        $('.scrollbar__next, .scrollbar__shaddow').show();
    }
    //fire whatever you what 
})

//функция вывода названия прикрепленного файла, если файлов больше чем 1 - выводится количество
function readyInputFile() {
    var inputs = document.querySelectorAll('.inputfile');
    var closeFile = document.querySelector('.close-hide')
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            console.log(this.files);
            var fileName = '';
            closeFile.style.display = 'block';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length++);
            else
                fileName = this.files[0].name;
            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
};
document.addEventListener("DOMContentLoaded", readyInputFile);



function counterFunction(count) {

    var plus = count.querySelector('._plus');
    var minus = count.querySelector('._minus');
    var number = count.querySelector('.amount__numbers');
    var numberValue = parseFloat(number.value, 10);

    minus.addEventListener('click', function () {

        if (numberValue === 1) {
            return;
        };

        numberValue--;
        number.value = numberValue;
    });

    plus.addEventListener('click', function () {
        numberValue++;
        number.value = numberValue;
    });

}

var counts = document.querySelectorAll('.amount');

counts.forEach(counterFunction);

$(document).ready(function () {
    $('.select, .item-select').mouseup(function (e) {
        $('.select, .item-select').not(this).removeClass('is-active');
    });
    $('.select__item, .select__el').mouseup(function (e) {
        $(this).parent().find('.select__item, .select__el').not(this).removeClass('active');
    });

    $('.close-hide').click(function () {
        $('.text-add-file').text('Прикрепить файл');
        $(this).hide();
    });
})




let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item, .select__el');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerHTML,
            select = this.closest('.select, .item-select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        this.classList.add('active');
        /* this.style.display = 'none'; */
        /* $('.select__el').on('click', function(){
            $('.select__el').css('display', 'block');
        }) */
        select.classList.remove('is-active');
    }
};
select();


$(document).ready(function () {
    $('#review-text').keyup(function () {
        $('#counter').text(this.value.length++);
    });
    $('.placeholder-textarea, textarea').click(function () {
        $('.textarea, textarea').addClass('active');
        $('.ready-textarea').show();
        $('.current-text').show();
        $('.placeholder-textarea').hide();
        $('textarea').focus();
    });
    $('.review-text').focus(function () {
        $('.textarea, textarea').addClass('active');
        $('.ready-textarea').show();
        $('.current-text').show();
        $('.placeholder-textarea').hide();
        $('textarea').focus();
    })
    $('.member-input').focus(function () {
        $(this).toggleClass('active');
    })
    $('.member-input').focusout(function () {
        $(this).removeClass('active');
    })

    $('.review-text').focusout(function () {
        $('.ready-textarea').hide().next().hide();
        $('.textarea, textarea').removeClass('active');
        $('.placeholder-textarea').show();
        $('.placeholder-textarea').removeClass('scale')
        if ($('#review-text').val().length > 0) {
            $('.placeholder-textarea').addClass('scale');
            $('.textarea').removeClass('active');
        }
    })
    $('.ready-textarea').click(function () {
        $(this).hide().next().hide();
        $('.textarea, textarea').removeClass('active');
        $('.placeholder-textarea').show();
        $('.placeholder-textarea').removeClass('scale')
        if ($('#review-text').val().length > 0) {
            $('.placeholder-textarea').addClass('scale');
            $('.textarea').removeClass('active');
        } else {
            $('.placeholder-textarea').removeClass('scale');
        }
    });

    /* if ($('.search-form__input').val().length > 0){
        console.log('hello')
        $('.body-catalog__column-left, .body-catalog__column-right').addClass('hide');
    } */
    /* $('.search-form__input').on('keyup',function(){
        var $this = $(this),
            val = $this.val();
        
        if(val.length >= 1){
            $('.body-catalog__column-left, .body-catalog__column-right').hide();
            $('.search-catalog, .result-search-catalog').show();
        }else {
            $('.body-catalog__column-left, .body-catalog__column-right').show();
            $('.search-catalog, .result-search-catalog').hide();
            $('.body-catalog__button').show();
            $('.result-search-catalog').removeClass('show');
        }
    }); */
    $('.body-catalog__button').click(function () {
        $(this).hide();
        $('.result-search-catalog').addClass('show-result');
    });
});


//==============delivery-page=============
$(document).ready(function () {
    $('.delyvery-page__header').click(function () {
        $(this).toggleClass('active').next().slideToggle();
    });
});

//-----activities-------

$(document).ready(function () {
    $('.activities__item').click(function () {
        $('.kind').toggleClass('active');
        $('body').addClass('locked');
    });
});

//--------tov-matrix---------
$(document).ready(function () {
    $('.del-card-matrix').click(function () {
        $('.editing-matrix').toggleClass('active');
        $('body').addClass('locked');
    });
    $('.filter-matrix__button').click(function () {
        $('.extend-matrix').toggleClass('active');
        $('body').addClass('locked');
    });
});
//-------baskets--------
$(document).ready(function () {
    $('.baskets__to-clear').click(function () {
        $('.delit-all-product').toggleClass('active');
        $('body').addClass('locked');
    });

    $('.comment-basket__button').click(function () {
        $('.order-sent').toggleClass('active');
        $('body').addClass('locked');
    });

});

//--------lk-----------
$(document).ready(function () {
    $('.agreed-tab').click(function () {
        $('.body-lk__tab').removeClass('active');
        $('.body-lk__body').removeClass('active');
        $('.agreed-orders').addClass('active');
        $(this).addClass('active');
        var textContent = $(this).text();
        $('.order-status').text(textContent);
    });
    $('.inconsistent-tab').click(function () {
        $('.body-lk__tab').removeClass('active');
        $('.body-lk__body').removeClass('active');
        $('.inconsistent-orders').addClass('active');
        $(this).addClass('active');
        var textContent = $(this).text();
        $('.order-status').text(textContent);
    });
    $('.orders-tab').click(function () {
        $('.body-lk__tab').removeClass('active');
        $('.body-lk__body').removeClass('active');
        $('.orders-pending').addClass('active');
        $(this).addClass('active');
        var textContent = $(this).text();
        $('.order-status').text(textContent);
    });

    $('.claim, .submitaclaim, .sidebar-lk__link_claim').click(function () {
        $('.registration-claim').toggleClass('active');
        $('body').addClass('locked');
    });

    $('.sidebar-lk__el').click(function () {
        $('.sub-menu-lk').slideToggle();
        $('.arrow-lk').toggleClass('active');
    });

    $('._edit').click(function () {
        $('.lk_add-adres').show();
    })
    $('.order-tab').click(function () {
        $('.order-tab').removeClass('active');
        $(this).toggleClass('active')
        $('.personal-data-wrapper').removeClass('active');
    });

    $('#personal-data-tab').click(function () {
        $('#personal-data').toggleClass('active');
    });
    $('#order-tab').click(function () {
        $('#orders').toggleClass('active');
    });
    $('#quick-order-tab').click(function () {
        $('#quick-order').toggleClass('active');
    });
    $('#delivery-address-tab').click(function () {
        $('#delivery-address').toggleClass('active');
    });
    $('.contact-with-manager').click(function () {
        $('.help').toggleClass('active');
        $('body').addClass('locked');
    });
    //----------co-worker---
    $('.co-worker__item').click(function () {
        $('.co-worker__item').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.co-worker_purchaser').click(function () {
        $('.order-card-reconciling').removeClass('active');
        $('.order-card-purchaser').toggleClass('active');
    });
    $('.co-worker_reconciling').click(function () {
        $('.order-card-purchaser').removeClass('active');
        $('.order-card-reconciling').toggleClass('active');
    });
    $('.some-input').focus(function () {
        $('.select-form').removeClass('is-active');
    });
    $('.select-input').focus(function () {
        $('.select-form').toggleClass('is-active');
    });

});

//=========personal-data-wrapper

$(document).ready(function () {
    $('.quick-order__icon').click(function () {
        $('.quick-order__icon').removeClass('active');
        $(this).addClass('active');
        if ($('._grid').hasClass('active')) {
            $('.body-catalogs__body').removeClass('active').hide();
            $('.body-catalogs__body._grid').addClass('active').show();
        }
        if ($('.quick-order__icon._list').hasClass('active')) {
            $('.body-catalogs__body').removeClass('active').hide();
            $('.body-catalogs__body._list').addClass('active').show();
        }
        if ($('.quick-order__icon._line').hasClass('active')) {
            $('.body-catalogs__body').removeClass('active').hide();
            $('.body-catalogs__body._line').addClass('active').show();
        }
    });

    $('.product__button, .product__button-compare').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').css('background-color', '#D4AE67').text('В корзину');
        } else {
            $(this).addClass('active').css('background-color', '#00AA95').text('В корзине');
        }
    });
});


//----------------------magnific-popup-------

$(document).ready(function() {
    $('.popup-link').magnificPopup({
    });
});





//---------------карта----------
function init() {
    let map = new ymaps.Map('map', {
        center: [60.087131, 30.470643],
        zoom: 13,
    });
    
    let placemark1 = new ymaps.Placemark([60.085896, 30.487878], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon__top">
                <div class="balloon__title">Офис и склад в Санкт-Петербурге</div>
                <div class="balloon__close"></div>
            </div>
            <div class="balloon__body">
            188663, Ленинградская обл, Всеволожский р-н, Кузьмоловский гп, Заводская ул, дом № 3, корпус 360 Г</div>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/iconMap.svg', //расположение
        iconImageSize: [45, 54], //размер иконки
        iconImageOffset: [0, 0], //сдвиг
        hideIconOnBalloonOpen: false,
    });


    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
   // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark1); //добавляем балун
}

ymaps.ready(init);


//-------------меню каталога-------------------

document.querySelector('#search-menu').oninput = function () {
    let val = this.value.trim();
    let result = document.querySelectorAll('.search-catalog li,  .result-search-catalog li');
    if (val != '') {
        document.querySelector('.body-catalog__column-left').classList.add('hide');
        document.querySelector('.body-catalog__column-right').classList.add('hide');
        document.querySelector('.search-catalog').classList.add('show');
        document.querySelector('.result-search-catalog').classList.add('show');
        result.forEach(function (elem) {
            if (elem.innerText.search(RegExp(val, "gi")) == -1) {
                elem.classList.add('hide');
                document.querySelector('.body-catalog__button').style.display = 'none';
                elem.innerHtml = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHtml = linkMark(str, elem.innerText.search(val), val.length);
                console.log('hello');
            }
        });
    }
    else {
        result.forEach(function (elem) {
            elem.classList.remove('hide');
            document.querySelector('.body-catalog__column-left').classList.remove('hide');
            document.querySelector('.body-catalog__column-right').classList.remove('hide');
            document.querySelector('.search-catalog').classList.remove('show');
            document.querySelector('.result-search-catalog').classList.remove('show-result');
            document.querySelector('.body-catalog__button').style.display = 'block';
            document.querySelector('.search-catalog').classList.remove('show');
            document.querySelector('.result-search-catalog').classList.remove('show');
            elem.innerHtml = elem.innerText;
        });
    }
}

function linkMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}
//-------------------календарь-----------------
flatpickr(document.getElementById('date'), {
    "locale": "ru",
    inline: true,
    altFormat: "d.m.Y",
    altInput: true,
    dateFormat: "d.m.Y",
    mode: "range",
    defaultDate: ["01.01.2021", "11.01.2021"],
});

flatpickr(document.getElementById('act-inp-start'), {
    "locale": "ru",
    altFormat: "d.m.Y",
    altInput: true,
    dateFormat: "d.m.Y",
});
flatpickr(document.getElementById('act-inp-end'), {
    "locale": "ru",
    altFormat: "d.m.Y",
    altInput: true,
    dateFormat: "d.m.Y",
});

