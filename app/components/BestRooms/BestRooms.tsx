'use client'
import {BestRoomsProps} from "@/app/ts/interfaces";
import Image from "next/image";
import styles from './BestRooms.module.scss'
import Buttons from "@/app/components/Buttons/Buttons";

export default function BestRooms(props: BestRoomsProps) {

    const onClick = () => {
        console.log('clicked')
    }

    return (
        <div className={styles.container}>
            <Image src={props.image} alt={props.image} width={185} height={212}/>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.sale}>{`${props.sale}%`}</p>
                    <p className={styles.text}>{`${props.room} ოთახი ${props.guest} პერსონა`}</p>
                </div>
                <Buttons action={onClick} size={'small'} value={'დაჯავშნე'}/>
            </div>
        </div>
    )
}