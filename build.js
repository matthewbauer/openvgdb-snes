var db = require('openvgdb')
var fs = require('fs')

var games = []
for (var game of db)
  if (game.systemShortName === 'SNES')
    games.push(game)

fs.writeFile('db.json', JSON.stringify(games))
