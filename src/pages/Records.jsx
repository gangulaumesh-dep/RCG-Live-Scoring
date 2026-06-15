function Records() {
  const records = [
    {
      title: "Highest Team Score",
      holder: "RES",
      value: "210/4 vs RKS",
    },
    {
      title: "Highest Individual Score",
      holder: "Virat Kohli",
      value: "105 (62)",
    },
    {
      title: "Best Bowling Figures",
      holder: "Bumrah",
      value: "5/12",
    },
    {
      title: "Most Sixes",
      holder: "Chris Gayle",
      value: "28",
    },
    {
      title: "Most Wickets",
      holder: "Bumrah",
      value: "20",
    },
  ]

  return (
    <div>
      <h1>Tournament Records</h1>

      {records.map((record, index) => (
        <div key={index} className="record-card">
          <h3>{record.title}</h3>

          <p>
            <strong>{record.holder}</strong>
          </p>

          <p>{record.value}</p>
        </div>
      ))}
    </div>
  )
}

export default Records