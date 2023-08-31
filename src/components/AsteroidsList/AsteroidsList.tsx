'use client'

import { useState } from 'react';
import { AsteroidsItem } from '../AsteroidItem/AsteroidItem';
import styles from './AsteroidsList.module.css';
import { NearEarthObject } from '@/types/types';


type AsteroidsListProps = {
    asteroids: NearEarthObject;
}

export const AsteroidsList = ({ asteroids }: AsteroidsListProps): JSX.Element => {

    const [isActiveUnit, setActiveUnit] = useState(true);

    return (
        <>
            <div className={styles.units}>
                <button className={`${styles.unit} ${!isActiveUnit ? styles.unitCurrent : ''}`} onClick={() => setActiveUnit(prev => !prev)}>в километрах</button>
                <div>|</div>
                <button className={`${styles.unit} ${isActiveUnit ? styles.unitCurrent : ''}`} onClick={() => setActiveUnit(prev => !prev)}>в лунных орбитах</button>
            </div>
            <ul className={styles.cards}>
                {Object.values(asteroids).flat().map((asteroid) =>
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