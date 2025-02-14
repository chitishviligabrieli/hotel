'use client'
import BestRoomsSlider from "@/app/components/BestRoomsSlider/BestRoomsSlider";
import MainComp from "@/app/components/Main/Main";
import styles from './page.module.scss'
import Navbar from "@/app/components/Navbar/Navbar";
import Counter from "./components/counter/counter";
import { imagesData } from "./components/ImagesContainer/imagesDummyData/ImagesData";
import ImagesContainer from "./components/ImagesContainer/ImagesContainer";
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

  

    return (

        <div>
            <CommonSpace/>
        </div>

       
    );
}
