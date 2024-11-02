import React from "react";
import styles from "../modules/TrackList.module.css";
import Track from "./Track";

function TrackList({ tracks, isRemoval, onAdd, onRemove }) {
  return (
    <div className={styles.TrackList}>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}

export default TrackList;
