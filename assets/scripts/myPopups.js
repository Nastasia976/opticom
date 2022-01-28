$(document).ready(function () {
    $('.popup-link').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $('.send-sms').magnificPopup({
        items: {
            src: '#message-sent',
        },
    });
    $('.button-reg').magnificPopup({
        items: {
            src: '#expect-call',
        },
    });
    $('.button-restore').magnificPopup({
        items: {
            src: '#check-yuor-email',
        },
    });
    $('.activities__item').magnificPopup({
        items: {
            src: '#line-of-business',
        },
    });
    $('.contact-with-manager').magnificPopup({
        items: {
            src: '#need-help',
        },
    });
    $('.baskets__to-clear').magnificPopup({
        items: {
            src: '#delite-allproduct',
        },
    });
    $('.custom').magnificPopup({
        items: {
            src: '#custom-approval',
        },
    });
    $('.limited').magnificPopup({
        items: {
            src: '#limit-exceeded',
        },
    });
    $('.control__button').magnificPopup({
        items: {
            src: '#delete-selected-list',
        },
    });

    $('.sidebar-lk__link_claim, .claim').magnificPopup({
        items: {
            src: '#making-claim',
        },
    });
    
    $('.del-card-matrix').magnificPopup({
        items: {
            src: '#editing-matrix',
        },
    });
    
    $('.filter-matrix__button').magnificPopup({
        items: {
            src: '#extend-matrix',
        },
    });

});