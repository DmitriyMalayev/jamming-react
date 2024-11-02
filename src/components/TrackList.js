import React from 'react'
import styles from "../modules/Tracklist.module.css"
import Track from "./Track";

function Tracklist({ userTracks }) {
  return (
    <div className={styles.Tracklist}>
      {userTracks && userTracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  )
}
export default Tracklist;