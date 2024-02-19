import React from "react";
import { FaSearch } from "react-icons/fa"; 

const Input = ({ focus, handleFocus }) => {
  const style = {
    div: `bg-black text-white absolute flex items-center w-[250px]
    p-2 border-[3px] rounded-xl`,
    input: `w-full bg-transparent outline-none text-slate-300
    placeholder:text-center`
  }
  return (
    <div
      onClick={handleFocus}
      aria-label="input" 
      className={focus ? `${style.div} border-red-500` : `${style.div} border-slate-500`}
    >
        <input
          className={focus ? `${style.input} placeholder:text-gray-300` : `${style.input} placeholder:text-gray-600`}
          type="text" 
          placeholder="Search ..."
          aria-label="input"
        />
        <FaSearch
          className={`text-2xlduration-300 hover:text-red-500 
            ${focus ? "text-gray-300" : "text-gray-600"}`}
          aria-label="input"
        />
    </div>
  )
}

export default Input;