import React from 'react';
import styles from '../styles/NumberStays.module.css';

const NumberStays = (props) => {
    return (
        <div id={styles.numberStays}>
            {props.numberOfStays}&nbsp;stays 
        </div>
    );
};

export default NumberStays
