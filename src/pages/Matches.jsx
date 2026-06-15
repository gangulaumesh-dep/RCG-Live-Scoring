import { Link } from 'react-router-dom'
import matches from '../data/matches'
import MatchCard from '../components/MatchCard'

function Matches() {
  const savedMatches =
    JSON.parse(localStorage.getItem('matches')) || []

  const allMatches = [
    ...matches,
    ...savedMatches
  ]

  return (
    <div className="matches">
      <h1>Matches</h1>

      <Link to="/add-match">
        <button>Add Match</button>
      </Link>

      <br />
      <br />

      {allMatches.map((match) => (
        <MatchCard
          key={match.id}
          match={match}
        />
      ))}
    </div>
  )
}

export default Matches