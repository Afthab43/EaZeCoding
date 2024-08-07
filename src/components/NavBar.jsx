// import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

import logo from "../assets/logo/ez-logo-purple.png";
import { navItems } from "../constants/Constants.jsx";

const NavBar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleNav = () => {
    setMobileDrawer(!mobileDrawer);
  };
  return (
    <div>
      <nav className="sticky top-0 z-50  backdrop-blur-lg border-b border-neutral-700/80 ">
        <div className="container px-4 mx-auto relative text-sm ">
          <div className="flex  item-center justify-between h-full  ">
            <div className="flex iems-center flex-shrink justify-center  py-4">
              <img className="h-8 w-8 mr-1" src={logo} alt="logo" />
              <span className="text-2xl tracking-tight text-white hover:from-purple-700 hover:to-purple-950 cursor-pointer">
                EaZeCoding
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12  items-center  ">
              {navItems.map((item, index) => {
                return (
                  <>
                    <li
                      className=" h-full py-5 text-white hover:text-purple-500  hover:border-purple-800 hover:border-b-[3.5px] "
                      key={index}
                    >
                      <a href={item.to}>{item.label}</a>
                    </li>
                  </>
                );
              })}
            </ul>
            <div className="hidden lg:flex justify-center space-x-7 items-center ">
              <button className="py-2 px-3 border rounded-md hover:text-black hover:font-medium hover:bg-white">
                Sign In
              </button>
              <button className="py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950">
                Create an Account
              </button>
            </div>
            <div className="lg:hidden md:flex flex flex-col  justify-end pb-2 ">
              <button className="" onClick={toggleNav}>
                {mobileDrawer ? <IoMdClose /> : <MdMenu />}
              </button>
            </div>
            {/* mobile view here */}
              {mobileDrawer && (
                <div className="fixed right-0 z-20 bg-neutral-50-200 w-full  flex flex-col justify-center  items-center lg:hidden mt-11 border-neutral-900 border-b-2">
                  <ul className="w-full ">
                    {navItems.map((item, index) => {
                      return (
                        <li
                          className="flex justify-center p-3 m-1 bg-neutral-950 "
                          key={index}
                        >
                          <a href={item.to}>{item.label}</a>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex space-x-2 bg-black w-full justify-center py-4">
                    <button className="py-2 px-3 border rounded-md hover:text-black hover:font-medium hover:bg-white">
                      Sign In
                    </button>
                    <button className="py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950">
                      Create an Account
                    </button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
