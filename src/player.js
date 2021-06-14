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
}
