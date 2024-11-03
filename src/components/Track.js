import React, { useCallback } from "react";
import styles from "../modules/Track.module.css";

const Track = ({ onAdd, onRemove, isRemoval, track }) => {
  const addTrack = useCallback(
    (event) => {
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (event) => {
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className={styles.TrackAction} onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className={styles.TrackAction} onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInfo}>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
