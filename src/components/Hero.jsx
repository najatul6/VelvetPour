import React, { useState } from "react";
import 'animate.css'
const Hero = () => {
     const [activeSlide, setActiveSlide] = useState(1);
     console.log(activeSlide)
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://cheerx-beer.myshopify.com/cdn/shop/files/slider2-bg_2000x.jpg?v=1613795521)",
            }}
          >
            <div className="hero-content text-neutral-content text-center">
              <div className="flex flex-col gap-2 items-center md:w-9/12">
                <p className={`font-futuraPT text-xl md:text-5xl capitalize ${activeSlide === 1 && "animate__animated animate__fadeInDown animated_fadeIN_css"}`}>
                  Taste the Excellence
                </p>
                <h2 className={`uppercase font-americanCap tracking-wider text-3xl md:text-6xl ${activeSlide === 1 && "animate__animated animate__fadeInUp animated_fadeIN_css_1"}`}>
                  rich tradition for beers
                </h2>
                <p className={`font-futuraPT md:text-3xl ${activeSlide === 1 && "animate__animated animate__fadeInUp animated_fadeIN_css_2"}`}>
                  All you need is a beer. First, it needs to be chilled, and
                  second, it needs to be of ours.You deserve to relax.
                </p>
                <button className={`bg-[#f89808] capitalize font-futuraPT font-bold py-3 px-5 text-2xl md:text-5xl cursor-pointer hover:bg-white hover:text-[#27211d] duration-500 ${activeSlide === 1 && "animate__animated animate__fadeInUp animated_fadeIN_css_3"}`}>buy now</button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a onClick={()=>setActiveSlide(3)} href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a onClick={()=>setActiveSlide(2)} href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://cheerx-beer.myshopify.com/cdn/shop/files/slider3-bg-new_2000x.jpg?v=1613795559)",
            }}
          >
            <div className="absolute left-20 text-neutral-content text-center w-3/6">
              <div className="flex flex-col gap-2 items-start md:w-9/12">
                <p className={`font-futuraPT text-xl md:text-5xl capitalize ${activeSlide === 2 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css' : ''} `}>
                  Grab chilled
                </p>
                <h2 className={`uppercase font-americanCap tracking-wider text-3xl md:text-6xl ${activeSlide === 2 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css_1' : ''} `}>
                  a cold delight
                </h2>
                <p className={`font-futuraPT text-start md:text-3xl ${activeSlide === 2 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css_2' : ''} `}>
                  Let your emotions come out with a beer in your hand. The taste that makes you feel awesome.
                </p>
                <button className={`bg-secondary capitalize font-futuraPT font-bold py-3 px-5 text-2xl md:text-5xl ${activeSlide === 2 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css_3' : ''} cursor-pointer hover:bg-white hover:text-[#27211d] duration-500`}>buy now</button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a onClick={()=>setActiveSlide(1)} href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a onClick={()=>setActiveSlide(3)} href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://cheerx-beer.myshopify.com/cdn/shop/files/slider_092fcbab-a771-4f7d-87bf-064608d3f594_2000x_1_2000x.jpg?v=1613795507)",
            }}
          >
            <div className="absolute left-20 text-neutral-content text-center">
              <div className="flex flex-col gap-2 items-start md:w-9/12">
                <p className={`font-futuraPT text-xl md:text-5xl capitalize ${activeSlide === 3 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css' : ''}`}>
                  exclusive offer
                </p>
                <h2 className={`uppercase font-americanCap tracking-wider text-3xl md:text-6xl ${activeSlide === 3 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css_1' : ''}`}>
                  a plate for good beer
                </h2>
                <p className={`font-futuraPT text-start md:text-3xl ${activeSlide === 3 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css_2' : ''}`}>
                  If you're happy, you need it, and if you're sad also you need VelvetPour Beer.
                </p>
                <button className={`bg-[#f89808] capitalize font-futuraPT font-bold py-3 px-5 text-2xl md:text-5xl cursor-pointer hover:bg-white hover:text-[#27211d] duration-500 ${activeSlide === 3 ? 'animate__animated animate__fadeInLeft animated_fadeIN_css_3' : ''}`}>buy now</button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a onClick={()=>setActiveSlide(2)} href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a onClick={()=>setActiveSlide(1)} href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
