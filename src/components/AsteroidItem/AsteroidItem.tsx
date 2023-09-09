'use client'

import styles from './Asteroid.module.css';
import Image from 'next/image';
import asteroidMini from '../../assets/images/asteroid-mini.png';
import asteroidMax from '../../assets/images/asteroid-max.png';
import { NearEarthObject } from '@/types/types';
import { changesDate, removesBrackets, roundsString, changesUnitsOrbits } from '@/utils/changeAsteroidCard';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '../Spinner/Spinner';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type AsteroidsItemProps = {
    asteroids: NearEarthObject;
    isUnit: boolean;
    order: Array<NearEarthObject>;
    setOrder: React.Dispatch<React.SetStateAction<NearEarthObject[]>>;
}

const SIZE_BIG_ASTEROID = 500;
const SIZE_BIG_IMAGE = 40;
const SIZE_SMALL_IMAGE = 26;


export const AsteroidsItem = ({ asteroids, isUnit, order, setOrder }: AsteroidsItemProps): JSX.Element => {
    const size = Math.round(asteroids.estimated_diameter.meters.estimated_diameter_max);
    const distanceLunar = asteroids.close_approach_data[0].miss_distance.lunar;
    const distanceKm = asteroids.close_approach_data[0].miss_distance.kilometers;

    const local = localStorage.getItem('order')
    const asteroidsOrder = local ? !!JSON.parse(local as string).filter((item: NearEarthObject) => item.id === asteroids.id).length : [].filter((item: NearEarthObject) => item.id === asteroids.id).length;

    const [inOrder, setInOrder] = useState(asteroidsOrder);

    const pathname = usePathname();

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const handleOrder = () => {
        order.push(asteroids)
        setOrder(order)
        localStorage.setItem('order', JSON.stringify(order));
        setInOrder(true);
    }

    return (
        <>
            <li ref={ref} className={styles.card}>

                {inView
                    ?
                    <div>
                        <Link href={`asteroid/${asteroids.id}`}>
                            <div className={styles.date}>{changesDate(asteroids.close_approach_data[0].close_approach_date)}</div>
                            <div className={styles.data}>
                                <div className={styles.distance}>
                                    {isUnit ? `${roundsString(distanceLunar)} ${changesUnitsOrbits(roundsString(distanceLunar))}` : `${roundsString(distanceKm)} км`}
                                </div>
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
                            {pathname !== '/order' && (
                                <button
                                    className={styles.order}
                                    onClick={handleOrder}
                                >
                                    {inOrder ? 'В корзине' : 'Заказать'}
                                </button>

                            )}
                            {asteroids.is_potentially_hazardous_asteroid === true ? <div className={styles.note}>Опасен</div> : ''}
                        </div>
                    </div>
                    :
                    <Spinner />
                }

            </li >
        </>
    )
};