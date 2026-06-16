function Rankings() {
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

  const topBatsmen = [...players]
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 10)

  const topBowlers = [...players]
    .sort((a, b) => b.wickets - a.wickets)
    .slice(0, 10)

  return (
    <div>
      <h1>Player Rankings</h1>

      <h2>🏏 Orange Cap</h2>

      {topBatsmen.map((player, index) => (
        <p key={player.name}>
          {index + 1}. {player.name} -{' '}
          {player.runs} Runs
        </p>
      ))}

      <hr />

      <h2>🎯 Purple Cap</h2>

      {topBowlers.map((player, index) => (
        <p key={player.name}>
          {index + 1}. {player.name} -{' '}
          {player.wickets} Wickets
        </p>
      ))}
    </div>
  )
}

export default Rankings