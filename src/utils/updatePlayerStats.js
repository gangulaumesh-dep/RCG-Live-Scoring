export function updatePlayerStats(match) {
  const stats =
    JSON.parse(localStorage.getItem('playerStats')) || {}

  // Innings 1 Batting
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

  // Innings 1 Bowling
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

  // Innings 2 Batting
  match.batting2?.forEach((player) => {
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

  // Innings 2 Bowling
  match.bowling2?.forEach((player) => {
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