 // Creates an array that lists out all of the letters in alphabet.
 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 // Creating gloabal variables to hold the number of wins, losses, guesses left, and empty array to show guesses so far.
 var wins = 0;
 var losses = 0;
 var guessesLeft = 10;
 var guessesSoFar = [];

 // Create variables that hold references to HTML to update.
 var directionsText = document.getElementById("directions-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesLeftText = document.getElementById("guesses-left");
 var guessesSoFarText = document.getElementById("guesses-SoFar");

 //generate random letter
 function rndLetter() { 
     var computerPick = letters[Math.floor(Math.random() * letters.length)];
     return computerPick;
 };
 
 
function guessingGame() {
 //Pick new random letter
 var computerLetterChoice = rndLetter();
 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

   // Determines which key was pressed.
   var userGuess = event.key;

   // This logic determines the outcome of the game and increments the appropriate number
   if (userGuess === computerLetterChoice) {
       wins++;
       guessesLeft = 10;
       guessesSoFar = [];
       guessingGame();
   } else if ((userGuess !== computerLetterChoice) && (guessesLeft >= 1)) {
       guessesLeft--;
       guessesSoFar.push(userGuess);
   } else {
       losses++;
       guessesLeft = 10;
       guessesSoFar = [];
       guessingGame();    
   }

     

     // Display wins, losses, guesses  remaining, and letters guessed so far.
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "Losses: " + losses;
     guessesLeftText.textContent = "Guesses left: " + guessesLeft;
     guessesSoFarText.textContent = "Your guesses so far: " + guessesSoFar;
   };
 };
 guessingGame();



