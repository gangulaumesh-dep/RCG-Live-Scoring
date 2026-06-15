import { useState } from 'react'
import players from '../data/players'
import PlayerCard from '../components/PlayerCard'

function Players() {
  const [search, setSearch] = useState('')
  const [teamFilter, setTeamFilter] = useState('')

  const filteredPlayers = players.filter((player) => {
    const matchName = player.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchTeam =
      teamFilter === '' || player.team === teamFilter

    return matchName && matchTeam
  })

  return (
    <div className="players-page">
      <h1>Players</h1>

      <input
        type="text"
        placeholder="Search Player..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={teamFilter}
        onChange={(e) => setTeamFilter(e.target.value)}
      >
        <option value="">All Teams</option>
        <option value="RES">RES</option>
        <option value="RKS">RKS</option>
        <option value="SLS">SLS</option>
        <option value="MRS">MRS</option>
        <option value="LMS">LMS</option>
        <option value="HRS">HRS</option>
        <option value="RFS">RFS</option>
        <option value="AWS">AWS</option>
        <option value="GCP">GCP</option>
        <option value="TDR">TDR</option>
      </select>

      <h3>Total Players: {filteredPlayers.length}</h3>

      <div className="players">
        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </div>
  )
}

export default Players