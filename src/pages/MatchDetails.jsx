import { useParams } from 'react-router-dom'

function MatchDetails() {
  const { id } = useParams()

  const matches =
    JSON.parse(
      localStorage.getItem(
        'allTimeMatches'
      )
    ) || []

  const match = matches.find(
    (m) => m.id === Number(id)
  )

  if (!match) {
    return <h2>Match Not Found</h2>
  }

  return (
    <div>
      <h1>
        {match.team1} vs {match.team2}
      </h1>

      <h3>
        Toss: {match.tossWinner}
      </h3>

      <h3>
        Elected To: {match.electedTo}
      </h3>

      <p>
        {match.team1}: {match.score1}
      </p>

      <p>
        {match.team2}: {match.score2}
      </p>

      <h2>
        {match.result}
      </h2>

      <h3>
        MOM: {match.manOfTheMatch}
      </h3>

      <hr />

      <h2>
        🏏 Innings 1 Batting
      </h2>

      {match.batting?.map(
        (player, index) => (
          <div key={index}>
            <p>
              {player.player}
              {' - '}
              {player.runs}
              (
              {player.balls}
              )
            </p>
          </div>
        )
      )}

      <hr />

      <h2>
        🎯 Innings 1 Bowling
      </h2>

      {match.bowling?.map(
        (player, index) => (
          <div key={index}>
            <p>
              {player.player}
              {' - '}
              {player.overs} Overs,
              {' '}
              {player.runs} Runs,
              {' '}
              {player.wickets} Wickets
            </p>
          </div>
        )
      )}

      <hr />

      <h2>
        🏏 Innings 2 Batting
      </h2>

      {match.batting2?.map(
        (player, index) => (
          <div key={index}>
            <p>
              {player.player}
              {' - '}
              {player.runs}
              (
              {player.balls}
              )
            </p>
          </div>
        )
      )}

      <hr />

      <h2>
        🎯 Innings 2 Bowling
      </h2>

      {match.bowling2?.map(
        (player, index) => (
          <div key={index}>
            <p>
              {player.player}
              {' - '}
              {player.overs} Overs,
              {' '}
              {player.runs} Runs,
              {' '}
              {player.wickets} Wickets
            </p>
          </div>
        )
      )}
    </div>
  )
}

export default MatchDetails