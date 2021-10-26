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
    let userPlay = prompt("What move do you want to make? (paper / scissors / rock)")
    console.log(`Your choice was ${userPlay}.`)
    console.log(`The computer's choice was ${computerChoice}.`)
    if (userPlay.toLowerCase() === "paper") {
        if (computerChoice === "paper") {
            draw()
        } else if (computerChoice === "scissors") {
            lose()
        } else {
            win()
        }
    } else if (userPlay.toLowerCase() === "scissors") {
        if (computerChoice === "paper") {
            win()
        } else if (computerChoice === "scissors") {
            draw()
        } else {
            lose()
        }
    } else if (userPlay.toLowerCase() === "rock") {
        if (computerChoice === "paper") {
            lose()
        } else if (computerChoice === "scissors") {
            win()
        } else {
            draw()
        }
    } else {
        console.log("That was not a valid option.")
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

// Main loop begins here
currentRound()