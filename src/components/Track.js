import React from 'react'
import styles from "../modules/Track.module.css"


function Track({ track }) {
    // const renderAction = () => {
    //     return (
    //         <button className={styles.TrackAction}>{props.isRemoval ? "-" : "+"}</button>
    //     )
    // }

    return (
        <div className={styles.Track}>
            <div className={styles.TrackInfo}>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button className={styles.TrackAction}></button>
        </div>
    );
}

export default Track;