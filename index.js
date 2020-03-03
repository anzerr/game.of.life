
const Game = require('./src/game.js');

let game = new Game(32, 32);

game.seed([
	[1, 0, 0, 0, 0],
	[0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 1, 1]
]);

for (let i = 0; i < 5; i++) {
	game.update();
	game.draw();
}
