import { useState } from 'react'
import teams from '../data/teams'
import { updatePlayerStats } from '../utils/updatePlayerStats'

function AddMatch() {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [score1, setScore1] = useState('')
  const [score2, setScore2] = useState('')
  const [tossWinner, setTossWinner] = useState('')
  const [electedTo, setElectedTo] = useState('')
  const [winner, setWinner] = useState('')
  const [manOfTheMatch, setManOfTheMatch] = useState('')
  const [batsman1, setBatsman1] = useState('')
  const [runs1, setRuns1] = useState('')
  const [balls1, setBalls1] = useState('')

  const [batsman2, setBatsman2] = useState('')
  const [runs2, setRuns2] = useState('')
  const [balls2, setBalls2] = useState('')
  const [bowler1, setBowler1] = useState('')
  const [overs1, setOvers1] = useState('')
  const [runsGiven1, setRunsGiven1] = useState('')
  const [wickets1, setWickets1] = useState('')

  return (
    <div>
      <h1>Add Match</h1>

      <h2>Batting Scorecard</h2>

     <input
      type="text"
      placeholder="Batsman 1"
      value={batsman1}
      onChange={(e) => setBatsman1(e.target.value)}
      />

     <input
     type="number"
     placeholder="Runs"
      value={runs1}
      onChange={(e) => setRuns1(e.target.value)}
     />

     <input
      type="number"
      placeholder="Balls"
      value={balls1}
      onChange={(e) => setBalls1(e.target.value)}
      />

<br /><br />

<input
  type="text"
  placeholder="Batsman 2"
  value={batsman2}
  onChange={(e) => setBatsman2(e.target.value)}
/>

<input
  type="number"
  placeholder="Runs"
  value={runs2}
  onChange={(e) => setRuns2(e.target.value)}
/>

<input
  type="number"
  placeholder="Balls"
  value={balls2}
  onChange={(e) => setBalls2(e.target.value)}
/>

      <h3>Team 1</h3>

      <select
        value={team1}
        onChange={(e) =>
          setTeam1(e.target.value)
        }
      >
        <option value="">
          Select Team
        </option>

        {teams.map((team) => (
          <option
            key={team.id}
            value={team.shortName}
          >
            {team.shortName}
          </option>
        ))}
      </select>

      <h3>Team 2</h3>

      <select
        value={team2}
        onChange={(e) =>
          setTeam2(e.target.value)
        }
      >
        <option value="">
          Select Team
        </option>

        {teams.map((team) => (
          <option
            key={team.id}
            value={team.shortName}
          >
            {team.shortName}
          </option>
        ))}
      </select>

      <h3>Score 1</h3>

      <input
        type="text"
        placeholder="175/6"
        value={score1}
        onChange={(e) =>
          setScore1(e.target.value)
        }
      />

      <h3>Score 2</h3>

      <input
        type="text"
        placeholder="168/8"
        value={score2}
        onChange={(e) =>
          setScore2(e.target.value)
        }
      />

      <h3>Toss Winner</h3>

      <select
        value={tossWinner}
        onChange={(e) =>
          setTossWinner(e.target.value)
        }
      >
        <option value="">
          Select Team
        </option>

        {teams.map((team) => (
          <option
            key={team.id}
            value={team.shortName}
          >
            {team.shortName}
          </option>
        ))}
      </select>

      <h3>Elected To</h3>

      <select
        value={electedTo}
        onChange={(e) =>
          setElectedTo(e.target.value)
        }
      >
        <option value="">
          Select Option
        </option>
        <option value="bat">
          Bat
        </option>
        <option value="bowl">
          Bowl
        </option>
      </select>

      <h3>Winner</h3>

      <select
        value={winner}
        onChange={(e) =>
          setWinner(e.target.value)
        }
      >
        <option value="">
          Select Team
        </option>

        {teams.map((team) => (
          <option
            key={team.id}
            value={team.shortName}
          >
            {team.shortName}
          </option>
        ))}
      </select>

      <h3>Man of the Match</h3>

      <input
        type="text"
        placeholder="Player Name"
        value={manOfTheMatch}
        onChange={(e) =>
          setManOfTheMatch(e.target.value)
        }
      />
      <h2>🎯 Bowling Scorecard</h2>

<input
  type="text"
  placeholder="Bowler"
  value={bowler1}
  onChange={(e) => setBowler1(e.target.value)}
/>

<input
  type="number"
  placeholder="Overs"
  value={overs1}
  onChange={(e) => setOvers1(e.target.value)}
/>

<input
  type="number"
  placeholder="Runs"
  value={runsGiven1}
  onChange={(e) => setRunsGiven1(e.target.value)}
/>

<input
  type="number"
  placeholder="Wickets"
  value={wickets1}
  onChange={(e) => setWickets1(e.target.value)}
/>

      <br />
      <br />

      <button
  onClick={() => {
    const newMatch = {
  id: Date.now(),
  team1,
  team2,
  score1,
  score2,
  tossWinner,
  electedTo,
  winner,
  manOfTheMatch,

  batting: [
    {
      player: batsman1,
      runs: Number(runs1),
      balls: Number(balls1)
    },
    {
      player: batsman2,
      runs: Number(runs2),
      balls: Number(balls2)
    }
  ],
    bowling: [
    {
      player: bowler1,
      overs: Number(overs1),
      runs: Number(runsGiven1),
      wickets: Number(wickets1)
    }
  ],
  result: `${winner} won`
}

    const oldMatches =
      JSON.parse(localStorage.getItem("matches")) || []

    const updatedMatches = [
      ...oldMatches,
      newMatch
    ]
    console.log("NEW MATCH:", newMatch)
    console.log("UPDATED:", updatedMatches)
    localStorage.setItem(
      "matches",
      JSON.stringify(updatedMatches)
    )
    updatePlayerStats(newMatch)

    alert("Match Saved!")

    setTeam1('')
    setTeam2('')
    setScore1('')
    setScore2('')
    setTossWinner('')
    setElectedTo('')
    setWinner('')
    setManOfTheMatch('')
    setBatsman1('')
    setRuns1('')
    setBalls1('')
    setBatsman2('')
    setRuns2('')
    setBalls2('')
    setBowler1('')
    setOvers1('')
    setRunsGiven1('')
    setWickets1('')
  }}
>
  Save Match
</button>
    </div>
  )
}

export default AddMatch