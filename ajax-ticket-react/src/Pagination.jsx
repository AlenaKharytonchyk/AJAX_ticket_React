import React from 'react';

function Pagination (props) {
  const {lastPage, current, prevClick, nextClick} = props;

  return (
    <div className="pagination-wrapper">
      <span onClick={prevClick} className="pagination-btn"> prev </span>
      <span> {current}...{lastPage} </span>
      <span onClick={nextClick} className="pagination-btn"> next </span>
    </div>
  )
}
export default Pagination;