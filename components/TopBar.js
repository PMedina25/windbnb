import React from 'react';
import Image from 'next/image';

import styles from '../styles/Topbar.module.css';

import Search from './Search/Search';

const TopBar = () => {
    return (
        <div className={styles.container} id={styles.topbar}>
            <img src='/logo.png' alt="windbnb logo" width={100} height={20} />
            <Search />
        </div>
    )
}

export default TopBar
