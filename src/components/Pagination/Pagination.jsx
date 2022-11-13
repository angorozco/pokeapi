import React from 'react';
import './pagination.css';

const Pagination = ({handlePrev, handleNext}) => {
  return (
    <div className='pagination'>
      <button className='btn' onClick={handlePrev}>prev</button>
      <button className='btn' onClick={handleNext}>next</button>
    </div>
  )
}

export default Pagination