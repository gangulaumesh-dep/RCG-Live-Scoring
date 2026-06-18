import teams from '../data/teams'
import TeamCard from '../components/TeamCard'

function Teams() {
  return (
    <div className="teams-page">
      <h1>🏏 RCG Teams</h1>

      <div className="team-grid">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
          />
        ))}
      </div>
    </div>
  )
}

export default Teams