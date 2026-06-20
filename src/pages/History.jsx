function History() {
  const seasons = [
    {
      season: 1,
      champion: "RES",
      runnerUp: "MRS",
      captain: "Umesh Jadeja",
      orangeCap: "Umesh Jadeja",
      orangeCapRuns: 349,
      purpleCap: "Ashok",
      purpleCapWickets: 23,
      potm: "Umesh Jadeja"
    },
    {
      season: 2,
      champion: "RKS",
      runnerUp: "SLS",
      captain: "J. surya",
      orangeCap: "Pandu",
      orangeCapRuns: 453,
      purpleCap: "J. surya",
      purpleCapWickets: 24,
      potm: "J. surya"
    },
    {
      season: 3,
      champion: "RES",
      runnerUp: "HRS",
      captain: "Umesh Jadeja",
      orangeCap: "M. Guptill",
      orangeCapRuns: 561,
      purpleCap: "Umran Malik",
      purpleCapWickets: 26,
      potm: "M. Guptill"
    },
    {
      season: 4,
      champion: "SLS",
      runnerUp: "MRS",
      captain: "MS Dhoni",
      orangeCap: "KL Rahul",
      orangeCapRuns: 404,
      purpleCap: "K. Richardson",
      purpleCapWickets: 21,
      potm: "Ben Stokes"
    },
    {
      season: 5,
      champion: "RKS",
      runnerUp: "HRS",
      captain: "Sunny",
      orangeCap: "J. surya",
      orangeCapRuns: 307,
      purpleCap: "T. Boult",
      purpleCapWickets: 22,
      potm: "AB de Villiers"
    },
    {
      season: 6,
      champion: "LMS",
      runnerUp: "RES",
      captain: "Sam Me",
      orangeCap: "J. Umesh",
      orangeCapRuns: 479,
      purpleCap: "J. Umesh",
      purpleCapWickets: 24,
      potm: "J. Umesh"
    },
    {
      season: 7,
      champion: "MRS",
      runnerUp: "RKS",
      captain: "Rohit Sharma",
      orangeCap: "Rohit Sharma",
      orangeCapRuns: 351,
      purpleCap: "Umran Malik",
      purpleCapWickets: 21,
      potm: "Rohit Sharma"
    },
    {
      season: 8,
      champion: "RES",
      runnerUp: "MRS",
      captain: "R. Jadeja",
      orangeCap: "Rohit Sharma",
      orangeCapRuns: 434,
      purpleCap: "V. Iyer",
      purpleCapWickets: 22,
      potm: "V. Iyer"
    },
    {
      season: 9,
      champion: "RES",
      runnerUp: "SLS",
      captain: "Umesh Jadeja",
      orangeCap: "V. Sehwag",
      orangeCapRuns: 424,
      purpleCap: "Umesh Jadeja",
      purpleCapWickets: 24,
      potm: "Umesh Jadeja"
    },
    {
      season: 10,
      champion: "HRS",
      runnerUp: "LMS",
      captain: "U.D. Chandu",
      orangeCap: "J Umesh",
      orangeCapRuns: 442,
      purpleCap: "U.D. Chandu",
      purpleCapWickets: 26,
      potm: "U.D. Chandu"
    },
    {
      season: 11,
      champion: "RFS",
      runnerUp: "AWS",
      captain: "Finch",
      orangeCap: "T. Head",
      orangeCapRuns: 541,
      purpleCap: "R. Jadeja",
      purpleCapWickets: 28,
      potm: "Finch"
    },
    {
      season: 12,
      champion: "MRS",
      runnerUp: "RFS",
      captain: "Rohit Sharma",
      orangeCap: "F. Allen",
      orangeCapRuns: 427,
      purpleCap: "M. Shami",
      purpleCapWickets: 23,
      potm: "Irfan"
    }
  ]
   const savedSeasons =
  JSON.parse(
    localStorage.getItem('seasonHistory')
  ) || []

const allSeasons = [
  ...seasons,
  ...savedSeasons
]
  return (
    <div className="history-page">
      <h1>🏆 RCG History</h1>

      {allSeasons.map((s) => (
        <div
          key={s.season}
          className="season-card"
        >
          <h2>🏆 Season {s.season}</h2>

          <p>
            <strong>Champion:</strong>{" "}
            {s.champion}
          </p>

          <p>
            <strong>Runner-Up:</strong>{" "}
            {s.runnerUp}
          </p>

          <p>
            <strong>Winning Captain:</strong>{" "}
{s.captain || '-'}
          </p>

          <p>
            🏏 <strong>Orange Cap:</strong>
{s.orangeCap}
{s.orangeCapRuns
  ? ` (${s.orangeCapRuns})`
  : ''}
          </p>

          <p>
           🎯 <strong>Purple Cap:</strong>
{s.purpleCap}
{s.purpleCapWickets
  ? ` (${s.purpleCapWickets})`
  : ''}
          </p>

          <p>
            ⭐ <strong>POTM:</strong>{" "}
            {s.potm}
          </p>
        </div>
      ))}
    </div>
  )
}

export default History