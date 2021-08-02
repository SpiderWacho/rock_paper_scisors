function computerPlay() {
    let play = getRandomInt(1, 3);
    let computerSelection;
        switch (play) {
            case 1:
                computerSelection = "rock";
            case 2:
                computerSelection = "paper";
            case 3:
                computerSelection = "scissors";
            }
            console.log(`computer plays: ${computerSelection}`);
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


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer Wins!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return"You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer Wins!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer Wins!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
    }
}
const playerSelection = playerSelect();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}