function computerPlay() {
    let currentPlay = Math.floor(Math.random() * 3);
    if (currentPlay === 1) {
        return "paper";
    } else if (currentPlay === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

function currentRound() {
    let computerChoice = computerPlay()
    let userPlay = prompt("What move do you want to make? (paper / scissors / rock)").toLowerCase()
    console.log(`Your choice was ${userPlay}.`)
    console.log(`The computer's choice was ${computerChoice}.`)
    if (userPlay === "paper") {
        if (computerChoice === "paper") {
            draw()
        } else if (computerChoice === "scissors") {
            lose()
        } else {
            win()
        }
    } else if (userPlay === "scissors") {
        if (computerChoice === "paper") {
            win()
        } else if (computerChoice === "scissors") {
            draw()
        } else {
            lose()
        }
    } else if (userPlay === "rock") {
        if (computerChoice === "paper") {
            lose()
        } else if (computerChoice === "scissors") {
            win()
        } else {
            draw()
        }
    } else {
        console.log("That was not a valid option.");
        return false
    }
}

function win() {
    console.log("You win!")
    winCount += 1;
}

function draw() {
    console.log("You drew!")
    drawCount += 1;
}

function lose() {
    console.log("You lose!")
    loseCount += 1;
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`It is now round ${i}. Let's go!`)
        let validInput = currentRound()
        if (validInput == false) {
            i--;
        }
    }
}

function mainLoop() {
    console.log("Welcome to paper scissors rock. We'll play 5 rounds - winner takes all.");
    game();
    console.log(`You won ${winCount} games, lost ${loseCount} games, and drew ${drawCount} games.`);
    if (winCount > loseCount) {
        console.log("Looks like you're the winner, champ!")
    }
}

function playAgain() {
    let playAgain = prompt("Do you want to play again? (y/n)");
    if (playAgain.toLowerCase() == "y") {
        let winCount = 0;
        let loseCount = 0;
        let drawCount = 0;
        mainLoop()
    } else if (playAgain.toLowerCase() == "n") {
        console.log("Thanks for playing!");
    } else {
        console.log("That was not a valid option.")
    }
}

// Main loop begins here
let winCount = 0;
let loseCount = 0;
let drawCount = 0;
mainLoop()
playAgain()
