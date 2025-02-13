
import {BestPlansProps} from "@/app/ts/interfaces";
import Plans from "@/app/components/Plans/Plans";
import styles from './PlansWrapper.module.scss'

export default function PlansWrapper({bestPlans, onClick}: BestPlansProps) {
    return (
        <div className={styles.container}>
            {
                bestPlans.map((plan, index) => (
                        <Plans key={index} {...plan} onClick={onClick} />
                ))
            }
        </div>
    )
}