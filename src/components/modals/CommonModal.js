"use client";
import { useContext } from "react";
import styles from "./modal.module.css"

import { ModalContext } from "@/context/ModalContext";

const CommonModal = () => {
  const { modalContent,closeModal } = useContext(ModalContext);

  return (
    // The Modal
    <div className={styles.modal}>
      {/* Modal Content */}
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
       
        {modalContent}
      </div>
    </div>
  );
};

export default CommonModal;
