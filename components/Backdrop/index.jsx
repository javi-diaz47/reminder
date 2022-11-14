import React from "react";
import { motion } from "framer-motion";

function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className="z-50 absolute top-0 left-0 w-full h-full bg-[#000000e1] flex justify-center items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
