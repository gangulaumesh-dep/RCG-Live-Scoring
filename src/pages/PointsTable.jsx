import teams from '../data/teams'

function PointsTable() {
  const sortedTeams = [...teams].sort(
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