'use client'
import BestRoomsSlider from "@/app/components/BestRoomsSlider/BestRoomsSlider";
import MainComp from "@/app/components/Main/Main";
import styles from './page.module.scss'
import Navbar from "@/app/components/Navbar/Navbar";

const bestRoomsData = {
    bestRooms: [
        {
            id: 1,
            image: "/image.png",
            room: 1,
            guest: 2,
            sale: 20,
        },
        {
            id: 2,
            image: "/image.png",
            room: 2,
            guest: 4,
            sale: 15,
        },
        {
            id: 3,
            image: "/image.png",
            room: 3,
            guest: 3,
            sale: 10,
        },
        {
            id: 4,
            image: "/image.png",
            room: 3,
            guest: 3,
            sale: 10,
        }, {
            id: 5,
            image: "/image.png",
            room: 3,
            guest: 3,
            sale: 10,
        }, {
            id: 6,
            image: "/image.png",
            room: 3,
            guest: 3,
            sale: 10,
        },
        {
            id: 7,
            image: "/image.png",
            room: 3,
            guest: 3,
            sale: 10,
        },
        {
            id: 8,
            image: "/image.png",
            room: 3,
            guest: 3,
            sale: 10,
        },
        {
            id: 9,
            image: "/image.png",
            room: 3,
            guest: 3,
            sale: 10,
        },
    ],
};

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <MainComp h1={'შენი იდეალური დასვენების ადგილი'} slogan={'ოცნებიდან რეალობამდე'}/>
                    <BestRoomsSlider bestRooms={bestRoomsData.bestRooms}/>
                </div>
            </div>
        </>
    );
}
