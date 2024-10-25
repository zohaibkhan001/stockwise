import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop';
import UserBoarding from './components/UserBoarding';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/user" element={<UserBoarding/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
