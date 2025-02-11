import styles from './Navbar.module.scss'
import NavbarItem from "@/app/components/Navbar/NavbarItem/NavbarItem";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    {title: 'მთავარი', pathname: '/', key: '/'},
    {title: 'ჯავშანი', pathname: '/ჯავშანი', key: '/ჯავშანი'},
    {title: 'ჩვენს შესახებ', pathname: '/ჩვენს-შესახებ', key: '/ჩვენს-შესახებ'},
];


export default function Navbar() {

    const pathName = usePathname()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href={'/'}>
                    <Image src={'/logo.svg'} alt={'logo'} width={140} height={33}/>
                </Link>
                <ul className={styles.navbarList}>
                    {navLinks.map((link, idx) => (
                        <NavbarItem
                            key={idx}
                            active={pathName === link.key}
                            pathname={link.pathname}
                            title={link.title}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}