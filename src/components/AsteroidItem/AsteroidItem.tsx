import styles from './Asteroid.module.css';
import Image from 'next/image';
import asteroidMini from '../../assets/images/asteroid-mini.png';
import asteroidMax from '../../assets/images/asteroid-max.png';
import { NearEarthObject } from '@/types/types';
import { changesDate, removesBrackets, roundsString, changesOrbits } from '@/utils/changeAsteroidCard';
import Link from 'next/link';

type AsteroidsListProps = {
    asteroids: NearEarthObject;
}

const SIZE_BIG_ASTEROID = 500;
const SIZE_BIG_IMAGE = 40;
const SIZE_SMALL_IMAGE = 26;


export const AsteroidsItem = ({ asteroids }: AsteroidsListProps): JSX.Element => {
    const size = Math.round(asteroids.estimated_diameter.meters.estimated_diameter_max);
    const distance = asteroids.close_approach_data[0].miss_distance.lunar;

    return (
        <>
            <li className={styles.card}>
                <Link href={`asteroid/${asteroids.id}`}>
                    <div className={styles.date}>{changesDate(asteroids.close_approach_data[0].close_approach_date)}</div>
                    <div className={styles.data}>
                        <div className={styles.distance}>{roundsString(distance)} {changesOrbits(distance)}</div>
                        <Image
                            src={size > SIZE_BIG_ASTEROID ? asteroidMax : asteroidMini}
                            alt="" className={styles.image}
                            height={size > SIZE_BIG_ASTEROID ? SIZE_BIG_IMAGE : SIZE_SMALL_IMAGE}
                            width={size > SIZE_BIG_ASTEROID ? SIZE_BIG_IMAGE : SIZE_SMALL_IMAGE}
                        />
                        <div>
                            <div className={styles.name}>{removesBrackets(asteroids.name)}</div>
                            <div className={styles.size}>{size} м</div>
                        </div>
                    </div>
                </Link>
                <div className={styles.options}>
                    <button className={styles.order}>заказать</button>
                    {asteroids.is_potentially_hazardous_asteroid === true ? <div className={styles.note}>Опасен</div> : ''}
                </div>
            </li>
        </>
    )
};