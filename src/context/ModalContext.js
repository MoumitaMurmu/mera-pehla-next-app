"use client";

import { createContext, useState } from "react";


// modal ka context banaya
export const ModalContext = createContext();
// modal ka provider banaya
export const ModalProvider = ({ children }) => {
  // modal ka state banaya jo ki true ya false ho sakta hai
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal content state modal ke andar konsa content dikhana hai
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalContent,isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
