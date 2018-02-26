window.onload = function() {

    (function() {
        var ballRollingInterval,
            gameBallsContainer = $('#game-balls-container'),
            listOfNumbersElement = $('#number-caller-board__list-of-numbers'),
            currentGameBalls = gameBallsContainer.find('#game-balls');

        window.noBallRolling = function() {
            clearInterval(ballRollingInterval);
            gameBallsContainer.removeClass('active');
        };
        window.startBallRolling = function() {
            gameBallsContainer.addClass('active');
            ballRollingInterval = setInterval(function() {
                var randomNumber = parseInt(Math.random() * 90 + 1);
                listOfNumbersElement
                    .find('li.active')
                    .removeClass('active');
                listOfNumbersElement
                    .find('li[data-number="' + randomNumber + '"]')
                    .addClass('active');
                console.log('Generated random number: ', randomNumber);
                currentGameBalls
                    .append('<li>' + randomNumber + '</li>');
            }, 3000);
        };
    })(jQuery);

    window.startBallRolling();
};