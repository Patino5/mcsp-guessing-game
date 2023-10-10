// self invoking function to start the game
function startGame() {
    // object that will hold all players' names and best scores
    const bestScores = {};
    
    function playAgain(user){
        let playing = prompt(`${user}, do you want to play again?`).toLowerCase()
        if(playing === 'yes'){
            guessingGame();
        } else 
        //if answer !yes will end game and respond thanks for playing
            alert(`Thanks for playing ${user}!`)
    }

    // Guessing Game set up function
    function guessingGame() {
        let guess;
        let guesses = [];
        // start range, changes with response of user 
        let min = 1;
        let max = 100;
        // generate a random number between 1 and 100 for number to guess
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        // gets user's name
        let user = prompt("What is your name?").trim();

        // block of code is the while loop of conditional checking guessed number against randomNumber
        while (guess !== randomNumber) {
            guess = parseInt(prompt(`${user}, guess a number between ${min} and ${max}.`))
            // only counts guesses within the range and are real numbers
            if (guess >= min && guess <= max && guess !== NaN) {
                guesses.push(guess)
                if (guess === randomNumber) {
                    alert(`Correct, ${user}!\nIt took you, ${guesses.length} guesses. These were your picks\n ${guesses}.`)
                    //  envokes feature 7 after finding the correct number.
                    compareScore(user, guesses);
                    playAgain(user);
                }
                // guess is greater than randomNumber, will change range from guess to max
                else if (guess > randomNumber) {
                    if (max > guess) max = guess;
                    alert(`Sorry ${user}, too high.\nGuess between ${min} and ${max}.`)
                }
                // guess is lower than randomNumber, will change range from guess to min
                else {
                    if (min < guess) min = guess;
                    alert(`Sorry ${user}, too low.\nGuess between ${min} and ${max}.`)
                }
            } else {
                guess = alert(`${guess} not within range, will not count.\nPlease pick a number between ${min} and ${max}.`);
            }
        }

        // feature 7 compare score with users previous score and display the difference.
        function compareScore(user, guesses) {
            let scoreDifference = bestScores[user] - guesses.length;
            let usersBest = bestScores[user]
            let currentScore = guesses.length

            // creates new user in bestScores obj if new user
            if (bestScores[user] === undefined) {
                bestScores[user] = currentScore;
                alert(`${user}, ${currentScore} is your best game!`)
            }
            // user's current score beats bestScore, updates bestScore w/ currentScore
            else if (usersBest > currentScore) {
                alert(`${user}! You beat your best game of ${usersBest} by ${scoreDifference}.`);
                bestScores[user] = currentScore;
            }
            // user's bestScore is better than current score and difference between    
            else if (usersBest < currentScore) {
                alert(`${user}, your best game of ${usersBest} was ${scoreDifference * -1} better.`)
            }
            // user ties bestScore    
            else (
                alert(`${user}, you tied your best game of ${usersBest}`)
            )
        }
    }
    guessingGame();
}
startGame();


/*

*/