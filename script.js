
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    let play = getRandomInt(1, 3);
    let computerSelection;
        if (play === 1){
                computerSelection = "rock";}
        else if (play === 2){
                computerSelection = "paper";}
        else {
                computerSelection = "scissors";}
            
    return computerSelection;
    
   
}

function playerSelect() {
    let selection = prompt("Insert your play")
    selectionCase = selection.toLowerCase();
    let play;
    switch (selectionCase) {
        case "rock":
            play = "rock";
            break;
        case "paper":
            play = "paper";
            break;
        case "scissors":
            play = "scissors";
            break;  
        default:
            console.log("Invalid input");       
        }
        
    return play;
}

const PLAYERVICTORY = "You win!";
const COMPUTERVICTORY = "Computer Wins!";
const TIE = "it's a tie!"


function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        return TIE;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return COMPUTERVICTORY;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return PLAYERVICTORY;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return PLAYERVICTORY;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return COMPUTERVICTORY;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return COMPUTERVICTORY;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return PLAYERVICTORY;
    }
}


function game() {
    let count = 5;
    let current = 0;
    let computerScore = 0;
    let playerScore = 0;
    while (current < count) {
        playerSelection = playerSelect();
        computerSelection = computerPlay();
        console.log(`Round: ${current + 1}`);
        console.log(`Computer Plays: ${computerSelection}`);
           if (playRound(playerSelection, computerSelection) === PLAYERVICTORY) {
            console.log(PLAYERVICTORY);
            playerScore++;
            current++;
        }
        else if (playRound(playerSelection, computerSelection) === COMPUTERVICTORY) {
            console.log(COMPUTERVICTORY);
            computerScore++;
            current++;
        }
        else if (playRound(playerSelection, computerSelection) === TIE) {
            console.log(TIE);
            current++;
        }
    }
}

game();
