import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'

const App = () => {
  return (
    <div className='w-full  min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marque/>
    </div>
  )
}

export default App
