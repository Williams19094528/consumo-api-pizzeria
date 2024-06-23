// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import PizzaDetail from "./views/PizzaDetail";
import Cart from "./views/Cart";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
