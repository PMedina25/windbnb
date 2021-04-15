import React from 'react';
import { useGlobalContext } from '../../../context';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from '../../../styles/SearchSectionStyles/CityStyles/City.module.css';

const City = (props) => {
    const { setCity, setCountry } = useGlobalContext();

    const onClickHandler = () => {
        setCity(props.city);
        setCountry(props.country);
    };

    return (
        <div className={styles.cityContainer} onClick={onClickHandler}>
            <LocationOnIcon />
            <span>{props.city},&nbsp;{props.country}</span>
        </div>
    );
};

export default City;
