$(document).ready(function () {
    $('.popup-link').magnificPopup({
        type: 'inline',
        removalDelay: 400,

    });
    $('.send-sms').magnificPopup({
        items: {
            src: '#message-sent',
            removalDelay: 400,
        },
    });
    $('.button-reg').magnificPopup({
        items: {
            src: '#expect-call',
            removalDelay: 400,
        },
    });
    $('.button-restore').magnificPopup({
        items: {
            src: '#check-yuor-email',
            removalDelay: 400,
        },
    });
    $('.activities__item').magnificPopup({
        items: {
            src: '#line-of-business',
            removalDelay: 400,
        },
    });
    $('.contact-with-manager').magnificPopup({
        items: {
            src: '#need-help',
            removalDelay: 400,
        },
    });
    $('.baskets__to-clear').magnificPopup({
        items: {
            src: '#delite-allproduct',
            removalDelay: 400,
        },
    });
    $('.custom').magnificPopup({
        items: {
            src: '#custom-approval',
            removalDelay: 400,
        },
    });
    $('.limited').magnificPopup({
        items: {
            src: '#limit-exceeded',
            removalDelay: 400,
        },
    });
    $('.control__button').magnificPopup({
        items: {
            src: '#delete-selected-list',
            removalDelay: 400,
        },
    });

    $('.sidebar-lk__link_claim, .claim').magnificPopup({
        items: {
            src: '#making-claim',
            removalDelay: 400,
        },
    });

    $('.del-card-matrix').magnificPopup({
        items: {
            src: '#editing-matrix',
            removalDelay: 400,
        },
    });

    $('.filter-matrix__button').magnificPopup({
        items: {
            src: '#extend-matrix',
            removalDelay: 400,
        },
    });

});
