class Game {
  constructor() {
    this.board = {playerOne:[], playerTwo: [],};
    this.playerOne = new Player('one', '🐶', 0);
    this.playerTwo = new Player('two', '🐱', 0);
  }
}

// GOAL:
// - Make game fully playable without the DOM
// - Do updating of the Game.board data, etc, from your console
//
// "Fully Playable":
// - var playerOne = new Player('one', '🐶', 0)
// - var playerTwo = new Player('two', '🐱', 0)
// - Record of Who's Turn it Currently Is
// - Record of Game Board Data (where are pieces)
// - Check Game Board Date for Win
// - Check Game Board Data for Draw
// - Board Reset
