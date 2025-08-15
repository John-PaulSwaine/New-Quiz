import { React } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import EasyCyberSecurity from './pages/basicCyberSecurity'
import MediumCyberSecurity from './pages/mediumCyberSecurity'
import HardCyberSecurity from './pages/hardCyberSecurity'


const App = () => {

  return (
    <div id='wrapper'>
      <nav className='navBar'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/report-a-problem' className='links'>Report a Problem</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/easy-cyber-security' element={<EasyCyberSecurity />}></Route>
        <Route path='/medium-cyber-security' element={<MediumCyberSecurity />}></Route>
        <Route path='/hard-cyber-security' element={<HardCyberSecurity />}></Route>
      </Routes>
    </div>
  )
}

export default App
