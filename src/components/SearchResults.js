import React from 'react'
import styles from "../modules/SearchResults.module.css"
import TrackList from './TrackList';

function SearchResults({ userSearchResults }) {
    console.log(userSearchResults)
    return (
        <div className={styles.SearchResults}>
            <TrackList userTracks={userSearchResults} />
        </div>
    );
}

export default SearchResults;