import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import Card from "../components/Card";
import Loader from "../components/Loader";
const ProductDetails = () => {
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    axios(`${BASE_URL}/${id}`).then((res) => {
      setItem(res.data);
      setLoader(false);
    });
  }, []);
  return (
    <div className="container">
      <div className="product-details">
        {loader ? (
          <Loader />
        ) : (
          <Card
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            alt={item.title}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
