$(document).ready(function () {
    $('.swiper-product').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.swiper-product-prev'),
        nextArrow: $('.swiper-product-next'),эcssEase: 'linear',
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
    /* $('.hospital').hover(function () {
        $('.vector').show();
        $('.center svg, .azs svg, .hotels svg, .autoservise svg, .restaurant svg').css("opacity", "1");
    }, function () {
        $('.vector').hide();
        $('.center svg, .azs svg, .hotels svg, .autoservise svg, .restaurant svg').css("opacity", "0");
    });

    $('.center').hover(function () {
        $('.vector').show();
        $('.hospital svg, .azs svg, .hotels svg, .autoservise svg, .restaurant svg').css("opacity", "1");
    }, function () {
        $('.vector').hide();
        $('.hospital svg, .azs svg, .hotels svg, .autoservise svg, .restaurant svg').css("opacity", "0");
    });

    $('.azs').hover(function () {
        $('.vector').show();
        $('.hospital svg, .center svg, .hotels svg, .autoservise svg, .restaurant svg').css("opacity", "1");
    }, function () {
        $('.vector').hide();
        $('.hospital svg, .center svg, .hotels svg, .autoservise svg, .restaurant svg').css("opacity", "0");
    });

    $('.hotels').hover(function () {
        $('.vector').show();
        $('.hospital svg, .center svg, .azs svg, .autoservise svg, .restaurant svg').css("opacity", "1");
    }, function () {
        $('.vector').hide();
        $('.hospital svg, .center svg, .azs svg, .autoservise svg, .restaurant svg').css("opacity", "0");
    });

    $('.autoservise').hover(function () {
        $('.vector').show();
        $('.hospital svg, .center svg, .azs svg, .hotels svg, .restaurant svg').css("opacity", "1");
    }, function () {
        $('.vector').hide();
        $('.hospital svg, .center svg, .azs svg, .hotels svg, .restaurant svg').css("opacity", "0");
    });

    $('.restaurant').hover(function () {
        $('.vector').show();
        $('.hospital svg, .center svg, .azs svg, .hotels svg, .autoservise svg').css("opacity", "1");
    }, function () {
        $('.vector').hide();
        $('.hospital svg, .center svg, .azs svg, .hotels svg, .autoservise svg').css("opacity", "0");
    }); */

    /* $('.point').hover(function () {
        $('.vector').show();
        $('.hide-svg').css("opacity", "1");
        $(this).addClass('active').prev().css("opacity", "0");
    }, function () {
        $('.vector').hide();
        $(this).removeClass('active').prev().css("opacity", "1");
    }); */


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

});
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

$('.header__burger').click(function(){
    $(this).toggleClass('active');
    $('.burger-menu, .burger__conteiner, .burger').toggleClass('active');
    $('body').toggleClass('lock');
});

$('#1catalog-menu').click(function(){
    $('.catalog-menu').addClass('active');
    $('body').addClass('passive');
});
$('.body-catalog__close').click(function(){
    $('.catalog-menu').removeClass('active');
    $('body').removeClass('passive');
});

$(document).click(function (e) {
    var div = $('.burger, .burger-menu, .header__burger');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.burger, .header__burger, .burger-menu, .burger__conteiner').removeClass('active');
        $('body').removeClass('lock');
    }
});

new Swiper('.slider-title', {
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
        disableOnInteraction: false,
    },
});

/* window.onresize = function(event)
{
document.location.reload(true);
} */

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




$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
  });//скролл до нужного блока



  $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 1 ) {
        $('.header').addClass('scrolled');
        $('.podlozhka').addClass('active');
    }   
    if( scrolled <= 1 ) {     
        $('.header').removeClass('scrolled');
        $('.podlozhka').removeClass('active');
    }
});//шапка становится фиксированной


/* $(window).on('resize', function () {
    if ($(window).width() < 769) {
        $('.our-product__body').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
        });
    }
}); */




/* let sliderBlock = document.querySelector('.slider-title__slide');
let mySlider = document.querySelector('.slider-title');

sliderBlock.addEventListener("mouseenter", function (e) {
    mySlider.params.autoplay.disableOnInteraction = false;
    mySlider.params.autoplay.delay = 500;
    mySlider.autoplay.start();
});

sliderBlock.addEventListener("mouseleave", function (e) {
    mySlider.autoplay.stop();
}) */











