import React from 'react';

const Tooltip = ({ tooltip, text }) => {

  return (
    <div className={tooltip ? "absolute block top-10 right-[-3rem] p-2 sm:p-3 bg-red-600" : "hidden"}>
      <p className="text-white text-sm">
        {text}
      </p>
    </div>
  )
}

export default Tooltip;