import styles from './TrashCan.module.css';
import Link from 'next/link';
import { NearEarthObject } from '@/types/types';

type TrashCanProps = {
    order: Array<NearEarthObject>;

}

export const TrashCan = ({ order }: TrashCanProps): JSX.Element => (
    <>
        <div className={styles.trashWrapper}>
            <div>
                <div className={styles.trashTitle}>Корзина</div>
                <div>{((order.length - 1) < 0) ? '0' : order.length - 1} астероида</div>
            </div>
            <Link href='/order' className={styles.send}>Отправить</Link>
        </div>
    </>
);