// Initialise the variables
const resultText = document.querySelector('#result');
resultText.textContent = ``;

const playerMoveText = document.querySelector('#playerMove');
playerMoveText.textContent = ``;

const computerMoveText = document.querySelector('#computerMove');
computerMoveText.textContent = ``;

const playerScoreText = document.querySelector('#playerScore');
playerScoreText.textContent = "Your score: ";

const computerScoreText = document.querySelector('#computerScore');
computerScoreText.textContent = "Computer score: ";

const currentRoundBox = document.querySelector('#currentRound');
currentRoundBox.textContent = `Current round: 1`;

const playAgainButton = document.querySelector('#playAgain');
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const rockButton = document.getElementById("rockButton");

let currentRound = 1;
let playerScore = 0;
let computerScore = 0;

// Function to generate the computer's response
function getComputerMove() {
    let currentPlay = Math.floor(Math.random() * 3);
    if (currentPlay === 1) {
        computerMove = "Paper";
    } else if (currentPlay === 2) {
        computerMove = "Scissors";
    } else {
        computerMove = "Rock";
    }
    return computerMove;
}

// See who wins one round
function evaluateWinner(player, computer) {
    if ( (playerMove == "Paper" && computerMove == "Paper") || (playerMove == "Scissors" && computerMove == "Scissors") || (playerMove == "Rock" && computerMove == "Rock") ) {
        return "draw";
    } else if ( (playerMove == "Paper" && computerMove == "Rock") || (playerMove == "Scissors" && computerMove == "Paper") || (playerMove == "Rock" && computerMove == "Scissors") ) {
        playerScore ++;
        return "win";
    } else {
        computerScore ++;
        return "lose";
    }
}

// Put everything into the round itself
function newRound(player) {
    computerMove = getComputerMove();
    playerMove = player;
    roundResult = evaluateWinner(playerMove, computerMove);

    // Print results
    playerMoveText.textContent = `Your move: ${playerMove}`;
    computerMoveText.textContent = `Computer move: ${computerMove}`;
    result.textContent = `You ${roundResult}!`;
    playerScoreText.textContent = `Your score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;

    // Update current round
    currentRound ++;
    currentRoundBox.textContent = `Current round: ${currentRound}`;
    return;
}

function gameOver(){
    playerMoveText.textContent = `Your final score: ${playerScore}`;
    computerMoveText.textContent = `Computer final score: ${computerScore}`;
    gameIsDone = true;
    if (playerScore > computerScore) {
        result.textContent = `You won!`;
    } else {
        result.textContent = `You lost!`;
    }
}

function newGame() {
    playerScore = 0;
    computerScore = 0;

    console.log("I'm in the function 'new game'");

    paperButton.addEventListener("click", function(){
        console.log("I'm in the function 'empty'");
        let playerSelection = "Paper";
        newRound(playerSelection);
        console.log("I've just finished in the function 'new round'");
        return;
    });
    scissorsButton.addEventListener("click", function(){
        let playerSelection = "Scissors";
        newRound(playerSelection);
        return;
    });
    rockButton.addEventListener("click", function(){
        let playerSelection = "Rock";
        newRound(playerSelection);
        return;
    });

}

// Call the start of the chain
playAgainButton.addEventListener("click", function(){
    console.log("MMMMMMMMM");

    // Clear results
    playerMoveText.textContent = ``;
    computerMoveText.textContent = ``;
    result.textContent = ``;
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    playerScoreText.textContent = `Your score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    currentRoundBox.textContent = `Current round: ${currentRound}`;
    newGame();
});
newGame();