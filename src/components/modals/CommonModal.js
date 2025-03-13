"use client";
import { useContext } from "react";
import Login from "../signup-signin/Login";
import "./style.css";
import { ModalContext } from "@/context/ModalContext";

const CommonModal = () => {
  const { modalContent,closeModal } = useContext(ModalContext);

  return (
    // The Modal
    <div className="modal">
      {/* Modal Content */}
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {/* <Login /> */}
        {modalContent}
      </div>
    </div>
  );
};

export default CommonModal;
