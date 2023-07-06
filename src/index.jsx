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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lost" element={<Lost />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/accommodation/:id' element={<Accommodation />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)