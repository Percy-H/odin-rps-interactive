const rock = document.getElementById("picOfRock");
const paper = document.getElementById("picOfPaper");
const scissors = document.getElementById("picOfScissors");
const list = document.getElementById("scoreCrawl");
rock.addEventListener("click", doRock);
paper.addEventListener("click", doPaper);
scissors.addEventListener("click", doScissors);
function doRock() {
    announceHumanChoice("rock");
}
function doPaper() {
    announceHumanChoice("paper");
}
function doScissors() {
    announceHumanChoice("scissors");
}
function announceHumanChoice(choice) {
    let newLi = document.createElement("li");
    newLi.innerText = "You clicked the " + choice;
    list.appendChild(newLi);
}