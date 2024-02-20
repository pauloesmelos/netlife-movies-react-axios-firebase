import React from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import Input from "../search/input/Input";
import { GlobalUser } from "../../global/user/GlobalUser";
import ProfileBar from "../profile-bar/ProfileBar";
import ModalLogout from "../navbar/modal/logout/ModalLogout";

const Mobile = ({ mobile, handleMobile }) => {
  const [search, setSearch] = React.useState(false); /* open box search */
  const [focus, setFocus] = React.useState(false); /* focus input text */
  const [modalLogout, setModalLogout] = React.useState(false);
  const { user, isLogged } = React.useContext(GlobalUser);

  const style = {
    menuOpen:
      "w-full h-screen z-50 bg-black fixed top-0 left-0 duration-300 ease-in-out",
    menuClose:
      "w-full h-screen z-50 ml-[-100%] duration-300 fixed top-0 left-0 ease-in-out bg-black",
  };

  const handleSearch = ({ target }) => {
    setSearch(true);
  };
  /* fechar input search ao clicar em algum elemento do nav */
  const handleClose = ({ target }) => {
    const input = target.getAttribute("aria-label") === "input";
    const search = target.getAttribute("aria-label") === "search";
    if (!input && !search) {
      setSearch(false);
      setFocus(false);
    }
  };
  /* altered border focus input */
  const handleFocus = () => {
    setFocus(true);
  };
  const handleModalLogout = () => {
    setModalLogout(state => !state);
  }

  return (
    <nav
      onClick={handleClose}
      className={mobile ? style.menuOpen : style.menuClose}
    >
      <div className="p-4">
        <div className="flex justify-between items-center gap-5 px-3">
          <NavLink to={"/"} onClick={handleMobile}>
            <h1>NETLIFE</h1>
          </NavLink>
          <IoClose
            size={45}
            className="text-white hover:text-red-500 duration-300 cursor-pointer"
            onClick={handleMobile}
          />
        </div>
        <div className="w-full px-2 pt-10">
          <ul className="flex flex-col items-start gap-6">
            <li className="li">Movies</li>
            <li className="li">TV Shows</li>
            <li className="li">TV Ao Vivo</li>
            <li
              onClick={handleSearch}
              className="li flex items-center gap-4 my-3 group relative"
              aria-label="search"
            >
              Search
              <FaSearch
                className="text-xl text-white group-hover:text-red-500"
                aria-label="search"
              />
              {search && <Input handleFocus={handleFocus} focus={focus} />}
            </li>
            {isLogged() ? (
              <>
                <ProfileBar email={user?.email} />
                <button
                  onClick={handleModalLogout}
                  className="text-white bg-red-600 px-6 py-3 font-semibold text-sm duration-300
                rounded hover:bg-red-300 flex items-center gap-3"
                >
                  <LuLogOut className="text-xl text-white font-bold" />
                  <span>Logout</span>
                </button>
                {/* modal logout */}
                { modalLogout && <ModalLogout handleModalLogout={handleModalLogout} />}
              </>
            ) : (
              <>
                <NavLink to={"/login"} onClick={handleMobile}>
                  <button
                    className="px-16 py-3 bg-red-600 text-white font-bold rounded
                    hover:bg-red-500 duration-200 ml-2"
                  >
                    Log In
                  </button>
                </NavLink>
                <NavLink to={"/signup"} onClick={handleMobile}>
                  <button
                    className="px-14 py-3 border text-white font-bold rounded
                      hover:bg-[#333] duration-200 ml-2"
                  >
                    Sign Up
                  </button>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mobile;
