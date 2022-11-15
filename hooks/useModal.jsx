import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modal";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  const handleModal = () => {
    modalOpen ? close() : open();
  };

  return {
    modalOpen,
    open,
    close,
    handleModal,
    modal: (text) => (
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text={text} />}
      </AnimatePresence>
    ),
  };
};

export { useModal };
