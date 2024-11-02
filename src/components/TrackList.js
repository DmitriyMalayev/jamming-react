import React from 'react'
import styles from "../modules/Tracklist.module.css"
import Track from "./Track";

function Tracklist({ searchResults, playlistTracks, playlistName, isRemoval, onAdd }) {
  console.log(playlistName && playlistTracks)
  console.log(playlistName)
  return (
    <div className={styles.Tracklist}>
      {searchResults && searchResults.map((track) => (
        <Track key={track.id} track={track} isRemoval={isRemoval} onAdd={onAdd} />
      ))}
    </div>
  )
}
export default Tracklist;