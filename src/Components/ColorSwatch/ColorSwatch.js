import React from 'react';

const ColorSwatch = ({ hex, isLocked }) => {
  const lockIcon = isLocked ? <p>Locked</p> : <p>Unlocked</p>;
  return(
    <div className='ColorSwatch--div'>
      <div classNAme='ColorSwatch--div--color' style={{backgroundColor: hex}}>
      </div>
      {lockIcon}
      <p>{hex.toUpperCase()}</p>
    </div>
  )
};

export default ColorSwatch;