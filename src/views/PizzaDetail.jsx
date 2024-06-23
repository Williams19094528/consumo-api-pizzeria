import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import pizzas from "../data/pizzas.json";

const PizzaDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const pizza = pizzas.find((p) => p.id === id);

  return (
    <div className="pizza-detail-container">
      <img className="pizza-detail-image" src={pizza.img} alt={pizza.name} />
      <div className="pizza-detail-content">
        <h1>{pizza.name}</h1>
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Precio: ${pizza.price}</h2>
        <button onClick={() => addToCart(pizza)}>Añadir</button>
      </div>
    </div>
  );
};

export default PizzaDetail;
