import { Link } from 'react-router-dom'

function MatchCard({ match }) {
  return (
    <Link
      to={`/matches/${match.id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div className="match-card">
        <h2>
          {match.team1} vs {match.team2}
        </h2>

        <p>Toss: {match.tossWinner}</p>

        <p>
          Elected To: {match.electedTo}
        </p>

        <hr />

        <p>
          {match.team1}: {match.score1}
          ({match.overs1})
        </p>

        <p>
          {match.team2}: {match.score2}
          ({match.overs2})
        </p>

        <h3>{match.result}</h3>

        <p>
          MOM: {match.manOfTheMatch}
        </p>
      </div>
    </Link>
  )
}

export default MatchCard