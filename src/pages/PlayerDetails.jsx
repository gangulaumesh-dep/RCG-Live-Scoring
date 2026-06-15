import { useParams } from 'react-router-dom'
import players from '../data/players'

function PlayerDetails() {
  const { id } = useParams()

  const player = players.find(
    (p) => p.id === Number(id)
  )

  if (!player) {
    return <h2>Player Not Found</h2>
  }

  return (
    <div>
      <h1>{player.name}</h1>

      <h3>Team: {player.team}</h3>
      <h3>Role: {player.role}</h3>

      <p>Matches: 0</p>
      <p>Runs: 0</p>
      <p>Wickets: 0</p>
    </div>
  )
}

export default PlayerDetails