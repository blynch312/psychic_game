var options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var computerChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for (var i = 0; i < options.length; i++) {
  console.log(options[i]);
}

function reset() {
  document.getElementById("wins").innerText = 0;
  document.getElementById("losses").innerText = 0;
  document.getElementById("guess-left").innerText = 9;
  document.getElementById("guesses-so-far").innerText = "";
}

document.onkeypress = function() {
  var userGuess = event.key;
  var guessCount = 5;
  var wins = 0;
  var losses = 0;
  var computerGuess =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  var guessesText = document.getElementById("guesses-so-far").innerText;
  document.getElementById("guesses-so-far").innerText =
    guessesText + event.key + ", ";
  if (options.indexOf(userGuess) > -1) {
    if (userGuess == computerGuess) {
      alert("You Win!");
      wins++;

      if (userGuess !== computerGuess) {
        guessCount--;
        options.push(userGuess);
      }

      if (guessCount === 0) {
        reset();
        guessCount = 5;
        losses++;
        guessChoice = [];
      } else {
        document.getElementById("guesses-so-far").innerText =
          guessesText + event.key + ", ";
      }
    }
  }
};
