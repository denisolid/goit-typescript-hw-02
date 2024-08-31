import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (alt: string, modalUrls: string) => void;
  closeModal: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  openModal,
  closeModal,
}) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
