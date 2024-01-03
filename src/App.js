import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Setting from './pages/Setting';
import Anylaytics from './pages/Anylaytics';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/anylaytics" element={<Anylaytics/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;