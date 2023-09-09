'use client'

import { useState, useEffect } from 'react';
import { AsteroidsItem } from '../AsteroidItem/AsteroidItem';
import styles from './AsteroidsList.module.css';
import { NearEarthObject } from '@/types/types';
import { useInView } from 'react-intersection-observer';
import { getAsteroids } from '@/api/api';
import { Spinner } from '../Spinner/Spinner';
import { TrashCan } from '../TrashCan/TrashCan';

export const AsteroidsList = (): JSX.Element => {
    const [isActiveUnit, setActiveUnit] = useState<boolean>(true);
    const [asteroidsList, setAsteroidsList] = useState<NearEarthObject[]>([]);
    const [order, setOrder] = useState<NearEarthObject[] | []>([]);


    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const fetchAsteroids = async () => {
        const day = new Date();
        const asteroids = await getAsteroids(day);
        day.setDate(day.getDate() + 7);
        const asteroidsObj: NearEarthObject = asteroids.near_earth_objects;
        const newAsteroidsArr = Object.values(asteroidsObj).flat().flat();
        setAsteroidsList((asteroidsArr) => [...newAsteroidsArr, ...asteroidsArr]);

    }

    useEffect(() => {
        if (inView) {
            fetchAsteroids();
        }
    }, [inView]);


    function compare(a: NearEarthObject, b: NearEarthObject) {
        let dateA = new Date(a.close_approach_data[0].close_approach_date_full);
        let dateB = new Date(b.close_approach_data[0].close_approach_date_full);

        return dateA.valueOf() - dateB.valueOf();
    }

    return (
        <>
            <div className={styles.units}>
                <button className={`${styles.unit} ${!isActiveUnit && styles.unitCurrent}`} onClick={() => setActiveUnit(false)}>в километрах</button>
                <div>|</div>
                <button className={`${styles.unit} ${isActiveUnit && styles.unitCurrent}`} onClick={() => setActiveUnit(true)}>в лунных орбитах</button>
            </div>
            <ul className={styles.cards}>
                {asteroidsList.sort(compare).map((asteroid, i) =>
                    <AsteroidsItem
                        key={i}
                        asteroids={asteroid}
                        isUnit={isActiveUnit}
                        order={order}
                        setOrder={setOrder}
                    />
                )}
                <div className={styles.cards} ref={ref}>
                    <Spinner />
                </div>
            </ul>
            <TrashCan />
        </>
    )
};