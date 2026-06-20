export function updatePlayerStats(match) {
  const seasonStats =
  JSON.parse(
    localStorage.getItem('seasonPlayerStats')
  ) || {}

const allTimeStats =
  JSON.parse(
    localStorage.getItem('allTimePlayerStats')
  ) || {}
const initPlayer = (stats, name) => {
  if (!stats[name]) {
    stats[name] = {
  matches: 0,
  runs: 0,
  wickets: 0,

  highestScore: 0,
  balls: 0,

  fifties: 0,
  hundreds: 0,

  bestFigures: "0/0",
bestWickets: 0,
bestRuns: 999,

  overs: 0,
  runsConceded: 0,

  threeWickets: 0,
  fiveWickets: 0
}
  }
}
  // Innings 1 Batting
  match.batting?.forEach((player) => {
    if (!player.player) return
    initPlayer(
  seasonStats,
  player.player
)

initPlayer(
  allTimeStats,
  player.player
)

seasonStats[player.player].matches += 1
seasonStats[player.player].runs += player.runs
seasonStats[player.player].balls +=
  Number(player.balls)

allTimeStats[player.player].matches += 1
allTimeStats[player.player].runs += player.runs
allTimeStats[player.player].balls +=
  Number(player.balls)

if (
  player.runs >
  seasonStats[player.player].highestScore
) {
  seasonStats[player.player].highestScore =
    player.runs
}
if (
  player.runs >
  allTimeStats[player.player].highestScore
) {
  allTimeStats[player.player].highestScore =
    player.runs
}

if (
  player.runs >= 50 &&
  player.runs < 100
) {
  seasonStats[player.player].fifties += 1
  allTimeStats[player.player].fifties += 1
}

if (player.runs >= 100) {
  seasonStats[player.player].hundreds += 1
  allTimeStats[player.player].hundreds += 1
}
 
  })

  // Innings 1 Bowling
  match.bowling?.forEach((player) => {
    if (!player.player) return

    initPlayer(
  seasonStats,
  player.player
)

initPlayer(
  allTimeStats,
  player.player
)

seasonStats[player.player].matches += 1
const wickets =
  Math.max(
    0,
    Number(player.wickets)
  )

seasonStats[player.player].wickets += wickets
seasonStats[player.player].overs +=
  Number(player.overs)
seasonStats[player.player].runsConceded +=
  Number(player.runs)

allTimeStats[player.player].matches += 1
allTimeStats[player.player].wickets += wickets
allTimeStats[player.player].overs +=
  Number(player.overs)
allTimeStats[player.player].runsConceded +=
  Number(player.runs)

if (
  wickets >
  seasonStats[player.player].bestWickets ||
  (
    wickets ===
      seasonStats[player.player]
        .bestWickets &&
    Number(player.runs) <
      seasonStats[player.player]
        .bestRuns
  )
) {
  seasonStats[player.player]
    .bestWickets =
      Number(wickets)

  seasonStats[player.player]
    .bestRuns =
      Number(player.runs)

  seasonStats[player.player]
    .bestFigures =
      `${wickets}/${player.runs}`
}


if (
  wickets >
    allTimeStats[player.player].bestWickets ||
  (
    wickets ===
      allTimeStats[player.player]
        .bestWickets &&
    Number(player.runs) <
      allTimeStats[player.player]
        .bestRuns
  )
) {
  allTimeStats[player.player]
    .bestWickets =
      Number(wickets)

  allTimeStats[player.player]
    .bestRuns =
      Number(player.runs)

  allTimeStats[player.player]
    .bestFigures =
      `${wickets}/${player.runs}`
}

if (wickets >= 3) {
  seasonStats[player.player].threeWickets += 1
  allTimeStats[player.player].threeWickets += 1
}

if (wickets >= 5) {
  seasonStats[player.player].fiveWickets += 1
  allTimeStats[player.player].fiveWickets += 1
}
  })


  // Innings 2 Batting
  match.batting2?.forEach((player) => {
    if (!player.player) return
    initPlayer(seasonStats, player.player)
initPlayer(allTimeStats, player.player)

seasonStats[player.player].matches += 1
seasonStats[player.player].runs += player.runs
seasonStats[player.player].balls +=
  Number(player.balls)

allTimeStats[player.player].matches += 1
allTimeStats[player.player].runs += player.runs
allTimeStats[player.player].balls +=
  Number(player.balls)

if (
  player.runs >
  seasonStats[player.player].highestScore
) {
  seasonStats[player.player].highestScore =
    player.runs
}

if (
  player.runs >
  allTimeStats[player.player].highestScore
) {
  allTimeStats[player.player].highestScore =
    player.runs
}

if (
  player.runs >= 50 &&
  player.runs < 100
) {
  seasonStats[player.player].fifties += 1
  allTimeStats[player.player].fifties += 1
}

if (player.runs >= 100) {
  seasonStats[player.player].hundreds += 1
  allTimeStats[player.player].hundreds += 1
}
  })

  // Innings 2 Bowling
  match.bowling2?.forEach((player) => {
    if (!player.player) return
    initPlayer(seasonStats, player.player)
initPlayer(allTimeStats, player.player)

seasonStats[player.player].matches += 1
const wickets =
  Math.max(
    0,
    Number(player.wickets)
  )

seasonStats[player.player].wickets += wickets
seasonStats[player.player].overs +=
  Number(player.overs)
seasonStats[player.player].runsConceded +=
  Number(player.runs)

allTimeStats[player.player].matches += 1
allTimeStats[player.player].wickets += wickets
allTimeStats[player.player].overs +=
  Number(player.overs)
allTimeStats[player.player].runsConceded +=
  Number(player.runs)

if (
  wickets >
  seasonStats[player.player].bestWickets ||
  (
    wickets ===
      seasonStats[player.player]
        .bestWickets &&
    Number(player.runs) <
      seasonStats[player.player]
        .bestRuns
  )
) {
  seasonStats[player.player]
    .bestWickets =
      Number(wickets)

  seasonStats[player.player]
    .bestRuns =
      Number(player.runs)

  seasonStats[player.player]
    .bestFigures =
      `${wickets}/${player.runs}`
}

if (
  wickets >
  allTimeStats[player.player].bestWickets ||
  (
    wickets ===
      allTimeStats[player.player]
        .bestWickets &&
    Number(player.runs) <
      allTimeStats[player.player]
        .bestRuns
  )
) {
  allTimeStats[player.player]
    .bestWickets =
      Number(wickets)

  allTimeStats[player.player]
    .bestRuns =
      Number(player.runs)

  allTimeStats[player.player]
    .bestFigures =
      `${wickets}/${player.runs}`
}

 if (wickets >= 3) {
  seasonStats[player.player].threeWickets += 1
  allTimeStats[player.player].threeWickets += 1
}

if (wickets >= 5) {
  seasonStats[player.player].fiveWickets += 1
  allTimeStats[player.player].fiveWickets += 1
}
  })

  localStorage.setItem(
  'seasonPlayerStats',
  JSON.stringify(seasonStats)
)

localStorage.setItem(
  'allTimePlayerStats',
  JSON.stringify(allTimeStats)
)
}