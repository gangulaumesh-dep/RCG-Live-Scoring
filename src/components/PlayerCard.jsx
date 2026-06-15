import { Link } from 'react-router-dom'

function PlayerCard({ player }) {
  const savedStats =
    JSON.parse(localStorage.getItem('playerStats')) || {}

  const stats = savedStats[player.name] || {
    matches: 0,
    runs: 0,
    wickets: 0
  }

  return (
    <Link
      to={`/players/${player.id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div className="player-card">
        <h2>{player.name}</h2>

        <p>Team: {player.team}</p>
        <p>Role: {player.role}</p>

        <p>Matches: {stats.matches}</p>
        <p>Runs: {stats.runs}</p>
        <p>Wickets: {stats.wickets}</p>
      </div>
    </Link>
  )
}

export default PlayerCard