import React from "react";
import Track from "./Track";
import styles from "../modules/SearchResults.module.css";

const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className={styles.TrackList}>
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
