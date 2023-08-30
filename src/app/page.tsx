import { AsteroidsList } from "@/components/AsteroidsList/AsteroidsList"
import styles from './page.module.css'
import { TrashCan } from "@/components/TrashCan/TrashCan"
import { getAsteroids } from "@/api/api";
// import { useState } from 'react';

export default async function Home() {
  const asteroids = await getAsteroids();
  // const [units, setUnits] = useState(true);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <div className={styles.units}>
        <button className={styles.unit}>в километрах</button>
        <div>|</div>
        <button className={`${styles.unit} ${styles.unitCurrent}`}>в лунных орбитах</button>
      </div>
      <AsteroidsList asteroids={asteroids.near_earth_objects} />
      <TrashCan />
    </main>
  )
}

// onClick={() => setUnits((prev) => !prev)}
