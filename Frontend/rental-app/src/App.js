// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import Header from './components/Header.js';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    // Fetch product data from JSON file
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
