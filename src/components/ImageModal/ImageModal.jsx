import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <img src={image.imageUrl} alt={image.description} />
        <p>{image.description}</p>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
