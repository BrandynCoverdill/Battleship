// Create standard UI
const body = document.querySelector('body');
body.style.cssText = `
    background-color: #F2F8FE;
    color: #021224;
`;

const header = document.createElement('section');
header.style.cssText = `
    display: flex;
    justify-content: center;
    background-color: white;
    border-bottom: 1px solid #021224;
    font-size: 1.25em;
`;
const title = document.createElement('h1');
title.textContent = 'Battleship!';
header.appendChild(title);
body.appendChild(header);

// grab player names and create player objects
const formDiv = document.createElement('div');
formDiv.style.cssText = `
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`;
const form = document.createElement('form');
form.style.cssText = `
    margin-block: 1em;
    display: flex;
    flex-direction: column;
    margin-inline: 1em;
`;
const playerOneInput = document.createElement('input');
playerOneInput.setAttribute('type', 'text');
playerOneInput.setAttribute('placeholder', "Player one's name...");
const playerTwoInput = document.createElement('input');
playerTwoInput.setAttribute('type', 'text');
playerTwoInput.setAttribute('placeholder', "Player two's name...");
const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.textContent = 'Play game';
submit.setAttribute('disabled', true);
form.appendChild(playerOneInput);
form.appendChild(playerTwoInput);
form.appendChild(submit);
formDiv.appendChild(form);
body.appendChild(formDiv);

playerOneInput.addEventListener('change', (e) => {
	e.preventDefault();
	if (
		playerOneInput.value.trim() === '' ||
		playerTwoInput.value.trim() === ''
	) {
		submit.setAttribute('disabled', true);
	} else {
		submit.removeAttribute('disabled');
	}
});

playerTwoInput.addEventListener('change', (e) => {
	e.preventDefault();
	if (
		playerOneInput.value.trim() === '' ||
		playerTwoInput.value.trim() === ''
	) {
		submit.setAttribute('disabled', true);
	} else {
		submit.removeAttribute('disabled');
	}
});

submit.addEventListener('click', (e) => {
	e.preventDefault();
	const playerOne = new Player();
});

// (2) build gameboard
// (3) display both player's boards and render tham on each turn - have a pop-up telling the user to give the device to the next player.
// (4) allow the user to attack the other player
// (5) have module pop up on the start of the game, showing instructions - even a help button to play the game on the top right
// (6) have a win condition once the winner sinks all the other player's ships.

export default body;
