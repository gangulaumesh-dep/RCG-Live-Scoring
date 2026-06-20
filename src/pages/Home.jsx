function Home() {
  const season =
  localStorage.getItem(
    'currentSeason'
  ) || 13

const history =
  JSON.parse(
    localStorage.getItem('seasonHistory')
  ) || []

const lastSeason =
  history[history.length - 1]

const stats =
  JSON.parse(
    localStorage.getItem(
      'seasonPlayerStats'
    )
  ) || {}

const matches =
  JSON.parse(
    localStorage.getItem(
      'matches'
    )
  ) || []
  const players =
  Object.entries(stats).map(
    ([name, data]) => ({
      name,
      ...data
    })
  )

const orangeCap =
  [...players].sort(
    (a, b) => b.runs - a.runs
  )[0]
  const purpleCap =
  [...players].sort(
    (a, b) => b.wickets - a.wickets
  )[0]
  return (
    <div>
      <h1>🏏 RCG League Management System</h1>

      <div className="dashboard-grid">

  <div className="record-card">
    <h2>🏆 Current Season</h2>
    <p>{season}</p>
  </div>

  <div className="record-card">
    <h2>👑 Defending Champion</h2>
    <p>
      {lastSeason?.champion || '-'}
    </p>
  </div>

  <div className="record-card">
    <h2>🏏 Orange Cap</h2>
    <p>
      {orangeCap?.name || '-'}
    </p>
    <p>
      {orangeCap?.runs || 0} Runs
    </p>
  </div>

  <div className="record-card">
    <h2>🎯 Purple Cap</h2>
    <p>
      {purpleCap?.name || '-'}
    </p>
    <p>
      {purpleCap?.wickets || 0}
      Wickets
    </p>
  </div>

  <div className="record-card">
    <h2>📊 Matches Played</h2>
    <p>{matches.length}</p>
  </div>

</div>
    </div>
  )
}

export default Home