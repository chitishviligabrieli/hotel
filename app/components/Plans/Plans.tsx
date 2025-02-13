import styles from './Plans.module.scss'
import Popular from "@/app/components/Popular/Popular";
import {PlansProps} from "@/app/ts/interfaces";
import Buttons from "@/app/components/Buttons/Buttons";

export default function Plans(props: PlansProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h4 className={styles.h4}>{props.plaName}</h4>
                    {props.popular && <Popular/>}
                </div>
                <div className={styles.info}>
                    <span className={styles.price}>{`$${props.price}`}</span>
                    <span className={styles.time}>{`${props.nights} ღამე ${props.days} დღე`}</span>
                </div>
                <span className={styles.useing}>{`Basic features for up to ${props.used} users.`}</span>
            </div>
            <Buttons action={props.onClick} size={'big'} value={'ყიდვა'}/>
        </div>
    )
}