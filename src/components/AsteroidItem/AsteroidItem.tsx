import styles from './Asteroid.module.css';
// import Image from 'next/image';
import { NearEarthObject } from '@/types/types';

type AsteroidsListProps = {
    asteroids: NearEarthObject;
}

export const AsteroidsItem = ({ asteroids }: AsteroidsListProps): JSX.Element => {
    return (
        <>
            <li className={styles.card}>
                <div className={styles.date}>{asteroids.close_approach_data[0].close_approach_date}</div>
                <div className={styles.data}>
                    <div className={styles.distance}>{asteroids.close_approach_data[0].miss_distance.lunar} лунные орбиты</div>
                    {/* <Image
                            src="/asteroid-mini.png"
                            alt="" className={styles.image}
                            height={26}
                            width={26}
                        /> */}
                    <div>
                        <div className={styles.name}>{asteroids.name}</div>
                        <div className={styles.size}>{asteroids.estimated_diameter.meters.estimated_diameter_max} м</div>
                    </div>
                </div>
                <div className={styles.options}>
                    <button className={styles.order}>заказать</button>
                    <div className={styles.note}>Опасен</div>
                </div>
            </li>
        </>
    )
};