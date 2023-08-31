'use client'

import { useState } from 'react';
import { AsteroidsItem } from '../AsteroidItem/AsteroidItem';
import styles from './AsteroidsList.module.css';
import { NearEarthObject } from '@/types/types';


type AsteroidsListProps = {
    asteroids: NearEarthObject;
}

export const AsteroidsList = ({ asteroids }: AsteroidsListProps): JSX.Element => {

    const [isActiveUnit, setActiveUnit] = useState<boolean>(true);

    const asteroidsArr = Object.values(asteroids).flat().reverse();

    return (
        <>
            <div className={styles.units}>
                <button className={`${styles.unit} ${!isActiveUnit && styles.unitCurrent}`} onClick={() => setActiveUnit(false)}>в километрах</button>
                <div>|</div>
                <button className={`${styles.unit} ${isActiveUnit && styles.unitCurrent}`} onClick={() => setActiveUnit(true)}>в лунных орбитах</button>
            </div>
            <ul className={styles.cards}>
                {asteroidsArr.map((asteroid) =>
                    <AsteroidsItem
                        key={asteroid.id}
                        asteroids={asteroid}
                        isUnit={isActiveUnit}
                    />
                )}
            </ul>
        </>
    )
};