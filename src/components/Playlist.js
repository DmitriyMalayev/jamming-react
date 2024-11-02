import React from "react";
import styles from "../modules/Playlist.module.css";
import TrackList from "./TrackList";

function Playlist({
  playlistName,
  playlistTracks,
  onRemove,
  onNameChange,
  onSave,
}) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={onNameChange} />
      <TrackList
        playlistTracks={playlistTracks}
        playlistName={playlistName}
        isRemoval={true}
        onRemove={onRemove}
      />
      <button className={styles.playlistSave} onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
