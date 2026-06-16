function Records() {
  const matches =
    JSON.parse(localStorage.getItem("matches")) || []

  const stats =
    JSON.parse(localStorage.getItem("playerStats")) || {}

  // Highest Individual Score
  let highestScore = {
    player: "-",
    runs: 0
  }

  matches.forEach((match) => {
    match.batting?.forEach((player) => {
      if (player.runs > highestScore.runs) {
        highestScore = {
          player: player.player,
          runs: player.runs
        }
      }
    })

    match.batting2?.forEach((player) => {
      if (player.runs > highestScore.runs) {
        highestScore = {
          player: player.player,
          runs: player.runs
        }
      }
    })
  })

  // Highest Team Score
  let highestTeamScore = 0

  matches.forEach((match) => {
    const score1 =
      parseInt(match.score1) || 0

    const score2 =
      parseInt(match.score2) || 0

    highestTeamScore = Math.max(
      highestTeamScore,
      score1,
      score2
    )
  })

  // Most Runs
  let mostRunsPlayer = "-"
  let mostRuns = 0

  Object.entries(stats).forEach(
    ([name, data]) => {
      if (data.runs > mostRuns) {
        mostRuns = data.runs
        mostRunsPlayer = name
      }
    }
  )

  // Most Wickets
  let mostWicketsPlayer = "-"
  let mostWickets = 0

  Object.entries(stats).forEach(
    ([name, data]) => {
      if (data.wickets > mostWickets) {
        mostWickets = data.wickets
        mostWicketsPlayer = name
      }
    }
  )

  return (
    <div>
      <h1>🏆 Tournament Records</h1>

      <div className="record-card">
        <h3>Highest Individual Score</h3>
        <p>{highestScore.player}</p>
        <p>{highestScore.runs}</p>
      </div>

      <div className="record-card">
        <h3>Highest Team Score</h3>
        <p>{highestTeamScore}</p>
      </div>

      <div className="record-card">
        <h3>Most Runs</h3>
        <p>{mostRunsPlayer}</p>
        <p>{mostRuns}</p>
      </div>

      <div className="record-card">
        <h3>Most Wickets</h3>
        <p>{mostWicketsPlayer}</p>
        <p>{mostWickets}</p>
      </div>
    </div>
  )
}

export default Records