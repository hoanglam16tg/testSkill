import React from "react";

const CardProduct = (props) => {
  const { title, srcImage, price, priceSale, description } = props;
  return (
    <div className="card">
      <div className="wrap__content">
        <img src={`https://api.autoxanh.com/${srcImage}`} alt="" />
        <h4>{title}</h4>
        <p>{description}</p>
        <h5>Price: {price} </h5>
        <h5>Sales price:{priceSale}</h5>
      </div>
    </div>
  );
};

export default CardProduct;
