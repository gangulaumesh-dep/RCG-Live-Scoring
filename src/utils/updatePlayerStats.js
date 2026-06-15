export function updatePlayerStats(match) {
  const stats =
    JSON.parse(localStorage.getItem('playerStats')) || {}

  match.batting?.forEach((player) => {
    if (!stats[player.player]) {
      stats[player.player] = {
        matches: 0,
        runs: 0,
        wickets: 0
      }
    }

    stats[player.player].matches += 1
    stats[player.player].runs += player.runs
  })

  match.bowling?.forEach((player) => {
    if (!stats[player.player]) {
      stats[player.player] = {
        matches: 0,
        runs: 0,
        wickets: 0
      }
    }

    stats[player.player].matches += 1
    stats[player.player].wickets += player.wickets
  })

  localStorage.setItem(
    'playerStats',
    JSON.stringify(stats)
  )
}