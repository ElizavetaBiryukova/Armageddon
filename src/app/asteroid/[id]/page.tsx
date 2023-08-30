import styles from './Asteroid.module.css';
import { getAsteroids } from "@/api/api";
import { NearEarthObject } from '@/types/types';
import { removesBrackets, roundsString, changesOrbits } from '@/utils/changeAsteroidCard';


interface AsteroidProps {
    params: {
        id: string
    }
}

const Asteroid = async ({ params }: AsteroidProps) => {
    const asteroidsApi = await getAsteroids();
    const asteroidsList = Object.values(asteroidsApi.near_earth_objects).flat();
    const asteroid: NearEarthObject = asteroidsList.filter((el) => el.id === params.id)[0];

    const size = Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max);
    const distance = asteroid.close_approach_data[0].miss_distance.lunar;
    return (
        <>
            <div className={styles.card}>
                <div className={styles.name}>Астероид: {removesBrackets(asteroid.name)}</div>
                <div className={styles.distance}>Расстояние до Земли: {roundsString(distance)} {changesOrbits(distance)}</div>
                <div className={styles.size}>Диаметр: {size} м</div>
                {asteroid.is_potentially_hazardous_asteroid === true ? <div className={styles.note}>Опасен</div> : <div>Неопасен</div>}

                <div className={styles.options}>
                    <button className={styles.order}>заказать</button>
                </div>
            </div>
        </>
    )
};

export default Asteroid;