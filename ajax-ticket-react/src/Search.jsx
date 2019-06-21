import React from 'react';

function Search() {

    return (
        <div className="search-wrapper">
            <form>
                <span className="search-field">
                <select id="search-by">
                    <option value="title">title</option>
                    <option value="genres">genres</option>
                </select>
                <input type='search' id='movie-search' placeholder="Search..." />
                <button type="submit" className="search-btn">Let's go!</button>
                </span>
            </form>
        </div>
    )
}
export default Search;