import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import "../modules/App.module.css"

function App() {
  return (
    <div>
      <h1>
        Let's Jam
      </h1>
      <div className="App">
        <SearchBar>
        </SearchBar>
        <div className="App-playlist">
          <SearchResults></SearchResults>
          <Playlist></Playlist>
        </div>
      </div>
    </div>
  );
}

export default App;