import { useEffect } from "react";
import React from "react";
import Button from "../button";
import "./styles.css";

export type ModalContentProps = {
  onRequestClose: () => void;
};

export function ModalContent({ onRequestClose }: ModalContentProps) {
  useEffect(() => {
    function onKeyDown(event: { keyCode: number }) {
      if (event.keyCode === 27) {
        onRequestClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  const handleWithWindowClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    (e.target as HTMLSpanElement).id === "background" && onRequestClose();
  };

  return (
    <span
      className="background"
      id="background"
      onClick={handleWithWindowClick}
    >
      <div className="content">
        <div className="close">
          <span className="top" onClick={onRequestClose}>
            x
          </span>
        </div>
        <h3 className="title">I'm Modal</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button label="Close this modal!" onClick={onRequestClose} />
      </div>
    </span>
  );
}
