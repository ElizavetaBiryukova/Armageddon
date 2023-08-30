import Link from 'next/link';
import styles from './Header.module.css';
import localFont from 'next/font/local';

const font = localFont({ src: '../../assets/fonts/PassionOne-Regular.woff' })

export const Header = (): JSX.Element => (
    <>
        <header>
            <h1 className={`${styles.logo} ${font.className}`}>
                <Link href='/'>ARMAGEDDON 2023</Link>
            </h1>
            <div className={styles.description}>ООО “Команда им. Б. Уиллиса”.<br /> Взрываем астероиды с 1998 года.</div>
        </header>
    </>
);