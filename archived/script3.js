let humanWins = 0;
let computerWins = 0;

const rock = document.getElementById("picOfRock");
const paper = document.getElementById("picOfPaper");
const scissors = document.getElementById("picOfScissors");
const list = document.getElementById("scoreCrawl");

rock.addEventListener("click", doRock);
paper.addEventListener("click", doPaper);
scissors.addEventListener("click", doScissors);

function chooseComputer() {
    let computerChoice;
    switch (Math.floor(Math.random() * 3 +1)) {
        case 1:
        computerChoice = "rock";
        break;
        case 2:
        computerChoice = "paper";
        break;
        case 3:
        computerChoice = "scissors";
        break;
    }
    return computerChoice;
}

function doRock() {
    announceHumanChoice("rock");
    let computerHand = chooseComputer();
    announceComputerChoice(computerHand);
    playHand("rock", computerHand);
}
function doPaper() {
    announceHumanChoice("paper");
    let computerHand = chooseComputer();
    announceComputerChoice(computerHand);
    playHand("paper", computerHand);
}
function doScissors() {
    announceHumanChoice("scissors");
    let computerHand = chooseComputer();
    announceComputerChoice(computerHand);
    playHand("scissors", computerHand);
}

function announceHumanChoice(choice) {
    let newLi = document.createElement("li");
    newLi.innerText = "You threw " + choice;
    list.appendChild(newLi);
}

function announceComputerChoice(choice) {
    let newLi = document.createElement("li");
    newLi.innerText = "Computer threw " + choice;
    list.appendChild(newLi);
}

function announceResult(outcome) {
    let newLi = document.createElement("li");
    if (outcome === "tie") {
        newLi.innerText = "It's a tie";
    }
    else if (outcome === "win") {
        newLi.innerText = "You win!";
    }
    else {
        newLi.innerText = "Better luck next time.";
    }
    list.appendChild(newLi);
}

function playHand (human,computer) {
    if (human === computer) {
        console.log("Tie!");
        announceResult("tie");
    }
    else if ((human === "rock" && computer === "scissors")
    || (human === "paper" && computer === "rock")
    || (human === "scissors" && computer === "paper")) {
        console.log("You win!");
        announceResult("win");
        humanWins++;
    }
    else {
        console.log("Better luck next time!");
        announceResult("loss");
        computerWins++;
    }
}

/* function playRound() {
    while (humanWins < 3 && computerWins < 3) {
        playHand();
    }
    console.log("Final Score: Human " + humanWins + ", Computer " + computerWins);
} */