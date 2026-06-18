import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        🏏 RCG Live Scoring
      </h1>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/pointstable">Points Table</Link></li>
        <li><Link to="/rankings">Rankings</Link></li>
        <li><Link to="/records">Records</Link></li>
        <li><Link to="/playoffs">Playoffs</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/halloffame">Hall Of Fame</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar