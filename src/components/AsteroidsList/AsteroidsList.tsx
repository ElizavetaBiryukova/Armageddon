'use client'

import { useState, useEffect } from 'react';
import { AsteroidsItem } from '../AsteroidItem/AsteroidItem';
import styles from './AsteroidsList.module.css';
import { NearEarthObject } from '@/types/types';
import { useInView } from 'react-intersection-observer';
import { getAsteroids } from '@/api/api';
import { Spinner } from '../Spinner/Spinner';

export const AsteroidsList = (): JSX.Element => {
    const [isActiveUnit, setActiveUnit] = useState<boolean>(true);
    const [asteroidsList, setAsteroidsList] = useState<NearEarthObject[]>([])

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const fetchAsteroids = async () => {
        const startDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

        const asteroids = await getAsteroids(startDate);
        const asteroidsObj: NearEarthObject = asteroids.near_earth_objects;
        const newAsteroidsArr = Object.values(asteroidsObj).flat().reverse().flat();

        setAsteroidsList((asteroidsArr) => [...asteroidsArr, ...newAsteroidsArr]);
    }


    useEffect(() => {
        if (inView) {
            fetchAsteroids();
        }
    }, [inView]);

    return (
        <>
            <div className={styles.units}>
                <button className={`${styles.unit} ${!isActiveUnit && styles.unitCurrent}`} onClick={() => setActiveUnit(false)}>в километрах</button>
                <div>|</div>
                <button className={`${styles.unit} ${isActiveUnit && styles.unitCurrent}`} onClick={() => setActiveUnit(true)}>в лунных орбитах</button>
            </div>
            <ul className={styles.cards}>
                {asteroidsList.map((asteroid) =>
                    <AsteroidsItem
                        key={asteroid.id}
                        asteroids={asteroid}
                        isUnit={isActiveUnit}
                    />
                )}
                <div className={styles.cards} ref={ref}>
                    <Spinner />
                </div>
            </ul>
        </>
    )
};