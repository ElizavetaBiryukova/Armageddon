import styles from './Header.module.css';
import Link from 'next/link';

export const Header = (): JSX.Element => (
    <>
        <header>
            <Link href='/' className={styles.logo}>
                ARMAGEDDON 2023
            </Link>
            <div className={styles.description}>ООО “Команда им. Б. Уиллиса”.<br /> Взрываем астероиды с 1998 года.</div>
        </header>
    </>
);