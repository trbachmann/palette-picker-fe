import React, { Component } from 'react';
import ColorSwatch from '../../Components/ColorSwatch/ColorSwatch';
import { connect } from 'react-redux';

export class PaletteArea extends Component{
  render() {
    return (
      <div>
        PaletteArea!!!
        <ColorSwatch/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette
});

export default connect(mapStateToProps)(PaletteArea);

