import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import bottle1 from "../assets/bottle-1.png";
import bottle2 from "../assets/bottle-2.png";
import bottle3 from "../assets/bottle-3.png";
import bottle4 from "../assets/bottle-4.png";
import bottle5 from "../assets/bottle-5.png";

const ProductDetail1 = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="carousel carousel-vertical w-full md:h-[530px] gap-20 col-start-2">
        <div id="slide1" className="cursor-pointer carousel-item">
          <img href="#slide1" src={bottle1} alt="Beer Bottle" />
        </div>
        <div id="slide2" className="cursor-pointer carousel-item">
          <img href="#slide2" src={bottle2} alt="Beer Bottle" />
        </div>
        <div id="slide3" className="cursor-pointer carousel-item">
          <img href="#slide3" src={bottle3} alt="Beer Bottle" />
        </div>
        <div id="slide4" className="cursor-pointer carousel-item">
          <img href="#slide4" src={bottle4} alt="Beer Bottle" />
        </div>
        <div id="slide5" className="cursor-pointer carousel-item">
          <img href="#slide5" src={bottle5} alt="Beer Bottle" />
        </div>
      </div>
      <div className="col-start-1 row-start-1 flex flex-col items-center gap-3 justify-end">
        <div><IoIosArrowUp size={23} className="text-accent cursor-pointer"/></div>
        <span className="block border border-gray-200 w-9"></span>
        <div><IoIosArrowDown size={23} className="text-accent cursor-pointer"/></div>
      </div>
    </div>
  );
}; 

export default ProductDetail1;
