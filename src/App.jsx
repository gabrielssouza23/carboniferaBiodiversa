import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/index'
import Catalog from './pages/catalog'
import Specie from './pages/speciePage'
import Contribution from './pages/contributionPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/catalogo/:specieId" element={<Specie />} />
        <Route path="/contribuir" element={<Contribution />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
