const Ship = require('../ship');

test('ship should be {length: 3, hits: 2, isSunk: false}', () => {
	const ship = new Ship(3, 2, false);
	expect(ship).toHaveProperty('length', 3);
	expect(ship).toHaveProperty('hits', 2);
	expect(ship).toHaveProperty('isSunk', false);
});

test('ship should be {length: 2, hits: 2, isSunk: true}', () => {
	const ship = new Ship(2, 2, true);
	expect(ship).toHaveProperty('length', 2);
	expect(ship).toHaveProperty('hits', 2);
	expect(ship).toHaveProperty('isSunk', true);
});

test("ship's hit is incremented", () => {
	const ship = new Ship(3, 1, false);
	ship.hit();
	expect(ship).toHaveProperty('hits', 2);
});

test('ship should sink', () => {
	const ship = new Ship(3, 3, false);
	ship.checkHitsToSink();
	expect(ship).toHaveProperty('isSunk', true);
});

test('ship should not sink', () => {
	const ship = new Ship(3, 2, false);
	ship.checkHitsToSink();
	expect(ship).toHaveProperty('isSunk', false);
});
