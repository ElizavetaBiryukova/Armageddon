'use client'

import { AsteroidsItem } from '../AsteroidItem/AsteroidItem';
import styles from '../AsteroidsList/AsteroidsList.module.css';
import { NearEarthObject } from '@/types/types';



export const OrderList = (): JSX.Element => {
    const asteroids: Array<NearEarthObject> = JSON.parse(localStorage.getItem('order')!);

    return (
        <>
            <ul className={styles.cards}>
                {asteroids.map((asteroid) =>
                    <AsteroidsItem
                        key={asteroid.id}
                        asteroids={asteroid}
                        isUnit={true}
                        order={[]}
                    // setOrder={ }
                    />
                )}
            </ul>
        </>
    )
};