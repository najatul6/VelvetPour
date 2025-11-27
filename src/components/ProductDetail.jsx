import IngredientsRing from "../assets/ingredientsring.svg";
import maskBg from "../assets/maskBg.png";
import searchIcon from "../assets/searchIcon.png";
import maskBgOverlay from "../assets/maskBgOverlay.svg";
import { Link } from "react-router";
const ProductDetail = ({imgIngredient, title, subtitle}) => {
    return (
        <div>
         {/* round - 1  */}
        <div className="relative w-72 h-72 mx-auto group flex justify-center items-center object-contain overflow-hidden rounded-full lg:col-start-1 lg:row-start-1 top-20">
          {/* mask background goes here */}
          <img
            src={maskBg}
            alt="Black Background for mask"
            className="absolute object-cover w-full h-full pointer-events-none "
          />
          {/* ingredients img here */}
          <div className="absolute">
            <img
              src={imgIngredient}
              alt="Ingredients image"
              className="scale-94 transform-gpu pointer-events-none"
            />
          </div>
          {/* search icon --- overlay */}
          <Link className="absolute" to={"/shop"}>
          <div className="w-[280px] h-[280px]">
            <img src={maskBgOverlay} className="w-full h-full opacity-0 group-hover:opacity-90 duration-300" />
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
        <div className="md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-3 text-center top-20 mx-auto w-2/3 md:w-3/4 relative">
            <Link to={'/shop'} className="lg:col-start-1 lg:row-start-2 text-white font-americanCap text-4xl tracking-wide hover:text-accent duration-300">{title}</Link>
            <p className="text-white text-center font-futuraPT text-2xl mt-3">{subtitle}</p>
        </div>
        </div>
    );
};

export default ProductDetail;