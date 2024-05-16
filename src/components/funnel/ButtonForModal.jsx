import { useState } from "react";
import "./modal.css";
import Modal from "./Modal";

export default function ButtonForModal({ text = "QUIERO MI EMBUDO" }) {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      {modalVisible && <Modal close={toggleModal} />}
      <button
        onClick={() => toggleModal()}
        className="bg-[var(--accent-color)] rounded-sm text-white font-medium text-2xl px-4 py-3"
      >
        {text}
      </button>
    </>
  );
}
