const View = require("./ttt-view.js")
const Game = require("../node/game")

$( () => {
  const $el = $('.ttt');
  const game = new Game();
  new View(game, $el);
});
