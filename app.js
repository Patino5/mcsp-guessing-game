// self invoking function to start the game
function main() {
    // object that will hold all players' names and best scores
    const bestScores = {};
    // Do you want to play again feature
    let playing = "yes";
    while (playing.toLowerCase() === 'yes') {
        guessingGame();
        playing = prompt('Do you want to play again?')
    }
    // if answer !yes will end game and respond thanks for playing
    alert("Thanks for playing!")

    // Guessing Game set up
    function guessingGame() {
        let guess = undefined;
        let guesses = [];
        let min = 1;
        let max = 100;
        // generate a random number between 1 and 100
        let randomNumber = 50//Math.round(Math.random() * (max - min + 1) + min);
        let user = prompt("What is your name?").trim();

        //ensure guess in a number within range of min and max
        // function aRealNumber(num) {
        //     num = parseInt(prompt('What is your guess?'));
        //     while (num > max && num < min || num === NaN) {
        //         prompt(`Guess not within range, please pick between ${min} and ${max}.`)
        //     }
        // }

        // block of code is the while loop of conditional checking guessed number against randomNumber
        while (guess !== randomNumber) {
            guess = parseInt(prompt(`${user}, guess a number between ${min} and ${max}.`))
            guesses.push(guess)
            if (guess === randomNumber) {
                alert(`Correct, ${user}! It took you, ${guesses.length} guesses. These were your guesses ${guesses}.`)
                //  envokes feature 7 after finding the correct number.
                compareScore(user, guesses);
            } else if (guess > randomNumber) {
                alert(`Sorry ${user}, too high, guess lower than ${guess} .`)
            } else {
                alert(`Sorry ${user}, too low, guess higher than ${guess}.`)
            }
        }

        // feature 7 compare score with users previous score and display the difference.
        function compareScore(user, guesses) {
            let scoreDifference = bestScores[user] - guesses.length;
            let usersBest = bestScores[user]
            let currentScore = guesses.length

            // creates new user in bestScores obj if new user
            if (bestScores[user] === undefined) {
                bestScores[user] = guesses.length;
                alert(`${user}, ${guesses.length} is your best score!`)
            }
            // user's current score beats bestScore, updates bestScore w/ currentScore
            else if (bestScores[user] > guesses.length) {
                alert(`${user}! You beat your best score of ${usersBest} by ${scoreDifference}.`);
                bestScores[user] = guesses.length;
            }
            // user's bestScore is better than current score and difference between    
            else if (bestScores[user] < guesses.length) {
                alert(`${user}, your best score of: ${usersBest} was ${scoreDifference * -1} better.`)
            }
            // user ties bestScore    
            else (
                alert(`${user}, you tied your best score of: ${bestScores[user]}`)
            )
        }
    }
}
main();
// create a range new range after each guess
// r num lower first   r num  higher than first
// min and firstGuess || firstGuess and max 

// lwr thn nxt       hghr thn nxt bt lwr thn 1st   hghr thn 1st bt lwr thn nxt  hghr thn 1st
// min and nextGuess || nextGuess btwn firstGuess || firstGuess btwn nextrGuess || nextGuess and max
/*
let min = 1;
let max = 100;
let lastGuess = guesses.pop()
let firstGuess = guesses[0]

if (guess < max)
    return `${user} guess too low, guess between ${guess} and ${max}`
    min = guess;
if (min < guess){
    return `${user} guess too high, guess between ${min} and ${guess}`
    max = guess;
}
if (min < lastGuess)
    return `${user} guess too high, guess between ${min} and ${guess}` 
if (lastGuess < max)
    return `${user} guess too low, guess between ${guess} and ${max}`

if (lastGuess < firstGuess)

    return `${user} guess too low, guess between ${lastGuess} and ${firstGuess}

if (firstGuess >)
*/