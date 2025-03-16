function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('userChoice').innerText = `You chose: ${userChoice}`;
    document.getElementById('computerChoice').innerText = `Computer chose: ${computerChoice}`;

    const winner = determineWinner(userChoice, computerChoice);
    document.getElementById('winner').innerText = `Result: ${winner}`;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
