import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Lost from './pages/Lost'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import { Navigate } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Kasa" element={<Home />} />
        <Route path="/lost" element={<Lost />} />
        <Route path='/about' element={<About />} />
        <Route path='/accommodation/:id' element={<Accommodation />}/>
        <Route path="*" element={<Navigate to="/lost" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)