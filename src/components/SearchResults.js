import React from 'react'
import styles from "../modules/SearchResults.module.css"
import TrackList from './TrackList';

function SearchResults({ searchResults, onAdd }) {
    console.log(searchResults)
    return (
        <div className={styles.SearchResults}>
            <TrackList searchResults={searchResults} isRemoval={false} onAdd={onAdd} />
        </div>
    );
}

export default SearchResults;