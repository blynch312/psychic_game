var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var guessLetters = [];
var targetLetter = null;


var updateGuessSoFar = function () {
    document.querySelector("#guessSoFar").innerHTML = guessLetters.join(", ");
};

var updateGuessLeft = function () {
    document.querySelector("#guessLeft").innerHTML = guessLeft;
};

var updateTargetLetter = function () {
    targetLetter = letters[Math.floor(Math.random() * letters.length)];
};

var gameReset = function () {
    updateTargetLetter();
    updateGuessLeft();
    updateGuessSoFar();
    guessLeft = 9;
    guessLetters = [];
};

updateGuessLeft();
updateTargetLetter();

document.onkeyup = function (event) {
    guessLeft--;
    var letter = String.fromCharCode(event.which).toLowerCase();
    guessLetters.push(letter);
    updateGuessLeft();
    updateGuessSoFar();

    if (letter === targetLetter) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        gameReset();
    }
    if (guessLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        gameReset();
    }


}