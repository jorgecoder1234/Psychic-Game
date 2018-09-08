
//Defining variables
var letterbase = "erqwopghjklzxcvbntyuimasdf"       
var wins = 0;
var losses = 0;
var tries = 10;
var usedarr = [];
var randomletter = randomletter;


//Defining a function for the computer guess
function computerguess() {
      randomletter = letterbase[Math.floor(Math.random() * letterbase.length)];
      console.log(randomletter);

}

//Asking for a key
document.onkeyup = function (event) {
      var userGuess = event.key;


//If there is a match between the letterbase  and the user letter we increase counters
      if (userGuess === randomletter) {
            wins++;
            tries = 10;
            usedarr = [];

      }

//We drecrease  the counter if there is not mach
      computerguess();
      if (userGuess !== randomletter) {
            tries--;

      }
 
      //Resetting the tries
      if (tries == 0) {
            losses++;
            usedarr = []
            tries = 10;
      }

         //showing the user letter choose in the array
         usedarr.push(userGuess);
      
         //Displaying the counters
      document.getElementById('userGuess').innerHTML = usedarr;
      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
      document.getElementById('tries').innerHTML = tries;

}

