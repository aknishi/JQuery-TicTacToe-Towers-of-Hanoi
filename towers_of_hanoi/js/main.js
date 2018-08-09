const HanoiView = require("./toh-view.js")
const HanoiGame = require("../node/game")

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
