import React from "react";
import styles from "./Landmarks.module.scss";
import { cardData } from "./components/dummy/Landmarks-dummy";
import LandmarksCard from "./components/LandmarksCard/LandmarksCard";

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.containerText}>ღირსშესანიშნაობები ახლოს</h2>
      <div className={styles.containerWrapper}>
        {cardData.map((card) => (
          <LandmarksCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Card;
