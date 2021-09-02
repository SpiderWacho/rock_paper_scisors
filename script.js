
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

const PLAYERVICTORY = "You win!";
const COMPUTERVICTORY = "Computer Wins!";
const TIE = "it's a tie!"


let current = 0;
let computerScore = 0;
let playerScore = 0;
let previousTie = false;
const result = document.querySelector("#results")
const newP = document.createElement('p');
const tieP = document.createElement('p');
const roundP = document.createElement('p');

result.appendChild(newP);
result.appendChild(tieP);
result.appendChild(roundP);





const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(btn => btn.addEventListener("click", function playerSelection(e) {
    if (previousTie == true) {
        previousTie = false;
        tieP.textContent = "";
    }
    newP.textContent = `You: ${playerScore} computer: ${computerScore}`;
    roundP.textContent = `Round: ${current + 1}`;
    computerSelection = computerPlay();
    playerPlay = e.target.id;
        if (playRound(playerPlay, computerSelection) === PLAYERVICTORY) {
            playerScore++;
            current++;
            newP.textContent = `You: ${playerScore} computer: ${computerScore}`;
        }
        else if (playRound(playerPlay, computerSelection) === COMPUTERVICTORY) {
            computerScore++;
            current++;
            newP.textContent = `You: ${playerScore} computer: ${computerScore}`;
        }
        else if (playRound(playerPlay, computerSelection) === TIE) {
            current++;
            previousTie = true;
            tieP.textContent = "It's a tie";
        }

        if (computerScore === 5) {
            newP.textContent = "Computer has win, rematch?";
            current = 0;
            computerScore = 0;
            playerScore = 0;
        }
        else if (playerScore === 5) {
            newP.textContent = "You won, rematch?";
            current = 0;
            computerScore = 0;
            playerScore = 0;
        }
    }
));

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



    
