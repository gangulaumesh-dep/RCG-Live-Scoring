import players from './players'

const playerStats = {}

players.forEach((player) => {
  playerStats[player.name] = {
    matches: 0,
    runs: 0,
    wickets: 0
  }
})

export default playerStats