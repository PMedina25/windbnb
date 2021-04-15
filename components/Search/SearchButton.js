import React from 'react';

import styles from '../../styles/SearchComponentStyles/SearchButton.module.css';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchButton = () => {
    return (
        <div id={styles.searchButton}>
            <SearchOutlinedIcon style={{ color: '#EB5757' }} />
        </div>
    )
}

export default SearchButton
