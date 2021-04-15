import React, { useState } from 'react';
import { useGlobalContext } from '../../context'

import styles from '../../styles/SearchComponentStyles/Search.module.css';

import Location from './Location';
import Guests from './Guests';
import SearchButton from './SearchButton';

const Search = () => {
    const { setShowSearchSection } = useGlobalContext();

    return (
        <div id={styles.searchComponent} onClick={() => setShowSearchSection(true)}>
            <Location />
            <Guests />
            <SearchButton />
        </div>
    );
};

export default Search;
