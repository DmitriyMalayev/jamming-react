import React from "react";
import styles from "../modules/Tracklist.module.css";
import Track from "./Track";

function TrackList({ tracks, isRemoval, onAdd, onRemove }) {
  return (
    <div className={styles.Tracklist}>
      {tracks &&
        tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            isRemoval={isRemoval}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
    </div>
  );
}

export default TrackList;
