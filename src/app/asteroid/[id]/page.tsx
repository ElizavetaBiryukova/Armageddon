import styles from './Asteroid.module.css';
import { getAsteroid } from "@/api/api";
import { removesBrackets, roundsString, changesOrbits, changesDate, translatesPlanets } from '@/utils/changeAsteroidCard';
import { NearEarthObject } from '@/types/types';

interface AsteroidProps {
    params: {
        id: string
    }
}

const Asteroid = async ({ params }: AsteroidProps) => {
    const asteroid: NearEarthObject = await getAsteroid(params.id);
    console.log(asteroid)
    const size = Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max);
    const distance = asteroid.close_approach_data[0].miss_distance.lunar;
    return (
        <>
            <div className={styles.card}>
                <div className={styles.name}>Астероид: {removesBrackets(asteroid.name)}</div>
                <div className={styles.info}>
                    <div className={styles.size}>Диаметр: {size} м</div>
                    {asteroid.is_potentially_hazardous_asteroid === true ? <div className={styles.note}>Опасен</div> : <div>Неопасен</div>}
                </div>
                <h2> Список всех сближений:</h2>
                <ul className={styles.convergenceList}>
                    {asteroid.close_approach_data.map((el, i) => {
                        return (
                            <li className={styles.convergence} key={i}>
                                <div className={styles.time}>Дата максимального сближения с Землей: {changesDate(el.close_approach_date_full)}</div>
                                <div className={styles.speed}>Скорость относительно Земли: {roundsString(el.relative_velocity.kilometers_per_hour)} км/ч</div>
                                <div className={styles.distance}>Расстояние до Земли: {roundsString(distance)} {changesOrbits(distance)}</div>
                                <div className={styles.orbit}>Летит вокруг: {translatesPlanets(el.orbiting_body)}</div>
                            </li>
                        )

                    })}
                </ul>
            </div>
        </>
    )
};

export default Asteroid;