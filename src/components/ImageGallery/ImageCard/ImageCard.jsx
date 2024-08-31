export const ImageCard = ({ item, openModal }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item.alt_description, item.urls.regular)}
        height={"240px"}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
