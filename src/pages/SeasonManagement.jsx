import { useState } from 'react'
import teamsData from '../data/teams'

const teams =
  JSON.parse(
    localStorage.getItem('teams')
  ) || teamsData
import SquadManagement from './SquadManagement'
function SeasonManagement() {
  const [season] = useState(
  Number(
    localStorage.getItem(
      'currentSeason'
    )
  ) || 13
)
  const [potm, setPotm] = useState('')
  const seasonResult =
  JSON.parse(
    localStorage.getItem('seasonResult')
  ) || {}
  const stats =
  JSON.parse(
    localStorage.getItem('playerStats')
  ) || {}

const players = Object.entries(stats).map(
  ([name, data]) => ({
    name,
    ...data
  })
)
const championTeam = teams.find(
  (t) => t.shortName === seasonResult.champion
)

const championCaptain =
  championTeam?.captain || '-'
const orangeCap = [...players]
  .sort((a, b) => b.runs - a.runs)[0]

const purpleCap = [...players]
  .sort((a, b) => b.wickets - a.wickets)[0]
  const endSeason = () => {
  const history =
    JSON.parse(
      localStorage.getItem('seasonHistory')
    ) || []
const alreadyExists = history.some(
  (s) => s.season === season
)

if (alreadyExists) {
  alert(
    `Season ${season} already saved`
  )
  
  return
}

history.push({
  season,
  champion: seasonResult.champion,
  runnerUp: seasonResult.runnerUp,
  captain: championCaptain,

  orangeCap: orangeCap?.name || '-',
  orangeCapRuns: orangeCap?.runs || 0,

  purpleCap: purpleCap?.name || '-',
  purpleCapWickets: purpleCap?.wickets || 0,

  potm
})

  localStorage.setItem(
    'seasonHistory',
    JSON.stringify(history)
  )

  alert(
    `Season ${season} saved!`
  )
}
  const startSeason = () => {
  localStorage.removeItem('matches')

  localStorage.removeItem(
    'seasonResult'
  )

  localStorage.removeItem(
    'seasonPlayerStats'
  )

  localStorage.removeItem(
    'pointsTable'
  )

  localStorage.removeItem(
    'playoffs'
  )

  localStorage.setItem(
    'currentSeason',
    season + 1
  )

  alert(
    `Season ${season + 1} Started!`
  )

  window.location.reload()
}
  return (
    <div className="season-page">
      <h1>⚙️ Season Management</h1>

      <div className="season-grid">

        <div className="season-card">
          <h2>🏁 End Season</h2>

          <p>
            Save Champion, Runner-Up,
            Orange Cap, Purple Cap and POTM
            to History.
          </p>
          <p>
  🏆 Champion: {seasonResult.champion || '-'}
</p>

<p>
  🥈 Runner-Up: {seasonResult.runnerUp || '-'}
</p>
<p>
  👑 Winning Captain:
  {championCaptain}
</p>
<p>
  🏏 Orange Cap:
  {orangeCap?.name} ({orangeCap?.runs})
</p>

<p>
  🎯 Purple Cap:
  {purpleCap?.name} ({purpleCap?.wickets})
</p>
         <select
  value={potm}
  onChange={(e) =>
    setPotm(e.target.value)
  }
>
  <option value="">
    Select POTM
  </option>

  {players.map((player) => (
    <option
      key={player.name}
      value={player.name}
    >
      {player.name}
    </option>
  ))}
</select>
         <button
  onClick={endSeason}
  disabled={!potm}
>
  🏁 End Season {season}
</button>
        </div>

        <div className="season-card">
          <h2>🔄 Start New Season</h2>

          <p>
            Reset Matches, Records,
            Points Table and Playoffs.
          </p>
         <button
  onClick={startSeason}
>
  🔄 Start Season {season + 1}
</button>
        </div>

      </div>

      <hr />

      <SquadManagement />
    </div>
  )
}

export default SeasonManagement