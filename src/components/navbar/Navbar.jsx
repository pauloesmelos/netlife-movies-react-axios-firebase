import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { GlobalSearchNav } from "../../global/search-navbar/GlobalSearchNav";
import Mobile from "../mobile/Mobile";
import SearchNavbar from "../search/search-navbar/SearchNavbar";

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const { searchNav, setSearchNav } = React.useContext(GlobalSearchNav);

  const handleMobile = () => {
    setMobile(state => !state);
  }
  const handleSearchNav = () => {
    setSearchNav(state => !state);
  }

  return (
    <header className="w-full z-30 absolute">
      <div className="h-full p-4 px-6 flex justify-between items-center">
        <div className="">
          <NavLink to={"/"}>
            <h1>
                NETLIFE
            </h1>
          </NavLink>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          {/* div search */}
          <SearchNavbar 
            searchNav={searchNav}
            setSearchNav={setSearchNav}
          />
          <div>
            <FaSearch 
              className="text-3xl text-white cursor-pointer hover:text-red-600 
              duration-200 mr-4"
              onClick={handleSearchNav}
            />
          </div>
          <NavLink to={"/signup"}>
            <button className="text-white bg-black px-8 py-3 font-semibold text-sm duration-300 hover:text-gray-300
            border rounded hover:bg-[#222]">
              Sign up
            </button>
          </NavLink>
          <NavLink to={"/login"}>
            <button className="rounded px-8 py-3 bg-red-500 text-white duration-300 hover:bg-red-400
            text-sm font-semibold">
              Log In
            </button>
          </NavLink>
        </div>
        <div className="flex sm:hidden">
            <IoMenu
              size={40}
              className="text-white hover:text-red-600 duration-200 cursor-pointer"
              onClick={handleMobile}
            />
        </div>
      </div>
      <Mobile
        handleMobile={handleMobile}
        mobile={mobile}
        setMobile={setMobile}
      />
    </header>
  )
}

export default Navbar;