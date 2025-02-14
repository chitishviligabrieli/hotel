'use client';

import ImagesContainer from "../ImagesContainer/ImagesContainer";
import { imagesData } from "../ImagesContainer/imagesDummyData/ImagesData";
import styles from './commonSpace.module.scss';

export default function CommonSpace() {
    return (
        <div className={styles.container}>
            <ImagesContainer type={"type1"} images={imagesData.type1} />
            <div className={styles.rightSideWrapper}>
                <h2 className={styles.heading}>საერთო სიცრცე</h2>
                <p className={styles.paragraph}>
                    ჩვენი დასასვენებელი სივრცე აღჭურვილია
                    საუკეთესო კომფორტითა და თანამედროვე
                    ტექნოლოგიებით, რათა თქვენს განწყობასა
                    და დასვენებას მაქსიმალური კომფორტი
                    შევმატოთ. ელეგანტური ინტერიერი, მაღალი
                    დონის ავეჯი და მყუდრო გარემო ქმნის
                    იდეალურ სივრცეს როგორც განტვირთვისთვის,
                    ასევე სამუშაოდ.

                    ჩვენს სტუმრებს შეუძლიათ ისიამოვნონ პრემიუმ
                    კლასის სპა-ცენტრით, დახვეწილი რესტორნებით,
                    ფიტნეს დარბაზითა და ულამაზესი ტერასებით,
                    რომლებიც დაუვიწყარ ხედებს გთავაზობენ.
                    თითოეული დეტალი ჩვენი გუნდის მიერ საგულდაგულოდ
                    არის შერჩეული, რათა თქვენი დასვენება იყოს უნიკალური,
                    კომფორტული და სრულყოფილი.
                </p>

            </div>
        </div>
    )

}