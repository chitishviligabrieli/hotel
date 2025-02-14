'use client'
import React, {useRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ka} from "date-fns/locale";
// import DropdownTitle from "@/app/components/DropDown/DropDownTitle/DropdownTitle";
import styles from './Dropdown.module.scss'
import Image from "next/image";
import {DateDropdownProps} from "@/app/ts/interfaces";
import DropdownTitle from "@/app/components/DropDown/DropDownTitle/DropdownTitle";
// import {Calendar} from "lucide";
// import { format } from "date-fns";

export default function DateDropdown(props: DateDropdownProps) {
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const datePickerRef = useRef<DatePicker | null>(null); // Correctly typed ref

    // const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    // const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);


    return (
        <div onClick={() => datePickerRef.current?.setFocus()} className={styles.container}>
            {/*<DropdownTitle icon={'/calendar.svg'} title={title}/>*/}
            {/*<div className={styles.header}>*/}
            {/*    <DatePicker*/}
            {/*        selected={selectedDate}*/}
            {/*        onChange={(date) => date && setSelectedDate(date)}*/}
            {/*        dateFormat="dd MMMM"*/}
            {/*        locale={ka}*/}
            {/*        className={styles.datePicker}*/}
            {/*        ref={datePickerRef}*/}
            {/*    />*/}
            {/*    <Image src={'dropArr.svg'} alt={'dropArr'} width={24} height={24}/>*/}
            {/*</div>*/}
            <div className={styles.header}>
                <DropdownTitle icon={'/calendar.svg'} title={props.title}/>
                <div className={styles.input}>
                    <DatePicker
                        selected={props.selectedDate}
                        onChange={props.onChange}
                        dateFormat="dd MMMM"
                        locale={ka}
                        className={styles.datePicker}
                        minDate={props.minDate}
                        disabled={props.disabled}
                        ref={datePickerRef}
                    />
                    <Image
                        src={"/dropArr.svg"}
                        alt={"dropArr"}
                        width={24}
                        height={24}
                        onClick={() => document.getElementById(props.title)?.focus()}
                    />
                </div>
            </div>
        </div>
    );
};


//import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ka } from "date-fns/locale";
// import DropdownTitle from "@/app/components/DropDown/DropDownTitle/DropdownTitle";
// import styles from "./Dropdown.module.scss";
// import Image from "next/image";
//
// export default function DateDropdown({ icon, title }: { icon: string; title: string }) {
//     const [checkInDate, setCheckInDate] = useState<Date | null>(null);
//     const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
//
//     return (
//         <div className={styles.container}>
//             <DropdownTitle icon={icon} title={title} />
//
//             {/* Check-In Date Picker */}
//             <div className={styles.header}>
//                 <span>Check-In</span>
//                 <DatePicker
//                     selected={checkInDate}
//                     onChange={(date) => {
//                         setCheckInDate(date);
//                         setCheckOutDate(null); // Reset check-out when check-in changes
//                     }}
//                     dateFormat="dd MMMM"
//                     locale={ka}
//                     className={styles.datePicker}
//                     minDate={new Date()} // Prevent selecting past dates
//                 />
//                 <Image
//                     src={"dropArr"}
//                     alt={"dropArr"}
//                     width={24}
//                     height={24}
//                     onClick={() => document.getElementById("checkInPicker")?.focus()}
//                     className="cursor-pointer"
//                 />
//             </div>
//
//             {/* Check-Out Date Picker */}
//             <div className={styles.header}>
//                 <span>Check-Out</span>
//                 <DatePicker
//                     selected={checkOutDate}
//                     onChange={(date) => setCheckOutDate(date)}
//                     dateFormat="dd MMMM"
//                     locale={ka}
//                     className={styles.datePicker}
//                     minDate={checkInDate ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) : new Date()}
//                     disabled={!checkInDate} // Disable until check-in is selected
//                 />
//                 <Image
//                     src={"dropArr"}
//                     alt={"dropArr"}
//                     width={24}
//                     height={24}
//                     onClick={() => document.getElementById("checkOutPicker")?.focus()}
//                     className="cursor-pointer"
//                 />
//             </div>
//         </div>
//     );
// }