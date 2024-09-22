import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Exprience from './components/Exprience';
import ShoppingCart from './components/ShoppingCart';
import Service from './components/Service';
import Contact from './components/Contact';
import Error from './components/Error';
import Flip from './components/Flip'
import { ThemeProvider } from "styled-components";

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  const [cartItems, setCartItems] = useState(() => {
    // Get cart items from local storage
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const handleAddToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingProductIndex].quantity += product.quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  useEffect(() => {
    // Save cart items to local storage whenever cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/exprience/:id" element={<Exprience onAddToCart={handleAddToCart} />} />
        <Route path="/shopping-cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Flip/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

