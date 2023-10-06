// Guessing Game
// generate a random number between 1 and 100
let randomNumber = Math.round(Math.random() * 100) + 1;

// generate variables guess and guesses 
let guess = undefined;
let guesses = [];


while (guess !== randomNumber){
    guess = parseInt(prompt("Guess a number between 1 and 100."))
    guesses.push(guess)
    if (randomNumber === guess){
        alert(`You are Right! It took you ${guesses.length} guesses. These are the numbers you guessed ${guesses}.`)
    } else if (guess > randomNumber)  {
        alert("Too high, guess lower")
    } else if (guess < randomNumber){
        alert("Too low, guess higher")
    }
}