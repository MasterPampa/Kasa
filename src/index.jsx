import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Lost from './pages/Lost'
import About from './pages/About'
import Accommodation from './pages/Accommodation'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Projet8_OpenClassrooms" element={<Home />} />
        <Route path="/lost" element={<Lost />} />
        <Route path='/about' element={<About />} />
        <Route path='/accommodation/:id' element={<Accommodation />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)