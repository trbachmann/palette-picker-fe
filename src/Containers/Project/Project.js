import React, { Component } from 'react';
import MiniPaletteArea from '../MiniPaletteArea/MiniPaletteArea';

export default class Project extends Component{
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }
  render() {
    return(
      <div>
        <h3>Project Name</h3>
        {
          this.state.expanded &&
          <MiniPaletteArea/>
        }
      </div>
    )
  }
}
