
const buttons = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice').querySelector('span');
const computerChoiceDisplay = document.getElementById('computer-choice').querySelector('span');
const resultDisplay = document.getElementById('result').querySelector('span');

const choices = ['pierre', 'papier', 'ciseaux'];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Égalité !';
    } else if (
        (playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (playerChoice === 'papier' && computerChoice === 'pierre') ||
        (playerChoice === 'ciseaux' && computerChoice === 'papier')
    ) {
        return 'Vous avez gagné ! 🎉';
    } else {
        return 'Vous avez perdu ! 😢';
    }
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();

        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;

        const result = getResult(playerChoice, computerChoice);
        resultDisplay.textContent = result;
    });
});
