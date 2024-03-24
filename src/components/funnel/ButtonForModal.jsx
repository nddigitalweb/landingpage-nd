import { useState } from "react";
import "./modal.css";
import Modal from "./Modal";

export default function ButtonForModal() {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      {modalVisible && <Modal close={toggleModal} />}
      <button onClick={() => toggleModal()} className="main">
        QUIERO MI ANALISIS GRATUITO
      </button>
    </>
  );
}
