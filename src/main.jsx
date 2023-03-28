import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { PlanetThemeContextProvider } from "./PlanetThemeContext"
import ScrollToTop from './utils/ScrollToTop'

import App from './App'
import './index.css'
import './space-bg.css'
import './planets.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlanetThemeContextProvider>
    <HashRouter basename='/'>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </HashRouter>
  </PlanetThemeContextProvider>
)
