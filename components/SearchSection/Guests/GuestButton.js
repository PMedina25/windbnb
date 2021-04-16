import React from 'react';
import { useGlobalContext } from '../../../context';
import styles from '../../../styles/SearchSectionStyles/GuestStyles/GuestButton.module.css';

const GuestButton = (props) => {
    const { 
        incrementNumberAdults, 
        decrementNumberAdults, 
        incrementNumberChildren, 
        decrementNumberChildren 
    } = useGlobalContext();

    const onClickHandler = () => {
        if (props.operation === '-') {
            if (props.isAdults) {
                decrementNumberAdults();
            }
            else {
                decrementNumberChildren();
            }
        }
        else {
            if (props.isAdults) {
                incrementNumberAdults();
            }
            else {
                incrementNumberChildren();
            }
        }
    }

    return (
        <div className={styles.guestButton} onClick={onClickHandler}>
            {props.operation}
        </div>
    );
};

export default GuestButton;
