import styles from './AsteroidsList.module.css';
import Image from 'next/image'

export const AsteroidsList = (): JSX.Element => (
    <>
        <ul className={styles.cards}>
            <li className={styles.card}>
                <div className={styles.date}>12 сент 2023</div>
                <div className={styles.data}>
                    <div className={styles.distance}>3 лунные орбиты</div>
                    <Image
                        src="/asteroid-mini.png"
                        alt="" className={styles.image}
                        height={26}
                        width={26}
                    />
                    <div>
                        <div className={styles.name}>2021 FQ</div>
                        <div className={styles.size}>85 м</div>
                    </div>
                </div>
                <div className={styles.options}>
                    <button className={styles.order}>заказать</button>
                    <div className={styles.note}>Опасен</div>
                </div>
            </li>
            <li className={styles.card}>
                <div className={styles.date}>12 сент 2023</div>
                <div className={styles.data}>
                    <div className={styles.distance}>3 лунные орбиты</div>
                    <Image
                        src="/asteroid-mini.png"
                        alt="" className={styles.image}
                        height={26}
                        width={26}
                    />
                    <div>
                        <div className={styles.name}>2021 FQ</div>
                        <div className={styles.size}>85 м</div>
                    </div>
                </div>
                <div className={styles.options}>
                    <button className={styles.order}>заказать</button>
                    <div className={styles.note}>Опасен</div>
                </div>
            </li>
        </ul>
    </>
);