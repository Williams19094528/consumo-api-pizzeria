import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>Ingredientes:</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <div>
        <Link to={`/pizza/${pizza.id}`}>Ver más</Link>
        <button onClick={() => addToCart(pizza)}>Añadir</button>
      </div>
    </div>
  );
};

PizzaCard.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PizzaCard;
