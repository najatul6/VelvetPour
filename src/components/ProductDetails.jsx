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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {/* round - 1  */}
        <div className="relative w-80 h-80 mx-auto group flex justify-center items-center object-contain overflow-hidden rounded-full lg:col-start-1 lg:row-start-1">
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
        {/* round 1 title and description */}
        <div className="md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-3 text-center mx-auto w-2/4">
            <Link to={'/shop'} className="lg:col-start-1 lg:row-start-2 text-white font-americanCap text-4xl tracking-wide hover:text-accent duration-300">Good Making</Link>
            <p className="text-white text-justify font-futuraPT text-lg">Abundance of antioxidants because the flavonoids in barley and hops.</p>
        </div>
        {/* round - 2  */}
        <div className="relative w-80 h-80 mx-auto group flex justify-center items-center object-contain overflow-hidden rounded-full lg:col-start-2 lg:row-start-2">
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
        {/* round 2 title and description */}
        <div className="lg:col-start-1 lg:row-start-2 text-center mx-auto w-2/4">
            <Link to={'/shop'} className="lg:col-start-1 lg:row-start-2 text-white font-americanCap text-4xl tracking-wide hover:text-accent duration-300">Quality Hops</Link>
            <p className="text-white text-justify font-futuraPT text-lg">Production of beer by soaking cereal grains in water and fermenting with yeast.</p>
        </div>
        {/* round - 3  */}
        <div className="relative w-80 h-80 mx-auto group flex justify-center items-center object-contain overflow-hidden rounded-full lg:col-start-3 lg:row-start-3">
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
        {/* rounded 3 title and description */}
        <div className="md:col-start-1 md:row-start-4 lg:col-start-3 lg:row-start-4 text-center mx-auto w-2/4">
            <Link to={'/shop'} className="col-start-1 row-start-2 text-white font-americanCap text-4xl tracking-wide hover:text-accent duration-300">Premium liquids</Link>
            <p className="text-white text-justify font-futuraPT text-lg">Reduce the risk of coronary heart disease as it has thinning effect on blood.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
