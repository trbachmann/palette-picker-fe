import React, { Component } from 'react';
import ColorSwatch from '../../Components/ColorSwatch/ColorSwatch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class PaletteArea extends Component{

  render() {
    const colors = this.props.currentPalette.map(color => {
      return <ColorSwatch {...color} key={color.hex}/>
    });

    return (
      <div>
        {colors}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette
});

export default connect(mapStateToProps)(PaletteArea);

PaletteArea.propTypes = {
  currentPalette: PropTypes.array
}