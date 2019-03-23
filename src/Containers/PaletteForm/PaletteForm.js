import React, { Component } from 'react';

export default class PaletteForm extends Component{
  render() {
    return(
      <form>
        <select>
          <option>Choose a Project</option>
        </select>
        <input placeholder='Palette Name'/>
        <button>Save Palette</button>
      </form>
    )
  }
}