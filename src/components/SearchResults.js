import React from "react";

import TrackList from "./TrackList";
import styles from "../modules/SearchResults.module.css";

const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
};

export default SearchResults;
