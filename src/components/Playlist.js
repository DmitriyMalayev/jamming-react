import React, { useCallback } from "react";
import TrackList from "./TrackList";
import styles from "../modules/PlayList.module.css";

const Playlist = ({ onNameChange, playlistTracks, onRemove, onSave }) => {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className={styles.PlayList}>
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button className={styles.PlayListSave} onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
