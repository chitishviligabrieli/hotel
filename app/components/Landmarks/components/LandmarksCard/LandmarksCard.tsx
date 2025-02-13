import { LandmarksCardProps } from "../interface/interface";
import styles from "./LandmarksCard.module.scss";
import Image from "next/image";

const LandmarksCard: React.FC<LandmarksCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <Image src={icon} alt={title} width={22} height={22} />
      </div>

      <div className={styles.containerText}>
        <h3 className={styles.containerText__title}>{title}</h3>
        <span className={styles.containerText__desc}>{description}</span>
      </div>
    </div>
  );
};

export default LandmarksCard;
