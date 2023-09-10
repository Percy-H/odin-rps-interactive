let humanWins = 0;
let computerWins = 0;

const rock = document.getElementById("picOfRock");
const paper = document.getElementById("picOfPaper");
const scissors = document.getElementById("picOfScissors");
const list = document.getElementById("scoreCrawl");
const humanScore = document.getElementById("manscore");
const computerScore = document.getElementById("botscore");
const winner = document.getElementById("winner")

rock.addEventListener("click", doRock);
paper.addEventListener("click", doPaper);
scissors.addEventListener("click", doScissors);

function chooseComputer() {
    const items = ["rock", "paper", "scissors"]
    return items[Math.floor(Math.random() * 3)];
}
function doRock() {
    playHand("rock");
}
function doPaper() {
    playHand("paper");
}
function doScissors() {
    playHand("scissors");
}

/* function announceHumanChoice(choice) {
    let newLi = document.createElement("li");
    newLi.innerText = "You threw " + choice;
    list.appendChild(newLi);
}

function announceComputerChoice(choice) {
    let newLi = document.createElement("li");
    newLi.innerText = "Computer threw " + choice;
    list.appendChild(newLi);
} */

function announceBothChoices(human, computer) {
    let newLi = document.createElement("li");
    newLi.innerText = "You threw " + human +", Computer threw " + computer;
    list.appendChild(newLi);
}

function announceResult(outcome) {
    let newLi = document.createElement("li");
    if (outcome === "tie") {
        newLi.innerText = "It's a tie.";
    }
    else if (outcome === "win") {
        newLi.innerText = "Human wins!";
    }
    else {
        newLi.innerText = "Computer wins.";
    }
    list.appendChild(newLi);
}

function endGame() {
    rock.removeEventListener("click", doRock);
    paper.removeEventListener("click", doPaper);
    scissors.removeEventListener("click", doScissors);
    if (humanWins > computerWins) {
        winner.innerText = "You Win!";
    }
    else {
        winner.innerText = "Better luck next time."
    }
}

function scoreKeeper() {
        humanScore.innerText = humanWins;
        computerScore.innerText = computerWins;
}

function playHand (human) {
    let computer = chooseComputer();
/*     announceHumanChoice(human);
    announceComputerChoice(computer); */
    announceBothChoices(human, computer)
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
    scoreKeeper();
    if (humanWins >= 3 || computerWins >= 3) {
        endGame();
    }
}

/* function playRound() {
    while (humanWins < 3 && computerWins < 3) {
        playHand();
    }
    console.log("Final Score: Human " + humanWins + ", Computer " + computerWins);
} */