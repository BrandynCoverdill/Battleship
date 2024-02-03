const Player = require('../player');

test('should create a new player', () => {
	const player = new Player('Brandyn');
	expect(player).toHaveProperty('name', 'Brandyn');
});

test('should place ships on the new gameboard', () => {
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
	const player = new Player('Mari');
	player.placeShips(carrier, battleship, cruiser, submarine, destroyer);
	expect(player.gameboard.submarine).toHaveProperty('x', 6);
});

test("player's attack is {x: 2, y: 7}", () => {
	const player = new Player('player 1');
	const x = 2;
	const y = 7;
	expect(player.playerAttack(x, y)).toHaveProperty('x', 2);
	expect(player.playerAttack(x, y)).toHaveProperty('y', 7);
});

test("computer's attack should be greater than or equal to 1 and less than or equal to 10", () => {
	const computer = new Player('computer');
	let pos = computer.comAttack();
	expect(pos.x).toBeGreaterThanOrEqual(1);
	expect(pos.x).toBeLessThanOrEqual(10);
	expect(pos.y).toBeGreaterThanOrEqual(1);
	expect(pos.y).toBeLessThanOrEqual(10);
});
