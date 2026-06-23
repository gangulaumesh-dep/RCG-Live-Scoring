import { useNavigate } from 'react-router-dom'

function Archive() {
const navigate = useNavigate()

const matches =
JSON.parse(
localStorage.getItem(
'allTimeMatches'
)
) || []

const deleteMatch = (indexToDelete) => {
if (
!window.confirm(
'Delete this match?'
)
) {
return
}

```
const updatedMatches =
  matches.filter(
    (_, index) =>
      index !== indexToDelete
  )

localStorage.setItem(
  'allTimeMatches',
  JSON.stringify(
    updatedMatches
  )
)

alert('Match Deleted!')

window.location.reload()
```

}

return ( <div> <h1>📜 Match Archive</h1>

```
  {matches
    .slice()
    .reverse()
    .map((match, index) => (

      <div
        key={index}
        className="record-card"
      >

        <h2>
          {match.team1} vs {match.team2}
        </h2>

        <p>
          🏆 Winner: {match.winner}
        </p>

        <p>
          🏏 {match.team1}: {match.score1}
        </p>

        <p>
          🏏 {match.team2}: {match.score2}
        </p>

        <p>
          🎯 Toss: {match.tossWinner}
        </p>

        <p>
          ⭐ POTM:
          {' '}
          {match.manOfTheMatch || '-'}
        </p>

        <button
          onClick={() => {
            localStorage.setItem(
              'editMatch',
              JSON.stringify(match)
            )

            navigate('/add-match')
          }}
        >
          ✏️ Edit Match
        </button>

        {' '}

        <button
          onClick={() =>
            deleteMatch(
              matches.length - 1 - index
            )
          }
        >
          🗑️ Delete Match
        </button>

      </div>
    ))}
</div>

)
}

export default Archive
