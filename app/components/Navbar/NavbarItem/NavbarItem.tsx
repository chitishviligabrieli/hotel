import Link from "next/link";
import styles from './NavbarItem.module.scss'
import {NavbarItemProps} from "@/app/ts/interfaces";

export default function NavbarItem(props: NavbarItemProps){
    return (
        <li>
            <Link href={props.pathname}
                  className={`${styles.link} ${props.active ? styles.active : ''}`}
            >{props.title}</Link>
        </li>
    )
}