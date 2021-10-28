function getComputerMove() {
    let currentPlay = Math.floor(Math.random() * 3);
    if (currentPlay === 1) {
        return "paper";
    } else if (currentPlay === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

function playRound(playerMove) {
    let computerChoice = getComputerMove()
    console.log(`Your choice was ${playerMove}.`)
    console.log(`The computer's choice was ${computerChoice}.`)
    if (playerMove === "paper") {
        if (computerChoice === "paper") {
            draw()
        } else if (computerChoice === "scissors") {
            lose()
        } else {
            win()
        }
    } else if (playerMove === "scissors") {
        if (computerChoice === "paper") {
            win()
        } else if (computerChoice === "scissors") {
            draw()
        } else {
            lose()
        }
    } else if (playerMove === "rock") {
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
}

function draw() {
    console.log("You drew!")
}

function lose() {
    console.log("You lose!")
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`It is now round ${i}. Let's go!`)
        let validInput = playRound()
        if (validInput == false) {
            i--;
        }
    }
}

// Main loop begins here
let winCount = 0;
let loseCount = 0;
let drawCount = 0;


function getPlayerMove() {
    console.log("huh")
}

document.getElementById("paperButton").addEventListener("click", function(){ playRound("paper");} ); 
document.getElementById("scissorsButton").addEventListener("click", function(){ playRound("scissors");} ); 
document.getElementById("rockButton").addEventListener("click", function(){ playRound("rock");} ); 
