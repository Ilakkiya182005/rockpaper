const botChoiceView = document.getElementById("bot_choice");
const playerChoiceView = document.getElementById("player_choice");
const resultView = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');

let botchoosen; // Declare botchoosen in a scope accessible by all functions
let userChoice;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceView.innerHTML = userChoice;
    botChoiceGenerator();
    results();
}));

function botChoiceGenerator() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        botchoosen = "Rock";
    } else if (randomNumber === 1) {
        botchoosen = "Paper";
    } else {
        botchoosen = "Scissors";
    }
    botChoiceView.innerHTML = botchoosen;
    console.log(botchoosen);
}

function results() {
    let result;
    if (botchoosen === userChoice) {
        result = "It's a draw";
    } else if (
        (botchoosen === "Rock" && userChoice === "Paper") ||
        (botchoosen === "Paper" && userChoice === "Scissors") ||
        (botchoosen === "Scissors" && userChoice === "Rock")
    ) {
        result = "User Wins";
    } else {
        result = "Bot Wins";
    }

    resultView.innerHTML = result;
}
