const team = {
  _players: [
    {
      firstname: 'Mika',
      lastname: 'Shaw',
      age: 17
    }, {
      firstname: 'Annie',
      lastname: 'Qin',
      age: 18
    }, {
      firstname: 'Mackayla',
      lastname: 'Dixon',
      age: 18
    }
  ],
  _games: [
    {
      opponent: 'Hufflepuff',
      teamPoints: 42,
      opponentPoints: 25
    }, {
      opponent: 'Slytherin',
      teamPoints: 55,
      opponentPoints: 22
    }, {
      opponent: 'Ravenclaw',
      teamPoints: 66,
      opponentPoints:44
    }
  ],
  get players() {
    return this._players;
  },
  get _games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let temp = {
      firstname: firstName,
      lastname: lastName,
      age: age
    };
    return this._players.push(temp);
  },
  addGame(opponentName, teamPts, opponentPts) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPts,
      opponentPoints: opponentPts
    };
    return this._games.push(game)
  }
};

team.addPlayer('Harry', 'Potter', 12);
team.addPlayer('Ron', 'Weasley', 12);
team.addPlayer('Oliver', 'Wood', 14);

console.log(team._players)