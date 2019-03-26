import React, { Component } from 'react';
import MiniPalette from '../../Components/MiniPalette/MiniPalette';

export class MiniPaletteArea extends Component{
  createMiniPalettes = () => {
    const palettes = this.props.projectPalettes.map(palette => {
      return (
        <MiniPalette {...palette}/>
      )
    })
    return palettes
  };

  render() {
    const palettesToShow = this.createMiniPalettes()
    return(
      <div>
        {palettesToShow}
      </div>
    )
  };
};

export default MiniPaletteArea;