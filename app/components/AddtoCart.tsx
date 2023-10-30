"use client";
import React from "react";

const AddtoCart = () => {
  return (
    <button
      className="btn btn-info text-white"
      onClick={() => {
        console.log("clicked");
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddtoCart;
