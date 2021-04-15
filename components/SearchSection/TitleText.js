import React from 'react';
import styles from '../../styles/SearchSectionStyles/TitleText.module.css';

const TitleText = (props) => {
    return (
        <span className={styles.titleText} style={{ marginBottom: 5}}>{props.titleText}</span>
    );
};

export default TitleText;
