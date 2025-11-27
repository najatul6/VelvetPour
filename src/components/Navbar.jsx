import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [swapMenuIcon, setSwapMenuIcon] = useState(true);
  return (
    <div
      className={`navbar flex items-center justify-between px-4 bg-[#27211d] w-11/12 mx-auto`}
    >
      <div className="navbar-start flex justify-between">
        <div className="drawer lg:hidden">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              onClick={() => setSwapMenuIcon(!swapMenuIcon)}
              htmlFor="my-drawer-1"
              className="btn btn-circle drawer-button swap swap-rotate bg-[#27211d] text-accent border-none shadow-none"
            >
              {swapMenuIcon === true ? (
                <IoMdMenu size={23} />
              ) : (
                <IoClose size={23} />
              )}
            </label>
          </div>
          <div className="drawer-side top-16">
            <div className="menu menu-vertical gap-5 w-60 min-h-screen text-center bg-[#27211d]">
              <NavLink className="text-accent font-semibold text-lg" to={"/"}>
                HOME
              </NavLink>
              <NavLink
                className="text-accent font-semibold text-lg hover:text-white"
                to={"/about"}
              >
                ABOUT
              </NavLink>
              <NavLink
                className="text-accent font-semibold text-lg hover:text-white"
                to={"/shop"}
              >
                SHOP
              </NavLink>
              <NavLink
                className="text-accent font-semibold text-lg hover:text-white"
                to={"/pages"}
              >
                PAGES
              </NavLink>
              <NavLink
                className="text-accent font-semibold text-lg hover:text-white"
                to={"/wishlist"}
              >
                WISHLIST
              </NavLink>
              <NavLink
                className="text-accent font-semibold text-lg hover:text-white"
                to={"/auth/login"}
              >
                LOGIN
              </NavLink>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-accent lg:hidden cursor-pointer"
          ></div>
        </div>
        <div className="w-12 lg:hidden">
          <img
            src="https://cheerx-beer.myshopify.com/cdn/shop/t/3/assets/logo.png?v=8686195976065126741611394010"
            alt="logo"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 flex items-center gap-8">
          <NavLink className="text-accent font-semibold text-lg hover:text-white" to={"/"}>
            HOME
          </NavLink>
          <NavLink className="text-accent font-semibold text-lg hover:text-white" to={"/about"}>
            ABOUT
          </NavLink>
          <NavLink className="text-accent font-semibold text-lg hover:text-white" to={"/shop"}>
            SHOP
          </NavLink>
          <div className="w-20">
            <div className="absolute flex justify-center items-center right-4 top-0 w-full pointer-events-none">
              <div className="bg-[#27211d] pb-5 px-5 rounded-full">
                <Link to={'/'}>
                <img
                  src="https://cheerx-beer.myshopify.com/cdn/shop/t/3/assets/logo.png?v=8686195976065126741611394010"
                  alt="logo"
                  className="w-20 pt-1"
                />
                </Link>
              </div>
            </div>
          </div>
          <NavLink className="text-accent font-semibold text-lg hover:text-white" to={"/pages"}>
            PAGES
          </NavLink>
          <NavLink
            className="text-accent font-semibold text-lg hover:text-white"
            to={"/wishlist"}
          >
            WISHLIST
          </NavLink>
          <NavLink
            className="text-accent font-semibold text-lg hover:text-white"
            to={"/auth/login"}
          >
            LOGIN
          </NavLink>
        </div>
      </div>
      <div className="navbar-end px-1">
        <div className="relative">
          <span className="bg-accent text-black flex justify-center items-center rounded-full w-5 h-5 font-semibold absolute ml-3 -mt-3">
            0
          </span>
          <MdOutlineShoppingBag size={23} className="text-accent" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
