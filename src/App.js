import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import Feed from './pages/feed';
import Profile from './pages/profile';
import './pages/App.css'
import Feedicon from './Nav icons/FeedIcon.png'
import Profileicon from './Nav icons/ProfileIcon.png'

function App() {
    return (
        <Router>
            <nav className='nav-container'>
            <h1 className='finstagramNav'>Finstagram</h1>
                <div className='nav-control'>
                <Link to="/Feed" className='linkCenter'><img src={Feedicon} alt='123' className='navImg'></img></Link>
                <Link to="/Profile" className='linkCenter'><img src={Profileicon} alt='123' className='navImg'></img></Link>
                <Link to="/Login" className='linkCenter' id='loginButton2'><button className='loginButton3'>Login</button></Link>
                </div>
            </nav>
          <Routes>
              <Route path="/Login" element={<Login></Login>}></Route>
              <Route path='/Feed' element={<Feed></Feed>}></Route>
              <Route path='/Profile' element={<Profile></Profile>}></Route>
          </Routes>
      </Router>  
    )
}

export default App


