"use client";

import React, { createContext, useContext, useState } from "react";

type ModalContextValue = {
  showModal: boolean;
  showModalHandler: () => void;
  closeModalHandler: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <ModalContext.Provider
      value={{ showModal, showModalHandler, closeModalHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModalContext must be used within ModalProvider");
  }
  return ctx;
};
