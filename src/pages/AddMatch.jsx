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
  const [batting, setBatting] = useState([
  {
    player: '',
    runs: '',
    balls: ''
  }
 ])
  const addBatsman = () => {
  setBatting([
    ...batting,
    {
      player: '',
      runs: '',
      balls: ''
    }
  ])
 }
  const [bowling, setBowling] = useState([
  {
    player: '',
    overs: '',
    runs: '',
    wickets: ''
  }
 ])
   const addBowler = () => {
  setBowling([
    ...bowling,
    {
      player: '',
      overs: '',
      runs: '',
      wickets: ''
    }
  ])
  }
  return (
    <div>
      <h1>Add Match</h1>

      <h2>🏏 Batting Scorecard</h2>

 {batting.map((batsman, index) => (
  <div key={index}>
    <input
      type="text"
      placeholder="Player"
      value={batsman.player}
      onChange={(e) => {
        const updated = [...batting]
        updated[index].player = e.target.value
        setBatting(updated)
      }}
    />

    <input
      type="number"
      placeholder="Runs"
      value={batsman.runs}
      onChange={(e) => {
        const updated = [...batting]
        updated[index].runs = e.target.value
        setBatting(updated)
      }}
    />

    <input
      type="number"
      placeholder="Balls"
      value={batsman.balls}
      onChange={(e) => {
        const updated = [...batting]
        updated[index].balls = e.target.value
        setBatting(updated)
      }}
    />

    <br />
    <br />
  </div>
 ))}

 <button onClick={addBatsman}>
  + Add Batsman
 </button>

 <br />
 <br />

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

 {bowling.map((bowler, index) => (
  <div key={index}>
    <input
      type="text"
      placeholder="Bowler"
      value={bowler.player}
      onChange={(e) => {
        const updated = [...bowling]
        updated[index].player = e.target.value
        setBowling(updated)
      }}
    />

    <input
      type="number"
      placeholder="Overs"
      value={bowler.overs}
      onChange={(e) => {
        const updated = [...bowling]
        updated[index].overs = e.target.value
        setBowling(updated)
      }}
    />

    <input
      type="number"
      placeholder="Runs"
      value={bowler.runs}
      onChange={(e) => {
        const updated = [...bowling]
        updated[index].runs = e.target.value
        setBowling(updated)
      }}
    />

    <input
      type="number"
      placeholder="Wickets"
      value={bowler.wickets}
      onChange={(e) => {
        const updated = [...bowling]
        updated[index].wickets = e.target.value
        setBowling(updated)
      }}
    />

    <br />
    <br />
  </div>
 ))}

 <button onClick={addBowler}>
  + Add Bowler
 </button>

 <br />
 <br />

 <button onClick={() => {
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

  batting: batting.map((player) => ({
  player: player.player,
  runs: Number(player.runs),
  balls: Number(player.balls)
 })),
    bowling: bowling.map((player) => ({
  player: player.player,
  overs: Number(player.overs),
  runs: Number(player.runs),
  wickets: Number(player.wickets)
  })),
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
    setBatting([
  {
    player: '',
    runs: '',
    balls: ''
  }
])
    setBowling([
  {
    player: '',
    overs: '',
    runs: '',
    wickets: ''
  }
 ])
  }}>
  Save Match
 </button>
    </div>
  )
}

export default AddMatch