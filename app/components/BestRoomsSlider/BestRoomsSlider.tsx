'use client'
import {BestRoom} from "@/app/ts/interfaces";
// import BestRooms from "@/app/components/BestRooms/BestRooms";
import styles from './BestRoomsSlider.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import BestRooms from "@/app/components/BestRooms/BestRooms";
// import {useRef} from "react";

export default function BestRoomsSlider({bestRooms}: BestRoom) {

    // const scrollRef = useRef<HTMLDivElement>(null);
    //
    // const scrollLeft = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollLeft -= 250;
    //     }
    // };
    //
    // const scrollRight = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollLeft += 250;
    //     }
    // };
    return (
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={styles.container}
            >
                {
                    bestRooms.map((room) => (
                        <SwiperSlide key={room.room}>
                            <BestRooms {...room} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
    )
};