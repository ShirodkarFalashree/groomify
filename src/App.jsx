import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Featured from './Components/Featured'
import HowWeWork from './Components/HowWeWork'
import Packages from './Components/Packages'
import Customize from './Components/Customize'
import Transformations from './Components/Transformations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Featured/>
      <HowWeWork/>
      <Packages/>
      <Customize/>
      <Transformations/>
    </>
  )
}

export default App
