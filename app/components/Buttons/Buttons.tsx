import styles from './Buttons.module.scss'
import {ButtonProps} from "@/app/ts/interfaces";
import Image from "next/image";

export default function Buttons (props: ButtonProps) {

    const classes = [styles.container]

    if(props.size === 'big') classes.push(styles.big)
    if(props.size === 'small') classes.push(styles.small)
    if(props.size === 'medium') classes.push(styles.medium)

    return(
        <div onClick={props.action} className={classes.join(' ')}>{props.icon && <Image src={props.icon} alt={props.icon} width={24} height={24}/>}{props.value}</div>
    )
}