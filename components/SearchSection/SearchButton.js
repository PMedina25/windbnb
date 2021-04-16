import React from 'react';
import { useGlobalContext } from '../../context';

import styles from '../../styles/SearchSectionStyles/SearchButton.module.css';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchButton = () => {
    const { setShowSearchSection } = useGlobalContext();

    return (
        <div id={styles.searchButtonSection}>
            <div id={styles.searchButtonContainer} onClick={() => setShowSearchSection(false)}>
                <SearchOutlinedIcon  />
                <span>Search</span>
            </div>
        </div>
    )
}

export default SearchButton
