import Gameboard from './gameboard';

class User {
	constructor(name) {
		this.name = name;
	}

	// When the user has chosen the positions (Pos) for his ships, create gameboard object
	placeShips(
		carrierPos,
		battleshipPos,
		cruiserPos,
		submarinePos,
		destroyerPos
	) {
		this.gameboard = new Gameboard(
			carrierPos,
			battleshipPos,
			cruiserPos,
			submarinePos,
			destroyerPos
		);
	}

	// Player method that lets the user choose a spot on the grid to attack
	// TODO: May not need this method (don't understand TOP step 3.1)
	playerAttack(xCord, yCord) {
		return {x: xCord, y: yCord};
	}

	// Computer method that randomly chooses a spot on the gameboard to attack
	// TODO: May not need this method (don't understand TOP step 3.2)
	comAttack() {
		// Math.floor(Math.random() * 10) + 1; // picks number from 1-10
		let pos = {
			x: this.#getRandomNumFromOneToTen(),
			y: this.#getRandomNumFromOneToTen(),
		};
		return pos;
	}

	// private method that gets a number from 1-10
	#getRandomNumFromOneToTen() {
		return Math.floor(Math.random() * 10) + 1;
	}

	// private method that generates true or false
	#getRandomBool() {
		if (Math.floor(Math.random() * 2) === 1) {
			return true;
		}
		return false;
	}
}

module.exports = User;
