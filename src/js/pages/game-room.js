window.onload = function() {

    (function() {
        var timeBetweenBalls = 1000,
            ballRollingDelay = 16 * 153,
            ballRollingInterval,
            gameContainer = $('#main'),
            listOfNumbersElement = $('#number-caller-board__list-of-numbers'),
            currentGameBallElement = gameContainer.find('#current-game-ball');

        function generateBall() {
            var randomNumber = parseInt(Math.random() * 90 + 1),
                appendedNumberElement = $('<span>' + randomNumber + '</span>');

            listOfNumbersElement
                .find('li[data-number="' + randomNumber + '"]')
                .addClass('selected');
            //console.log('Generated random number: ', randomNumber);

            // Finding empty cell
            currentGameBallElement.empty().append(appendedNumberElement);
        }

        window.noBallRolling = function() {
            gameContainer.attr('data-game-in-progress', false);

            clearInterval(ballRollingInterval);
        };
        window.startBallRolling = function() {
            gameContainer.attr('data-game-in-progress', true);



            setTimeout(function() {
                generateBall();
                ballRollingInterval = setInterval(generateBall, timeBetweenBalls);
            }, ballRollingDelay);
        };
    })(jQuery);

    window.startBallRolling();
};