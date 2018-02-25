window.onload = function() {
    (function($) {
        var currentCallNumberElement = $('.current-call-number');

        currentCallNumberElement.addClass('active');

        setInterval(function() {
            var randomNumber = parseInt(Math.random() * 90 + 1);

            currentCallNumberElement.removeClass('active');
            setTimeout(function() {
                currentCallNumberElement
                    .attr('data-number', randomNumber)
                    .addClass('active');

                $('#number-caller-board__list-of-numbers>li.active')
                    .removeClass('active');
                $('#number-caller-board__list-of-numbers>li[data-number="'+ randomNumber +'"]')
                    .addClass('active');
            }, 1400);
        }, 4000);
    })(jQuery);
};