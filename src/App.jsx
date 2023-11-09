import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer'
// import HomeLayout from './Layout/HomeLayout'?
import HomePage from './pages/HomePages'
import AboutUs from './pages/AboutUs'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>

      </Routes>
    </>
  )
}

export default App
