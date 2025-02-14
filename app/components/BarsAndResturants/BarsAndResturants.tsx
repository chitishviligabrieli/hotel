'use client';

import Counter from "../counter/counter";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import { imagesData } from "../ImagesContainer/imagesDummyData/ImagesData";
import styles from './BarsAndResturants.module.scss';

export default function BarsAndResturants() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSideWrapper}>
                <div className={styles.textWrapper}>
                    <h2 className={styles.heading}>რესტორნები & ბარები</h2>
                    <p className={styles.paragraph}>
                        ჩვენი დასასვენებელი სივრცე
                        აღჭურვილია საუკეთესო კომფორტითა
                        და თანამედროვე ტექნოლოგიებით, რათა
                        თქვენს განწყობასა და დასვენებას მაქსიმალური
                        კომფორტი შევმატოთ.
                    </p>
                </div>
                <div className={styles.counterWrapper}>
                    <Counter count={10} object={"ბარი"} />
                    <Counter count={22} object={"რესტორანი"} />
                    <Counter count={8} object={"ლაუნჯი"} />
                </div>
            </div>
            <ImagesContainer type={'type2'} images={imagesData.type2} />
        </div>
    )
}