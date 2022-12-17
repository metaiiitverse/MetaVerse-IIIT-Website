import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    background: "black",
  },
};
Modal.setAppElement("#root");

function CustomModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // const [otherFac, setFac] = React.useState(props.open);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={props.open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {props.children}
      </Modal>
    </div>
  );
}

export default CustomModal;
