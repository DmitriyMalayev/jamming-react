import TrackList from "./TrackList";
import styles from "../modules/SearchResults.module.css";

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
