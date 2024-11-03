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

  const checkPlaylistTracks = () => {
    if (playlistTracks.length === 0) {
      return true;
    }
    return false;
  };

  console.log(playlistTracks);
  return (
    <div className={styles.PlayList}>
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button
        className={
          checkPlaylistTracks() ? styles.PlayListDisabled : styles.PlayListSave
        }
        disabled={checkPlaylistTracks()}
        onClick={onSave}
      >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
