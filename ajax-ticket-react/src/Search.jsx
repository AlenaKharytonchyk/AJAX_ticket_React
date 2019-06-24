import React from 'react';

function Search(props) {
    const {title, movieSearch} = props;
    return (
        <div className="search-wrapper">
            <form onSubmit={movieSearch}>
                <span className="search-field">
                <select id="search-by">
                    <option value="title">title</option>
                    <option value="genres">genres</option>
                </select>
                <input type='search' id='movie-search' placeholder="Search..." onChange={title}/>
                <button type="submit" className="search-btn">Let's go!</button>
                {/* <button type="submit" className="search-btn" onClick={movieSearch}>Let's go!</button> */}
                </span>
            </form>
        </div>
    )
}
export default Search;