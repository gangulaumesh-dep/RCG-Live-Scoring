import { useState } from 'react'
import playersData from '../data/players'
import teamsData from '../data/teams'

function SquadManagement() {
const [teams, setTeams] = useState(
  JSON.parse(
    localStorage.getItem('teams')
  ) || teamsData
)
  const [players, setPlayers] = useState(
    JSON.parse(
      localStorage.getItem('players')
    ) || playersData
  )

  const [availablePlayers, setAvailablePlayers] =
    useState(
      JSON.parse(
        localStorage.getItem(
          'availablePlayers'
        )
      ) || []
    )

  const [selectedTeam, setSelectedTeam] =
    useState('RES')

  const [selectedPlayer, setSelectedPlayer] =
    useState('')

  const [newPlayerName, setNewPlayerName] =
    useState('')

  const [newPlayerRole, setNewPlayerRole] =
    useState('BAT')
  
  const releasePlayer = (id) => {
    const playerToRelease =
      players.find(
        (p) => p.id === id
      )

    const updatedPlayers =
      players.filter(
        (p) => p.id !== id
      )

    const updatedAvailable = [
      ...availablePlayers,
      playerToRelease
    ]

    setPlayers(updatedPlayers)
    setAvailablePlayers(
      updatedAvailable
    )

    localStorage.setItem(
      'players',
      JSON.stringify(updatedPlayers)
    )

    localStorage.setItem(
      'availablePlayers',
      JSON.stringify(updatedAvailable)
    )
  }

  const addPlayer = () => {
    if (!selectedPlayer) return

    const playerToAdd =
      availablePlayers.find(
        (p) =>
          p.id === Number(selectedPlayer)
      )

    const updatedPlayers = [
      ...players,
      {
        ...playerToAdd,
        team: selectedTeam
      }
    ]

    const updatedAvailable =
      availablePlayers.filter(
        (p) =>
          p.id !== Number(selectedPlayer)
      )

    setPlayers(updatedPlayers)
    setAvailablePlayers(
      updatedAvailable
    )

    localStorage.setItem(
      'players',
      JSON.stringify(updatedPlayers)
    )

    localStorage.setItem(
      'availablePlayers',
      JSON.stringify(updatedAvailable)
    )

    setSelectedPlayer('')
  }

  const createNewPlayer = () => {
    if (!newPlayerName) return

    const newPlayer = {
      id: Date.now(),
      name: newPlayerName,
      role: newPlayerRole,
      team: selectedTeam
    }

    const updatedPlayers = [
      ...players,
      newPlayer
    ]

    setPlayers(updatedPlayers)

    localStorage.setItem(
      'players',
      JSON.stringify(updatedPlayers)
    )

    setNewPlayerName('')
    setNewPlayerRole('BAT')
  }
  const [selectedCaptain, setSelectedCaptain] =
  useState('')
 const changeCaptain = () => {
  if (!selectedCaptain) return

  const updatedTeams = teams.map(
    (team) =>
      team.shortName === selectedTeam
        ? {
            ...team,
            captain: selectedCaptain
          }
        : team
  )

  setTeams(updatedTeams)

  localStorage.setItem(
    'teams',
    JSON.stringify(updatedTeams)
  )

  alert(
    `${selectedCaptain} is now captain of ${selectedTeam}`
  )
}

  return (
    <div>
      <h1>👥 Squad Management</h1>

      <h2>Select Team</h2>

      <select
        value={selectedTeam}
        onChange={(e) =>
          setSelectedTeam(
            e.target.value
          )
        }
      >
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

      <div className="record-card">
        <h2>➕ Create New Player</h2>

        <input
          type="text"
          placeholder="Player Name"
          value={newPlayerName}
          onChange={(e) =>
            setNewPlayerName(
              e.target.value
            )
          }
        />

        <select
          value={newPlayerRole}
          onChange={(e) =>
            setNewPlayerRole(
              e.target.value
            )
          }
        >
          <option value="BAT">
            BAT
          </option>
          <option value="WK">
            WK
          </option>
          <option value="AR">
            AR
          </option>
          <option value="BOWL">
            BOWL
          </option>
        </select>

        <button
          onClick={createNewPlayer}
        >
          Create Player
        </button>
      </div>

      <div className="record-card">
        <h2>
          Available Players
        </h2>

        {availablePlayers.map(
          (player) => (
            <p key={player.id}>
              {player.name}
              ({player.role})
            </p>
          )
        )}
      </div>

      <div className="record-card">
        <h2>➕ Add Player</h2>

        <select
          value={selectedPlayer}
          onChange={(e) =>
            setSelectedPlayer(
              e.target.value
            )
          }
        >
          <option value="">
            Select Player
          </option>

          {availablePlayers.map(
            (player) => (
              <option
                key={player.id}
                value={player.id}
              >
                {player.name}
              </option>
            )
          )}
        </select>

        <button
          onClick={addPlayer}
        >
          Add To {selectedTeam}
        </button>
      </div>
      <div className="record-card">
  <h2>👑 Change Captain</h2>

  <p>
    Current Captain:{' '}
    {
      teams.find(
        (t) =>
          t.shortName === selectedTeam
      )?.captain
    }
  </p>

  <select
    value={selectedCaptain}
    onChange={(e) =>
      setSelectedCaptain(
        e.target.value
      )
    }
  >
    <option value="">
      Select Captain
    </option>

    {players
      .filter(
        (player) =>
          player.team === selectedTeam
      )
      .map((player) => (
        <option
          key={player.id}
          value={player.name}
        >
          {player.name}
        </option>
      ))}
  </select>

  <button
    onClick={changeCaptain}
  >
    Save Captain
  </button>
</div>

<div className="record-card">
  <h2>
    {selectedTeam} Squad
  </h2>

  {players
    .filter(
      (player) =>
        player.team === selectedTeam
    )
    .map((player) => (
      <p key={player.id}>
        {player.name}
        ({player.role})

        <button
          onClick={() =>
            releasePlayer(player.id)
          }
        >
          Release
        </button>
      </p>
    ))}
</div>
    </div>
  )
}

export default SquadManagement