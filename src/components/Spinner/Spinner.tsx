import styles from './Spinner.module.css';

export const Spinner = (): JSX.Element => (
    <>
        <div className={styles.spinner}>
            <div></div><div></div><div></div><div></div>
        </div>
    </>
);