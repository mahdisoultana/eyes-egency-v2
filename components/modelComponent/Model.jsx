import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { IoArrowRedo } from "react-icons/io";
import { GiLobArrow } from "react-icons/gi";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#model");

function AppModel({ modalIsOpen, setIsOpen, onClose, children, dir }) {
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        onAfterClose={onClose}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={
          "bg-gray-100  rounded-xl shadow-xl flex items-center justify-center flex-col absolute top-[100px] bottom-[100px] right-[100px] left-[100px]"
        }
        contentLabel="Example Modal"
        overlayClassName="fixed  inset-0 bg-blue-500 z-[300]  cursor-pointer  "
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button
          onClick={closeModal}
          className="absolute   right-4 top-4 text-3xl inline-block bg-red-500 text-white font-mono font-bold text-center h-8 w-8  rounded-lg hover:bg-gray-500/40"
        >
          &times;
        </button>
        <div className="flex items-center justify-center">
          {dir && (
            <>
              {/* <GiLobArrow size="5" className="absolute" /> */}
              <p className="6xl">🧸</p>
              {/* <IoArrowRedo size="5" className="absolute" /> */}
            </>
          )}
          {children}
        </div>
      </Modal>
    </div>
  );
}

export default AppModel;
