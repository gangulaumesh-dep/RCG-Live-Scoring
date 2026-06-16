import { useState } from 'react'
import teams from '../data/teams'
import { updatePlayerStats } from '../utils/updatePlayerStats'
import players from '../data/players' 

function AddMatch() {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [score1, setScore1] = useState('')
  const [score2, setScore2] = useState('')
  const [tossWinner, setTossWinner] = useState('')
  const [electedTo, setElectedTo] = useState('')
  const [winner, setWinner] = useState('')
  const [manOfTheMatch, setManOfTheMatch] = useState('')
  const [battingTeam, setBattingTeam] = useState('')
  const [bowlingTeam, setBowlingTeam] = useState('')
  const [batting, setBatting] = useState([
  {
  player: '',
  runs: '',
  balls: '',
  fours: '',
  sixes: ''
}
 ])
  const addBatsman = () => {
  setBatting([
    ...batting,
    {
      player: '',
      runs: '',
      balls: '',
      fours: '',
      sixes: ''
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
  const [batting2, setBatting2] = useState([
  {
  player: '',
  runs: '',
  balls: '',
  fours: '',
  sixes: ''
 }
])

const [bowling2, setBowling2] = useState([
  {
    player: '',
    overs: '',
    runs: '',
    wickets: ''
  }
])

const [battingTeam2, setBattingTeam2] = useState('')
const [bowlingTeam2, setBowlingTeam2] = useState('')
const addBatsman2 = () => {
  setBatting2([
    ...batting2,
    {
  player: '',
  runs: '',
  balls: '',
  fours: '',
  sixes: ''
 }
  ])
}

const addBowler2 = () => {
  setBowling2([
    ...bowling2,
    {
      player: '',
      overs: '',
      runs: '',
      wickets: ''
    }
  ])
}
const [oversTeam1, setOversTeam1] = useState('')
const [oversTeam2, setOversTeam2] = useState('')
  return (
    <div>
      <h1>Add Match</h1>
      <h3>Batting Team</h3>

<select
  value={battingTeam}
  onChange={(e) => setBattingTeam(e.target.value)}
>
  <option value="">Select Team</option>

  {teams.map((team) => (
    <option
      key={team.id}
      value={team.shortName}
    >
      {team.shortName}
    </option>
  ))}
</select>

      <h2>🏏 Batting Scorecard</h2>

 {batting.map((batsman, index) => (
  <div key={index}>
   <select
  value={batsman.player}
  onChange={(e) => {
    const updated = [...batting]
    updated[index].player = e.target.value
    setBatting(updated)
  }}
>
  <option value="">
    Select Player
  </option>

  {players
    .filter(
      (player) =>
        player.team === battingTeam
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
        <input
  type="number"
  placeholder="4s"
  value={batsman.fours}
  onChange={(e) => {
    const updated = [...batting]
    updated[index].fours = e.target.value
    setBatting(updated)
  }}
/>

<input
  type="number"
  placeholder="6s"
  value={batsman.sixes}
  onChange={(e) => {
    const updated = [...batting]
    updated[index].sixes = e.target.value
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
       <h3>Overs 1</h3>

<input
  type="text"
  placeholder="20"
  value={oversTeam1}
  onChange={(e) =>
    setOversTeam1(e.target.value)
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
         <h3>Overs 2</h3>

<input
  type="text"
  placeholder="19.3"
  value={oversTeam2}
  onChange={(e) =>
    setOversTeam2(e.target.value)
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
      <h3>Bowling Team</h3>

<select
  value={bowlingTeam}
  onChange={(e) => setBowlingTeam(e.target.value)}
>
  <option value="">Select Team</option>

  {teams.map((team) => (
    <option
      key={team.id}
      value={team.shortName}
    >
      {team.shortName}
    </option>
  ))}
</select>
      <h2>🎯 Bowling Scorecard</h2>

 {bowling.map((bowler, index) => (
  <div key={index}>
    <select
  value={bowler.player}
  onChange={(e) => {
    const updated = [...bowling]
    updated[index].player = e.target.value
    setBowling(updated)
  }}
>
  <option value="">
    Select Player
  </option>

  {players
    .filter(
      (player) =>
        player.team === bowlingTeam
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
    <hr />


 <button onClick={addBowler}>
  + Add Bowler
 </button>

 <br />
 <br />
   <h1>🏏 Innings 2</h1>
   <h3>Batting Team</h3>

<select
  value={battingTeam2}
  onChange={(e) => setBattingTeam2(e.target.value)}
>
  <option value="">Select Team</option>

  {teams.map((team) => (
    <option
      key={team.id}
      value={team.shortName}
    >
      {team.shortName}
    </option>
  ))}
</select>

      <h2>🏏 Batting Scorecard</h2>

 {batting2.map((batsman, index) => (
  <div key={index}>
   <select
  value={batsman.player}
  onChange={(e) => {
    const updated = [...batting2]
    updated[index].player = e.target.value
    setBatting2(updated)
  }}
>
  <option value="">
    Select Player
  </option>

  {players
    .filter(
      (player) =>
        player.team === battingTeam2
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

    <input
      type="number"
      placeholder="Runs"
      value={batsman.runs}
      onChange={(e) => {
        const updated = [...batting2]
        updated[index].runs = e.target.value
        setBatting2(updated)
      }}
    />

    <input
      type="number"
      placeholder="Balls"
      value={batsman.balls}
      onChange={(e) => {
        const updated = [...batting2]
        updated[index].balls = e.target.value
        setBatting2(updated)
      }}
    />
      <input
  type="number"
  placeholder="4s"
  value={batsman.fours}
  onChange={(e) => {
    const updated = [...batting2]
    updated[index].fours = e.target.value
    setBatting2(updated)
  }}
/>

<input
  type="number"
  placeholder="6s"
  value={batsman.sixes}
  onChange={(e) => {
    const updated = [...batting2]
    updated[index].sixes = e.target.value
    setBatting2(updated)
  }}
/>
    <br />
    <br />
  </div>
 ))}
       
 <button onClick={addBatsman2}>
  + Add Batsman
 </button>

 <br />
 <br />
      <h3>Bowling Team</h3>

<select
  value={bowlingTeam2}
  onChange={(e) => setBowlingTeam2(e.target.value)}
>
  <option value="">Select Team</option>

  {teams.map((team) => (
    <option
      key={team.id}
      value={team.shortName}
    >
      {team.shortName}
    </option>
  ))}
</select>
      <h2>🎯 Bowling Scorecard</h2>

 {bowling2.map((bowler, index) => (
  <div key={index}>
    <select
  value={bowler.player}
  onChange={(e) => {
    const updated = [...bowling2]
    updated[index].player = e.target.value
    setBowling2(updated)
  }}
>
  <option value="">
    Select Player
  </option>

  {players
    .filter(
      (player) =>
        player.team === bowlingTeam2
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

    <input
      type="number"
      placeholder="Overs"
      value={bowler.overs}
      onChange={(e) => {
        const updated = [...bowling2]
        updated[index].overs = e.target.value
        setBowling2(updated)
      }}
    />

    <input
      type="number"
      placeholder="Runs"
      value={bowler.runs}
      onChange={(e) => {
        const updated = [...bowling2]
        updated[index].runs = e.target.value
        setBowling2(updated)
      }}
    />

    <input
      type="number"
      placeholder="Wickets"
      value={bowler.wickets}
      onChange={(e) => {
        const updated = [...bowling2]
        updated[index].wickets = e.target.value
        setBowling2(updated)
      }}
    />

    <br />
    <br />
  </div>
 ))}
    <hr />


 <button onClick={addBowler2}>
  + Add Bowler
 </button>

  <br />
  <br />
    <input
  type="text"
  placeholder="Overs 1"
  value={oversTeam1}
  onChange={(e) =>
    setOversTeam1(e.target.value)
  }
/>

<input
  type="text"
  placeholder="Overs 2"
  value={oversTeam2}
  onChange={(e) =>
    setOversTeam2(e.target.value)
  }
/>
 <button onClick={() => {
    const newMatch = {
  id: Date.now(),
  team1,
  team2,
  score1,
  score2,
  oversTeam1,
  oversTeam2,
  tossWinner,
  electedTo,
  winner,
  manOfTheMatch,

  batting: batting.map((player) => ({
  player: player.player,
  runs: Number(player.runs),
  balls: Number(player.balls),
  fours: Number(player.fours),
  sixes: Number(player.sixes)
})),
    bowling: bowling.map((player) => ({
  player: player.player,
  overs: Number(player.overs),
  runs: Number(player.runs),
  wickets: Number(player.wickets)
  })),
      batting2: batting2.map((player) => ({
    player: player.player,
    runs: Number(player.runs),
    balls: Number(player.balls),
    fours: Number(player.fours),
    sixes: Number(player.sixes)
})),

bowling2: bowling2.map((player) => ({
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
    setOversTeam1('')
setOversTeam2('')
    setTossWinner('')
    setElectedTo('')
    setWinner('')
    setManOfTheMatch('')
    setBatting([
  {
    player: '',
    runs: '',
    balls: '',
    fours: '',
    sixes: ''
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
 setBatting2([
  {
    player: '',
    runs: '',
    balls: '',
    fours: '',
    sixes: ''
  }
])
    setBowling2([
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