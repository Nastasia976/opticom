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

    $('.header__burger').click(function () {
        $(this).toggleClass('active');
        $('.burger-menu, .burger__conteiner, .burger').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('#1catalog-menu').click(function () {
        $('.catalog-menu').toggleClass('active');
        $('body').toggleClass('passive');
    });
    $('.body-catalog__close').click(function () {
        $('.catalog-menu').removeClass('active');
        $('body').removeClass('passive');
    });

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

    $('.choice-about__item').click(function () {
        $('.choice-about__item').removeClass('active');
        $(this).toggleClass('active');
    }) //описание, характеристики, сертификат

    $('.packing__item').click(function () {
        $('.packing__item').removeClass('active');
        $(this).toggleClass('active');
    })
    $('.packing-product__item').click(function () {
        $('.packing-product__item').removeClass('active');
        $(this).toggleClass('active');
    })//фасовка


    $('.select__item').click(function (event) {
        $('.select__item').removeClass('active');
        $(this).toggleClass('active');
        $('.select__icon').removeClass('active');
    });
    $('.select__header').click(function (event) {
        $('.select__icon').toggleClass('active');
    });

    $('._phone').mask('+7 (999) 999-99-99', {
        autoclear: false
    });

    $('.button-request').click(function (event) {
        $('.popup-request').toggleClass('active');
        $('body').toggleClass('passive');
    })

    $('.popup__close, .will-aut, .will-reg').click(function (event) {
        $('.popup-request, .popup-reg, .popup-reg2, .popup-reg3, .popup-autoriz, .popup-forgot').removeClass('active');
        $('body').removeClass('passive');
    })

    $('.form-write__button').click(function (event) {
        $('.send-message').toggleClass('active');
        $('body').toggleClass('passive');
    })
    $('.popups__close, .popups__button').click(function (event) {
        $('.popups').removeClass('active');
        $('body').removeClass('passive');
    })

    $('.will-reg, .user-reg').click(function () {
        $('.popup-reg').toggleClass('active');
        $('body').toggleClass('passive');
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
        $('body').toggleClass('passive');
    })
    $('.popup__forget').click(function () {
        $('.popup-autoriz').removeClass('active');
        $('.popup-forgot').toggleClass('active');
    })

    $('.prev-popup').click(function () {
        $('.popup-autoriz').toggleClass('active');
        $('.popup-forgot').removeClass('active');
    })

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
    })
    $('.add-basket__close').click(function () {
        $('.add-basket').removeClass('active');
    })
    $('.button-create').click(function () {
        $('.add-basket').toggleClass('active');
    });

    $('.button-cancel ').click(function () {
        $('.filter-catalog__item').removeClass('active');
        $('.filter-catalog__item input').attr('checked', false);
    })

    $('.filter-burger').click(function () {
        $('.filter-catalog').slideToggle();
    })

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

$(document).on('click', '.filter-catalog__item', function (event) {
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
        $('body').removeClass('passive');
    }
}); */

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




$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});//скролл до нужного блока

$("body").on('click', '[href*="#description"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});
$("body").on('click', '[href*="#characters"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});
$("body").on('click', '[href*="#sertificates"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

$(window).on('resize', function () {
    if ($(window).width() < 521) {
        $("body").on('click', '[href*="#description"]', function (e) {
            var fixed_offset = 15;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
            e.preventDefault();
        });
        $("body").on('click', '[href*="#characters"]', function (e) {
            var fixed_offset = 15;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
            e.preventDefault();
        });
        $("body").on('click', '[href*="#sertificates"]', function (e) {
            var fixed_offset = 15;
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



$(document).mouseup(function (e) {
    var div = $('.select');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.select').removeClass('is-active');
        $('.select__icon').removeClass('active');
    }
});

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};
select();



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
})

$(document).ready(function () {
	let original_positions = [];
	let da_elements = document.querySelectorAll('[data-da]');
	let da_elements_array = [];
	let da_match_media = [];

	if (da_elements.length > 0) {
		let number = 0;
		for (let index = 0; index < da_elements.length; index++) {
			const da_element = da_elements[index];
			const da_move = da_element.getAttribute('data-da');
			const da_array = da_move.split(',');
			if (da_array.length == 3) {
				da_element.setAttribute('data-da-index', number);
				original_positions[number] = {
					"parent": da_element.parentNode,
					"index": index_in_parent(da_element)
				};
				da_elements_array[number] = {
					"element": da_element,
					"destination": document.querySelector('.' + da_array[0].trim()),
					"place": da_array[1].trim(),
					"breakpoint": da_array[2].trim()
				}
				number++;
			}
		}
		dynamic_adapt_sort(da_elements_array);
		for (let index = 0; index < da_elements_array.length; index++) {
			const el = da_elements_array[index];
			const da_breakpoint = el.breakpoint;
			const da_type = "max";

			da_match_media.push(window.matchMedia("(" + da_type + "-width: " + da_breakpoint + "px)"));
			da_match_media[index].addListener(dynamic_adapt);
		}
	}

	function dynamic_adapt(e) {
		for (let index = 0; index < da_elements_array.length; index++) {
			const el = da_elements_array[index];
			const da_element = el.element;
			const da_destination = el.destination;
			const da_place = el.place;
			const da_breakpoint = el.breakpoint;
			const da_classname = "_dynamic_adapt_" + da_breakpoint;

			if (da_match_media[index].matches) {
				if (!da_element.classList.contains(da_classname)) {
					let actual_index;
					if (da_place == 'first') {
						actual_index = index_of_elements(da_destination)[0];
					} else if (da_place == 'last') {
						actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
					} else {
						actual_index = index_of_elements(da_destination)[da_place];
					}
					da_destination.insertBefore(da_element, da_destination.children[actual_index]);
					da_element.classList.add(da_classname);
				}
			} else {
				if (da_element.classList.contains(da_classname)) {
					dynamic_adapt_back(da_element);
					da_element.classList.remove(da_classname);
				}
			}
		}
		custom_adapt();
	}

	function dynamic_adapt_back(el) {
		const da_index = el.getAttribute('data-da-index');
		const original_place = original_positions[da_index];
		const parent_place = original_place['parent'];
		const index_place = original_place['index'];
		const actual_index = index_of_elements(parent_place, true)[index_place];
		parent_place.insertBefore(el, parent_place.children[actual_index]);
	}

	function index_in_parent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}

	function index_of_elements(parent, back) {
		const children = parent.children;
		const children_array = [];
		for (let i = 0; i < children.length; i++) {
			const children_element = children[i];
			if (back) {
				children_array.push(i);
			} else {
				if (children_element.getAttribute('data-da') == null) {
					children_array.push(i);
				}
			}
		}
		return children_array;
	}
	function dynamic_adapt_sort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function(a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	function custom_adapt() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
	window.addEventListener('resize', function (event) {

	});
});