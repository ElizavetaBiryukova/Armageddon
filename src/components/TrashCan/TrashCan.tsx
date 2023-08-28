import styles from './TrashCan.module.css';

export const TrashCan = (): JSX.Element => (
    <>
        <div className={styles.trashWrapper}>
            <div>
                <div className={styles.trashTitle}>Корзина</div>
                <div>2 астероида</div>
            </div>
            <button className={styles.send}>Отправить</button>
        </div>
    </>
);