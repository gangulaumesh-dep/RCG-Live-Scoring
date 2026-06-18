function History() {
  const seasons = [
    { season: 1, champion: "RES", runnerUp: "MRS" },
    { season: 2, champion: "RKS", runnerUp: "SLS" },
    { season: 3, champion: "RES", runnerUp: "HRS" },
    { season: 4, champion: "SLS", runnerUp: "MRS" },
    { season: 5, champion: "RKS", runnerUp: "HRS" },
    { season: 6, champion: "LMS", runnerUp: "RES" },
    { season: 7, champion: "MRS", runnerUp: "RKS" },
    { season: 8, champion: "RES", runnerUp: "MRS" },
    { season: 9, champion: "RES", runnerUp: "SLS" },
    { season: 10, champion: "HRS", runnerUp: "LMS" },
    { season: 11, champion: "RFS", runnerUp: "AWS" },
    { season: 12, champion: "MRS", runnerUp: "RFS" }
  ]

  return (
    <div>
      <h1>🏆 RCG Champions History</h1>

      {seasons.map((s) => (
        <div key={s.season}>
          <h3>Season {s.season}</h3>
          <p>Champion: {s.champion}</p>
          <p>Runner-Up: {s.runnerUp}</p>
        </div>
      ))}
    </div>
  )
}

export default History