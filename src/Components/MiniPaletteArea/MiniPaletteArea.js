import React, { Component } from 'react';
import MiniPalette from '../../Containers/MiniPalette/MiniPalette';

const MiniPaletteArea = (props) => {
  const palettesToShow = props.projectPalettes.map(palette => {
    return (
      <MiniPalette {...palette}/>
    )
  })
  return(
    <div>
      {palettesToShow}
    </div>
  )
};

export default MiniPaletteArea;