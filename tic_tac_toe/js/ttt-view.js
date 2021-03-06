class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const $square = $(event.currentTarget);
      // $square.css("background-color", "#ffffff")
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("This " + e.msg.toLowerCase());
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()){
      this.$el.off("click")

      const $h2 = $("<h2>")
      const winner = this.game.winner();

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $h2.text("You win, " + winner + "!")
      } else {
        $h2.text("It's a draw!")
      }
      $(".ttt").append($h2)
    }
  }

  setupBoard() {
    const $ul = $("<ul>");

    for (let row = 0; row < 3; row++ ) {
      for (let col = 0; col < 3; col++ ) {
        let $li = $("<li>");
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul)
  }

}

module.exports = View;
