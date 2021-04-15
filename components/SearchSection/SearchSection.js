import React from 'react';
import { useGlobalContext } from '../../context'
import styles from '../../styles/SearchSectionStyles/SearchSection.module.css';

import Location from './Location';
import Guests from './Guests';
import SearchButton from './SearchButton';
import CityList from './Cities/CityList';

const SearchSection = () => {
    const { showSearchSection } = useGlobalContext();

    return (
        <div className={styles.searchSection + `${showSearchSection ? ' ' + styles.showSearchSection : ''}`}>
            <div id={styles.searchContainer}>
                <Location />
                <Guests />
                <SearchButton />
            </div>
            <CityList />
        </div>
    );
};

export default SearchSection;
