import React from "react";
import Modal from "rc-simple-modal";

export default function LargeModal({isOpen, onClose}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Simple Large Modal"
      isLarge={true}
    >
       <p className='text-center block my-10 text-gray-600'> This is a large modal, is it cool ? </p>
    </Modal>
  );
}
