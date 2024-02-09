import React from 'react';
import { IoClose } from "react-icons/io5";

const Mobile = ({ mobile, setMobile, handleMobile }) => {
  const style = {
    menuOpen: "w-full h-screen z-50 bg-black fixed top-0 left-0 duration-300 ease-in-out",
    menuClose: "w-full h-screen z-50 ml-[-100%] duration-300 fixed top-0 left-0 ease-in-out bg-black"
  }
  return (
    <nav className={mobile ? style.menuOpen : style.menuClose}>
      <div className="p-4">
        <div className="flex justify-between items-center gap-5 px-3">
            <h1>NETLIFE</h1>
            <IoClose
              size={45}
              className="text-white hover:text-red-500 duration-300 cursor-pointer"
              onClick={handleMobile}
            />
        </div>
        <div className="w-full px-2 pt-10">
            <ul className="flex flex-col gap-6">
                <li className="li">Movies</li>
                <li className="li">TV Shows</li>
                <li className="li">TV Ao Vivo</li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Mobile;