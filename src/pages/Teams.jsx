import teams from '../data/teams'
import TeamCard from '../components/TeamCard'

function Teams() {
  return (
    <div className="teams">
      <h1>Teams</h1>

      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  )
}

export default Teams