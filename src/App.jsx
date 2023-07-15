import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import ProductContextProvider from './Global/ProductsContext'
import CartContext from './Global/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Cart from './components/Cart';
import Error from './components/Error';
import Home from './components/Home';
const App = () => {
  return (
    <>
      <div>
        <ProductContextProvider>
        <CartContext>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/*' element={<Error />} />
            </Routes>
          </Router> 
          </CartContext>
        </ProductContextProvider>
      </div>
    </>

  )
}

export default App
