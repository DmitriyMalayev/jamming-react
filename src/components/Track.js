import React from 'react';
import styles from "../modules/Track.module.css";

function Track({ track, isRemoval, onAdd, onRemove }) {
    const handleAction = () => {
        if (isRemoval) {
            onRemove(track);
        } else {
            onAdd(track);
        }
    };

    return (
        <div className={styles.Track}>
            <div className={styles.TrackInfo}>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button onClick={handleAction} className={styles.TrackAction}>
                {isRemoval ? '-' : '+'}
            </button>
        </div>
    );
}

export default Track;