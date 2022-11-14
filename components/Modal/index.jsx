import React from "react";
import Backdrop from "../Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Modal({ handleClose, text }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="gap-8 p-4  max-w-lg  rounded-xl m-auto flex flex-col items-center justify-center bg-white"
        onClick={(ev) => ev.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-2xl">{text}</h2>
        <div>
          <CheckIcon
            onClick={handleClose}
            className="w-12 hover:bg-primary hover:text-white duration-300 transition-all text-primary border-2 border-primary rounded-full p-2"
          />
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
