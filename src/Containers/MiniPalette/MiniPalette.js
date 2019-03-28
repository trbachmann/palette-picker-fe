import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandMiniPalette } from '../../Actions';
import { deletePaletteThunk } from '../../Thunks/deletePaletteThunk'

export class MiniPalette extends Component{
  deletePalette = () => {
    const { id, project_id, deletePaletteThunk} = this.props
    deletePaletteThunk(id, project_id);
  }

  expandPalette = () => {
    const { color1, color2, color3, color4, color5 } = this.props
    const colors = [color1, color2, color3, color4, color5]
    this.props.expandMiniPalette(colors)
  }

  render() {
    const {name, color1, color2, color3, color4, color5 } = this.props
    return(
      <div>
        <div className='MiniPalette--div--controls'>
          <p>{name}</p>
          <i className="far fa-trash-alt" onClick={this.deletePalette}></i>
        </div>
        <div className='MiniPalette--div--colors' onClick={this.expandPalette}>
          <div className='MiniPalette--div--color' style={{backgroundColor: color1}}></div>
          <div className='MiniPalette--div--color' style={{backgroundColor: color2}}></div>
          <div className='MiniPalette--div--color' style={{backgroundColor: color3}}></div>
          <div className='MiniPalette--div--color' style={{backgroundColor: color4}}></div>
          <div className='MiniPalette--div--color' style={{backgroundColor: color5}}></div>
        </div>
      </div>
    )
  };
};

export const mapDispatchToProps = dispatch => ({
  expandMiniPalette: (colors) => dispatch(expandMiniPalette(colors)),
  deletePaletteThunk: (paletteId, projectId) => dispatch(deletePaletteThunk(paletteId, projectId))
});

export default connect(null, mapDispatchToProps)(MiniPalette);