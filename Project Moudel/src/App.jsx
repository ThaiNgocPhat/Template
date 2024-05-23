import React from 'react'
import Header from './components/Header'
import Navar from './components/Navar'
import Category from './components/Category'
import HeroIPhone from './components/HeroIPhone'
import HeroSamsung from './components/HeroSamsung'
import HeroXiaomi from './components/HeroXiaomi'
import Service from './components/Service'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter,Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <>
    <div id='container'>
      <Header />
      <Navar />
      <Category />
      <HeroIPhone />
      <HeroSamsung />
      <HeroXiaomi />
      <Service />
      <Footer/>
    </div>
    {/* <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<HeroIPhone />} />
        <Route path="/samsung" element={<HeroSamsung />} />
        <Route path="/xiaomi" element={<HeroXiaomi />} />
        <Route path="/accessory" element={<Accessory />} />
      </Routes>
      </BrowserRouter>
      </div>  */}

    </>
  )
}
