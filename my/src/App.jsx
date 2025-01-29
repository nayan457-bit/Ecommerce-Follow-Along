import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Login} from './Component/login'
import { Signup } from './Component/signup'
import { Home } from './page/home'


function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>}/>
      <Route path ="/" element={<Home/>}/>
      
    </Routes>
   
    </>
  )
}

export default App
