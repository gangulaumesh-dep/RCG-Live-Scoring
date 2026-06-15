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
        <h2>
          {team.name} ({team.shortName})
        </h2>

        <p>
          <strong>Captain:</strong> {team.captain}
        </p>

        <p>
          <strong>Squad:</strong> {squadSize} Players
        </p>

        <p>Matches: {team.matches}</p>
        <p>Wins: {team.wins}</p>
        <p>Losses: {team.losses}</p>
        <p>Points: {team.points}</p>
        <p>NRR: {team.nrr}</p>
      </div>
    </Link>
  )
}

export default TeamCard