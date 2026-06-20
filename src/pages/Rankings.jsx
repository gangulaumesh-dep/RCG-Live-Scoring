function Rankings() {
  const stats =
    JSON.parse(
      localStorage.getItem(
        'allTimePlayerStats'
      )
    ) || {}

  const players = Object.entries(stats).map(
    ([name, data]) => ({
      name,
      ...data
    })
  )

  // Batting Rankings
  const battingRankings = [...players]
    .map((player) => ({
      ...player,
      points:
        (player.runs || 0) * 2 +
        (player.fifties || 0) * 25 +
        (player.hundreds || 0) * 50
    }))
    .sort(
      (a, b) => b.points - a.points
    )
    .slice(0, 10)

  // Bowling Rankings
  const bowlingRankings = [...players]
    .map((player) => ({
      ...player,
      points:
        (player.wickets || 0) * 20 +
        (player.threeWickets || 0) * 30 +
        (player.fiveWickets || 0) * 50
    }))
    .sort(
      (a, b) => b.points - a.points
    )
    .slice(0, 10)

  // All-Rounder Rankings
  const allRounderRankings = [...players]
    .map((player) => ({
      ...player,
      points:
        (player.runs || 0) * 2 +
        (player.wickets || 0) * 20 +
        (player.fifties || 0) * 25 +
        (player.hundreds || 0) * 50 +
        (player.threeWickets || 0) * 30 +
        (player.fiveWickets || 0) * 50
    }))
    .sort(
      (a, b) => b.points - a.points
    )
    .slice(0, 10)

  // All-Time Runs
  const topRuns = [...players]
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 10)

  // All-Time Wickets
  const topWickets = [...players]
    .sort(
      (a, b) =>
        b.wickets - a.wickets
    )
    .slice(0, 10)

  return (
    <div className="rankings-page">
      <h1>
        🏆 Player Rankings
      </h1>

      <div className="rankings-grid">

        <div className="ranking-card">
          <h2>
            🏏 Batting Rankings
          </h2>

          {battingRankings.map(
            (player, index) => (
              <p key={player.name}>
                {index === 0 && "🥇 "}
                {index === 1 && "🥈 "}
                {index === 2 && "🥉 "}

                {index + 1}. {player.name}

                <strong>
                  {" "}
                  - {player.points} Pts
                </strong>
              </p>
            )
          )}
        </div>

        <div className="ranking-card">
          <h2>
            🎯 Bowling Rankings
          </h2>

          {bowlingRankings.map(
            (player, index) => (
              <p key={player.name}>
                {index === 0 && "🥇 "}
                {index === 1 && "🥈 "}
                {index === 2 && "🥉 "}

                {index + 1}. {player.name}

                <strong>
                  {" "}
                  - {player.points} Pts
                </strong>
              </p>
            )
          )}
        </div>

        <div className="ranking-card">
          <h2>
            ⚡ All-Rounder Rankings
          </h2>

          {allRounderRankings.map(
            (player, index) => (
              <p key={player.name}>
                {index === 0 && "🥇 "}
                {index === 1 && "🥈 "}
                {index === 2 && "🥉 "}

                {index + 1}. {player.name}

                <strong>
                  {" "}
                  - {player.points} Pts
                </strong>
              </p>
            )
          )}
        </div>

        <div className="ranking-card">
          <h2>
            🏏 All-Time Runs
          </h2>

          {topRuns.map(
            (player, index) => (
              <p key={player.name}>
                {index === 0 && "🥇 "}
                {index === 1 && "🥈 "}
                {index === 2 && "🥉 "}

                {index + 1}. {player.name}

                <strong>
                  {" "}
                  - {player.runs} Runs
                </strong>
              </p>
            )
          )}
        </div>

        <div className="ranking-card">
          <h2>
            🎯 All-Time Wickets
          </h2>

          {topWickets.map(
            (player, index) => (
              <p key={player.name}>
                {index === 0 && "🥇 "}
                {index === 1 && "🥈 "}
                {index === 2 && "🥉 "}

                {index + 1}. {player.name}

                <strong>
                  {" "}
                  - {player.wickets}
                  {" "}Wickets
                </strong>
              </p>
            )
          )}
        </div>

      </div>
    </div>
  )
}

export default Rankings