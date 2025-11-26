import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div
      className={`navbar flex items-center justify-between px-4 bg-[#27211d]`}
    >
      <div className="navbar-start flex justify-between">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-accent lg:hidden cursor-pointer"
          >
            <IoMdMenu size={23} />
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#27211d] rounded-box z-1 mt-3 w-52 p-2"
          >
            <NavLink className="text-accent font-semibold text-lg" to={"/"}>
              Home
            </NavLink>
            <NavLink
              className="text-accent font-semibold text-lg"
              to={"/about"}
            >
              ABOUT
            </NavLink>
            <NavLink className="text-accent font-semibold text-lg" to={"/shop"}>
              SHOP
            </NavLink>
            <NavLink
              className="text-accent font-semibold text-lg"
              to={"/pages"}
            >
              PAGES
            </NavLink>
            <NavLink
              className="text-accent font-semibold text-lg"
              to={"/wishlist"}
            >
              WISHLIST
            </NavLink>
            <NavLink
              className="text-accent font-semibold text-lg"
              to={"/auth/login"}
            >
              LOGIN
            </NavLink>
          </div>
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
          <NavLink className="text-accent font-semibold text-lg" to={"/"}>
            HOME
          </NavLink>
          <NavLink className="text-accent font-semibold text-lg" to={"/about"}>
            ABOUT
          </NavLink>
          <NavLink className="text-accent font-semibold text-lg" to={"/shop"}>
            SHOP
          </NavLink>
          <div className="w-20">
            <div className="absolute flex justify-center items-center right-4 top-0 w-full">
              <div className="bg-[#27211d] pb-5 px-5 rounded-full">
                <img
                  src="https://cheerx-beer.myshopify.com/cdn/shop/t/3/assets/logo.png?v=8686195976065126741611394010"
                  alt="logo"
                  className="w-20 pt-1"
                />
              </div>
            </div>
          </div>

          <NavLink className="text-accent font-semibold text-lg" to={"/pages"}>
            PAGES
          </NavLink>
          <NavLink
            className="text-accent font-semibold text-lg"
            to={"/wishlist"}
          >
            WISHLIST
          </NavLink>
          <NavLink
            className="text-accent font-semibold text-lg"
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
