import React from 'react';
import { useGlobalContext } from '../../context';
import styles from '../../styles/SearchSectionStyles/Guests.module.css';

import TitleText from './TitleText';

const Guests = () => {
    const { isGuestsSelected, selectGuests, numberAdults, numberChildren } = useGlobalContext();

    return (
        <div id={styles.guests} className={`${isGuestsSelected ? styles.active : ''}`} onClick={selectGuests}>
            <TitleText titleText="guests" />
            <span id={styles.addGuestsText}>{numberAdults + numberChildren}&nbsp;Guests</span>
        </div>
    );
};

export default Guests;
