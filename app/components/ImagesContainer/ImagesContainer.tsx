import React from "react";
import styles from "./ImagesContainer.module.scss";
import { ImagesContainerProps } from "@/app/ts/interfaces";

const ImagesContainer: React.FC<ImagesContainerProps> = ({ type, images }) => {
  return (
    <div className={`${styles.imagesContainer} ${styles[type]}`}>
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          className={`${styles.image} ${styles[`image${index + 1}`]}`}
        />
      ))}
    </div>
  );
};

export default ImagesContainer;
