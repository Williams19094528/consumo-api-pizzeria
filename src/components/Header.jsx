// src/components/Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { total } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Pizzería Mamma Mia!</h1>
      <div className="cart-info">
        <Link to="/carrito">🛒 Carrito: ${total}</Link>
      </div>
    </header>
  );
};

export default Header;
