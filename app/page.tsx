'use client'
import BestRoomsSlider from "@/app/components/BestRoomsSlider/BestRoomsSlider";
import MainComp from "@/app/components/Main/Main";
import styles from './page.module.scss'
import Navbar from "@/app/components/Navbar/Navbar";
import Counter from "./components/counter/counter";
import PlansWrapper from "@/app/components/PlansWrapper/PlansWrapper";
import ImagesContainer from "@/app/components/ImagesContainer/ImagesContainer";
import {imagesData} from "@/app/components/ImagesContainer/imagesDummyData/ImagesData";
import DateDropdown from "@/app/components/DropDown/DropDown";
import BarsAndResturants from "./components/BarsAndResturants/BarsAndResturants";
import CommonSpace from "./components/CommonSpace/commonSpace";
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
const bestRoomsData = [
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
]


const bestPlansData = [
    {
        id: 1,
        plaName: 'Basic plan',
        price: 100,
        popular: true,
        used: 10,
        nights: 2,
        days: 3,
    }, {
        id: 2,
        plaName: 'Basic plan',
        price: 100,
        popular: true,
        used: 10,
        nights: 2,
        days: 3,
    }, {
        id: 3,
        plaName: 'Basic plan',
        price: 100,
        popular: true,
        used: 10,
        nights: 2,
        days: 3,
    },
]

export default function Home() {

    const onClick = () => {
        console.log("clicked");
    }

    return (
        <>
            <Navbar/>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <MainComp onSearch={onClick} h1={'შენი იდეალური დასვენების ადგილი'} slogan={'ოცნებიდან რეალობამდე'}/>
                    <BestRoomsSlider bestRooms={bestRoomsData}/>
                </div>
            </div>
            <div>
                <Counter count={22} object="resturant"/>
            </div>
            <PlansWrapper onClick={onClick} bestPlans={bestPlansData}/>
        <div>
            <CommonSpace/>
        </div>
        </>
    );

}