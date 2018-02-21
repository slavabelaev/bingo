(function($) {
    feather.replace();
    AOS.init();

    $('#carousel .carousel-item:eq(0)').addClass('active');

    $('.carousel').carousel({
        interval: false
    });

    $(".carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical"
    });
})(jQuery);