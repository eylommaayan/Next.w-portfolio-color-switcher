"use client";

import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { useModalContext } from "@/app/context/modal-context";
import "./modal.css";

export default function Modal({ className, children }) {
  const { showModal, closeModalHandler } = useModalContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const container = document.getElementById("overlays");
  if (!container) return null;

  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          container
        )}
    </Fragment>
  );
}
