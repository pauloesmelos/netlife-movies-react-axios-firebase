import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Error = ({ erro }) => {
  return (
    <span
      className="p-1 text-[.7rem] font-semibold sm:text-[.8rem] text-orange-500 flex gap-1
        items-center"
    >
      <IoIosCloseCircle className="text-[.8rem] sm:text-[.8rem] text-orange-500" />
      {erro}
    </span>
  );
};

export default Error;