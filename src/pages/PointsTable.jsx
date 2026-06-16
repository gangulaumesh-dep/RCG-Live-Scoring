import teams from '../data/teams'

function PointsTable() {
  let matches = []

try {
  matches =
    JSON.parse(localStorage.getItem('matches')) || []
} catch {
  matches = []
}

  const table = teams.map((team) => ({
  ...team,
  matches: 0,
  wins: 0,
  losses: 0,
  points: 0,

  runsScored: 0,
  runsConceded: 0,
  oversFaced: 0,
  oversBowled: 0,

  nrr: 0
}))
  matches.forEach((match) => {
  console.log(
    "MATCH:",
    match.team1,
    match.team2,
    match.winner
  )

  const team1 = table.find(
    (t) => t.shortName === match.team1
  )

  const team2 = table.find(
    (t) => t.shortName === match.team2
  )

  console.log("FOUND:", team1, team2)

  if (!team1 || !team2) return
  const runs1 =
  parseInt(match.score1) || 0

const runs2 =
  parseInt(match.score2) || 0

const overs1 =
  parseFloat(match.oversTeam1)

const overs2 =
  parseFloat(match.oversTeam2)

if (!overs1 || !overs2) {
  return
}

team1.runsScored += runs1
team1.runsConceded += runs2
team1.oversFaced += overs1
team1.oversBowled += overs2

team2.runsScored += runs2
team2.runsConceded += runs1
team2.oversFaced += overs2
team2.oversBowled += overs1
  team1.matches += 1
  team2.matches += 1

  if (match.winner === team1.shortName) {
    team1.wins += 1
    team1.points += 2
    team2.losses += 1
  }

  if (match.winner === team2.shortName) {
    team2.wins += 1
    team2.points += 2
    team1.losses += 1
  }
})
 table.forEach((team) => {
  const battingRate =
    team.oversFaced > 0
      ? team.runsScored /
        team.oversFaced
      : 0

  const bowlingRate =
    team.oversBowled > 0
      ? team.runsConceded /
        team.oversBowled
      : 0

  team.nrr = (
    battingRate - bowlingRate
  ).toFixed(2)
})

  const sortedTeams = table.sort(
    (a, b) => b.points - a.points
  )

  return (
    <div>
      <h1>Points Table</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>

        <tbody>
          {sortedTeams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.shortName}</td>
              <td>{team.matches}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
              <td>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PointsTable