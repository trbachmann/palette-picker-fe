import React from 'react';

const MiniPalette = (props) => {
  const {name, color1, color2, color3, color4, color5 } = props
  return(
    <div>
      <p>{name}</p>
      <div className='MiniPalette--div'>
        <div className='MiniPalette--div--color' style={{backgroundColor: color1}}></div>
        <div className='MiniPalette--div--color' style={{backgroundColor: color2}}></div>
        <div className='MiniPalette--div--color' style={{backgroundColor: color3}}></div>
        <div className='MiniPalette--div--color' style={{backgroundColor: color4}}></div>
        <div className='MiniPalette--div--color' style={{backgroundColor: color5}}></div>
      </div>
    </div>
  )
}

export default MiniPalette;