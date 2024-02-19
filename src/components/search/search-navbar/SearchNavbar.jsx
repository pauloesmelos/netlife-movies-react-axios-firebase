import React from "react";
import { FaSearch } from "react-icons/fa"; 

const SearchNavbar = ({ searchNav, setSearchNav }) => {
  const style = {
    show: `w-full max-w-[300px] absolute top-[22%] left-[35%] mt-0 duration-300 ease-in-out z-[100]
    `,
    hidden: `w-full max-w-[300px] absolute top-[20%] left-[35%] mt-[-100%] duration-300 ease-in-out z-[100]
    `
  }
  const handleSearch = () => {
    setSearchNav(state => !state);
  }

  return (
    <div 
      aria-label="search-navbar" 
      className={searchNav ? style.show : style.hidden}
    >
        <form 
          aria-label="search-navbar" 
          className="w-full p-2 bg-white flex items-center rounded-lg"
        >
            <input 
              type="text"
              placeholder="Search ..."
              className="w-full outline-none"
              aria-label="search-navbar"
            />
            <FaSearch 
              className="text-3xl text-white bg-red-600 p-2 rounded-2xl cursor-pointer
              hover:bg-red-400 duration-200"
              aria-label="search-navbar"
              onClick={handleSearch}
            />
        </form>
    </div>
  )
}

export default SearchNavbar;