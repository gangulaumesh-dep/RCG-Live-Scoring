import { useState } from 'react'
import teams from '../data/teams'

function Playoffs() {
  const matches =
    JSON.parse(localStorage.getItem('matches')) || []

  const table = teams.map((team) => ({
    ...team,
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0
  }))

  matches.forEach((match) => {
    const team1 = table.find(
      (t) => t.shortName === match.team1
    )

    const team2 = table.find(
      (t) => t.shortName === match.team2
    )

    if (!team1 || !team2) return

    team1.matches++
    team2.matches++

    if (match.winner === team1.shortName) {
      team1.wins++
      team1.points += 2
      team2.losses++
    }

    if (match.winner === team2.shortName) {
      team2.wins++
      team2.points += 2
      team1.losses++
    }
  })

  const sortedTeams = table.sort(
    (a, b) => b.points - a.points
  )

  const top6 = sortedTeams.slice(0, 6)
  const [winnerQ1, setWinnerQ1] = useState('')
  const [winnerE1, setWinnerE1] = useState('')
  const [winnerE2, setWinnerE2] = useState('')
  const [winnerQ2, setWinnerQ2] = useState('')
const [winnerQ3, setWinnerQ3] = useState('')
  const [winnerQ4, setWinnerQ4] = useState('')
const [champion, setChampion] = useState('')
  const loserQ1 =
  winnerQ1 === top6[0]?.shortName
    ? top6[1]?.shortName
    : top6[0]?.shortName
   const loserQ2 =
  winnerQ2 === winnerQ1
    ? winnerE1
    : winnerQ1
    const runnerUp =
  champion
    ? (champion === winnerQ2
        ? winnerQ4
        : winnerQ2)
    : ''
  return (

    <div>
      <h1>🏆 Playoffs</h1>

      <h2>Qualified Teams</h2>

      {top6.map((team, index) => (
        <p key={team.id}>
          Rank {index + 1} - {team.shortName}
        </p>
      ))}

      <hr />

      <h2>Q1</h2>
      <p>
        {top6[0]?.shortName} vs {top6[1]?.shortName}
      </p>
        <select
  value={winnerQ1}
  onChange={(e) =>
    setWinnerQ1(e.target.value)
  }
>
  <option value="">Select Winner</option>

  <option value={top6[0]?.shortName}>
    {top6[0]?.shortName}
  </option>

  <option value={top6[1]?.shortName}>
    {top6[1]?.shortName}
  </option>
</select>
      <h2>E1</h2>
      <p>
        {top6[2]?.shortName} vs {top6[3]?.shortName}
      </p>
        <select
  value={winnerE1}
  onChange={(e) =>
    setWinnerE1(e.target.value)
  }
>
  <option value="">Select Winner</option>

  <option value={top6[2]?.shortName}>
    {top6[2]?.shortName}
  </option>

  <option value={top6[3]?.shortName}>
    {top6[3]?.shortName}
  </option>
</select>
      <h2>E2</h2>
      <p>
        {top6[4]?.shortName} vs {top6[5]?.shortName}
      </p>
        <select
  value={winnerE2}
  onChange={(e) =>
    setWinnerE2(e.target.value)
  }
>
  <option value="">Select Winner</option>

  <option value={top6[4]?.shortName}>
    {top6[4]?.shortName}
  </option>

  <option value={top6[5]?.shortName}>
    {top6[5]?.shortName}
  </option>
</select>
 


{winnerQ1 && winnerE1 && (
  <>
    <h2>Q2</h2>

    <p>
      {winnerQ1} vs {winnerE1}
    </p>
  
  <select
  value={winnerQ2}
  onChange={(e) =>
    setWinnerQ2(e.target.value)
  }
>
  <option value="">Select Winner</option>

  <option value={winnerQ1}>
    {winnerQ1}
  </option>

  <option value={winnerE1}>
    {winnerE1}
  </option>
</select>
</>
)}

{winnerQ1 && winnerE2 && (
  <>
    <h2>Q3</h2>

    <p>
      {loserQ1} vs {winnerE2}
    </p>
  
   <select
  value={winnerQ3}
  onChange={(e) =>
    setWinnerQ3(e.target.value)
  }
>
  <option value="">Select Winner</option>

  <option value={loserQ1}>
    {loserQ1}
  </option>

  <option value={winnerE2}>
    {winnerE2}
  </option>
</select>
 </>
)}
  {winnerQ2 && winnerQ3 && (
  <>
    <h2>Q4</h2>

    <p>
      {winnerQ3} vs {loserQ2}
    </p>

  <select
  value={winnerQ4}
  onChange={(e) =>
    setWinnerQ4(e.target.value)
  }
>
  <option value="">
    Select Winner
  </option>

  <option value={winnerQ3}>
    {winnerQ3}
  </option>

  <option value={loserQ2}>
    {loserQ2}
  </option>
</select>
  </>
)}
  {winnerQ2 && winnerQ4 && (
  <>
    <h2>🏆 Final</h2>

    <p>
      {winnerQ2} vs {winnerQ4}
    </p>

    <select
      value={champion}
      onChange={(e) =>
        setChampion(e.target.value)
      }
    >
      <option value="">
        Select Champion
      </option>

      <option value={winnerQ2}>
        {winnerQ2}
      </option>

      <option value={winnerQ4}>
        {winnerQ4}
      </option>
    </select>
  </>
)}
{champion && (
  <>
    <hr />

    <h1>
      🏆 Champion: {champion}
    </h1>

    <h2>
      🥈 Runner-Up: {runnerUp}
    </h2>
  </>
)}
    </div>
  )
}
export default Playoffs