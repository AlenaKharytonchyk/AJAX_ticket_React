import React from 'react';

function Pagination (props) {
  const {lastPage, current, prevClick, nextClick} = props;

  return (
    <div>
      <span onClick={prevClick}> prev </span>
      <span> {current}...{lastPage} </span>
      <span onClick={nextClick}> next </span>
    </div>
  )
}
export default Pagination;