import React from 'react'
import { HashRouter } from 'react-router-dom'
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import PrivateSale from "./components/PrivateSale"
import Wheelsapp from "./components/Wheelsapp"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App text-white">
      <div className='background-container bg-black'>
        <div className="depth"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <HashRouter basename='/'>

          <Header />

          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/wheelsapp" element={<Wheelsapp />} />
              <Route path="/privatesale" element={<PrivateSale />} />
          </Routes>

          <Footer />
      </HashRouter>
      
    </div>
  )
}

export default App
