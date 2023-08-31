import { AsteroidsList } from "@/components/AsteroidsList/AsteroidsList"
import styles from './page.module.css'
import { TrashCan } from "@/components/TrashCan/TrashCan"
import { getAsteroids } from "@/api/api";


export default async function Home() {
  const asteroids = await getAsteroids();

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <AsteroidsList
        asteroids={asteroids.near_earth_objects}
      />
      <TrashCan />
    </main>
  )
}

