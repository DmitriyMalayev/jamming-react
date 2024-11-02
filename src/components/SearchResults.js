import React from 'react'
import styles from "../modules/SearchResults.module.css"
import TrackList from './TrackList';

function SearchResults() {
    return (
        <div className={styles.SearchResults}>
            <TrackList></TrackList>
        </div>
    );
}

export default SearchResults;