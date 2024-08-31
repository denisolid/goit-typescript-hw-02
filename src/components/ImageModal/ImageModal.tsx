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
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

Modal.setAppElement("#root");

interface ImageModalProps {
  openModal: boolean;
  closeModal: () => void;
  modalUrls: string;
  alt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  openModal,
  closeModal,
  modalUrls,
  alt,
}) => {
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={modalUrls} alt={alt} />
      </Modal>
    </div>
  );
};

export default ImageModal;
