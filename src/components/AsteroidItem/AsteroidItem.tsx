import styles from './Asteroid.module.css';
import Image from 'next/image';
import asteroidMini from '../../assets/images/asteroid-mini.png';
import asteroidMax from '../../assets/images/asteroid-max.png';
import { NearEarthObject } from '@/types/types';
import { changesDate, removesBrackets, roundsString, changesOrbits } from '@/utils/changeAsteroidCard';



type AsteroidsListProps = {
    asteroids: NearEarthObject;
}

export const AsteroidsItem = ({ asteroids }: AsteroidsListProps): JSX.Element => {
    const size = Math.round(asteroids.estimated_diameter.meters.estimated_diameter_max);
    const distance = asteroids.close_approach_data[0].miss_distance.lunar;

    return (
        <>
            <li className={styles.card}>
                <div className={styles.date}>{changesDate(asteroids.close_approach_data[0].close_approach_date)}</div>
                <div className={styles.data}>
                    <div className={styles.distance}>{roundsString(distance)} {changesOrbits(distance)}</div>
                    <Image
                        src={size > 500 ? asteroidMax : asteroidMini}
                        alt="" className={styles.image}
                        height={size > 500 ? 40 : 26}
                        width={size > 500 ? 40 : 26}
                    />
                    <div>
                        <div className={styles.name}>{removesBrackets(asteroids.name)}</div>
                        <div className={styles.size}>{size} м</div>
                    </div>
                </div>
                <div className={styles.options}>
                    <button className={styles.order}>заказать</button>
                    {asteroids.is_potentially_hazardous_asteroid === true ? <div className={styles.note}>Опасен</div> : ''}
                </div>
            </li>
        </>
    )
};