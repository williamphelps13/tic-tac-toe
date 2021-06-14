class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins;
  }

  saveWinsToStorage() {
    var winsToStorage = JSON.stringify(this.wins);
    localStorage.setItem(this.id, winsToStorage)
  }

  retrieveWinsFromStorage() {
    var playerWinsJSON = localStorage.getItem(this.id);
    var playerWins = JSON.parse(playerWinsJSON);
    this.wins += playerWins;
  }
};
