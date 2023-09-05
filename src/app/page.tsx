import { AsteroidsList } from "@/components/AsteroidsList/AsteroidsList"
import styles from './page.module.css'
// import { TrashCan } from "@/components/TrashCan/TrashCan";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <AsteroidsList />
    </main>
  )
}

