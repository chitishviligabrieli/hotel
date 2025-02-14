'use client'
import styles from "./Filter.module.scss"
import DateDropdown from "@/app/components/DropDown/DropDown";
import Buttons from "@/app/components/Buttons/Buttons";
import {FilterProps} from "@/app/ts/interfaces";
import {useState} from "react";

export default function Filter(props: FilterProps){

    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

    return (
        <div className={styles.container}>

            <DateDropdown
                           selectedDate={checkInDate}
                           onChange={(date) => {
                               setCheckInDate(date);
                               setCheckOutDate(null); // Reset check-out when check-in changes
                           }}
                           minDate={new Date()} title={'შესვლა'}/>
            <div className={styles.line}/>
            <DateDropdown  selectedDate={checkOutDate}
                           onChange={setCheckOutDate}
                           minDate={checkInDate ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) : new Date()}
                           disabled={!checkInDate}  title={'გასვლა'}/>
            <div className={styles.line}/>
            <DateDropdown selectedDate={checkInDate}
                          onChange={(date) => {
                              setCheckInDate(date);
                              setCheckOutDate(null); // Reset check-out when check-in changes
                          }}
                          minDate={new Date()} title={'გასვლა'}/>
            <div/>
            <Buttons action={props.onSearch} size={'medium'} value={'ძიება'}/>
        </div>
    )
}