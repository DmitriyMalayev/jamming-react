import React from "react";
import styles from "../modules/SearchResults.module.css";
import TrackList from "./TrackList";

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList tracks={searchResults} isRemoval={false} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
