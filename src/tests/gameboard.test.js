const { experiments } = require('webpack');
const Gameboard = require('../gameboard');

// Arguments to create a new gameboard
const carrier = {
	x: 3,
	y: 9,
	isVertical: true,
};
const battleship = {
	x: 5,
	y: 6,
	isVertical: false,
};
const cruiser = {
	x: 6,
	y: 9,
	isVertical: true,
};
const submarine = {
	x: 6,
	y: 3,
	isVertical: false,
};
const destroyer = {
	x: 2,
	y: 3,
	isVertical: true,
};

test('gameboard obj is instantiated', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	expect(gameboard.submarine).toHaveProperty('length', 3);
	expect(gameboard.cruiser).toHaveProperty('isVertical', true);
	expect(gameboard.battleship).toHaveProperty('x', 5);
	expect(gameboard.battleship).toHaveProperty('y', 6);
	expect(gameboard.battleship).toHaveProperty('isVertical', false);
});

test('should hit battleship once (at head)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 5,
		y: 6,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.battleship).toHaveProperty('hits', 1);
});

test('should hit battleship once (at tail)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 8,
		y: 6,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.battleship).toHaveProperty('hits', 1);
});

test('should hit battleship once (middle of ship)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 7,
		y: 6,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.battleship).toHaveProperty('hits', 1);
});

test('should not hit battleship (before head)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 4,
		y: 6,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.battleship).toHaveProperty('hits', 0);
});

test('should not hit battleship (after tail)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 9,
		y: 6,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.battleship).toHaveProperty('hits', 0);
});

test('should hit destroyer once (at head)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 2,
		y: 3,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.destroyer).toHaveProperty('hits', 1);
});

test('should hit destroyer once (at tail)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 2,
		y: 2,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.destroyer).toHaveProperty('hits', 1);
});

test('should not hit destroyer (before head)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 2,
		y: 4,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.destroyer).toHaveProperty('hits', 0);
});

test('should not hit destroyer (after tail)', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 2,
		y: 1,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard.destroyer).toHaveProperty('hits', 0);
});

test('missed attack should have the position of the attack', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	const pos = {
		x: 8,
		y: 9,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard).toHaveProperty('missedAttacks', [[8, 9]]);
});

test('missed attacks (2) should have the position of the attacks', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	let pos = {
		x: 10,
		y: 10,
	};
	gameboard.receiveAttack(pos);
	pos = {
		x: 4,
		y: 6,
	};
	gameboard.receiveAttack(pos);
	expect(gameboard).toHaveProperty('missedAttacks', [
		[10, 10],
		[4, 6],
	]);
});

test('ships are not all sunk', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	expect(gameboard.checkIfAllShipsSunk()).toBe(false);
});

test('ships are all sunk', () => {
	const gameboard = new Gameboard(
		carrier,
		battleship,
		cruiser,
		submarine,
		destroyer
	);
	// hit all ships to test
	// carrier
	gameboard.receiveAttack({ x: 3, y: 9 });
	gameboard.receiveAttack({ x: 3, y: 8 });
	gameboard.receiveAttack({ x: 3, y: 7 });
	gameboard.receiveAttack({ x: 3, y: 6 });
	gameboard.receiveAttack({ x: 3, y: 5 });
	// battleship
	gameboard.receiveAttack({ x: 5, y: 6 });
	gameboard.receiveAttack({ x: 6, y: 6 });
	gameboard.receiveAttack({ x: 7, y: 6 });
	gameboard.receiveAttack({ x: 8, y: 6 });
	// cruiser
	gameboard.receiveAttack({ x: 6, y: 9 });
	gameboard.receiveAttack({ x: 6, y: 8 });
	gameboard.receiveAttack({ x: 6, y: 7 });
	// submarine
	gameboard.receiveAttack({ x: 6, y: 3 });
	gameboard.receiveAttack({ x: 7, y: 3 });
	gameboard.receiveAttack({ x: 8, y: 3 });
	// destroyer
	gameboard.receiveAttack({ x: 2, y: 3 });
	gameboard.receiveAttack({ x: 2, y: 2 });

	expect(gameboard.checkIfAllShipsSunk()).toBe(true);
});
