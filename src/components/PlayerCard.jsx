import { Link } from 'react-router-dom'

function PlayerCard({ player }) {
  const savedStats =
    JSON.parse(localStorage.getItem(
  'allTimePlayerStats'
)) || {}

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
      <h2>👤 {player.name}</h2>

      <p>
        🏏 <strong>Team:</strong>{" "}
        {player.team}
      </p>

      <span
        className={`role-badge ${player.role}`}
      >
        {player.role}
      </span>

      <hr />

      <div className="player-stats">
        <p>🏏 M: {stats.matches}</p>
        <p>🏃 R: {stats.runs}</p>
        <p>🎯 W: {stats.wickets}</p>
      </div>

      <button className="player-btn">
        View Profile →
      </button>
    </div>
  </Link>
)
}

export default PlayerCard