import styles from './Main.module.scss'
import Filter from "@/app/components/Filter/FIlter";
import {MainProps} from "@/app/ts/interfaces";

export default function Main(props: MainProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.h1}>{props.h1}</h1>
                <span className={styles.slogan}>{props.slogan}</span>
            </div>
            <Filter/>
        </div>

    )
}