import { cloneElement } from "react";

const Icon = ({ children, className }) => {
  return (
    <div className="bg-white text-primary shadow-md p-1 rounded-md hover:text-white hover:bg-primary duration-300 active:scale-95">
      {cloneElement(children, { className: `${className} w-8 text-inherit` })}
    </div>
  );
};

export { Icon };
