import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import Card from "../components/Card";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(`${BASE_URL}`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Products:</h1>
      <div className="cards-container">
        {products.map((item) => (
          <Card
          key={item.id}
            title={item.title.slice(0, 18)}
            description={item.description.slice(0, 30)}
            price={item.price}
            image={item.image}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
