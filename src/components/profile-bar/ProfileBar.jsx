import React from "react";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProfileBar = ({ email }) => {

  const getNameOfEmail = (email) => {
    const name = email?.split("@").slice(0,1);
    return name;
  }
  return (
    <div className="w-full">
      <NavLink
      to={"/account"}
      className="w-full p-2 flex gap-2 items-center hover:opacity-70 duration-300">
        <FaRegUser className="text-white font-bold text-xl"/>
        <span className="text-white font-bold">
            {getNameOfEmail(email)}
        </span>
      </NavLink>
    </div>
  )
}

export default ProfileBar;