import { useParams } from 'react-router-dom'
import playersData from '../data/players'

function PlayerDetails() {
  const { id } = useParams()

  const players =
    JSON.parse(
      localStorage.getItem('players')
    ) || playersData

  const player = players.find(
    (p) => p.id === Number(id)
  )

  const stats =
    JSON.parse(
      localStorage.getItem(
        'allTimePlayerStats'
      )
    ) || {}

  if (!player) {
    return <h2>Player Not Found</h2>
  }

  const playerStat =
  stats[player.name] || {
    matches: 0,
    runs: 0,
    wickets: 0,
    highestScore: 0,
    balls: 0,
    fifties: 0,
    hundreds: 0,
    bestFigures: 0,
overs: 0,
runsConceded: 0,
threeWickets: 0,
fiveWickets: 0
  }
   
  return (
    <div>
      <h1>{player.name}</h1>

      <h3>Team: {player.team}</h3>

      <h3>Role: {player.role}</h3>

      <p>
        Matches: {playerStat.matches}
      </p>

      <p>
        Runs: {playerStat.runs}
      </p>
<p>
  Highest Score:
  {' '}
  {playerStat.highestScore || 0}
</p>

<p>
  50s:
  {' '}
  {playerStat.fifties || 0}
</p>

<p>
  100s:
  {' '}
  {playerStat.hundreds || 0}
</p>

<p>
  Strike Rate:
  {' '}
  {playerStat.balls
    ? (
        (playerStat.runs /
          playerStat.balls) *
        100
      ).toFixed(2)
    : 0}
</p>

<p>
  Average:
  {' '}
  {playerStat.matches
    ? (
        playerStat.runs /
        playerStat.matches
      ).toFixed(2)
    : 0}
</p>

<p>
  Wickets:
  {' '}
  {playerStat.wickets}
</p>
 
 <p>
  Best Figures:
  {playerStat.bestFigures}
</p>

<p>
  Economy:
  {
    playerStat.overs
      ? (
          playerStat.runsConceded /
          playerStat.overs
        ).toFixed(2)
      : 0
  }
</p>

<p>
  3W Hauls:
  {playerStat.threeWickets}
</p>

<p>
  5W Hauls:
  {playerStat.fiveWickets}
</p>
    </div>
  )
}

export default PlayerDetails