class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins;
  }

  saveWinsToStorage() {
    var playerId = this.id;
    localStorage.setItem(playerId, this.wins)
  }

  retrieveWinsFromStorage() {
    var playerId = this.id;
    var playerWinsJSON = localStorage.getItem(playerId);
    var playerWins = JSON.parse(playerWinsJSON);
    this.wins += playerWins;
  }
}
