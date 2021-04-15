import React from 'react';
import { useGlobalContext } from '../../context';
import styles from '../../styles/SearchSectionStyles/Guests.module.css';

import TitleText from './TitleText';

const Guests = () => {
    const { isGuestsSelected, setIsLocationSelected, setIsGuestsSelected } = useGlobalContext();

    const onClickGuestsHandler = () => {
        setIsGuestsSelected(true);
        setIsLocationSelected(false);
    };

    return (
        <div id={styles.guests} className={`${isGuestsSelected ? styles.active : ''}`} onClick={onClickGuestsHandler}>
            <TitleText titleText="guests" />
            <span id={styles.addGuestsText}>Add guests</span>
        </div>
    );
};

export default Guests;
