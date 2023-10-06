const bestScores = {};
// Guessing Game
function guessingGame() {
    // generate a random number between 1 and 100
    let randomNumber = Math.round(Math.random() * 101);
    // generate variables guess and guesses 
    let guess = undefined;
    let guesses = [];
    let user = prompt("What is your name?").trim();


    function compareScore(user, guesses) {
        let scoreDifference = bestScores[user] - guesses.length;

        if (bestScores[user] === undefined) {
            bestScores[user] = guesses.length;
            alert(`${guesses.length} is your best score ${user}!`)
        } else if (bestScores[user] > guesses.length) {
            bestScores[user] = guesses.length;
            alert(`You beat your best score by ${scoreDifference}`);
        } else if (bestScores[user] < guesses.length) {
            alert(`${user}, your best score was ${scoreDifference * -1} better.`)
        } else (
            alert(`${user}, you tied your best score of ${bestScores[user]}`)
        )
    }

    while (guess !== randomNumber) {
        guess = parseInt(prompt(`${user}, guess a number between 1 and 100.`))
        guesses.push(guess)
        if (randomNumber === guess) {
            alert(`Correct, ${user}! It took you ${guesses.length} guesses. These are the numbers you guessed ${guesses}.`)
        } else if (guess > randomNumber) {
            alert(`Too high ${user}, guess lower.`)
        } else {
            alert(`Too low ${user}, guess higher.`)
        }
    }
    compareScore(user, guesses);
}
let playing = "yes";
while (playing.toLowerCase() === 'yes') {
    guessingGame();
    playing = prompt('Do you want to play again?')
}
alert("Thanks for playing!")
