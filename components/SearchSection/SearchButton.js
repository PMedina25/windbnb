import React from 'react';

import styles from '../../styles/SearchSectionStyles/SearchButton.module.css';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchButton = () => {
    return (
        <div id={styles.searchButtonSection}>
            <div id={styles.searchButtonContainer}>
                <SearchOutlinedIcon  />
                <span>Search</span>
            </div>
        </div>
    )
}

export default SearchButton
