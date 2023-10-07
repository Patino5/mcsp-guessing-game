function main() {
    const bestScores = {};
    // Guessing Game
    function guessingGame() {
        // generate a random number between 1 and 100
        let randomNumber = Math.round(Math.random() * 101);
        // generate variables guess and guesses 
        let guess = undefined;
        let guesses = [];
        let user = prompt("What is your name?").trim();

        // feature 7 compare score with users previous score and display the difference.
        function compareScore(user, guesses) {
            let scoreDifference = bestScores[user] - guesses.length;
            //let usersBest = bestScores[user]

            if (bestScores[user] === undefined) {
                bestScores[user] = guesses.length;
                alert(`${user}, ${guesses.length} is your best score!`)
            } else if (bestScores[user] > guesses.length) {
                bestScores[user] = guesses.length;
                alert(`${user}! You beat your best score by ${scoreDifference}.`);
            } else if (bestScores[user] < guesses.length) {
                alert(`${user}, your best score was ${scoreDifference * -1} better.`)
            } else (
                alert(`${user}, you tied your best score of ${bestScores[user]}`)
            )
        }

        // block of code which is the while loop of conditional checking guess against randomNumber

        while (guess !== randomNumber) {
            guess = parseInt(prompt(`${user}, guess a number between 1 and 100.`))
            guesses.push(guess)
            if (randomNumber === guess) {
                alert(`Correct, ${user}! It took you, ${guesses.length} guesses. These are your guessed numbers ${guesses}.`)
            } else if (guess > randomNumber) {
                alert(`Sorry ${user}, too high, guess lower.`)
            } else {
                alert(`Sorry ${user}, too low, guess higher.`)
            }
        }
        //  envoke feature 7 after the while loop is complete.
        compareScore(user, guesses);
    }

    // Do you want to play again feature
    let playing = "yes";
    while (playing.toLowerCase() === 'yes') {
        guessingGame();
        playing = prompt('Do you want to play again?')
    }
    alert("Thanks for playing!")
}
main();