function Rankings() {
  const orangeCap = [
    { name: "Virat Kohli", runs: 450 },
    { name: "Rohit Sharma", runs: 390 },
    { name: "Ruturaj", runs: 365 },
    { name: "S. Iyer", runs: 340 },
    { name: "Hardik", runs: 320 },
  ]

  const purpleCap = [
    { name: "Bumrah", wickets: 18 },
    { name: "Shami", wickets: 15 },
    { name: "Rashid Khan", wickets: 14 },
    { name: "Rabada", wickets: 13 },
    { name: "Kuldeep Yadav", wickets: 12 },
  ]

  return (
    <div>
      <h1>Player Rankings</h1>

      <h2>🟠 Orange Cap</h2>

      {orangeCap.map((player, index) => (
        <div key={index} className="record-card">
          <h3>
            {index + 1}. {player.name}
          </h3>

          <p>{player.runs} Runs</p>
        </div>
      ))}

      <h2>🟣 Purple Cap</h2>

      {purpleCap.map((player, index) => (
        <div key={index} className="record-card">
          <h3>
            {index + 1}. {player.name}
          </h3>

          <p>{player.wickets} Wickets</p>
        </div>
      ))}
    </div>
  )
}

export default Rankings