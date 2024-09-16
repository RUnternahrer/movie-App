import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/navBar.jsx'

function App() {

  return (
    <>
      <div id='header'>
        <NavBar/>
      </div>
    </>
  )
}

export default App
