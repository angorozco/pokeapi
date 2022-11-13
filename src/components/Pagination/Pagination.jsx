import React from 'react';
import './pagination.css';

const Pagination = ({handlePrev, handleNext}) => {
  return (
    <div className='pagination'>
      <button className='btn' onClick={handlePrev}>PREV</button>
      <button className='btn' onClick={handleNext}>NEXT</button>
    </div>
  )
}

export default Pagination