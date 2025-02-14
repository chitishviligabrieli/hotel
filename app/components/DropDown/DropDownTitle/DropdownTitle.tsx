import Image from "next/image";
import styles from "./DropdownTitle.module.scss";

export default function DropdownTitle({icon, title}: {icon: string; title: string}) {
    return (
        <div className={styles.container}>
            <Image className={styles.icon} src={icon} alt={icon} width={20} height={20}/>
            <span className={styles.title}>{title}</span>
        </div>
    )
}