import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "../modules/App.module.css"

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "track name 1",
      artist: "track artist 1",
      album: " track album 1",
    },
    {
      id: 2,
      name: "track name 2",
      artist: "track artist 2",
      album: " track album 2",
    },
    {
      id: 3,
      name: "track name 3",
      artist: "track artist 3",
      album: " track album 3",
    },
  ])
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 1,
      name: "example playlist name 1",
      artist: "example playlist artist 1",
      album: " example playlist album 1",
    },
    {
      id: 2,
      name: "example playlist name 2",
      artist: "example playlist artist 2",
      album: " example playlist album 2",
    },
    {
      id: 3,
      name: "example playlist name 3",
      artist: "example playlist artist 3",
      album: " example playlist album 3",
    },
  ])
  const [playlistName, setPlaylistName] = useState("Playlist Name")



  return (
    <div>
      <h1>
        Let's Jam
      </h1>
      <div className={styles.App}>
        <SearchBar>
        </SearchBar>
        <div className={styles.AppPlaylist}>
          <SearchResults userSearchResults={searchResults} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;