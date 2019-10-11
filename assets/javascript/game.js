$(document).ready(function() {
    // At start of game, randomly generate target number 
    let targetNumberValue;
    // Wins, Losses, and Total Score are displayed on the screen
    let wins = 0;
    let losses = 0;
    let currentScore = 0;
    let crystalOne = Math.floor(Math.random() * 11 + 1);
    let crystalTwo = Math.floor(Math.random() * 11 + 1);
    let crystalThree = Math.floor(Math.random() * 11 + 1);
    let crystalFour = Math.floor(Math.random() * 11 + 1);

    targetNumberGenerator();

    //create function that generates a random number

    function targetNumberGenerator(){
        targetNumberValue = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    }

    // $('#oneValue').text(crystalOne);
    // $('#twoValue').text(crystalTwo);
    // $('#threeValue').text(crystalThree);
    // $('#fourValue').text(crystalFour);
    $('#targetNumber').text(targetNumberValue);
    $('#currentscore').text(currentScore);
    

    // $('#crystal-well').on('click', 'li' function(){
    //      //do stuff when someone clicks on any crystal list item
    //     //if statements go here etc.
        
    //     };

    // Add onClick functions for each button
    // When a button is clicked, increment the currentscore by the crystal value
    $("#crysclick1").click(function() {
        console.log('hitting function')
        currentScore += crystalOne;
        $('#currentscore').text(currentScore)
        // Below is another way to write line 39
        // currentscore = currentscore + crystalOne;
    });
    $("#crysclick2").click(function() {
        console.log('hitting function')
        currentScore += crystalTwo;
        $('#currentscore').text(currentScore)
    });
    $("#crysclick3").click(function() {
        console.log('hitting function')
        currentScore += crystalThree;
        $('#currentscore').text(currentScore)
    });
    $("#crysclick4").click(function() {
        console.log('hitting function')
        currentScore += crystalFour;
        $('#currentscore').text(currentScore)
    });
    // What happens if the currentscore is equal to the targetscore?
    if (currentScore == targetNumberValue) {
        wins++;
        document.getElementById("wins").textContent = wins;
        alert("You Won! You must be in tune with the Magic Crystals! you have " + wins + " wins");
        currentScore = 0;
        targetNumberGenerator();
    };
    // What happens if the currentscore goes over the targetscore?
    if (currentScore > targetNumberValue) {
        losses++;
        document.getElementById("losses").textContent = losses;
        alert("You Lost! You should probably go meditate and get in tune with the Magic Crystals and your inner being! You have " + losses + "losses");
        currentScore = 0;
        targetNumberGenerator();
    };

});

    
// There will be four crystals displayed as buttons on the page.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.



// The player wins if their total score matches the random number from the beginning of the game.


// The player loses if their score goes above the random number.


// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.



// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// Option 1 Game design notes


// The random number shown at the start of the game should be between 19 - 120.


// Each crystal should have a random hidden value between 1 - 12.
