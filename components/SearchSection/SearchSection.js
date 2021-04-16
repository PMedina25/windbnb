import React from 'react';
import { useGlobalContext } from '../../context'
import styles from '../../styles/SearchSectionStyles/SearchSection.module.css';

import Location from './Location';
import Guests from './Guests';
import SearchButton from './SearchButton';
import CityList from './Cities/CityList';
import GuestsContainer from './Guests/GuestsContainer';

const SearchSection = () => {
    const { isLocationSelected, showSearchSection } = useGlobalContext();

    return (
        <div className={styles.searchSection + `${showSearchSection ? ' ' + styles.showSearchSection : ''}`}>
            <div id={styles.searchContainer}>
                <Location />
                <Guests />
                <SearchButton />
            </div>

            {
                isLocationSelected ? <CityList /> : <GuestsContainer />
            }
        </div>
    );
};

export default SearchSection;
