import { useParams } from 'react-router-dom'
import teams from '../data/teams'
import players from '../data/players'

function TeamDetails() {
  const { shortName } = useParams()

  const team = teams.find(
    (t) => t.shortName === shortName
  )

  const squad = players.filter(
    (p) => p.team === shortName
  )

  const batsmen = squad.filter((p) => p.role === 'BAT')
  const wicketkeepers = squad.filter((p) => p.role === 'WK')
  const allRounders = squad.filter(
    (p) => p.role === 'FAR' || p.role === 'SAR'
  )
  const bowlers = squad.filter(
    (p) => p.role === 'FB' || p.role === 'SB'
  )

  if (!team) {
    return <h2>Team Not Found</h2>
  }

  return (
    <div className="team-details">
      <h1>{team.name}</h1>

      <h2>Captain: {team.captain}</h2>
      <h3>Squad Size: {squad.length}</h3>

      <hr />

      <h2>🏏 Batsmen</h2>
      {batsmen.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}

      <h2>🧤 Wicketkeepers</h2>
      {wicketkeepers.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}

      <h2>⭐ All Rounders</h2>
      {allRounders.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}

      <h2>🎯 Bowlers</h2>
      {bowlers.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}
    </div>
  )
}

export default TeamDetails