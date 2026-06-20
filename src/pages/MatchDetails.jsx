import { useParams } from 'react-router-dom'


function MatchDetails() {
  const { id } = useParams()

  const savedMatches =
    JSON.parse(localStorage.getItem('matches')) || []

  const allMatches = [
    ...matches,
    ...savedMatches
  ]

  const match = allMatches.find(
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

      <h2>{match.result}</h2>

      <h3>
        MOM: {match.manOfTheMatch}
      </h3>
      <pre>
  {JSON.stringify(match, null, 2)}
</pre>

      <hr />

      <h2>🏏 Batting Scorecard</h2>

      {match.batting?.map((player, index) => (
        <div key={index}>
          <p>
            {player.player} - {player.runs}
            ({player.balls})
          </p>
        </div>
      ))}
      <hr />

<h2>🎯 Bowling Scorecard</h2>

{match.bowling?.map((player, index) => (
  <div key={index}>
    <p>
      {player.player} -
      {player.overs} Overs,
      {player.runs} Runs,
      {player.wickets} Wickets
    </p>
  </div>
))}
    </div>
  )
}

export default MatchDetails