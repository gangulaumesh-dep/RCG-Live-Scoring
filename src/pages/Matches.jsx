import { Link } from 'react-router-dom'
import MatchCard from '../components/MatchCard'

function Matches() {

  const matches =
    JSON.parse(
      localStorage.getItem('matches')
    ) || []

  return (
    <div className="matches">

      <h1>Matches</h1>

      <Link to="/add-match">
        <button>
          Add Match
        </button>
      </Link>

      <br />
      <br />

      {matches.length === 0 ? (
        <p>
          No matches found.
        </p>
      ) : (
        matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
          />
        ))
      )}

    </div>
  )
}

export default Matches