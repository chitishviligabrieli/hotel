'use client';

import { counterProps } from '@/app/ts/interfaces';
import styles from './counter.module.scss';

export default function Counter (props:counterProps) {

    return(
        <div className={styles.wrapper}>
            <span  className={styles.counterNumber}>{props.count}</span>
            <span className={styles.object}>{props.object}</span>
        </div>
    )
}