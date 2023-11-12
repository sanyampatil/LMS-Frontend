import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer'
// import HomeLayout from './Layout/HomeLayout'?
import HomePage from './pages/HomePages'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NoteFound'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='*' element={<NotFound />}></Route>


      </Routes>
    </>
  )
}

export default App
