import TeamCard from '../components/TeamCard'
import teamsData from '../data/teams'

const teams =
  JSON.parse(
    localStorage.getItem('teams')
  ) || teamsData
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