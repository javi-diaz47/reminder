import React from "react";

function Button(props) {
  return (
    <button
      className="bg-primary py-2 px-4 rounded-xl text-white font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
      {...props}
    >
      {props.value}
    </button>
  );
}

export default Button;
