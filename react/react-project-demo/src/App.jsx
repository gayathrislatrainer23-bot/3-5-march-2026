import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar/Navbar'
import LoginPage from './pages/loginPage/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import Home from './pages/Home'
import Profile from './pages/loginPage/Profile'
import Counter from './components/Counter'

function App() {


  return (
   
<>
{/* <Navbar/> */}
{/* <LoginPage/> */}

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element = {<Home/>} />
  <Route path='/login' element = {<LoginPage/>} />
  <Route path='/profile' element={<ProfilePage/>} />
  <Route path='/profile1' element={<Profile/>} />
  <Route path='/counter' element={<Counter/>} />
</Routes>
</BrowserRouter>

</>
  

  
  )
}

export default App
