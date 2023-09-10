const rock = document.getElementById("picOfRock");
const list = document.getElementById("scoreCrawl");
rock.addEventListener("click", sayRock);
function sayRock(what) {
    const list = document.getElementById("scoreCrawl");
    const newLi = document.createElement("li");
    var text = document.createTextNode("You Clicked the rock");
    newLi.appendChild(text);
    list.appendChild(newLi);
}