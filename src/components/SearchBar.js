import React from "react";
import "../modules/SearchBar.module.css"

function SearchBar() {
    return (
        <div className="SearchBar">
            <input
                placeholder="Enter A Song, Album, or Artist"
            />
            <button className="SearchButton" >
                SEARCH
            </button>
        </div>
    );
}

export default SearchBar;