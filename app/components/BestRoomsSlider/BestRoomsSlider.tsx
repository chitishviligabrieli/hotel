'use client'
import {BestRoom} from "@/app/ts/interfaces";
import styles from './BestRoomsSlider.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import BestRooms from "@/app/components/BestRooms/BestRooms";

export default function BestRoomsSlider({bestRooms}: BestRoom) {

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