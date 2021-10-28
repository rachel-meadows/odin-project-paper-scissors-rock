function game() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;

    playGame();
}

function playGame(){
    playerOptions = document.getElementsByClassName("playerMoveButton");
    for(let i=0; i<=playerOptions.length; i++) {
        console.log(playerOptions[i])
    }

}

playGame();

// Create a function playGame() and inside the function use DOM manipulation to get hold of all the three buttons we created in HTML for player input. Create an array playerOptions which will contain all three buttons as its elements. Similarly, create an array for computer options.

// Use forEach() loop on playerOptions so that we can add an event listener on all buttons with a single piece of code. Inside the loop increment moves counter by 1 display moves left on the screen by subtracting moves from 10. Generate a random value for the computer option and compare it with the player’s input.

// Create a function winner() which will receive two arguments one the player’s input and the other the computer’s option  The function will decide who wins the point among the player and computer.

// Create a function gameOver() which will display the final result with reload button. The function will be called when moves will become equals to 5.

// Call the playGame() function inside the game() function.

// Now call the game() function at the end of the file.
