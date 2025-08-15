import { React } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import Easy from './pages/easy'
import Medium from './pages/medium'
import Hard from './pages/hard'
import Expert from './pages/expert'


const App = () => {

  return (
    <div id='wrapper'>
      <nav className='navBar'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/easy'>Easy</Link>
        <Link to='medium'>Medium</Link>
        <Link to='hard'>Hard</Link>
        <Link to='expert'>Expert</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/easy' element={<Easy />}></Route>
        <Route path='/medium' element={<Medium />}></Route>
        <Route path='/hard' element={<Hard />}></Route>
        <Route path='/expert' element={<Expert />}></Route>
      </Routes>
    </div>
  )
}

export default App
