import Ship from './ship';

// gameboard size is 10x10
class Gameboard {
	constructor(
		carrierPos,
		battleshipPos,
		cruiserPos,
		submarinePos,
		destroyerPos
	) {
		// Create Ships for a player's gameboard and track their position.
		this.carrier = new Ship(5, 0, false);
		this.carrier.x = carrierPos.x;
		this.carrier.y = carrierPos.y;
		this.carrier.isVertical = carrierPos.isVertical;

		this.battleship = new Ship(4, 0, false);
		this.battleship.x = battleshipPos.x;
		this.battleship.y = battleshipPos.y;
		this.battleship.isVertical = battleshipPos.isVertical;

		this.cruiser = new Ship(3, 0, false);
		this.cruiser.x = cruiserPos.x;
		this.cruiser.y = cruiserPos.y;
		this.cruiser.isVertical = cruiserPos.isVertical;

		this.submarine = new Ship(3, 0, false);
		this.submarine.x = submarinePos.x;
		this.submarine.y = submarinePos.y;
		this.submarine.isVertical = submarinePos.isVertical;

		this.destroyer = new Ship(2, 0, false);
		this.destroyer.x = destroyerPos.x;
		this.destroyer.y = destroyerPos.y;
		this.destroyer.isVertical = destroyerPos.isVertical;

		// Keep track of all missed attacks
		this.missedAttacks = [];

		// Keep track of the number of ships that have been sunk for this object
		this.downedShips = 0;
	}

	// determine if the opposing player has hit one of their ships
	receiveAttack(pos) {
		if (
			// If the carrier is vertical
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
			if (this.carrier.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the carrier is horizontal
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
			if (this.carrier.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the battleship is vertical
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
			if (this.battleship.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the battleship is horizontal
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
			if (this.battleship.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the cruiser is vertical
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
			if (this.cruiser.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the cruiser is horizontal
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
			if (this.cruiser.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the submarine is vertical
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
			if (this.submarine.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the submarine is horizontal
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
			if (this.submarine.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the destroyer is vertical
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
			if (this.destroyer.isSunk) {
				this.downedShips += 1;
			}
		} else if (
			// If the destroyer is horizontal
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
			if (this.destroyer.isSunk) {
				this.downedShips += 1;
			}
		} else {
			// Record the missed attack
			this.missedAttacks.push([pos.x, pos.y]);
		}
	}

	checkIfAllShipsSunk() {
		if (this.downedShips === 5) {
			return true;
		}
		return false;
	}
}

module.exports = Gameboard;
