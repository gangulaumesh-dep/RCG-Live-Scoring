import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h1>🏏 RCG Live Scoring</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/pointstable">Points Table</Link></li>
        <li><Link to="/rankings">Rankings</Link></li>
        <li><Link to="/records">Records</Link></li>
        <Link to="/playoffs">
  Playoffs
 </Link>
      </ul>
    </nav>
  )
}

export default Navbar