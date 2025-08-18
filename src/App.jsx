import { React } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import EasyCyberSecurity from './pages/basicCyberSecurity'
import MediumCyberSecurity from './pages/mediumCyberSecurity'
import HardCyberSecurity from './pages/hardCyberSecurity'
import ReportProblem from './pages/reportAProblem'
import Logo from './assets//images/NewLogo4.png'
import ComingSoon from './pages/comingSoon'


const App = () => {

  return (
    <div id='wrapper'>
      <nav className='navBar'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/report-a-problem' className='links'>Report a Problem</Link>
        <Link to='/coming-soon' className='links'>Coming Soon</Link>
        <img src={Logo} alt='Logo' id='logo'/>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/easy-cyber-security' element={<EasyCyberSecurity />}></Route>
        <Route path='/medium-cyber-security' element={<MediumCyberSecurity />}></Route>
        <Route path='/hard-cyber-security' element={<HardCyberSecurity />}></Route>
        <Route path='/report-a-problem' element={<ReportProblem />}></Route>
        <Route path='/coming-soon' element={<ComingSoon />}></Route>
      </Routes>
    </div>
  )
}

export default App
