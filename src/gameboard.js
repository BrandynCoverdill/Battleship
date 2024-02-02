import Ship from './ship';

// gameboard size is 10x10
class Gameboard {
	constructor(carrier, battleship, cruiser, submarine, destroyer) {
		// Create Ships for a player's gameboard and track their position.
		this.carrier = new Ship(5, 0, false);
		this.carrier.x = carrier.x;
		this.carrier.y = carrier.y;
		this.carrier.isVertical = carrier.isVertical;

		this.battleship = new Ship(4, 0, false);
		this.battleship.x = battleship.x;
		this.battleship.y = battleship.y;
		this.battleship.isVertical = battleship.isVertical;

		this.cruiser = new Ship(3, 0, false);
		this.cruiser.x = cruiser.x;
		this.cruiser.y = cruiser.y;
		this.cruiser.isVertical = cruiser.isVertical;

		this.submarine = new Ship(3, 0, false);
		this.submarine.x = submarine.x;
		this.submarine.y = submarine.y;
		this.submarine.isVertical = submarine.isVertical;

		this.destroyer = new Ship(2, 0, false);
		this.destroyer.x = destroyer.x;
		this.destroyer.y = destroyer.y;
		this.destroyer.isVertical = destroyer.isVertical;

		// Keep track of all missed attacks
		let missedAttacks = {};

		// Keep track of the number of ships that have been sunk for this object
		let downedShips = 0;
	}

	// determine if the opposing player has hit one of their ships
	receiveAttack(pos) {
		// If the carrier is vertical
		if (
			this.carrier.isVertical &&
			this.carrier.x === pos.x &&
			this.carrier.y >= pos.y &&
			this.carrier.y - this.carrier.length + 1 <= pos.y
		) {
			// Add a hit to the ship
			this.carrier.hit();

			// check if we need to sink this ship
			this.carrier.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the carrier is horizontal
		if (
			!this.carrier.isVertical &&
			this.carrier.y === pos.y &&
			this.carrier.x <= pos.x &&
			this.carrier.x + this.carrier.length - 1 >= pos.x
		) {
			// Add a hit to the ship
			this.carrier.hit();

			// check if we need to sink this ship
			this.carrier.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the battleship is vertical
		if (
			this.battleship.isVertical &&
			this.battleship.x === pos.x &&
			this.battleship.y >= pos.y &&
			this.battleship.y - this.battleship.length + 1 <= pos.y
		) {
			// Add a hit to the ship
			this.battleship.hit();

			// check if we need to sink this ship
			this.battleship.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the battleship is horizontal
		if (
			!this.battleship.isVertical &&
			this.battleship.y === pos.y &&
			this.battleship.x <= pos.x &&
			this.battleship.x + this.battleship.length - 1 >= pos.x
		) {
			// Add a hit to the ship
			this.battleship.hit();

			// check if we need to sink this ship
			this.battleship.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the cruiser is vertical
		if (
			this.cruiser.isVertical &&
			this.cruiser.x === pos.x &&
			this.cruiser.y >= pos.y &&
			this.cruiser.y - this.cruiser.length + 1 <= pos.y
		) {
			// Add a hit to the ship
			this.cruiser.hit();

			// check if we need to sink this ship
			this.cruiser.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the cruiser is horizontal
		if (
			!this.cruiser.isVertical &&
			this.cruiser.y === pos.y &&
			this.cruiser.x <= pos.x &&
			this.cruiser.x + this.cruiser.length - 1 >= pos.x
		) {
			// Add a hit to the ship
			this.cruiser.hit();

			// check if we need to sink this ship
			this.cruiser.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the submarine is vertical
		if (
			this.submarine.isVertical &&
			this.submarine.x === pos.x &&
			this.submarine.y >= pos.y &&
			this.submarine.y - this.submarine.length + 1 <= pos.y
		) {
			// Add a hit to the ship
			this.submarine.hit();

			// check if we need to sink this ship
			this.submarine.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the submarine is horizontal
		if (
			!this.submarine.isVertical &&
			this.submarine.y === pos.y &&
			this.submarine.x <= pos.x &&
			this.submarine.x + this.submarine.length - 1 >= pos.x
		) {
			// Add a hit to the ship
			this.submarine.hit();

			// check if we need to sink this ship
			this.submarine.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the destroyer is vertical
		if (
			this.destroyer.isVertical &&
			this.destroyer.x === pos.x &&
			this.destroyer.y >= pos.y &&
			this.destroyer.y - this.destroyer.length + 1 <= pos.y
		) {
			// Add a hit to the ship
			this.destroyer.hit();

			// check if we need to sink this ship
			this.destroyer.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}

		// If the destroyer is horizontal
		if (
			!this.destroyer.isVertical &&
			this.destroyer.y === pos.y &&
			this.destroyer.x <= pos.x &&
			this.destroyer.x + this.destroyer.length - 1 >= pos.x
		) {
			// Add a hit to the ship
			this.destroyer.hit();

			// check if we need to sink this ship
			this.destroyer.checkHitsToSink();

			// if the ship has sunk, update the downedShips total
			// TODO: figure this out later when testing
		}
	}
}

module.exports = Gameboard;
