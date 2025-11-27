import React from "react";
import productBg from "../assets/product-bg.png";
import ProductDetail from "./ProductDetail";
import round1 from "../assets/round1.png";
import round2 from "../assets/round2.png";
import round3 from "../assets/round3.png";
const ProductDetails = () => {
  return (
    <div className="relative">
      <img src={productBg} alt="Background" className="absolute w-full md:flex hidden object-cover bg-secondary"/>
      <div className="grid md:w-10/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative lg:px-20">
        <div>
          <ProductDetail
            imgIngredient={round1}
            title={"Quality Hops"}
            subtitle={
              "Production of beer by soaking cereal grains in water and fermenting with yeast."
            }
          />
        </div>
        <div className="lg:mt-32">
          <ProductDetail
            imgIngredient={round2}
            title={"Good Making"}
            subtitle={
              "Abundance of antioxidants because the flavonoids in barley and hops."
            }
          />
        </div>
        <div className="lg:mt-48 mb-20">
          <ProductDetail
            imgIngredient={round3}
            title={"Premium liquids"}
            subtitle={
              "Reduce the risk of coronary heart disease as it has thinning effect on blood."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
