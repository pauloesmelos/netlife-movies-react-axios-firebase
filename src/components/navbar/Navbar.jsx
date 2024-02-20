import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { GlobalSearchNav } from "../../global/search-navbar/GlobalSearchNav";
import Mobile from "../mobile/Mobile";
import SearchNavbar from "../search/search-navbar/SearchNavbar";
import { GlobalUser } from "../../global/user/GlobalUser";
import ProfileBar from "../profile-bar/ProfileBar";
import ModalLogout from "./modal/logout/ModalLogout";

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const [modalLogout, setModalLogout] = React.useState(false);
  const { searchNav, setSearchNav } = React.useContext(GlobalSearchNav);
  const { user, isLogged } = React.useContext(GlobalUser);

  const handleMobile = () => {
    setMobile((state) => !state);
  };
  const handleSearchNav = () => {
    setSearchNav((state) => !state);
  };
  const handleModalLogout = () => {
    setModalLogout(state => !state);
  }

  return (
    <header className="w-full z-30 absolute">
      <div className="h-full p-4 px-6 flex justify-between items-center">
        <div className="">
          <NavLink to={"/"}>
            <h1>NETLIFE</h1>
          </NavLink>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          {/* div search */}
          <SearchNavbar searchNav={searchNav} setSearchNav={setSearchNav} />
          <div>
            <FaSearch
              className="text-2xl text-white cursor-pointer hover:text-red-600 
              duration-200 mr-4"
              onClick={handleSearchNav}
            />
          </div>
          {isLogged() ? (
            <>
              <ProfileBar email={user?.email} />
              <button 
                onClick={setModalLogout}
                className="text-white bg-red-600 px-6 py-3 font-semibold text-sm duration-300
                rounded hover:bg-red-300 flex items-center gap-3"
              >
                <LuLogOut className="text-xl text-white font-bold" />
                <span>Logout</span>
              </button>
              {/* modal logout */}
              { 
                modalLogout && 
                <ModalLogout
                  handleModalLogout={handleModalLogout} 
                />
              }
            </>
          ) : (
            <>
              <NavLink to={"/signup"}>
                <button
                  className="text-white bg-black px-8 py-3 font-semibold text-sm duration-300 hover:text-gray-300
                  border rounded hover:bg-[#222]"
                >
                  Sign up
                </button>
              </NavLink>
              <NavLink to={"/login"}>
                <button
                  className="rounded px-8 py-3 bg-red-500 text-white duration-300 hover:bg-red-400
                  text-sm font-semibold"
                >
                  Log In
                </button>
              </NavLink>
            </>
          )}
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
  );
};

export default Navbar;
