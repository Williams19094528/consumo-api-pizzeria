import React from "react";
import pizzas from "../data/pizzas.json";
import PizzaCard from "../components/PizzaCard";

const Home = () => {
  return (
    <div className="home">
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
