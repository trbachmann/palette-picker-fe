import React, { Component } from 'react';

export class PaletteForm extends Component{
  render() {
    return(
      <form className='PaletteForm--form'>
        <select>
          <option>Choose a Project</option>
        </select>
        <input placeholder='Palette Name'/>
        <button>Save Palette</button>
      </form>
    )
  }
}

export default PaletteForm;