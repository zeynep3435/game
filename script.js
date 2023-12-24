function makeChoice(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    displayChoices(userChoice, computerChoice);
    
    var result = determineWinner(userChoice, computerChoice);
    displayResult(result);
}

function displayChoices(userChoice, computerChoice) {
    document.getElementById('resultText').innerText = `You chose ${userChoice}, computer chose ${computerChoice}.`;
    
    var userMoveElement = document.getElementById('userChoice');
    var computerMoveElement = document.getElementById('computerMove');

    userMoveElement.innerHTML = `<p>Your Choice</p><button>${userChoice}</button>`;
    computerMoveElement.innerHTML = `<p>Computer's Choice</p><div>${computerChoice}</div>`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function displayResult(result) {
    document.getElementById('resultText').innerText = result;
}