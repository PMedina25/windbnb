import React from 'react';
import { useGlobalContext } from '../../context';

import styles from '../../styles/SearchComponentStyles/Location.module.css';

const Location = () => {
    const { city, country } = useGlobalContext();

    return (
        <div id={styles.location}>
            {city},&nbsp;{country}
        </div>
    )
}

export default Location;
