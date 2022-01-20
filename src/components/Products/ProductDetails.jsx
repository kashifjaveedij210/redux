import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const data = useSelector((state) => state.ProductReducer.ProductDetails [0]);
  return (


<div>
      <img className="imgdetail" src={data.image} alt="Loading" />
      <div className="pdetail">
      <h4>Name:{data.name}</h4>
      <h5>Model:{data.model}</h5>
      <h5>Price:${data.price}</h5>
      <h5> <b> Description:</b>{data.description}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
