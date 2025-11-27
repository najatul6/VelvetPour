import React from "react";
import productBg from "../assets/product-bg.png";
import IngredientsRing from "../assets/ingredientsring.svg";
import maskBg from "../assets/maskBg.png";
import searchIcon from "../assets/searchIcon.png";
import Ingredients from "../assets/round1.png";
import maskBgOverlay from "../assets/maskBgOverlay.svg";
import { Link } from "react-router";
const ProductDetails = () => {
  return (
    <div>
      <div>
        {/* round - 1  */}
        <div className="relative w-80 h-80 mx-auto group flex justify-center items-center object-contain overflow-hidden rounded-full">
          {/* mask background goes here */}
          <img
            src={maskBg}
            alt="Black Background for mask"
            className="absolute object-cover w-full h-full pointer-events-none "
          />
          {/* ingredients img here */}
          <div className="absolute">
            <img
              src={Ingredients}
              alt="Ingredients image"
              className="scale-103 transform-gpu pointer-events-none"
            />
          </div>

          {/* search icon --- overlay */}
          <Link className="absolute" to={"/shop"}>
          <div className="w-[300px] h-[300px]">
            <img src={maskBgOverlay} className="w-full h-full opacity-0 group-hover:opacity-50 duration-300" />
            <img
              src={searchIcon}
              alt="Search icon overlay"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-32 left-32 z-50"
            />
            </div>
          </Link>
          {/* rounded ring img */}
          <img
            src={IngredientsRing}
            alt="Rounded ring Covered"
            className="absolute object-cover w-full h-full pointer-events-none group-hover:brightness-0 group-hover:invert"
          />
        </div>
        {/* round - 2  */}
        <div className="relative w-80 h-80 mx-auto group flex justify-center items-center object-contain overflow-hidden rounded-full">
          {/* mask background goes here */}
          <img
            src={maskBg}
            alt="Black Background for mask"
            className="absolute object-cover w-full h-full pointer-events-none "
          />
          {/* ingredients img here */}
          <div className="absolute">
            <img
              src={Ingredients}
              alt="Ingredients image"
              className="scale-103 transform-gpu pointer-events-none"
            />
          </div>

          {/* search icon --- overlay */}
          <Link className="absolute" to={"/shop"}>
          <div className="w-[300px] h-[300px]">
            <img src={maskBgOverlay} className="w-full h-full opacity-0 group-hover:opacity-50 duration-300" />
            <img
              src={searchIcon}
              alt="Search icon overlay"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-32 left-32 z-50"
            />
            </div>
          </Link>
          {/* rounded ring img */}
          <img
            src={IngredientsRing}
            alt="Rounded ring Covered"
            className="absolute object-cover w-full h-full pointer-events-none group-hover:brightness-0 group-hover:invert"
          />
        </div>
        {/* round - 3  */}
        <div className="relative w-80 h-80 mx-auto group flex justify-center items-center object-contain overflow-hidden rounded-full">
          {/* mask background goes here */}
          <img
            src={maskBg}
            alt="Black Background for mask"
            className="absolute object-cover w-full h-full pointer-events-none "
          />
          {/* ingredients img here */}
          <div className="absolute">
            <img
              src={Ingredients}
              alt="Ingredients image"
              className="scale-103 transform-gpu pointer-events-none"
            />
          </div>

          {/* search icon --- overlay */}
          <Link className="absolute" to={"/shop"}>
          <div className="w-[300px] h-[300px]">
            <img src={maskBgOverlay} className="w-full h-full opacity-0 group-hover:opacity-50 duration-300" />
            <img
              src={searchIcon}
              alt="Search icon overlay"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-32 left-32 z-50"
            />
            </div>
          </Link>
          {/* rounded ring img */}
          <img
            src={IngredientsRing}
            alt="Rounded ring Covered"
            className="absolute object-cover w-full h-full pointer-events-none group-hover:brightness-0 group-hover:invert"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
<div className="relative w-80 h-80 mx-auto group">
  {/* Background */}
  <img
    src="/bg.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Product */}
  <img
    src="/product.png"
    alt="Product"
    className="absolute inset-0 m-auto w-48 h-48 object-contain"
  />

  {/* Overlay on hover */}
  <img
    src="/overlay.png"
    alt="Overlay"
    className={`absolute inset-0 m-auto w-48 h-48 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-70`}
  />

  {/* Rounded Ring */}
  <img
    src="/ring.png"
    alt="Ring"
    className="absolute inset-0 m-auto w-64 h-64 object-contain pointer-events-none"
  />
</div>