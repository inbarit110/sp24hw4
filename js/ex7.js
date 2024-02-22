let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    let userGuess = prompt("Guess a number between 1 and 100:");
    attempts++;

    if (userGuess < randomNumber) {
        alert("Too low, guess again");
        guessNumber();
    } else if (userGuess > randomNumber) {
        alert("Too high, guess again");
        guessNumber();
    } else {
        alert(`Correct! It took you ${attempts} attempts to guess the correct number.`);
    }
}

guessNumber();