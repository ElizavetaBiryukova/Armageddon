import { AsteroidsList } from "@/components/AsteroidsList/AsteroidsList"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <div className={styles.units}>
        <button className={styles.unit}>в километрах</button>
        <div>|</div>
        <button className={`${styles.unit} ${styles.unitCurrent}`}>в лунных орбитах</button>
      </div>
      <AsteroidsList />
      <div className="trash-wrapper">
        <div>
          <div className="trash-title">Корзина</div>
          <div className="quantity">2 астероида</div>
        </div>
        <button className="send">Отправить</button>
      </div>
    </main>
  )
}
