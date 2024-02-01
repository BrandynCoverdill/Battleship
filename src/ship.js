class Ship {
	/**
	 * Constructor for setting up a ship object
	 * @param {Number} length length of the ship
	 * @param {Number} hits how many times the ship has been hit
	 * @param {Boolean} isSunk If the ship is sunk
	 */
	constructor(length, hits = 0, isSunk = false) {
		this.length = length;
		this.hits = hits;
		this.isSunk = isSunk;
	}

	/**
	 * When a ship is hit by a player, or computer, increase it's hit count.
	 */
	hit() {
		this.hits += 1;
	}

	/**
	 * If the length of the ship is equal to the number of hits, the ship is sunk.
	 */
	checkHitsToSink() {
		this.length === this.hits ? (this.isSunk = true) : null;
	}
}

/**
 * Exporting for unit testing
 */
module.exports = Ship;
