import { AsteroidsItem } from '../AsteroidItem/AsteroidItem';
import styles from './AsteroidsList.module.css';
// import Image from 'next/image';
import { NearEarthObject } from '@/types/types';


type AsteroidsListProps = {
    asteroids: NearEarthObject;
}

export const AsteroidsList = ({ asteroids }: AsteroidsListProps): JSX.Element => {

    return (
        <>
            <ul className={styles.cards}>
                {Object.values(asteroids).flat().map((asteroid) =>
                    <AsteroidsItem
                        key={asteroid.id}
                        asteroids={asteroid} />
                )}
            </ul>
        </>
    )
};