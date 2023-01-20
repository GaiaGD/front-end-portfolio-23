import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
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
      <Header />
      <HashRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/wheelsapp" element={<Wheelsapp />} />
            <Route path="/privatesale" element={<PrivateSale />} />
        </Routes>
      </HashRouter>

      <Footer />

    </div>
  )
}

export default App
