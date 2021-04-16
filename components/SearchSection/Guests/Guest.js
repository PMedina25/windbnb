import React from 'react';
import { useGlobalContext } from '../../../context';
import styles from '../../../styles/SearchSectionStyles/GuestStyles/Guest.module.css';
import GuestButton from './GuestButton';

const Guest = (props) => {
    const { numberAdults, numberChildren } = useGlobalContext();

    return (
        <div id={styles.guestContainer}>
            <span className={styles.guestType}>{props.guestType}</span>
            <span className={styles.guestDescription}>{props.guestDescription}</span>
            <div className={styles.setGuestContainer}>
                <GuestButton operation={'-'} isAdults={props.isAdults} />
                {
                    props.isAdults ? <span>{numberAdults}</span> : <span>{numberChildren}</span>
                }
                <GuestButton operation={'+'} isAdults={props.isAdults} />
            </div>
        </div>
    )
}

export default Guest
