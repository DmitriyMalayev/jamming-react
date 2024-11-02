import React from "react";
import styles from "../modules/Playlist.module.css";
import TrackList from "./TrackList";

function Playlist({ playlistName, playlistTracks }) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      <TrackList playlistTracks={playlistTracks} playlistName={playlistName} />
      <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
