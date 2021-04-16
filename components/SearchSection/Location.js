import React from 'react';
import { useGlobalContext } from '../../context';
import styles from '../../styles/SearchSectionStyles/Location.module.css';

import TitleText from './TitleText';

const Location = () => {
    const { city, country, isLocationSelected, selectLocation } = useGlobalContext();

    return (
        <div id={styles.location} className={`${isLocationSelected ? styles.active : ''}`} onClick={selectLocation}>
            <TitleText titleText="location" />
            <span>{city},&nbsp;{country}</span>
        </div>
    );
};

export default Location;
