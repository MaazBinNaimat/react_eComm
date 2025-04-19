import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/Products'
import Category from './pages/Category'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App