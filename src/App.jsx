import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './NavBar'
import Post from './components/Post'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Logout from './components/Logout'

let data = {
  st: "user loggend in "
}
function App() {
  const [islogged, setislogged] = useState(true)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/post/:catagory' element={<Post />}></Route>
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<h3>Error 404 page not found</h3>} />
          <Route path='/login' element={<Login setislogged={setislogged} islogged={islogged} />} />
          <Route path='/dashboard' element={islogged ? <Dashboard /> : <Navigate to={'/login'} replace state={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App