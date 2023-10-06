// Guessing Game
// generate a random number between 1 and 100
let randomNumber = Math.round(Math.random() * 100) + 1;

// generate variables guess and guesses 
let guess = undefined;
let guesses = [];
let user = prompt("what is your name?"); 



while (guess !== randomNumber){
    guess = parseInt(prompt(`${user}, guess a number between 1 and 100.`))
    guesses.push(guess)
    if (randomNumber === guess){
        alert(`Correct, ${user}! It took you ${guesses.length} guesses. These are the numbers you guessed ${guesses}.`)
    } else if (guess > randomNumber)  {
        alert(`Too high ${user}, guess lower.`)
    } else if (guess < randomNumber){
        alert(`Too low ${user}, guess higher.`)
    }
}