$(document).ready(function () {

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

    
    $('.location').hover(
        function(){
            $('.location').css("opacity", "1");
            $(this).css("opacity", "0");
            $('.location-main').css("opacity", "1");
            $('.popup__title').html($(this).attr('location-data'));
            $('.popup').show();
        },
        function() {
            $('.location').css("opacity", "0");
            $('.popup').hide();
            
        }
    );

});



    









