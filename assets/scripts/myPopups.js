$(document).ready(function () {
    $('.popup-link').magnificPopup({
        type: 'inline',
        removalDelay: 400,
        mainClass: 'mfp-with-fade',
        callbacks: {
            open: function() {
                $('body').css('overflow', 'hidden');
            },
            close: function() {
                $('body').css('overflow', '');
            },
        }
    });
    $('.send-sms').magnificPopup({
        items: {
            src: '#message-sent',
        },
        removalDelay: 250,
        mainClass: 'mfp-with-fade',
        closeOnContentClick: true,
    });
    $('.button-restore').magnificPopup({
        items: {
            src: '#check-yuor-email',
        },
        removalDelay: 250,
        closeOnContentClick: true,
    });
    $('.activities__item').magnificPopup({
        items: {
            src: '#line-of-business',
        },
        removalDelay: 250,
    });
    $('.contact-with-manager').magnificPopup({
        items: {
            src: '#need-help',
        },
        removalDelay: 250,
    });
    $('.baskets__to-clear').magnificPopup({
        items: {
            src: '#delite-allproduct',
        },
        removalDelay: 250,
    });
    $('.custom').magnificPopup({
        items: {
            src: '#custom-approval',
        },
        removalDelay: 250,
    });
    $('.limited').magnificPopup({
        items: {
            src: '#limit-exceeded',
        },
        removalDelay: 250,
    });
    $('.control__button').magnificPopup({
        items: {
            src: '#delete-selected-list',
        },
        removalDelay: 250,
    });

    $('.sidebar-lk__link_claim, .claim').magnificPopup({
        items: {
            src: '#making-claim',
        },
        removalDelay: 250,
    });

    $('.del-card-matrix').magnificPopup({
        items: {
            src: '#editing-matrix',
        },
        removalDelay: 250,
    });

    $('.filter-matrix__button').magnificPopup({
        items: {
            src: '#extend-matrix',
        },
        removalDelay: 250,
    });
    $('.button-reg').magnificPopup({
        items: {
            src: '#reg-step2',
        },
        removalDelay: 250,
    });
    $('.button-reg2').magnificPopup({
        items: {
            src: '#reg-step3',
        },
        removalDelay: 250,
    });
    $('.button-reg-end').magnificPopup({
        items: {
            src: '#expect-call',
        },
        removalDelay: 250,
        closeOnContentClick: true,
    });


});


$('._ok').click(function(){
    $.magnificPopup.close();
 });