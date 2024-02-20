import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalUser } from "../../../../global/user/GlobalUser";

const ModalLogout = ({ handleModalLogout }) => {
  const { logout } = React.useContext(GlobalUser);

  return (
    <div className="w-full h-screen absolute bg-black/40 top-0 left-0">
      <div className="w-full h-full flex justify-center items-center">
        <div className="py-4 px-8 w-[85%] sm:w-[40%] bg-white rounded-lg">
          <h2 className="text-[#333] font-bold text-[1.2rem]">Logout from Netlife ?</h2>
          <div className="flex items-center gap-4 my-4">
            <NavLink
              onClick={logout}
              to={"/"}
              className="px-8 py-2 bg-red-600 hover:bg-red-300 text-white rounded-lg
            duration-300"
            >
              Yes, logout
            </NavLink>
            <button 
              onClick={handleModalLogout}
              className="text-red-600 hover:text-red-300 duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalLogout;