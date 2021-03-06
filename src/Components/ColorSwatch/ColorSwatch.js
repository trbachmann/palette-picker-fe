import React from 'react';

const ColorSwatch = ({ hex, isLocked, index, updateIsLocked }) => {
  const lockIcon = isLocked ? 'fas fa-lock' : 'fas fa-unlock';
  return(
    <div className='ColorSwatch--div'>
      <div className='ColorSwatch--div--color' style={{backgroundColor: hex}}>
      </div>
      <div className='ColorSwatch--div--name'>
        <i className={lockIcon} onClick={() => updateIsLocked(index)}></i >
        <p>{hex.toUpperCase()}</p>
      </div>
    </div>
  )
};

export default ColorSwatch;