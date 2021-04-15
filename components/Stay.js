import React from 'react';
import styles from '../styles/Stay.module.css';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';

import SuperHost from '../components/SuperHost';

const Stay = (props) => {
    return (
        <div className={styles.stay}>
            <img src={props.photo} alt="room photo" className={styles.photo + ' responsive'} />
            <div className={styles.stayInfo}>
                <div className={styles.details}>
                    <div className={styles.hostAndType}>        
                        {
                            props.superHost ?
                            <SuperHost /> :
                            null
                        }
                        <span className={styles.stayType}>{props.type}</span>
                        {
                            props.beds ?
                            <span className={styles.stayBed}>&nbsp;.&nbsp;{props.beds}&nbsp;beds</span> :
                            null
                        }
                    </div>
                    <div className={styles.stayGrade}>
                        <StarRateRoundedIcon style={{ color: 'EB5757' }} />
                        <span className={styles.rating}>{props.rating}</span>
                    </div>
                </div>
                <span className={styles.stayTitle}>{props.title}</span>
            </div>
        </div>
    );
};

export default Stay;
