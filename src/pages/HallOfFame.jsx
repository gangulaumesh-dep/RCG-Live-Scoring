function HallOfFame() {

  const defaultSeasons = [
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
    captain: "J. Surya",
    orangeCap: "Pandu",
    orangeCapRuns: 453,
    purpleCap: "J. Surya",
    purpleCapWickets: 24,
    potm: "J. Surya"
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
    orangeCap: "J. Surya",
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
    orangeCap: "J. Umesh",
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

  const seasons = [
    ...defaultSeasons,
    ...savedSeasons
  ]

  const titles = {}

  seasons.forEach((s) => {
    titles[s.champion] =
      (titles[s.champion] || 0) + 1
  })

  const mostTitles =
    Object.entries(titles).sort(
      (a, b) => b[1] - a[1]
    )[0]

  const captains = {}

  seasons.forEach((s) => {
    if (!s.captain) return

    captains[s.captain] =
      (captains[s.captain] || 0) + 1
  })

  const bestCaptain =
    Object.entries(captains).sort(
      (a, b) => b[1] - a[1]
    )[0]

  const potmAwards = {}

  seasons.forEach((s) => {
    if (!s.potm) return

    potmAwards[s.potm] =
      (potmAwards[s.potm] || 0) + 1
  })

  const mostPotm =
    Object.entries(potmAwards).sort(
      (a, b) => b[1] - a[1]
    )[0]

  const finals = {}

  seasons.forEach((s) => {
    finals[s.champion] =
      (finals[s.champion] || 0) + 1

    finals[s.runnerUp] =
      (finals[s.runnerUp] || 0) + 1
  })

  const mostFinals =
    Object.entries(finals).sort(
      (a, b) => b[1] - a[1]
    )[0]

  const highestOrange =
    [...seasons].sort(
      (a, b) =>
        (b.orangeCapRuns || 0) -
        (a.orangeCapRuns || 0)
    )[0]

  const highestPurple =
    [...seasons].sort(
      (a, b) =>
        (b.purpleCapWickets || 0) -
        (a.purpleCapWickets || 0)
    )[0]

  return (
    <div>
      <h1>🏆 Hall Of Fame</h1>

      <div className="record-card">
        <h2>🏆 Most Titles</h2>
        <p>
          {mostTitles?.[0]} - {mostTitles?.[1]} Titles
        </p>
      </div>

      <div className="record-card">
        <h2>👑 Most Successful Captain</h2>
        <p>
          {bestCaptain?.[0]} - {bestCaptain?.[1]} Titles
        </p>
      </div>

      <div className="record-card">
        <h2>⭐ Most POTM Awards</h2>
        <p>
          {mostPotm?.[0]} - {mostPotm?.[1]} Awards
        </p>
      </div>

      <div className="record-card">
        <h2>🥈 Most Finals Appearances</h2>
        <p>
          {mostFinals?.[0]} - {mostFinals?.[1]} Finals
        </p>
      </div>

      <div className="record-card">
        <h2>🏏 Highest Orange Cap</h2>
        <p>{highestOrange?.orangeCap}</p>
        <p>{highestOrange?.orangeCapRuns} Runs</p>
      </div>

      <div className="record-card">
        <h2>🎯 Highest Purple Cap</h2>
        <p>{highestPurple?.purpleCap}</p>
        <p>{highestPurple?.purpleCapWickets} Wickets</p>
      </div>
    </div>
  )
}

export default HallOfFame