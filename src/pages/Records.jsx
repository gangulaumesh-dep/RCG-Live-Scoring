function Records() {
  const matches =
    JSON.parse(
      localStorage.getItem(
        'allTimeMatches'
      )
    ) || []

  const stats =
    JSON.parse(
      localStorage.getItem(
        'allTimePlayerStats'
      )
    ) || {}

  const seasonStats =
    JSON.parse(
      localStorage.getItem(
        'seasonPlayerStats'
      )
    ) || {}

  const playersData =
    JSON.parse(
      localStorage.getItem('players')
    ) || []

  const getTeam = (name) => {
    return (
      playersData.find(
        (p) => p.name === name
      )?.team || '-'
    )
  }

  const players = Object.entries(stats).map(
    ([name, data]) => ({
      name,
      ...data
    })
  )

  const seasonPlayers =
    Object.entries(seasonStats).map(
      ([name, data]) => ({
        name,
        ...data
      })
    )

  // Current Season Records

  const orangeCap = [...seasonPlayers]
    .sort((a, b) => b.runs - a.runs)[0]

  const purpleCap = [...seasonPlayers]
    .sort(
      (a, b) => b.wickets - a.wickets
    )[0]

  const seasonHighestScore =
    [...seasonPlayers].sort(
      (a, b) =>
        (b.highestScore || 0) -
        (a.highestScore || 0)
    )[0]

  const seasonBestBowling =
    [...seasonPlayers].sort(
      (a, b) =>
        (b.bestWickets || 0) -
        (a.bestWickets || 0)
    )[0]

  // All Time Records

  const highestScore = [...players]
    .sort(
      (a, b) =>
        (b.highestScore || 0) -
        (a.highestScore || 0)
    )[0]

  const mostRuns = [...players]
    .sort(
      (a, b) =>
        (b.runs || 0) -
        (a.runs || 0)
    )[0]

  const mostWickets = [...players]
    .sort(
      (a, b) =>
        (b.wickets || 0) -
        (a.wickets || 0)
    )[0]

  const mostFifties = [...players]
    .sort(
      (a, b) =>
        (b.fifties || 0) -
        (a.fifties || 0)
    )[0]

  const mostHundreds = [...players]
    .sort(
      (a, b) =>
        (b.hundreds || 0) -
        (a.hundreds || 0)
    )[0]

  const bestBowling = [...players]
    .sort(
      (a, b) =>
        (b.bestWickets || 0) -
        (a.bestWickets || 0)
    )[0]

  const most3W = [...players]
    .sort(
      (a, b) =>
        (b.threeWickets || 0) -
        (a.threeWickets || 0)
    )[0]

  const most5W = [...players]
    .sort(
      (a, b) =>
        (b.fiveWickets || 0) -
        (a.fiveWickets || 0)
    )[0]

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

  return (
    <div>
      <h1>🏆 Records Center</h1>

      <h2>
        🟠 Current Season Records
      </h2>

      <div className="record-card">
        <h3>🟠 Orange Cap</h3>

        <p>
          {orangeCap?.name}
          {' '}
          ({getTeam(
            orangeCap?.name
          )})
        </p>

        <p>
          {orangeCap?.runs} Runs
        </p>
      </div>

      <div className="record-card">
        <h3>🟣 Purple Cap</h3>

        <p>
          {purpleCap?.name}
          {' '}
          ({getTeam(
            purpleCap?.name
          )})
        </p>

        <p>
          {purpleCap?.wickets}
          {' '}
          Wickets
        </p>
      </div>

      <div className="record-card">
        <h3>💯 Highest Score</h3>

        <p>
          {seasonHighestScore?.name}
          {' '}
          ({getTeam(
            seasonHighestScore?.name
          )})
        </p>

        <p>
          {
            seasonHighestScore?.highestScore
          }
        </p>
      </div>

      <div className="record-card">
        <h3>🎯 Best Bowling</h3>

        <p>
          {seasonBestBowling?.name}
          {' '}
          ({getTeam(
            seasonBestBowling?.name
          )})
        </p>

        <p>
          {
            seasonBestBowling?.bestFigures
          }
        </p>
      </div>

      <hr />

      <h2>🌍 All-Time Records</h2>

      <div className="record-card">
        <h3>🏏 Most Runs</h3>

        <p>
          {mostRuns?.name}
          {' '}
          ({getTeam(
            mostRuns?.name
          )})
        </p>

        <p>{mostRuns?.runs}</p>
      </div>

      <div className="record-card">
        <h3>🎯 Most Wickets</h3>

        <p>
          {mostWickets?.name}
          {' '}
          ({getTeam(
            mostWickets?.name
          )})
        </p>

        <p>
          {mostWickets?.wickets}
        </p>
      </div>

      <div className="record-card">
        <h3>💯 Highest Score Ever</h3>

        <p>
          {highestScore?.name}
          {' '}
          ({getTeam(
            highestScore?.name
          )})
        </p>

        <p>
          {highestScore?.highestScore}
        </p>
      </div>

      <div className="record-card">
        <h3>🏏 Most 50s</h3>

        <p>
          {mostFifties?.name}
          {' '}
          ({getTeam(
            mostFifties?.name
          )})
        </p>

        <p>
          {mostFifties?.fifties}
        </p>
      </div>

      <div className="record-card">
        <h3>💯 Most 100s</h3>

        <p>
          {mostHundreds?.name}
          {' '}
          ({getTeam(
            mostHundreds?.name
          )})
        </p>

        <p>
          {mostHundreds?.hundreds}
        </p>
      </div>

      <div className="record-card">
        <h3>🎯 Best Bowling Ever</h3>

        <p>
          {bestBowling?.name}
          {' '}
          ({getTeam(
            bestBowling?.name
          )})
        </p>

        <p>
          {bestBowling?.bestFigures}
        </p>
      </div>

      <div className="record-card">
        <h3>🔥 Most 3W Hauls</h3>

        <p>
          {most3W?.name}
          {' '}
          ({getTeam(
            most3W?.name
          )})
        </p>

        <p>
          {most3W?.threeWickets}
        </p>
      </div>

      <div className="record-card">
        <h3>🔥 Most 5W Hauls</h3>

        <p>
          {most5W?.name}
          {' '}
          ({getTeam(
            most5W?.name
          )})
        </p>

        <p>
          {most5W?.fiveWickets}
        </p>
      </div>

      <div className="record-card">
        <h3>🚀 Highest Team Score</h3>

        <p>
          {highestTeamScore}
        </p>
      </div>
    </div>
  )
}

export default Records