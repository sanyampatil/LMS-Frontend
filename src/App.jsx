import { useState } from 'react'
import './App.css'
import {Route,Routes}  from 'react-router-dom'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Routes>

    <Route path='/' element={<home/>}></Route>

      
    </Routes> */}
      
    <Footer/>
</>
  )
}

export default App
