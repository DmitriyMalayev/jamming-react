import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "../modules/App.module.css";
import { v4 as uuidv4 } from "uuid";

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
  ]);
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
  ]);
  const [playlistName, setPlaylistName] = useState("Playlist Name");

  const addTrack = (track) => {
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, { ...track, id: uuidv4() }]);
    }
  };
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const search = (term) => {
    Spotify.search(term)
      .then((results) => setSearchResults(results))
      .catch((error) => console.error("Error searching Spotify:", error));
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs)
      .then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      })
      .catch((error) => console.error("Error saving playlist:", error));
  };

  return (
    <div>
      <h1>Let's Jam</h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
        <div className={styles.AppPlaylist}>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
