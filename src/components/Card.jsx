import React from "react";

const Card = ({ title, description, price, image, alt }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={image} alt={alt} />
      </div>
      <div className="card-bottom">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <h3 className="card-price">{price} $</h3>
      </div>
    </div>
  );
};

export default Card;
