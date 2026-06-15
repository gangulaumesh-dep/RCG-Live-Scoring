import './App.css'
import Navbar from './components/Navbar'

import AddMatch from './pages/AddMatch'
import Home from './pages/Home'
import Teams from './pages/Teams'
import TeamDetails from './pages/TeamDetails'
import Players from './pages/Players'
import PlayerDetails from './pages/PlayerDetails'
import Matches from './pages/Matches'
import MatchDetails from './pages/MatchDetails'
import PointsTable from './pages/PointsTable'
import Rankings from './pages/Rankings'
import Records from './pages/Records'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-match" element={<AddMatch />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:shortName" element={<TeamDetails />} />

        <Route path="/players" element={<Players />} />
        <Route path="/players/:id" element={<PlayerDetails />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:id" element={<MatchDetails />} />
        <Route path="/pointstable" element={<PointsTable />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App