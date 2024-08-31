import React from "react";
import s from "./ImageCard.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
}

interface ImageCardProps {
  image: Image;
  openModal: (alt: string, modalUrls: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div className={s.item}>
      <img
        src={image.urls.small}
        alt={image.description || ""}
        onClick={() => openModal(image.description || "", image.urls.regular)}
        height={"240px"}
      />
    </div>
  );
};

export default ImageCard;
