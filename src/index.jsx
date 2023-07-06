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
        <Route exact path="/projet8_openclassrooms/" element={<Home />} />
        <Route exact path="/projet8_openclassrooms/lost" element={<Lost />} />
        <Route exact path='/projet8_openclassrooms/about' element={<About />} />
        <Route exact path='/projet8_openclassrooms/accommodation/:id' element={<Accommodation />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)