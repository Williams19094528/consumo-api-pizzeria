import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, total, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Detalles del pedido:</h1>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <p>{item.name}</p>
              <p>${item.price * item.quantity}</p>
            </div>
            <div className="cart-item-controls">
              <button
                onClick={() => removeFromCart(item)}
                className="cart-item-button remove"
              >
                -
              </button>
              <span className="cart-item-quantity">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="cart-item-button add"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>Total: ${total}</h2>
        <button className="pay-button">Ir a Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
