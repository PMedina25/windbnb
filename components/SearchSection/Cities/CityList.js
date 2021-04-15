import React from 'react';
import styles from '../../../styles/SearchSectionStyles/CityStyles/CityList.module.css';

import data from '../../../data/stays.json';
import { checkIfCityExists } from '../../../utils/checkIfCityExists';

import City from './City';

const CityList = () => {
    let cities = [];

    for (let i = 0; i < data.length; i++) {
        let city = data[i].city;
        let country = data[i].country;

        if (!checkIfCityExists(cities, city)) {
            cities.push({city, country});
        }
    }

    return (
        <div id={styles.cityList}>
            {
                cities.map((elem, index) => <City key={index} city={elem.city} country={elem.country} />)
            }
        </div>
    )
}

export default CityList
