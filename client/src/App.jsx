import { useState } from 'react'
import './App.css'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home'

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
