'use client'

import styles from './TrashCan.module.css';
import Link from 'next/link';
// import { NearEarthObject } from '@/types/types';
import { declOfAsteroids } from '@/utils/changeAsteroidCard';
// import { useState } from 'react';

// type TrashCanProps = {
//     order: Array<NearEarthObject>;

// }

export const TrashCan = (): JSX.Element => {

    return (
        <>
            <div className={styles.trashWrapper}>
                <div>
                    <div className={styles.trashTitle}>Корзина</div>
                    <div>{declOfAsteroids(0)}</div>
                </div>
                <Link href='/order' className={styles.send}>Отправить</Link>
            </div>
        </>
    )
};