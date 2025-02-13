import React from "react";
import styles from "./Landmarks.module.scss";
import { cardData } from "./components/dummy/Landmarks-dummy";
import LandmarksCard from "./components/LandmarksCard/LandmarksCard";

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      {cardData.map((card) => (
        <LandmarksCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Card;
