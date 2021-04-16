import React from 'react';
import styles from '../../../styles/SearchSectionStyles/GuestStyles/GuestsContainer.module.css';
import Guest from './Guest';

const GuestsContainer = () => {
    return (
        <div id={styles.guestsSection}>
            <Guest guestType={'Adults'} guestDescription={'Ages 13 or above'} isAdults={true} />
            <Guest guestType={'Children'} guestDescription={'Ages 2-12'} isAdults={false} />
        </div>
    )
}

export default GuestsContainer
