import { OrderList } from '@/components/OrderList/OrderList';
import styles from './Order.module.css';

const Order = async () => {

    return (
        <>
            <main className={styles.main}>
                <h2 className={styles.title}>Заказ отправлен!</h2>
                <OrderList />
            </main>
        </>
    )
};

export default Order;