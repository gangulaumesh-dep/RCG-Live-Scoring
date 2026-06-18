import { Link } from 'react-router-dom'
import players from '../data/players'

function TeamCard({ team }) {
  const squadSize = players.filter(
    (player) => player.team === team.shortName
  ).length

  return (
  <Link
    to={`/teams/${team.shortName}`}
    style={{
      textDecoration: 'none',
      color: 'inherit'
    }}
  >
    <div className="team-card">
      <h2>🏏 {team.shortName}</h2>

      <h3>{team.name}</h3>

      <p>
        👑 <strong>Captain:</strong>{" "}
        {team.captain}
      </p>

      <p>
        👥 <strong>Squad:</strong>{" "}
        {squadSize} Players
      </p>

      <hr />

      <div className="team-stats">
        <p>🏏 M: {team.matches}</p>
        <p>✅ W: {team.wins}</p>
        <p>❌ L: {team.losses}</p>
        <p>🏆 Pts: {team.points}</p>
      </div>

      <p>
        📈 <strong>NRR:</strong>{" "}
        {team.nrr}
      </p>

      <button className="team-btn">
        View Team →
      </button>
    </div>
  </Link>
)
}
export default TeamCard