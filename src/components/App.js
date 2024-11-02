import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "../modules/App.module.css"

function App() {
  return (
    <div>
      <h1>
        Let's Jam
      </h1>
      <div className={styles.App}>
        <SearchBar>
        </SearchBar>
        <div className={styles.AppPlaylist}>
          <SearchResults></SearchResults>
          <Playlist></Playlist>
        </div>
      </div>
    </div>
  );
}

export default App;