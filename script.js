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
    
    let computerButton = document.getElementById(computerMove.toLowerCase() + "Button");

    if (computerMove == "Paper") {

        // Will clean up this disgusting code at some point; just wanted to see if it looks good in the UI
        
        if (roundResult == "win") {
            // Paper win
            computerButton.classList.add("computerSelectedUserWin", "computerSelectedUserWin:hover");
            computerButton.classList.remove("computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            rockButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            scissorsButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            // Paper draw
        } else if (roundResult == "draw") {
            computerButton.classList.add("computerSelectedUserDraw", "computerSelectedUserDraw:hover");
            computerButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            rockButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            scissorsButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");         
        } else {
            // Paper lose
            computerButton.classList.add("computerSelectedUserLose", "computerSelectedUserLose:hover");
            computerButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover");
            rockButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            scissorsButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
        }
    }
    if (computerMove == "Scissors") {
        if (roundResult == "win") {
            // Scissors win
            computerButton.classList.add("computerSelectedUserWin", "computerSelectedUserWin:hover");
            computerButton.classList.remove("computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            rockButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            paperButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
        } else if (roundResult == "draw") {
            // Scissors draw
            computerButton.classList.add("computerSelectedUserDraw", "computerSelectedUserDraw:hover");
            computerButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            rockButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            paperButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");          
        } else {
            // Scissors lose
            computerButton.classList.add("computerSelectedUserLose", "computerSelectedUserLose:hover");
            computerButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover");
            rockButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            paperButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
        }
    }
    if (computerMove == "Rock") {
        // Rock win
        if (roundResult == "win") {
            computerButton.classList.add("computerSelectedUserWin", "computerSelectedUserWin:hover");
            computerButton.classList.remove("computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            paperButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            scissorsButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
        } else if (roundResult == "draw") {
            // Rock draw
            computerButton.classList.add("computerSelectedUserDraw", "computerSelectedUserDraw:hover");
            computerButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            paperButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            scissorsButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");     
        } else {
            // Rock lose
            computerButton.classList.add("computerSelectedUserLose", "computerSelectedUserLose:hover");
            computerButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover");
            paperButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
            scissorsButton.classList.remove("computerSelectedUserWin", "computerSelectedUserWin:hover", "computerSelectedUserDraw", "computerSelectedUserDraw:hover", "computerSelectedUserLose", "computerSelectedUserLose:hover");
        }
    }
    
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

    paperButton.addEventListener("click", function(){
        paperButton.classList.add("userSelected", "userSelected:hover");
        rockButton.classList.remove("userSelected", "userSelected:hover");
        scissorsButton.classList.remove("userSelected", "userSelected:hover");

        let playerSelection = "Paper";
        newRound(playerSelection);
        return;
    });
    scissorsButton.addEventListener("click", function(){
        scissorsButton.classList.add("userSelected", "userSelected:hover");   
        rockButton.classList.remove("userSelected", "userSelected:hover");
        paperButton.classList.remove("userSelected", "userSelected:hover");

        let playerSelection = "Scissors";
        newRound(playerSelection);
        return;
    });
    rockButton.addEventListener("click", function(){
        rockButton.classList.add("userSelected", "userSelected:hover"); 
        paperButton.classList.remove("userSelected", "userSelected:hover");
        scissorsButton.classList.remove("userSelected", "userSelected:hover");

        let playerSelection = "Rock";
        newRound(playerSelection);
        return;
    });

}

// Call the start of the chain
playAgainButton.addEventListener("click", function(){

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