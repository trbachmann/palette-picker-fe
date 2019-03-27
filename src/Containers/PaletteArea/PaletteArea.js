import React, { Component } from 'react';
import ColorSwatch from '../../Components/ColorSwatch/ColorSwatch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateIsLocked } from '../../Actions';

export class PaletteArea extends Component{

  render() {
    const colors = this.props.currentPalette.map((color, index) => {
      return <ColorSwatch 
      {...color} 
      key={color.hex} 
      index={index}
      updateIsLocked={this.props.updateIsLocked}
      />
    });

    return (
      <div className='PaletteArea--div'>
        {colors}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currentPalette: state.currentPalette
});

export const mapDispatchToProps = dispatch => ({
  updateIsLocked: (index) => dispatch(updateIsLocked(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteArea);

PaletteArea.propTypes = {
  currentPalette: PropTypes.array
}