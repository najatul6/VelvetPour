import React from "react";
import backgroundImgRight from "../assets/bg-side.png";
import backgroundImgLeft from "../assets/img-1.png";
import ProductDetail1 from "./ProductDetail1";
import ProductDetail2 from "./ProductDetail2";
const ProductDetails1 = () => {
  return (
    <div className="relative">
      <div className="relative min-h-screen">
        <img
          src={backgroundImgLeft}
          alt="background image"
          className="col-span-2 pointer-events-none absolute left-0"
        />
        <img
          src={backgroundImgRight}
          alt="Background Image"
          className="col-start-3 row-start-2 col-span-2 pointer-events-none  absolute right-0 top-96"
        />
      </div>
      <div className="absolute top-48 right-32">
        <ProductDetail1/>
      </div>
      <div>
        <ProductDetail2/>
      </div>
    </div>
  );
};

export default ProductDetails1;
